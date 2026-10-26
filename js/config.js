/**
 * CONFIGURACIÓN GENERAL DEL CATÁLOGO DE SUSCRIPCIONES
 * ----------------------------------------------------
 * Edita este archivo para personalizar la información del negocio,
 * el número de WhatsApp, moneda y textos principales.
 */

export const CONFIG = {
  // Identidad de marca
  brand: {
    name: "StreamVault",
    tagline: "Tu portal de entretenimiento digital",
    badge: "Catálogo Oficial",
    whatsappDisplay: "+593 900 000 000 (Pendiente de configurar)",
  },

  /**
   * NÚMERO DE WHATSAPP COMERCIAL (¡IMPORTANTE!)
   * - Formato internacional sin signo '+' ni espacios ni guiones.
   * - Ejemplo México: 5215512345678
   * - Ejemplo Colombia: 573001234567
   * - Ejemplo Argentina: 5491112345678
   * - Ejemplo Ecuador: 593987654321
   * - Ejemplo Perú: 51987654321
   * - Ejemplo España: 34612345678
   * 
   * Dejar como demostración hasta que el administrador ingrese su número real.
   */
  whatsappNumber: "593900000000",

  // Moneda por defecto
  currency: {
    code: "USD",
    symbol: "$",
    position: "before" // "before" ($5.00) o "after" (5.00 €)
  },

  // Plantillas de mensajes para WhatsApp
  messages: {
    // Requerido por el prompt:
    // “Hola, quisiera información sobre el plan de [PLATAFORMA], opción [PLAN]. ¿Podrían indicarme el precio y la disponibilidad?”
    planInquiry: (platform, plan) => 
      `Hola, quisiera información sobre el plan de ${platform}, opción ${plan}. ¿Podrían indicarme el precio y la disponibilidad?`,
    
    // Consulta general desde el botón del Hero / Navegación
    generalInquiry: () => 
      `Hola, vengo de su página web y quisiera información general sobre el catálogo de suscripciones y la disponibilidad actual.`,
    
    // Consulta de plataforma completa
    platformInquiry: (platform) => 
      `Hola, quisiera consultar la disponibilidad y planes vigentes para ${platform}. ¿Podrían brindarme información?`
  },

  // Aviso de demostración para el usuario
  demoNotice: {
    badgeText: "Datos de Demostración",
    modalNotice: "Nota: Los precios y detalles mostrados corresponden a valores referenciales de demostración. La disponibilidad y precios finales se confirman directamente vía WhatsApp."
  },

  // Textos legales para el pie de página
  legal: {
    disclaimer: "Aviso de marcas y titularidad: Los nombres comerciales, logotipos, imágenes y marcas de las plataformas de streaming (tales como Netflix, Disney+, Max, Amazon Prime Video, Spotify, Crunchyroll, entre otras) son propiedad exclusiva de sus respectivos titulares y creadores. Este sitio web opera únicamente como un catálogo de información, intermediación y gestión de suscripciones digitales independientes, y no afirma tener afiliación, patrocinio, alianza oficial ni representación exclusiva con ninguna de las compañías mencionadas sin expresa autorización.",
    copyrightYear: new Date().getFullYear()
  }
};

/**
 * Obtiene el número de WhatsApp activo.
 * Si el usuario guardó temporalmente un número de prueba en localStorage, lo utiliza;
 * de lo contrario, utiliza el configurado en CONFIG.whatsappNumber.
 */
export function getActiveWhatsAppNumber() {
  const localSaved = localStorage.getItem("streamvault_custom_wa");
  if (localSaved && /^\d{8,15}$/.test(localSaved)) {
    return localSaved;
  }
  return CONFIG.whatsappNumber;
}

/**
 * Genera el enlace oficial a WhatsApp (wa.me) con el mensaje codificado
 */
export function buildWhatsAppUrl(messageText) {
  const number = getActiveWhatsAppNumber();
  const encodedMsg = encodeURIComponent(messageText.trim());
  return `https://wa.me/${number}?text=${encodedMsg}`;
}
