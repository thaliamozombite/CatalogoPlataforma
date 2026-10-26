/**
 * YOU STREAM - APLICACIÓN PRINCIPAL
 * ---------------------------------
 * Renderiza el catálogo estilo Gift Card (Gift Card Retail)
 * con ranura de colgar, perfiles, medalla de calidad, precios tachados
 * y botones duales [ Comprar ] y [ Renovar ] conectados a WhatsApp.
 */

import { CONFIG, getActiveWhatsAppNumber, buildWhatsAppUrl } from './config.js';
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
  plansModal: document.getElementById('plansModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalPlatformLogo: document.getElementById('modalPlatformLogo'),
  modalPlatformName: document.getElementById('modalPlatformName'),
  modalCategoryBadge: document.getElementById('modalCategoryBadge'),
  modalAvailabilityBadge: document.getElementById('modalAvailabilityBadge'),
  modalPlatformDesc: document.getElementById('modalPlatformDesc'),
  modalPlansList: document.getElementById('modalPlansList'),
  howItWorksGrid: document.getElementById('howItWorksGrid'),
  benefitsGrid: document.getElementById('benefitsGrid'),
  faqAccordion: document.getElementById('faqAccordion'),
  toastContainer: document.getElementById('toastContainer'),
  
  // Elementos configurables
  brandNameElements: document.querySelectorAll('.dynamic-brand-name'),
  activeWaDisplay: document.getElementById('activeWaDisplay'),
  openConfigBtn: document.getElementById('openConfigBtn'),
  configModal: document.getElementById('configModal'),
  configCloseBtn: document.getElementById('configCloseBtn'),
  configInputWa: document.getElementById('configInputWa'),
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

// SVG de la Medalla Dorada de Calidad
const GOLD_MEDAL_SVG = `
<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="12" r="9" fill="url(#gold_grad)" stroke="#FFFFFF" stroke-width="1.2"/>
  <polygon points="14,6.5 15.8,10.2 19.8,10.8 16.9,13.6 17.6,17.5 14,15.6 10.4,17.5 11.1,13.6 8.2,10.8 12.2,10.2" fill="#FFFFFF"/>
  <path d="M10 19 L8 26 L14 23 L20 26 L18 19" fill="url(#gold_ribbon)"/>
  <defs>
    <linearGradient id="gold_grad" x1="5" y1="3" x2="23" y2="21" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE082"/>
      <stop offset="0.5" stop-color="#FFD54F"/>
      <stop offset="1" stop-color="#FFB300"/>
    </linearGradient>
    <linearGradient id="gold_ribbon" x1="8" y1="19" x2="20" y2="26" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFA000"/>
      <stop offset="1" stop-color="#FF6F00"/>
    </linearGradient>
  </defs>
</svg>`;

// SVG del Ícono de Perfil / Pantalla
const PROFILE_USER_SVG = `
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
</svg>`;

/**
 * Inicialización al cargar el DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
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
  updateBrandTexts();
});

function updateBrandTexts() {
  dom.brandNameElements.forEach(el => {
    el.textContent = CONFIG.brand.name;
  });

  const activeNumber = getActiveWhatsAppNumber();
  if (dom.activeWaDisplay) {
    if (activeNumber === CONFIG.whatsappNumber) {
      dom.activeWaDisplay.textContent = CONFIG.brand.whatsappDisplay;
    } else {
      dom.activeWaDisplay.textContent = `+${activeNumber} (Activo para pruebas)`;
    }
  }
}

function initFixedWhatsAppLinks() {
  const generalMsg = CONFIG.messages.generalInquiry();
  const url = buildWhatsAppUrl(generalMsg);

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
 * Renderiza el catálogo estilo GIFT CARD según la imagen de referencia
 */
function renderCatalog() {
  if (!dom.platformsGrid) return;

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
    dom.resultsCounter.innerHTML = `Mostrando <strong>${filtered.length}</strong> de <strong>${PLATFORMS_DATA.length}</strong> tarjetas disponibles`;
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
    
    // Mensaje para botón "Comprar"
    const buyMessage = CONFIG.messages.buyPlan(platform.name, platform.title, platform.offerPrice);
    const buyUrl = buildWhatsAppUrl(buyMessage);

    // Mensaje para botón "Renovar"
    const renewMessage = CONFIG.messages.renewPlan(platform.name, platform.title, platform.offerPrice);
    const renewUrl = buildWhatsAppUrl(renewMessage);

    const card = document.createElement('article');
    card.className = `gift-card-item ${!isAvailable ? 'unavailable' : ''}`;

    card.innerHTML = `
      <!-- Cara superior de la Gift Card (con ranura, perfiles y medalla) -->
      <div class="gift-card-face" style="background: ${platform.cardBg}; cursor: pointer;" title="Haz clic para ver detalles y condiciones">
        <!-- Ranura superior para colgar en expositor (Pegboard Slot) -->
        <div class="gift-card-hanger-slot" aria-hidden="true"></div>

        <!-- Indicador de perfiles / pantallas (Top Left) -->
        <div class="gift-card-profile-badge" aria-label="${platform.profilesCount} pantalla(s)">
          ${PROFILE_USER_SVG}
          <span>${platform.profilesCount}</span>
        </div>

        <!-- Medalla de calidad dorada (Top Right) -->
        <div class="gift-card-medal-badge" aria-hidden="true">
          ${GOLD_MEDAL_SVG}
        </div>

        <!-- Watermark "You STREAMING" (Bottom Left) -->
        <div class="gift-card-watermark" aria-hidden="true">
          <span>You</span> STREAMING
        </div>

        <!-- Logotipo oficial centrado -->
        <div class="gift-card-center-logo">
          ${platform.logoSvg}
        </div>
      </div>

      <!-- Sección inferior con título, precios y botones duales -->
      <div class="gift-card-info-box">
        <h3 class="gift-card-title">${platform.title}</h3>

        <div class="gift-card-price-row">
          <span class="gift-card-price-original">${platform.currency} ${platform.originalPrice.toFixed(2)}</span>
          <span class="gift-card-price-offer">${platform.currency} ${platform.offerPrice.toFixed(2)}</span>
        </div>

        <div class="gift-card-actions-row">
          <a href="${buyUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-buy" title="Comprar este plan por WhatsApp">
            Comprar
          </a>
          <a href="${renewUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-renew" title="Renovar suscripción por WhatsApp">
            Renovar
          </a>
        </div>
      </div>
    `;

    // Abrir modal de detalles al pulsar en la cara de la gift card o título
    const faceEl = card.querySelector('.gift-card-face');
    const titleEl = card.querySelector('.gift-card-title');
    [faceEl, titleEl].forEach(el => {
      el.addEventListener('click', () => openPlansModal(platform));
    });

    dom.platformsGrid.appendChild(card);
  });
}

function openPlansModal(platform) {
  state.activePlatform = platform;

  dom.modalPlatformLogo.innerHTML = platform.logoSvg;
  dom.modalPlatformName.textContent = platform.name;
  dom.modalCategoryBadge.textContent = platform.categoryLabel;
  dom.modalAvailabilityBadge.textContent = platform.availabilityLabel;
  
  const isAvailable = platform.availability === 'available';
  dom.modalAvailabilityBadge.style.background = isAvailable ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 23, 68, 0.15)';
  dom.modalAvailabilityBadge.style.color = isAvailable ? '#00e676' : '#ff3366';

  dom.modalPlatformDesc.textContent = platform.fullDescription;

  dom.modalPlansList.innerHTML = '';

  platform.plans.forEach(plan => {
    const buyMsg = CONFIG.messages.buyPlan(platform.name, plan.name, plan.price);
    const renewMsg = CONFIG.messages.renewPlan(platform.name, plan.name, plan.price);
    const buyUrl = buildWhatsAppUrl(buyMsg);
    const renewUrl = buildWhatsAppUrl(renewMsg);

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

function initConfigSandbox() {
  if (!dom.openConfigBtn || !dom.configModal) return;

  dom.openConfigBtn.addEventListener('click', () => {
    dom.configInputWa.value = getActiveWhatsAppNumber();
    dom.configModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (dom.configCloseBtn) dom.configCloseBtn.addEventListener('click', closeConfigSandbox);

  dom.configModal.addEventListener('click', (e) => {
    if (e.target === dom.configModal) closeConfigSandbox();
  });

  if (dom.configSaveBtn) {
    dom.configSaveBtn.addEventListener('click', () => {
      const cleaned = dom.configInputWa.value.replace(/[^0-9]/g, '');
      if (cleaned.length < 8 || cleaned.length > 15) {
        showToast('Ingresa un número internacional válido (entre 8 y 15 dígitos)', 'error');
        return;
      }
      localStorage.setItem('youstream_custom_wa', cleaned);
      updateBrandTexts();
      initFixedWhatsAppLinks();
      renderCatalog();
      closeConfigSandbox();
      showToast(`¡Número actualizado a +${cleaned}!`, 'success');
    });
  }

  if (dom.configResetBtn) {
    dom.configResetBtn.addEventListener('click', () => {
      localStorage.removeItem('youstream_custom_wa');
      updateBrandTexts();
      initFixedWhatsAppLinks();
      renderCatalog();
      closeConfigSandbox();
      showToast('Número restablecido a predeterminado', 'info');
    });
  }
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
      <p><strong>2. Solicitud y compra:</strong> La coordinación de pago, verificación de disponibilidad y entrega de credenciales se realiza directamente mediante WhatsApp.</p>
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
