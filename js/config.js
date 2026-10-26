/**
 * CONFIGURACIÓN GENERAL DEL CATÁLOGO DE SUSCRIPCIONES
 * ----------------------------------------------------
 * Soporte para múltiples cuentas de Facebook / Sedes de venta.
 * Cada cuenta de Facebook tiene su propio enlace personalizado (?sede=fb1)
 * y su número de WhatsApp específico.
 */

export const CONFIG = {
  // Identidad de marca
  brand: {
    name: "You stream",
    shortName: "You stream",
    tagline: "Planes & Suscripciones Digitales",
    badge: "Tienda Oficial"
  },

  /**
   * LISTA DE CUENTAS DE FACEBOOK / SEDES DE VENTA
   * Cada cuenta tiene:
   * - id: para el enlace (ej: misitio.com/?sede=fb1)
   * - name: nombre de la página o perfil de Facebook
   * - whatsappNumber: número de WhatsApp de esa cuenta
   */
  sedes: [
    {
      id: "fb1",
      alias: "facebook1",
      name: "Cuenta Facebook 1 (Principal)",
      facebookAccount: "Facebook Principal",
      whatsappNumber: "51948451598",
      displayPhone: "+51 948 451 598",
      badge: "WhatsApp Principal",
      isDefault: true
    },
    {
      id: "fb2",
      alias: "facebook2",
      name: "Cuenta Facebook 2",
      facebookAccount: "Perfil / Fanpage 2",
      whatsappNumber: "51900000001",
      displayPhone: "+51 900 000 001",
      badge: "Ventas Facebook 2",
      isDefault: false
    },
    {
      id: "fb3",
      alias: "facebook3",
      name: "Cuenta Facebook 3",
      facebookAccount: "Perfil / Marketplace 3",
      whatsappNumber: "51900000002",
      displayPhone: "+51 900 000 002",
      badge: "Ventas Facebook 3",
      isDefault: false
    }
  ],

  // Moneda por defecto (Soles S/ según la referencia)
  currency: {
    code: "PEN",
    symbol: "S/",
    position: "before"
  },

  // Plantillas de mensajes para WhatsApp con origen de Facebook
  messages: {
    buyPlan: (platform, plan, price, fbAccount = "") => {
      const fbOrigin = fbAccount ? ` (vi su anuncio en Facebook)` : "";
      return `Hola, quisiera información sobre el plan de ${platform}, opción ${plan} (${CONFIG.currency.symbol} ${price.toFixed(2)})${fbOrigin}. ¿Podrían indicarme el precio y la disponibilidad?`;
    },

    renewPlan: (platform, plan, price, fbAccount = "") => {
      return `Hola, quisiera renovar mi servicio de ${platform}, opción ${plan} (${CONFIG.currency.symbol} ${price.toFixed(2)}). ¿Podrían confirmarme la disponibilidad y los datos para renovar?`;
    },

    generalInquiry: (fbAccount = "") => {
      const fbOrigin = fbAccount ? ` desde su enlace de Facebook` : "";
      return `Hola, vengo${fbOrigin} y quisiera consultar el catálogo y disponibilidad de planes de You stream.`;
    },
    
    platformInquiry: (platform, fbAccount = "") => {
      return `Hola, quisiera consultar los planes y disponibilidad que tienen para ${platform}. ¿Podrían brindarme información?`;
    }
  },

  // Aviso de demostración
  demoNotice: {
    badgeText: "Datos de Demostración",
    modalNotice: "Nota: Los precios y detalles mostrados corresponden a valores referenciales. La disponibilidad y precios finales se confirman directamente vía WhatsApp."
  },

  // Textos legales para el pie de página
  legal: {
    disclaimer: "Aviso de marcas y titularidad: Los nombres comerciales, logotipos e imágenes de las plataformas (Netflix, Disney+, Max, DirecTV GO, Movistar TV, Canva, YouTube, Spotify, Crunchyroll, ChatGPT, Paramount+) son propiedad de sus respectivos titulares. You stream opera únicamente como un catálogo independiente de intermediación y consulta.",
    copyrightYear: new Date().getFullYear()
  }
};

/**
 * Obtiene todas las cuentas / sedes configuradas (o las guardadas localmente)
 */
export function getAllSedes() {
  const localSedes = localStorage.getItem("youstream_custom_sedes");
  if (localSedes) {
    try {
      const parsed = JSON.parse(localSedes);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.warn("Error leyendo cuentas locales:", e);
    }
  }
  return CONFIG.sedes;
}

/**
 * Obtiene la sede / cuenta activa.
 * 1. Primero verifica si viene por parámetro de URL (?sede=fb1 o ?fb=2 o ?ref=fb1)
 * 2. Si no, verifica si hay una guardada en localStorage
 * 3. Si no, usa la cuenta por defecto (isDefault)
 */
export function getActiveSede() {
  const sedes = getAllSedes();

  // 1. Detección automática desde la URL de Facebook (Parámetro ?sede=fb1, ?fb=fb2, etc.)
  if (typeof window !== "undefined" && window.location) {
    const params = new URLSearchParams(window.location.search);
    const querySede = params.get("sede") || params.get("fb") || params.get("ref") || params.get("w");
    if (querySede) {
      const queryClean = querySede.toLowerCase().trim();
      const match = sedes.find(s => 
        s.id.toLowerCase() === queryClean || 
        (s.alias && s.alias.toLowerCase() === queryClean) ||
        s.whatsappNumber.includes(queryClean)
      );
      if (match) {
        localStorage.setItem("youstream_active_sede_id", match.id);
        return match;
      }
    }
  }

  // 2. Si el usuario ya había seleccionado una cuenta antes en este navegador
  const savedSedeId = localStorage.getItem("youstream_active_sede_id");
  if (savedSedeId) {
    const found = sedes.find(s => s.id === savedSedeId);
    if (found) return found;
  }

  // 3. Predeterminada
  return sedes.find(s => s.isDefault) || sedes[0];
}

/**
 * Guarda la sede seleccionada en localStorage
 */
export function setActiveSedeId(sedeId) {
  localStorage.setItem("youstream_active_sede_id", sedeId);
}

/**
 * Genera el enlace oficial a WhatsApp para la cuenta activa o específica
 */
export function buildWhatsAppUrl(messageText, targetSede = null) {
  const sede = targetSede || getActiveSede();
  const number = sede.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(messageText.trim());
  return `https://wa.me/${number}?text=${encodedMsg}`;
}

/**
 * Genera la URL que el vendedor de Facebook debe colocar en su post o anuncio
 * Ejemplo: https://misitio.com/?sede=fb1
 */
export function getFacebookShareUrl(sedeId) {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?sede=${sedeId}`;
}
