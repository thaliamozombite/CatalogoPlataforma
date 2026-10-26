/**
 * STREAMVAULT - APLICACIÓN PRINCIPAL
 * -----------------------------------
 * Maneja la interacción del catálogo, filtros en tiempo real,
 * búsqueda, acordeón de FAQs, modal de planes, generación dinámica
 * de mensajes de WhatsApp y configurador interactivo.
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
  activePlatform: null,
  activeFaqIndex: null
};

// Elementos del DOM principales
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
  modalSheet: document.getElementById('modalSheet'),
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

/**
 * Actualiza los nombres de marca y el número de WhatsApp mostrado
 */
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

/**
 * Configura los botones estáticos de consulta a WhatsApp (Navbar, Hero, Footer)
 */
function initFixedWhatsAppLinks() {
  const generalMsg = CONFIG.messages.generalInquiry();
  const url = buildWhatsAppUrl(generalMsg);

  if (dom.headerWaBtn) dom.headerWaBtn.href = url;
  if (dom.heroWaBtn) dom.heroWaBtn.href = url;
  if (dom.footerWaBtn) dom.footerWaBtn.href = url;
  if (dom.mobileWaBtn) dom.mobileWaBtn.href = url;

  // Actualizar atributo target para abrir en nueva pestaña
  [dom.headerWaBtn, dom.heroWaBtn, dom.footerWaBtn, dom.mobileWaBtn].forEach(btn => {
    if (btn) {
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

/**
 * Control del Navbar (Scroll y Menú Móvil)
 */
function initNavbar() {
  // Efecto de scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      dom.header.classList.add('scrolled');
    } else {
      dom.header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Toggle menú móvil
  if (dom.mobileToggleBtn && dom.mobileNavDrawer) {
    dom.mobileToggleBtn.addEventListener('click', () => {
      const isOpen = dom.mobileNavDrawer.classList.toggle('open');
      dom.mobileToggleBtn.setAttribute('aria-expanded', isOpen);
      dom.mobileToggleBtn.innerHTML = isOpen 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        dom.mobileNavDrawer.classList.remove('open');
        dom.mobileToggleBtn.setAttribute('aria-expanded', 'false');
        dom.mobileToggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }
}

/**
 * Renderiza los botones de categorías (Pills)
 */
function renderCategoryPills() {
  if (!dom.categoryPillsContainer) return;

  dom.categoryPillsContainer.innerHTML = '';

  CATEGORIES.forEach(cat => {
    // Contar plataformas por categoría
    const count = cat.id === 'all' 
      ? PLATFORMS_DATA.length 
      : PLATFORMS_DATA.filter(p => p.category === cat.id).length;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = `filter-pill ${state.currentCategory === cat.id ? 'active' : ''}`;
    button.dataset.category = cat.id;
    button.innerHTML = `
      <span>${cat.name}</span>
      <span class="badge ${state.currentCategory === cat.id ? 'badge-accent' : ''}" style="padding: 2px 6px; font-size: 0.7rem;">${count}</span>
    `;

    button.addEventListener('click', () => {
      state.currentCategory = cat.id;
      // Actualizar clases activas
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      renderCatalog();
    });

    dom.categoryPillsContainer.appendChild(button);
  });
}

/**
 * Búsqueda reactiva con input y botón de limpieza
 */
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
 * Renderiza la cuadrícula del catálogo de plataformas
 */
function renderCatalog() {
  if (!dom.platformsGrid) return;

  // Filtrado
  const filtered = PLATFORMS_DATA.filter(platform => {
    const matchesCategory = state.currentCategory === 'all' || platform.category === state.currentCategory;
    
    const query = state.searchQuery;
    const matchesSearch = !query || (
      platform.name.toLowerCase().includes(query) ||
      platform.tagline.toLowerCase().includes(query) ||
      platform.shortDescription.toLowerCase().includes(query) ||
      platform.categoryLabel.toLowerCase().includes(query)
    );

    return matchesCategory && matchesSearch;
  });

  // Contador de resultados
  if (dom.resultsCounter) {
    dom.resultsCounter.innerHTML = `Mostrando <strong>${filtered.length}</strong> de <strong>${PLATFORMS_DATA.length}</strong> plataformas`;
  }

  // Estado vacío
  if (filtered.length === 0) {
    dom.platformsGrid.innerHTML = '';
    dom.catalogEmptyState.style.display = 'block';
    return;
  } else {
    dom.catalogEmptyState.style.display = 'none';
  }

  // Renderizado de tarjetas
  dom.platformsGrid.innerHTML = '';

  filtered.forEach(platform => {
    const card = document.createElement('article');
    card.className = 'platform-card';
    card.style.setProperty('--platform-accent', platform.brandColor);
    card.style.setProperty('--platform-glow', platform.accentGlow);

    const isAvailable = platform.availability === 'available';
    const statusClass = isAvailable ? 'available' : 'check';
    const badgeClass = isAvailable ? 'badge-available' : 'badge-low-stock';

    // Enlace rápido de WhatsApp para la plataforma
    const platformMsg = CONFIG.messages.platformInquiry(platform.name);
    const platformWaUrl = buildWhatsAppUrl(platformMsg);

    card.innerHTML = `
      <div>
        <div class="platform-card-header">
          <div class="platform-logo-box" aria-hidden="true">
            ${platform.logoSvg}
          </div>
          <div class="platform-badges-group">
            <span class="badge ${badgeClass}">
              <span class="status-dot ${statusClass}"></span>
              ${platform.availabilityLabel}
            </span>
            <span class="badge badge-accent">${platform.badge}</span>
          </div>
        </div>

        <div class="platform-content">
          <h3 class="platform-name">${platform.name}</h3>
          <p class="platform-tagline">${platform.tagline}</p>
          <p class="platform-desc">${platform.shortDescription}</p>
        </div>
      </div>

      <div>
        <div class="platform-price-box">
          <div class="price-label-col">
            <span class="price-small-caption">Planes desde</span>
            <div class="price-amount-display">
              <span class="price-figure">${CONFIG.currency.symbol}${platform.priceFrom.toFixed(2)}</span>
              <span class="price-duration-unit">/ ${platform.priceUnit}</span>
            </div>
          </div>
          <span class="badge badge-demo" title="Datos de demostración referenciales">Demo</span>
        </div>

        <div class="platform-actions-row">
          <button type="button" class="btn btn-primary btn-sm view-plans-btn" data-id="${platform.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Ver planes (${platform.plans.length})
          </button>
          <a href="${platformWaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-outline btn-icon-only" title="Consultar ${platform.name} por WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </div>
      </div>
    `;

    // Event listener para abrir el modal
    const viewPlansBtn = card.querySelector('.view-plans-btn');
    viewPlansBtn.addEventListener('click', () => {
      openPlansModal(platform);
    });

    dom.platformsGrid.appendChild(card);
  });
}

/**
 * Abre el modal con el detalle completo de planes de una plataforma
 */
function openPlansModal(platform) {
  state.activePlatform = platform;

  dom.modalPlatformLogo.innerHTML = platform.logoSvg;
  dom.modalPlatformName.textContent = platform.name;
  dom.modalCategoryBadge.textContent = platform.categoryLabel;
  dom.modalAvailabilityBadge.textContent = platform.availabilityLabel;
  
  const isAvailable = platform.availability === 'available';
  dom.modalAvailabilityBadge.className = `badge ${isAvailable ? 'badge-available' : 'badge-low-stock'}`;

  dom.modalPlatformDesc.textContent = platform.fullDescription;

  // Renderizar los planes individuales
  dom.modalPlansList.innerHTML = '';

  platform.plans.forEach(plan => {
    // Generar el mensaje exacto solicitado en el prompt:
    // “Hola, quisiera información sobre el plan de [PLATAFORMA], opción [PLAN]. ¿Podrían indicarme el precio y la disponibilidad?”
    const waMessage = CONFIG.messages.planInquiry(platform.name, plan.name);
    const waUrl = buildWhatsAppUrl(waMessage);

    const planCard = document.createElement('div');
    planCard.className = `modal-plan-card ${plan.highlight ? 'highlight' : ''}`;

    const featuresHtml = plan.features.map(f => `
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${f}</span>
      </li>
    `).join('');

    planCard.innerHTML = `
      <div class="plan-card-top">
        <div class="plan-name-row">
          <h4 class="plan-card-name">${plan.name}</h4>
          ${plan.badge ? `<span class="badge ${plan.highlight ? 'badge-accent' : 'badge-cyan'}">${plan.badge}</span>` : ''}
        </div>

        <div class="plan-card-price">
          <span class="amount">${plan.currency}${plan.price.toFixed(2)}</span>
          <span class="duration">/ ${plan.duration}</span>
        </div>

        <ul class="plan-features-list">
          ${featuresHtml}
        </ul>

        <div class="plan-conditions-box">
          <strong>Condiciones:</strong> ${plan.conditions}
        </div>
      </div>

      <div class="plan-card-actions">
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Consultar este plan
        </a>
      </div>
    `;

    dom.modalPlansList.appendChild(planCard);
  });

  dom.plansModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  dom.modalCloseBtn.focus();
}

/**
 * Cierra el modal de planes
 */
function closePlansModal() {
  dom.plansModal.classList.remove('active');
  document.body.style.overflow = '';
  state.activePlatform = null;
}

/**
 * Inicializa los eventos de cierre del modal
 */
function initModals() {
  if (dom.modalCloseBtn) {
    dom.modalCloseBtn.addEventListener('click', closePlansModal);
  }

  if (dom.plansModal) {
    dom.plansModal.addEventListener('click', (e) => {
      if (e.target === dom.plansModal) {
        closePlansModal();
      }
    });
  }

  // Tecla Escape para cerrar modales
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (dom.plansModal.classList.contains('active')) {
        closePlansModal();
      }
      if (dom.configModal && dom.configModal.classList.contains('active')) {
        closeConfigSandbox();
      }
      if (dom.legalModal && dom.legalModal.classList.contains('active')) {
        closeLegalModal();
      }
    }
  });
}

/**
 * Renderiza la sección "Cómo funciona" (3 pasos)
 */
function renderHowItWorks() {
  if (!dom.howItWorksGrid) return;

  dom.howItWorksGrid.innerHTML = '';

  HOW_IT_WORKS_STEPS.forEach(step => {
    const card = document.createElement('div');
    card.className = 'step-card';
    card.innerHTML = `
      <div class="step-header">
        <div class="step-icon-box">
          ${step.iconSvg}
        </div>
        <span class="step-number">${step.stepNumber}</span>
      </div>
      <h3 class="step-title">${step.title}</h3>
      <p class="step-desc">${step.description}</p>
    `;
    dom.howItWorksGrid.appendChild(card);
  });
}

/**
 * Renderiza la sección "Beneficios garantizados"
 */
function renderBenefits() {
  if (!dom.benefitsGrid) return;

  dom.benefitsGrid.innerHTML = '';

  GUARANTEED_BENEFITS.forEach(benefit => {
    const card = document.createElement('div');
    card.className = 'benefit-card';
    card.innerHTML = `
      <div class="benefit-icon-box">
        ${benefit.iconSvg}
      </div>
      <h3 class="benefit-title">${benefit.title}</h3>
      <p class="benefit-desc">${benefit.description}</p>
    `;
    dom.benefitsGrid.appendChild(card);
  });
}

/**
 * Renderiza el acordeón de Preguntas Frecuentes (FAQ)
 */
function renderFaqs() {
  if (!dom.faqAccordion) return;

  dom.faqAccordion.innerHTML = '';

  FAQ_DATA.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.dataset.index = index;

    item.innerHTML = `
      <button type="button" class="faq-button" aria-expanded="false" id="faq-btn-${index}" aria-controls="faq-desc-${index}">
        <span>${faq.question}</span>
        <svg class="faq-icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer-collapse" id="faq-desc-${index}" role="region" aria-labelledby="faq-btn-${index}">
        <div class="faq-answer-inner">
          <p class="faq-answer-text">${faq.answer}</p>
        </div>
      </div>
    `;

    const button = item.querySelector('.faq-button');
    button.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');
      
      // Cerrar otros acordeones
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-button').setAttribute('aria-expanded', 'false');
      });

      // Si no estaba activo, abrirlo
      if (!isCurrentlyActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });

    dom.faqAccordion.appendChild(item);
  });
}

/**
 * Configurador Sandbox de WhatsApp para pruebas en vivo
 * Permite al administrador o cliente cambiar su número directamente en pantalla
 */
function initConfigSandbox() {
  if (!dom.openConfigBtn || !dom.configModal) return;

  dom.openConfigBtn.addEventListener('click', () => {
    dom.configInputWa.value = getActiveWhatsAppNumber();
    dom.configModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (dom.configCloseBtn) {
    dom.configCloseBtn.addEventListener('click', closeConfigSandbox);
  }

  dom.configModal.addEventListener('click', (e) => {
    if (e.target === dom.configModal) {
      closeConfigSandbox();
    }
  });

  if (dom.configSaveBtn) {
    dom.configSaveBtn.addEventListener('click', () => {
      const cleaned = dom.configInputWa.value.replace(/[^0-9]/g, '');
      if (cleaned.length < 8 || cleaned.length > 15) {
        showToast('Ingresa un número internacional válido (entre 8 y 15 dígitos)', 'error');
        return;
      }
      localStorage.setItem('streamvault_custom_wa', cleaned);
      updateBrandTexts();
      initFixedWhatsAppLinks();
      renderCatalog();
      closeConfigSandbox();
      showToast(`¡Número configurado exitosamente a +${cleaned}!`, 'success');
    });
  }

  if (dom.configResetBtn) {
    dom.configResetBtn.addEventListener('click', () => {
      localStorage.removeItem('streamvault_custom_wa');
      updateBrandTexts();
      initFixedWhatsAppLinks();
      renderCatalog();
      closeConfigSandbox();
      showToast('Se restableció el número predeterminado del archivo js/config.js', 'info');
    });
  }
}

function closeConfigSandbox() {
  dom.configModal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Modales de Términos y Condiciones y Política de Privacidad
 */
function initLegalModals() {
  if (!dom.openTermsBtn || !dom.openPrivacyBtn || !dom.legalModal) return;

  dom.openTermsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dom.legalModalTitle.textContent = "Términos y Condiciones";
    dom.legalModalBody.innerHTML = `
      <p><strong>1. Objeto del sitio:</strong> StreamVault es un portal de exhibición y consulta de planes para plataformas de entretenimiento digital. No efectúa cobros automáticos en línea ni recopila datos bancarios en este sitio.</p>
      <p><strong>2. Solicitud y contratación:</strong> Toda coordinación de compra, verificación de disponibilidad, cotización en moneda local y entrega de accesos se realiza de mutuo acuerdo mediante la aplicación de mensajería WhatsApp.</p>
      <p><strong>3. Exención de titularidad:</strong> StreamVault no es titular, creador ni representante exclusivo de las marcas mostradas. La utilización de nombres y marcas comerciales tiene fines meramente informativos e identificativos.</p>
      <p><strong>4. Garantía y soporte:</strong> Se garantiza el acompañamiento en la configuración y continuidad del servicio según la duración contratada con el asesor comercial.</p>
    `;
    dom.legalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  dom.openPrivacyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dom.legalModalTitle.textContent = "Política de Privacidad";
    dom.legalModalBody.innerHTML = `
      <p><strong>1. Datos recopilados:</strong> Este catálogo web no almacena cookies de rastreo comercial invasivo ni solicita registro con contraseñas en la nube.</p>
      <p><strong>2. Comunicaciones:</strong> La comunicación establecida vía WhatsApp está sujeta al cifrado de extremo a extremo y las políticas de privacidad de dicha plataforma de mensajería.</p>
      <p><strong>3. Confidencialidad:</strong> Tu número de contacto e información compartida durante la consulta serán tratados con estricta confidencialidad exclusivamente para coordinar el servicio solicitado.</p>
    `;
    dom.legalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (dom.legalModalCloseBtn) {
    dom.legalModalCloseBtn.addEventListener('click', closeLegalModal);
  }

  dom.legalModal.addEventListener('click', (e) => {
    if (e.target === dom.legalModal) {
      closeLegalModal();
    }
  });
}

function closeLegalModal() {
  dom.legalModal.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Notificación Toast flotante
 */
export function showToast(message, type = 'info') {
  if (!dom.toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconSvg = type === 'success'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
