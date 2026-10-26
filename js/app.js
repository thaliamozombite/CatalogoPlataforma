/**
 * YOU STREAM - APLICACIÓN PRINCIPAL
 * ---------------------------------
 * Soporte multi-cuenta Facebook y Sedes con números de WhatsApp independientes.
 * Detección automática por URL (?sede=fb1) y generador de enlaces para publicaciones.
 */

import { 
  CONFIG, 
  getAllSedes, 
  getActiveSede, 
  setActiveSedeId, 
  buildWhatsAppUrl,
  getFacebookShareUrl
} from './config.js';

import { 
  CATEGORIES, 
  PLATFORMS_DATA, 
  HOW_IT_WORKS_STEPS, 
  GUARANTEED_BENEFITS, 
  FAQ_DATA 
} from './data.js';

// Estado de la aplicación
const state = {
  currentCategory: 'all',
  searchQuery: '',
  activePlatform: null
};

// Elementos del DOM
const dom = {
  header: document.getElementById('siteHeader'),
  mobileToggleBtn: document.getElementById('mobileToggleBtn'),
  mobileNavDrawer: document.getElementById('mobileNavDrawer'),
  searchInput: document.getElementById('searchInput'),
  searchClearBtn: document.getElementById('searchClearBtn'),
  categoryPillsContainer: document.getElementById('categoryPillsContainer'),
  platformsGrid: document.getElementById('platformsGrid'),
  catalogEmptyState: document.getElementById('catalogEmptyState'),
  emptyResetBtn: document.getElementById('emptyResetBtn'),
  resultsCounter: document.getElementById('resultsCounter'),

  // Elementos de Sede / Cuentas de Facebook
  sedeSelect: document.getElementById('sedeSelect'),
  activeWaDisplay: document.getElementById('activeWaDisplay'),
  navSedeBtn: document.getElementById('navSedeBtn'),
  navSedeName: document.getElementById('navSedeName'),
  openSedesModalBtn: document.getElementById('openSedesModalBtn'),
  sedesModal: document.getElementById('sedesModal'),
  sedesModalCloseBtn: document.getElementById('sedesModalCloseBtn'),
  sedesModalGrid: document.getElementById('sedesModalGrid'),
  
  // Modal de Planes
  plansModal: document.getElementById('plansModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalPlatformLogo: document.getElementById('modalPlatformLogo'),
  modalPlatformName: document.getElementById('modalPlatformName'),
  modalCategoryBadge: document.getElementById('modalCategoryBadge'),
  modalAvailabilityBadge: document.getElementById('modalAvailabilityBadge'),
  modalPlatformDesc: document.getElementById('modalPlatformDesc'),
  modalPlansList: document.getElementById('modalPlansList'),

  // Secciones
  howItWorksGrid: document.getElementById('howItWorksGrid'),
  benefitsGrid: document.getElementById('benefitsGrid'),
  faqAccordion: document.getElementById('faqAccordion'),
  toastContainer: document.getElementById('toastContainer'),
  
  // Administrador de números (Config Modal)
  openConfigBtn: document.getElementById('openConfigBtn'),
  configModal: document.getElementById('configModal'),
  configCloseBtn: document.getElementById('configCloseBtn'),
  sedesConfigInputsList: document.getElementById('sedesConfigInputsList'),
  configSaveBtn: document.getElementById('configSaveBtn'),
  configResetBtn: document.getElementById('configResetBtn'),

  // Botones fijos de WhatsApp
  headerWaBtn: document.getElementById('headerWaBtn'),
  heroWaBtn: document.getElementById('heroWaBtn'),
  footerWaBtn: document.getElementById('footerWaBtn'),
  mobileWaBtn: document.getElementById('mobileWaBtn'),

  // Legal Modal
  legalModal: document.getElementById('legalModal'),
  legalModalTitle: document.getElementById('legalModalTitle'),
  legalModalBody: document.getElementById('legalModalBody'),
  legalModalCloseBtn: document.getElementById('legalModalCloseBtn'),
  openTermsBtn: document.getElementById('openTermsBtn'),
  openPrivacyBtn: document.getElementById('openPrivacyBtn')
};

/**
 * Inicialización al cargar el DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSedesUI();
  updateActiveSedeDisplay();
  initFixedWhatsAppLinks();
  renderCategoryPills();
  renderCatalog();
  renderHowItWorks();
  renderBenefits();
  renderFaqs();
  initSearch();
  initModals();
  initConfigSandbox();
  initLegalModals();

  // Comprobar si llegó con parámetro ?sede= de Facebook
  const urlParams = new URLSearchParams(window.location.search);
  const fromParam = urlParams.get('sede') || urlParams.get('fb') || urlParams.get('ref');
  if (fromParam) {
    const active = getActiveSede();
    showToast(`📱 Conectado con ${active.name} (${active.displayPhone})`, 'success');
  }
});

/**
 * Inicializa el selector de sedes / cuentas de Facebook y modales
 */
function initSedesUI() {
  const sedes = getAllSedes();
  const activeSede = getActiveSede();

  // 1. Selector desplegable superior
  if (dom.sedeSelect) {
    dom.sedeSelect.innerHTML = '';
    sedes.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = `${s.name} (${s.displayPhone})`;
      if (s.id === activeSede.id) opt.selected = true;
      dom.sedeSelect.appendChild(opt);
    });

    dom.sedeSelect.addEventListener('change', (e) => {
      setActiveSedeId(e.target.value);
      handleSedeChange();
    });
  }

  // 2. Botón del Navbar para ver/cambiar cuentas
  if (dom.navSedeBtn) {
    dom.navSedeBtn.addEventListener('click', openSedesModal);
  }
  if (dom.openSedesModalBtn) {
    dom.openSedesModalBtn.addEventListener('click', openSedesModal);
  }
  if (dom.sedesModalCloseBtn) {
    dom.sedesModalCloseBtn.addEventListener('click', closeSedesModal);
  }
  if (dom.sedesModal) {
    dom.sedesModal.addEventListener('click', (e) => {
      if (e.target === dom.sedesModal) closeSedesModal();
    });
  }
}

/**
 * Actualiza la vista al cambiar de cuenta / sede
 */
function handleSedeChange() {
  const activeSede = getActiveSede();
  updateActiveSedeDisplay();
  initFixedWhatsAppLinks();
  renderCatalog();
  renderSedesModalCards();
  showToast(`Canal activo: ${activeSede.name} (${activeSede.displayPhone})`, 'success');
}

function updateActiveSedeDisplay() {
  const activeSede = getActiveSede();
  if (dom.activeWaDisplay) {
    dom.activeWaDisplay.textContent = `${activeSede.displayPhone} (${activeSede.name})`;
  }
  if (dom.navSedeName) {
    dom.navSedeName.textContent = activeSede.name;
  }
  if (dom.sedeSelect) {
    dom.sedeSelect.value = activeSede.id;
  }
}

function openSedesModal() {
  renderSedesModalCards();
  dom.sedesModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSedesModal() {
  dom.sedesModal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Renderiza las tarjetas de cada cuenta / sede con su enlace de Facebook
 */
function renderSedesModalCards() {
  if (!dom.sedesModalGrid) return;
  dom.sedesModalGrid.innerHTML = '';

  const sedes = getAllSedes();
  const activeSede = getActiveSede();

  sedes.forEach(s => {
    const isActive = s.id === activeSede.id;
    const directWaUrl = buildWhatsAppUrl(CONFIG.messages.generalInquiry(s.name), s);
    const fbShareUrl = getFacebookShareUrl(s.id);

    const card = document.createElement('div');
    card.className = `sede-card ${isActive ? 'active' : ''}`;

    card.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
          <h4 style="font-size: 1.15rem; color: #ffffff;">${s.name}</h4>
          ${isActive ? `<span style="background: rgba(0,229,255,0.18); color: #00e5ff; font-size: 0.72rem; padding: 2px 8px; border-radius: 99px; font-weight: 700;">Activa</span>` : ''}
        </div>
        <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 4px;">👤 Canal / Perfil: <strong>${s.facebookAccount || s.city}</strong></p>
        <p style="font-size: 0.95rem; font-weight: 800; color: #00e5ff; margin-bottom: 8px;">📱 WhatsApp: ${s.displayPhone}</p>
        
        <!-- Generador de Enlace para publicación de Facebook -->
        <div style="background: rgba(0,0,0,0.4); border: 1px dashed rgba(255,255,255,0.15); border-radius: 8px; padding: 8px 10px; margin-top: 8px;">
          <span style="font-size: 0.75rem; color: #94a3b8; display: block; margin-bottom: 4px;">🔗 Enlace para tus publicaciones de Facebook:</span>
          <div style="display: flex; gap: 6px; align-items: center;">
            <input type="text" readonly value="${fbShareUrl}" style="background: #11141e; border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 4px 6px; font-size: 0.75rem; color: #67e8f9; width: 100%; font-family: monospace;" />
            <button type="button" class="btn btn-secondary copy-link-btn" style="padding: 4px 8px; font-size: 0.75rem; white-space: nowrap;" title="Copiar enlace para Facebook">
              Copiar
            </button>
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 8px; margin-top: 10px;">
        <button type="button" class="btn btn-secondary select-sede-btn" style="padding: 6px 12px; font-size: 0.82rem; flex: 1;">
          ${isActive ? '✓ Cuenta Actual' : 'Elegir esta Cuenta'}
        </button>
        <a href="${directWaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 6px 12px; font-size: 0.82rem;" title="Chatear con ${s.name}">
          WhatsApp
        </a>
      </div>
    `;

    // Botón seleccionar sede
    const selectBtn = card.querySelector('.select-sede-btn');
    selectBtn.addEventListener('click', () => {
      setActiveSedeId(s.id);
      handleSedeChange();
      closeSedesModal();
    });

    // Botón copiar enlace de Facebook
    const copyBtn = card.querySelector('.copy-link-btn');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(fbShareUrl).then(() => {
        showToast(`¡Enlace copiado! Pégalo en tu Facebook (${s.name})`, 'success');
      }).catch(() => {
        showToast('Enlace listo: ' + fbShareUrl, 'info');
      });
    });

    dom.sedesModalGrid.appendChild(card);
  });
}

function initFixedWhatsAppLinks() {
  const activeSede = getActiveSede();
  const generalMsg = CONFIG.messages.generalInquiry(activeSede.name);
  const url = buildWhatsAppUrl(generalMsg, activeSede);

  [dom.headerWaBtn, dom.heroWaBtn, dom.footerWaBtn, dom.mobileWaBtn].forEach(btn => {
    if (btn) {
      btn.href = url;
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

function initNavbar() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      dom.header.classList.add('scrolled');
    } else {
      dom.header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (dom.mobileToggleBtn && dom.mobileNavDrawer) {
    dom.mobileToggleBtn.addEventListener('click', () => {
      const isOpen = dom.mobileNavDrawer.classList.toggle('open');
      dom.mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        dom.mobileNavDrawer.classList.remove('open');
        dom.mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function renderCategoryPills() {
  if (!dom.categoryPillsContainer) return;
  dom.categoryPillsContainer.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const count = cat.id === 'all' 
      ? PLATFORMS_DATA.length 
      : PLATFORMS_DATA.filter(p => p.category === cat.id).length;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = `filter-pill ${state.currentCategory === cat.id ? 'active' : ''}`;
    button.dataset.category = cat.id;
    button.innerHTML = `
      <span>${cat.name}</span>
      <span style="opacity: 0.8; font-size: 0.75rem; margin-left: 2px;">(${count})</span>
    `;

    button.addEventListener('click', () => {
      state.currentCategory = cat.id;
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      renderCatalog();
    });

    dom.categoryPillsContainer.appendChild(button);
  });
}

function initSearch() {
  if (!dom.searchInput) return;

  dom.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    if (dom.searchClearBtn) {
      dom.searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
    }
    renderCatalog();
  });

  if (dom.searchClearBtn) {
    dom.searchClearBtn.addEventListener('click', () => {
      dom.searchInput.value = '';
      state.searchQuery = '';
      dom.searchClearBtn.style.display = 'none';
      dom.searchInput.focus();
      renderCatalog();
    });
  }

  if (dom.emptyResetBtn) {
    dom.emptyResetBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.currentCategory = 'all';
      if (dom.searchInput) dom.searchInput.value = '';
      if (dom.searchClearBtn) dom.searchClearBtn.style.display = 'none';
      renderCategoryPills();
      renderCatalog();
    });
  }
}

/**
 * Renderiza el catálogo de tarjetas Gift Cards con imágenes y enlaces a la sede/cuenta activa
 */
function renderCatalog() {
  if (!dom.platformsGrid) return;

  const activeSede = getActiveSede();

  const filtered = PLATFORMS_DATA.filter(platform => {
    const matchesCategory = state.currentCategory === 'all' || platform.category === state.currentCategory;
    const query = state.searchQuery;
    const matchesSearch = !query || (
      platform.name.toLowerCase().includes(query) ||
      platform.title.toLowerCase().includes(query) ||
      platform.shortDescription.toLowerCase().includes(query) ||
      platform.categoryLabel.toLowerCase().includes(query)
    );
    return matchesCategory && matchesSearch;
  });

  if (dom.resultsCounter) {
    dom.resultsCounter.innerHTML = `Mostrando <strong>${filtered.length}</strong> de <strong>${PLATFORMS_DATA.length}</strong> tarjetas • 📱 ${activeSede.name}`;
  }

  if (filtered.length === 0) {
    dom.platformsGrid.innerHTML = '';
    dom.catalogEmptyState.style.display = 'block';
    return;
  } else {
    dom.catalogEmptyState.style.display = 'none';
  }

  dom.platformsGrid.className = 'gift-cards-grid';
  dom.platformsGrid.innerHTML = '';

  filtered.forEach(platform => {
    const isAvailable = platform.availability === 'available';
    
    // Mensaje para botón "Comprar" con nombre de la cuenta activa
    const buyMessage = CONFIG.messages.buyPlan(platform.name, platform.title, platform.offerPrice, activeSede.name);
    const buyUrl = buildWhatsAppUrl(buyMessage, activeSede);

    // Mensaje para botón "Renovar" con nombre de la cuenta activa
    const renewMessage = CONFIG.messages.renewPlan(platform.name, platform.title, platform.offerPrice, activeSede.name);
    const renewUrl = buildWhatsAppUrl(renewMessage, activeSede);

    const card = document.createElement('article');
    card.className = `gift-card-item ${!isAvailable ? 'unavailable' : ''}`;

    card.innerHTML = `
      <!-- Imagen de la tarjeta -->
      <div class="gift-card-face-wrapper" style="cursor: pointer;" title="Haz clic para ver detalles y condiciones">
        <img src="${platform.cardImage}" alt="${platform.title}" class="gift-card-img" loading="lazy" />
      </div>

      <!-- Sección inferior con título, precios y botones duales -->
      <div class="gift-card-info-box">
        <h3 class="gift-card-title">${platform.title}</h3>

        <div class="gift-card-price-row">
          <span class="gift-card-price-original">${platform.currency} ${platform.originalPrice.toFixed(2)}</span>
          <span class="gift-card-price-offer">${platform.currency} ${platform.offerPrice.toFixed(2)}</span>
        </div>

        <div class="gift-card-actions-row">
          <a href="${buyUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-buy" title="Comprar este plan por WhatsApp (${activeSede.name})">
            Comprar
          </a>
          <a href="${renewUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-renew" title="Renovar suscripción por WhatsApp (${activeSede.name})">
            Renovar
          </a>
        </div>
      </div>
    `;

    const faceEl = card.querySelector('.gift-card-face-wrapper');
    const titleEl = card.querySelector('.gift-card-title');
    [faceEl, titleEl].forEach(el => {
      el.addEventListener('click', () => openPlansModal(platform));
    });

    dom.platformsGrid.appendChild(card);
  });
}

function openPlansModal(platform) {
  state.activePlatform = platform;
  const activeSede = getActiveSede();

  dom.modalPlatformLogo.innerHTML = `<img src="${platform.cardImage}" alt="${platform.name}" style="width: 54px; height: 42px; object-fit: cover; border-radius: 6px;" />`;
  dom.modalPlatformName.textContent = platform.name;
  dom.modalCategoryBadge.textContent = platform.categoryLabel;
  dom.modalAvailabilityBadge.textContent = platform.availabilityLabel;
  
  const isAvailable = platform.availability === 'available';
  dom.modalAvailabilityBadge.style.background = isAvailable ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 23, 68, 0.15)';
  dom.modalAvailabilityBadge.style.color = isAvailable ? '#00e676' : '#ff3366';

  dom.modalPlatformDesc.textContent = platform.fullDescription;

  dom.modalPlansList.innerHTML = '';

  platform.plans.forEach(plan => {
    const buyMsg = CONFIG.messages.buyPlan(platform.name, plan.name, plan.price, activeSede.name);
    const renewMsg = CONFIG.messages.renewPlan(platform.name, plan.name, plan.price, activeSede.name);
    const buyUrl = buildWhatsAppUrl(buyMsg, activeSede);
    const renewUrl = buildWhatsAppUrl(renewMsg, activeSede);

    const planCard = document.createElement('div');
    planCard.className = 'modal-plan-card highlight';

    const featuresHtml = plan.features.map(f => `
      <li style="display: flex; align-items: center; gap: 6px; font-size: 0.88rem; color: #cbd5e1; margin-bottom: 4px;">
        <span style="color: #00e5ff;">✓</span>
        <span>${f}</span>
      </li>
    `).join('');

    planCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
        <h4 style="font-size: 1.15rem; color: #ffffff;">${plan.name}</h4>
        <span style="font-size: 1.35rem; font-weight: 800; color: #00e5ff;">${plan.currency} ${plan.price.toFixed(2)}</span>
      </div>

      <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 8px;">
        📱 Cuenta / Asesor asignado: <strong style="color: #ffffff;">${activeSede.name}</strong> (${activeSede.displayPhone})
      </div>

      <ul style="list-style: none; margin-bottom: 14px;">
        ${featuresHtml}
      </ul>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        <a href="${buyUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-buy" style="padding: 8px 12px; font-size: 0.9rem;">
          Comprar nuevo
        </a>
        <a href="${renewUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-renew" style="padding: 8px 12px; font-size: 0.9rem;">
          Renovar existente
        </a>
      </div>
    `;

    dom.modalPlansList.appendChild(planCard);
  });

  dom.plansModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePlansModal() {
  dom.plansModal.classList.remove('active');
  document.body.style.overflow = '';
  state.activePlatform = null;
}

function initModals() {
  if (dom.modalCloseBtn) {
    dom.modalCloseBtn.addEventListener('click', closePlansModal);
  }

  if (dom.plansModal) {
    dom.plansModal.addEventListener('click', (e) => {
      if (e.target === dom.plansModal) closePlansModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (dom.plansModal.classList.contains('active')) closePlansModal();
      if (dom.sedesModal && dom.sedesModal.classList.contains('active')) closeSedesModal();
      if (dom.configModal && dom.configModal.classList.contains('active')) closeConfigSandbox();
      if (dom.legalModal && dom.legalModal.classList.contains('active')) closeLegalModal();
    }
  });
}

function renderHowItWorks() {
  if (!dom.howItWorksGrid) return;
  dom.howItWorksGrid.innerHTML = '';

  HOW_IT_WORKS_STEPS.forEach(step => {
    const card = document.createElement('div');
    card.className = 'step-card';
    card.innerHTML = `
      <div class="step-header">
        <div class="step-icon-box">${step.iconSvg}</div>
        <span class="step-number">${step.stepNumber}</span>
      </div>
      <h3 style="font-size: 1.2rem; color: #ffffff;">${step.title}</h3>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">${step.description}</p>
    `;
    dom.howItWorksGrid.appendChild(card);
  });
}

function renderBenefits() {
  if (!dom.benefitsGrid) return;
  dom.benefitsGrid.innerHTML = '';

  GUARANTEED_BENEFITS.forEach(benefit => {
    const card = document.createElement('div');
    card.className = 'benefit-card';
    card.innerHTML = `
      <div class="benefit-icon-box">${benefit.iconSvg}</div>
      <h3 style="font-size: 1.15rem; color: #ffffff;">${benefit.title}</h3>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">${benefit.description}</p>
    `;
    dom.benefitsGrid.appendChild(card);
  });
}

function renderFaqs() {
  if (!dom.faqAccordion) return;
  dom.faqAccordion.innerHTML = '';

  FAQ_DATA.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';

    item.innerHTML = `
      <button type="button" class="faq-button" aria-expanded="false">
        <span>${faq.question}</span>
        <svg class="faq-icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer-collapse">
        <div class="faq-answer-inner">
          <p class="faq-answer-text">${faq.answer}</p>
        </div>
      </div>
    `;

    const button = item.querySelector('.faq-button');
    button.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-button').setAttribute('aria-expanded', 'false');
      });
      if (!isCurrentlyActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });

    dom.faqAccordion.appendChild(item);
  });
}

/**
 * Administrador de números de WhatsApp por Cuenta de Facebook
 */
function initConfigSandbox() {
  if (!dom.openConfigBtn || !dom.configModal) return;

  dom.openConfigBtn.addEventListener('click', () => {
    renderConfigSedesInputs();
    dom.configModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (dom.configCloseBtn) dom.configCloseBtn.addEventListener('click', closeConfigSandbox);

  dom.configModal.addEventListener('click', (e) => {
    if (e.target === dom.configModal) closeConfigSandbox();
  });

  if (dom.configSaveBtn) {
    dom.configSaveBtn.addEventListener('click', () => {
      const sedes = getAllSedes();
      const updatedSedes = sedes.map(s => {
        const input = document.getElementById(`config-input-sede-${s.id}`);
        const nameInput = document.getElementById(`config-input-name-${s.id}`);
        const val = input ? input.value.replace(/[^0-9]/g, '') : s.whatsappNumber;
        const nameVal = nameInput ? nameInput.value.trim() : s.name;
        return {
          ...s,
          name: nameVal || s.name,
          whatsappNumber: val,
          displayPhone: `+${val}`
        };
      });

      localStorage.setItem('youstream_custom_sedes', JSON.stringify(updatedSedes));
      initSedesUI();
      handleSedeChange();
      closeConfigSandbox();
      showToast('¡Números de las cuentas actualizados con éxito!', 'success');
    });
  }

  if (dom.configResetBtn) {
    dom.configResetBtn.addEventListener('click', () => {
      localStorage.removeItem('youstream_custom_sedes');
      localStorage.removeItem('youstream_active_sede_id');
      initSedesUI();
      handleSedeChange();
      closeConfigSandbox();
      showToast('Cuentas restablecidas a los valores predeterminados', 'info');
    });
  }
}

function renderConfigSedesInputs() {
  if (!dom.sedesConfigInputsList) return;
  dom.sedesConfigInputsList.innerHTML = '';

  const sedes = getAllSedes();
  sedes.forEach(s => {
    const div = document.createElement('div');
    div.style.cssText = 'background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);';

    div.innerHTML = `
      <div style="margin-bottom: 6px;">
        <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 2px;">Nombre de la Cuenta / Fanpage de Facebook:</label>
        <input type="text" id="config-input-name-${s.id}" value="${s.name}" style="width: 100%; padding: 6px 10px; background: #131722; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; color: #ffffff; font-size: 0.9rem;" />
      </div>
      <div>
        <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 2px;">Número de Celular WhatsApp (código 51 + 9 dígitos):</label>
        <input type="text" id="config-input-sede-${s.id}" value="${s.whatsappNumber}" style="width: 100%; padding: 6px 10px; background: #131722; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; color: #ffffff; font-size: 0.9rem;" maxlength="15" />
      </div>
    `;

    dom.sedesConfigInputsList.appendChild(div);
  });
}

function closeConfigSandbox() {
  dom.configModal.classList.remove('active');
  document.body.style.overflow = '';
}

function initLegalModals() {
  if (!dom.openTermsBtn || !dom.openPrivacyBtn || !dom.legalModal) return;

  dom.openTermsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dom.legalModalTitle.textContent = "Términos y Condiciones";
    dom.legalModalBody.innerHTML = `
      <p><strong>1. Objeto del sitio:</strong> You stream es un portal de exhibición y consulta de planes de entretenimiento digital. No efectúa cobros automáticos en línea en este sitio web.</p>
      <p><strong>2. Solicitud y compra:</strong> La coordinación de pago, verificación de disponibilidad y entrega de credenciales se realiza directamente mediante WhatsApp con el asesor correspondiente.</p>
      <p><strong>3. Titularidad:</strong> You stream no es representante oficial ni exclusivo de las marcas mostradas. Su uso es estrictamente informativo e identificativo.</p>
    `;
    dom.legalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  dom.openPrivacyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dom.legalModalTitle.textContent = "Política de Privacidad";
    dom.legalModalBody.innerHTML = `
      <p><strong>1. Privacidad:</strong> Este sitio web no almacena cookies invasivas ni solicita contraseñas en la nube.</p>
      <p><strong>2. Comunicaciones:</strong> La interacción vía WhatsApp se rige bajo el cifrado de extremo a extremo de dicha plataforma.</p>
    `;
    dom.legalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (dom.legalModalCloseBtn) dom.legalModalCloseBtn.addEventListener('click', closeLegalModal);

  dom.legalModal.addEventListener('click', (e) => {
    if (e.target === dom.legalModal) closeLegalModal();
  });
}

function closeLegalModal() {
  dom.legalModal.classList.remove('active');
  document.body.style.overflow = '';
}

export function showToast(message, type = 'info') {
  if (!dom.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
