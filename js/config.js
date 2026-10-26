/**
 * CONFIGURACIÓN GENERAL DEL CATÁLOGO DE SUSCRIPCIONES
 * ----------------------------------------------------
 * Personalización de marca, moneda (Soles S/), número de WhatsApp
 * y plantillas de mensajes para "Comprar" y "Renovar".
 */

export const CONFIG = {
  // Identidad de marca
  brand: {
    name: "You stream",
    shortName: "You stream",
    tagline: "Planes & Suscripciones Digitales",
    badge: "Tienda Oficial",
    whatsappDisplay: "+51 900 000 000 (Pendiente de configurar)",
  },

  /**
   * NÚMERO DE WHATSAPP COMERCIAL (¡IMPORTANTE!)
   * - Formato internacional sin signo '+' ni espacios ni guiones.
   * - Ejemplo Perú: 51987654321
   * - Ejemplo México: 5215512345678
   * - Ejemplo Colombia: 573001234567
   * - Ejemplo Ecuador: 593987654321
   */
  whatsappNumber: "51900000000",

  // Moneda por defecto (Soles S/ según la referencia)
  currency: {
    code: "PEN",
    symbol: "S/",
    position: "before"
  },

  // Plantillas de mensajes para WhatsApp
  messages: {
    // Requerido al pulsar "Comprar"
    buyPlan: (platform, plan, price) => 
      `Hola, quisiera información sobre el plan de ${platform}, opción ${plan} (${CONFIG.currency.symbol} ${price.toFixed(2)}). ¿Podrían indicarme el precio y la disponibilidad?`,

    // Requerido al pulsar "Renovar"
    renewPlan: (platform, plan, price) => 
      `Hola, quisiera renovar mi servicio de ${platform}, opción ${plan} (${CONFIG.currency.symbol} ${price.toFixed(2)}). ¿Podrían confirmarme la disponibilidad y los pasos para renovar?`,

    // Consulta general desde el Hero o navegación
    generalInquiry: () => 
      `Hola, vengo de su tienda You stream y quisiera información general sobre el catálogo de suscripciones digitales y disponibilidad.`,
    
    // Consulta por plataforma específica
    platformInquiry: (platform) => 
      `Hola, quisiera consultar la disponibilidad y planes vigentes para ${platform}. ¿Podrían brindarme información?`
  },

  // Aviso de demostración
  demoNotice: {
    badgeText: "Datos de Demostración",
    modalNotice: "Nota: Los precios y detalles mostrados corresponden a valores referenciales de demostración. La disponibilidad y precios finales se confirman directamente vía WhatsApp."
  },

  // Textos legales para el pie de página
  legal: {
    disclaimer: "Aviso de marcas y titularidad: Los nombres comerciales, logotipos e imágenes de las plataformas (Netflix, Disney+, Max, DirecTV GO, Movistar TV, Canva, YouTube Premium, Spotify, Crunchyroll, ChatGPT, Paramount+, entre otras) son propiedad exclusiva de sus respectivos titulares. Este sitio web opera únicamente como un catálogo de exhibición, intermediación y consulta independiente, sin presentarse como representante oficial ni exclusivo sin autorización expresa.",
    copyrightYear: new Date().getFullYear()
  }
};

/**
 * Obtiene el número de WhatsApp activo.
 */
export function getActiveWhatsAppNumber() {
  const localSaved = localStorage.getItem("youstream_custom_wa");
  if (localSaved && /^\d{8,15}$/.test(localSaved)) {
    return localSaved;
  }
  return CONFIG.whatsappNumber;
}

/**
 * Genera el enlace oficial a WhatsApp con el mensaje codificado
 */
export function buildWhatsAppUrl(messageText) {
  const number = getActiveWhatsAppNumber();
  const encodedMsg = encodeURIComponent(messageText.trim());
  return `https://wa.me/${number}?text=${encodedMsg}`;
}
