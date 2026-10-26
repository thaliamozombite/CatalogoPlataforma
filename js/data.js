/**
 * CATÁLOGO DE PLATAFORMAS Y PLANES (ESTILO GIFT CARD YOU STREAM)
 * -------------------------------------------------------------
 * Modelado según el catálogo comercial de referencia:
 * - Tarjetas tipo Gift Card con ranura de colgar (pegboard slot)
 * - Indicador de perfiles / pantallas (👤 1, 👤 2, 👤 4, 👤 6, 👤 7)
 * - Sello dorado de calidad (roseta / medalla)
 * - Precios tachados (original en rojo) y precio de oferta en Soles (S/)
 * - Botones duales: [ Comprar ] (Verde) y [ Renovar ] (Azul)
 */

export const CATEGORIES = [
  { id: "all", name: "Todas las tarjetas", icon: "sparkles" },
  { id: "movies", name: "Películas & Series", icon: "film" },
  { id: "sports", name: "Deportes & En Vivo", icon: "tv" },
  { id: "music", name: "Música & Audio", icon: "music" },
  { id: "anime", name: "Anime", icon: "play" },
  { id: "tools", name: "Productividad & IA", icon: "cpu" }
];

export const PLATFORMS_DATA = [
  {
    id: "crunchyroll-mega-fan",
    name: "Crunchyroll",
    category: "anime",
    categoryLabel: "Anime",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Perfil Crunchyroll Mega Fan",
    shortDescription: "La mayor biblioteca de anime con estrenos simultáneos con Japón (Simulcast) sin publicidad.",
    fullDescription: "Acceso ilimitado a episodios en Full HD 1080p, descargas sin conexión y catálogo completo de anime sin cortes.",
    brandColor: "#FF6600",
    cardBg: "linear-gradient(145deg, #FF7700 0%, #E65100 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 10.00,
    offerPrice: 7.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="32" fill="#FFFFFF"/>
      <path d="M50 24C64.3 24 76 35.7 76 50C76 64.3 64.3 76 50 76C41.6 76 34.2 72 29.3 65.8C36.4 65.8 42.2 60 42.2 52.9C42.2 45.8 36.4 40 29.3 40C33.5 30.7 41.1 24 50 24Z" fill="#FF6600"/>
      <circle cx="61" cy="44" r="5" fill="#FFFFFF"/>
      <text x="96" y="59" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="28" font-weight="800" letter-spacing="-0.5">Crunchyroll</text>
    </svg>`,
    plans: [
      {
        id: "crunchy-1p",
        name: "x1 Perfil Mega Fan",
        duration: "1 Mes",
        price: 7.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["1 Pantalla en simultáneo", "Sin publicidad", "Episodios estreno en simultáneo", "Descargas offline"]
      }
    ]
  },

  {
    id: "movistar-tv-gol",
    name: "Movistar TV",
    category: "sports",
    categoryLabel: "Deportes & En Vivo",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Cuenta Movistar TV + GOL PERÚ",
    shortDescription: "Canales en vivo de televisión nacional y señal deportiva exclusiva con GOL PERÚ.",
    fullDescription: "Transmisiones en vivo de la Liga Peruana, eventos deportivos, noticias y canales de entretenimiento.",
    brandColor: "#00A9E0",
    cardBg: "linear-gradient(145deg, #00A9E0 0%, #0077A8 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 28.00,
    offerPrice: 25.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 65C30 45 42 35 55 52C65 65 75 65 85 52C98 35 110 45 110 65" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round"/>
      <text x="125" y="62" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="34" font-weight="800">Tv</text>
    </svg>`,
    plans: [
      {
        id: "movistar-cuenta",
        name: "Cuenta Completa Movistar TV + GOL PERÚ",
        duration: "1 Mes",
        price: 25.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["Señal GOL PERÚ en vivo", "Partidos y torneos locales", "Canales nacionales e internacionales", "Full HD"]
      }
    ]
  },

  {
    id: "disney-premium-star",
    name: "Disney+",
    category: "movies",
    categoryLabel: "Películas & Series",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Perfil Disney Premium, ESPN, STAR+",
    shortDescription: "Disney, Pixar, Marvel, Star Wars y todos los eventos deportivos en vivo de ESPN.",
    fullDescription: "Catálogo completo con perfil personal con PIN, calidad 4K UHD, Dolby Atmos y señales en directo de ESPN.",
    brandColor: "#0C2B68",
    cardBg: "linear-gradient(145deg, #0C2B68 0%, #06173B 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 15.00,
    offerPrice: 12.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="35" y="62" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="36" font-weight="800" font-style="italic">Disney+</text>
      <path d="M25 35 C 90 20, 160 30, 200 45" stroke="#67E8F9" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`,
    plans: [
      {
        id: "disney-perfil-prem",
        name: "x1 Perfil Disney Premium (ESPN y Star)",
        duration: "1 Mes",
        price: 12.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["1 Pantalla Ultra HD 4K", "Perfil con PIN privado", "Señales ESPN en directo", "Series y cine Star"]
      }
    ]
  },

  {
    id: "youtube-premium-indiv",
    name: "YouTube",
    category: "music",
    categoryLabel: "Música & Audio",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Cuenta YouTube Premium Individual",
    shortDescription: "Videos sin publicidad, reproducción en segundo plano y YouTube Music Premium incluido.",
    fullDescription: "Actívalo en tu propia cuenta de correo electrónico. Disfruta videos sin pausas y música con pantalla apagada.",
    brandColor: "#FFFFFF",
    cardBg: "linear-gradient(145deg, #FFFFFF 0%, #F1F1F1 100%)",
    cardTextColor: "#111111",
    originalPrice: 10.00,
    offerPrice: 7.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="26" width="60" height="42" rx="10" fill="#FF0000"/>
      <polygon points="50,38 68,47 50,56" fill="#FFFFFF"/>
      <text x="96" y="58" fill="#111111" font-family="'Outfit', sans-serif" font-size="28" font-weight="800" letter-spacing="-0.5">Premium</text>
    </svg>`,
    plans: [
      {
        id: "yt-indiv",
        name: "x1 Cuenta YouTube Premium",
        duration: "1 Mes",
        price: 7.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["Sin anuncios en todos los videos", "Segundo plano en smartphone", "Descargas offline", "YouTube Music incluido"]
      }
    ]
  },

  {
    id: "hbo-max-estandar",
    name: "HBO Max",
    category: "movies",
    categoryLabel: "Películas & Series",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Perfil HBO MAX Estandar",
    shortDescription: "Producciones de HBO, estrenos del cine de Warner Bros, universo DC y series galardonadas.",
    fullDescription: "House of the Dragon, The Last of Us, Succession y los mayores éxitos cinematográficos en calidad Full HD.",
    brandColor: "#471285",
    cardBg: "linear-gradient(145deg, #471285 0%, #2A0854 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 10.00,
    offerPrice: 7.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="35" y="62" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="34" font-weight="800">HBO max</text>
    </svg>`,
    plans: [
      {
        id: "hbo-1p",
        name: "x1 Perfil Estándar",
        duration: "1 Mes",
        price: 7.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["1 Pantalla Full HD", "Perfil con PIN personal", "Catálogo completo HBO", "Sin publicidad"]
      }
    ]
  },

  {
    id: "directv-go-liga1",
    name: "DirecTV GO",
    category: "sports",
    categoryLabel: "Deportes & En Vivo",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Perfil DirecTVGO + LIGA 1 MAX",
    shortDescription: "Todos los partidos de la Liga 1 Te Apuesto en vivo, torneos internacionales y canales en directo.",
    fullDescription: "Disfruta de la Liga 1 MAX en alta definición, canales en vivo de noticias, cine y deportes por streaming.",
    brandColor: "#041A3A",
    cardBg: "linear-gradient(145deg, #0A192F 0%, #030C19 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 32.00,
    offerPrice: 29.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 25 C 55 25, 75 35, 75 50 C 75 65, 55 75, 35 75 Z" fill="#00A9E0"/>
      <path d="M48 37 C 60 37, 63 43, 63 50 C 63 57, 60 63, 48 63 Z" fill="#0A192F"/>
      <text x="86" y="62" fill="#FF7700" font-family="'Outfit', sans-serif" font-size="34" font-weight="800">GO</text>
    </svg>`,
    plans: [
      {
        id: "dgo-liga1",
        name: "x1 Perfil DirecTV GO con LIGA 1 MAX",
        duration: "1 Mes",
        price: 29.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["Señal LIGA 1 MAX en directo", "Partidos del fútbol peruano", "Canales en vivo de Directv", "Full HD 1080p"]
      }
    ]
  },

  {
    id: "canva-pro",
    name: "Canva PRO",
    category: "tools",
    categoryLabel: "Productividad & IA",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Perfil Canva PRO",
    shortDescription: "Herramienta de diseño profesional con acceso a millones de plantillas premium y magia de IA.",
    fullDescription: "Acceso completo a fotos, elementos, quita fondos automático, redimensionamiento mágico y tipografías pro.",
    brandColor: "#00C4CC",
    cardBg: "linear-gradient(145deg, #00C4CC 0%, #008899 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 19.00,
    offerPrice: 16.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M190 28 L197 40 L212 36 L202 48 L214 55 L186 55 Z" fill="#FFD700"/>
      <text x="45" y="64" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="34" font-weight="800" font-style="italic">Canva</text>
    </svg>`,
    plans: [
      {
        id: "canva-pro-plan",
        name: "x1 Perfil Canva PRO Premium",
        duration: "1 Mes",
        price: 16.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["Millones de plantillas PRO", "Quitar fondos con 1 clic", "Herramientas de IA mágica", "Fuentes y recursos ilimitados"]
      }
    ]
  },

  {
    id: "paramount-completa",
    name: "Paramount+",
    category: "movies",
    categoryLabel: "Películas & Series",
    cardType: "gift_card",
    profilesCount: 6,
    title: "C. Completa Paramount+ (6)",
    shortDescription: "Cuenta completa con 6 pantallas simultáneas. Cine, series de Showtime y contenido familiar.",
    fullDescription: "Disfruta de películas de Paramount Pictures, Halo, Star Trek, contenido Nickelodeon y torneos selectos.",
    brandColor: "#0064FF",
    cardBg: "linear-gradient(145deg, #0064FF 0%, #003DA5 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 28.00,
    offerPrice: 25.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 25 L85 68 H35 Z" fill="#FFFFFF"/>
      <text x="96" y="60" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="28" font-weight="800">Paramount+</text>
    </svg>`,
    plans: [
      {
        id: "paramount-6p",
        name: "Cuenta Completa (Hasta 6 pantallas)",
        duration: "1 Mes",
        price: 25.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["6 Pantallas en simultáneo", "Resolución 4K UHD", "Cuenta privada completa", "Control parental"]
      }
    ]
  },

  {
    id: "hbo-max-platino-2p",
    name: "HBO Max Platino",
    category: "movies",
    categoryLabel: "Películas & Series",
    cardType: "gift_card",
    profilesCount: 2,
    title: "C. Completa HBOMAX Platino (2) - NO DISPONIBLE",
    shortDescription: "Cuenta completa Platino 4K UHD con 2 pantallas simultáneas y audio Dolby Atmos.",
    fullDescription: "Máxima resolución y audio inmersivo para televisores y salas de cine en casa. Consultar reposición de cupos.",
    brandColor: "#320B5C",
    cardBg: "linear-gradient(145deg, #320B5C 0%, #190533 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 102.00,
    offerPrice: 99.00,
    currency: "S/",
    availability: "low_stock",
    availabilityLabel: "No disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="35" y="62" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="34" font-weight="800">HBO max</text>
    </svg>`,
    plans: [
      {
        id: "hbo-platino-2p",
        name: "Cuenta Completa Platino (2 Pantallas)",
        duration: "1 Mes",
        price: 99.00,
        currency: "S/",
        availability: "Consultar disponibilidad",
        highlight: false,
        features: ["2 Pantallas Ultra HD 4K", "Audio Dolby Atmos", "Sin publicidad", "Consultar cupos"]
      }
    ]
  },

  {
    id: "disney-completa-7p",
    name: "Disney+ Completa",
    category: "movies",
    categoryLabel: "Películas & Series",
    cardType: "gift_card",
    profilesCount: 7,
    title: "C. Completa Disney + Star, ESPN (7)",
    shortDescription: "Cuenta completa con hasta 7 perfiles familiares independientes y señales en vivo.",
    fullDescription: "Ideal para toda la familia o amigos. Todos los contenidos de Disney, Pixar, Marvel, Star y transmisiones ESPN.",
    brandColor: "#0B2545",
    cardBg: "linear-gradient(145deg, #0B2545 0%, #041021 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 43.00,
    offerPrice: 40.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="35" y="62" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="36" font-weight="800" font-style="italic">Disney+</text>
    </svg>`,
    plans: [
      {
        id: "disney-7p",
        name: "Cuenta Completa 7 Perfiles",
        duration: "1 Mes",
        price: 40.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["Hasta 7 perfiles configurables", "Acceso total a Star y ESPN", "Resolución 4K HDR", "Cuenta completa privada"]
      }
    ]
  },

  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    category: "tools",
    categoryLabel: "Productividad & IA",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Cuenta Chat GTP plus (GPT-4o)",
    shortDescription: "Acceso ilimitado al modelo más potente GPT-4o, análisis avanzado de datos, voz y generación visual con DALL·E.",
    fullDescription: "La herramienta líder en productividad académica y laboral. Respuestas ultra rápidas y navegación web en tiempo real.",
    brandColor: "#10A37F",
    cardBg: "linear-gradient(145deg, #10A37F 0%, #075E48 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 45.00,
    offerPrice: 35.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="28" stroke="#FFFFFF" stroke-width="4" fill="none"/>
      <path d="M50 30 L50 70 M30 50 L70 50" stroke="#FFFFFF" stroke-width="4"/>
      <text x="88" y="58" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="24" font-weight="800">Chat GTP plus</text>
    </svg>`,
    plans: [
      {
        id: "chatgpt-plan",
        name: "Suscripción Mensual ChatGPT Plus",
        duration: "1 Mes",
        price: 35.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["Acceso a GPT-4o", "Generación de imágenes DALL·E", "Análisis de archivos y código", "Respuestas de alta velocidad"]
      }
    ]
  },

  {
    id: "netflix-perfil-4k",
    name: "Netflix",
    category: "movies",
    categoryLabel: "Películas & Series",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Perfil Netflix 4K UHD Original",
    shortDescription: "La plataforma número uno en series exclusivas, películas globales y estrenos en Ultra HD 4K.",
    fullDescription: "Perfil exclusivo protegido con PIN personal, reproducción 4K con audio espacial y recomendaciones propias.",
    brandColor: "#E50914",
    cardBg: "linear-gradient(145deg, #1A0406 0%, #000000 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 15.00,
    offerPrice: 12.00,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="35" y="64" fill="#E50914" font-family="'Outfit', sans-serif" font-size="38" font-weight="900" letter-spacing="1">NETFLIX</text>
    </svg>`,
    plans: [
      {
        id: "netflix-1p",
        name: "x1 Perfil Ultra HD 4K",
        duration: "1 Mes",
        price: 12.00,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["1 Pantalla Ultra HD 4K", "Perfil con PIN privado", "Sin interrupciones", "Descargas offline"]
      }
    ]
  },

  {
    id: "spotify-premium-indiv",
    name: "Spotify Premium",
    category: "music",
    categoryLabel: "Música & Audio",
    cardType: "gift_card",
    profilesCount: 1,
    title: "x1 Cuenta Spotify Premium Sin Anuncios",
    shortDescription: "Toda tu música favorita, listas ilimitadas, audio de alta calidad y descargas offline sin anuncios.",
    fullDescription: "Escucha a tus artistas preferidos, reproduce canciones en el orden que desees y disfruta sin pausas comerciales.",
    brandColor: "#1DB954",
    cardBg: "linear-gradient(145deg, #1DB954 0%, #10662E 100%)",
    cardTextColor: "#FFFFFF",
    originalPrice: 12.00,
    offerPrice: 8.50,
    currency: "S/",
    availability: "available",
    availabilityLabel: "Disponible",
    logoSvg: `<svg viewBox="0 0 300 100" width="160" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="26" fill="#FFFFFF"/>
      <path d="M38 43 C46 40 58 41 64 45 M40 50 C46 48 55 49 61 53 M42 57 C47 55 54 56 59 59" stroke="#1DB954" stroke-width="4" stroke-linecap="round"/>
      <text x="86" y="58" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="28" font-weight="800">Spotify</text>
    </svg>`,
    plans: [
      {
        id: "spotify-indiv",
        name: "x1 Cuenta Premium Individual",
        duration: "1 Mes",
        price: 8.50,
        currency: "S/",
        availability: "Disponible",
        highlight: true,
        features: ["Música 100% sin anuncios", "Saltos de pista ilimitados", "Modo sin conexión", "Audio en máxima fidelidad"]
      }
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Explora las tarjetas del catálogo",
    description: "Revisa las plataformas, cantidad de pantallas y precios en oferta. Puedes usar los filtros por categoría o el buscador.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>`
  },
  {
    stepNumber: "02",
    title: "Elige entre Comprar o Renovar",
    description: "Cada tarjeta cuenta con botones directos para nueva compra o renovación de tu suscripción actual con soporte inmediato.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>`
  },
  {
    stepNumber: "03",
    title: "Coordina por WhatsApp",
    description: "Se abrirá tu chat con un mensaje estructurado con el nombre del plan y precio para confirmar disponibilidad y métodos de pago.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>`
  }
];

export const GUARANTEED_BENEFITS = [
  {
    title: "Atención personalizada",
    description: "Te atendemos de manera directa y humana a través de WhatsApp para responder cualquier duda técnica o de compatibilidad.",
    iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>`
  },
  {
    title: "Información clara sobre los planes",
    description: "Detallamos las condiciones de cada suscripción, tipo de perfil, resolución y número de pantallas antes de concretar tu solicitud.",
    iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>`
  },
  {
    title: "Consulta de disponibilidad",
    description: "Verificamos los cupos en tiempo real para asegurarte que el plan seleccionado se encuentre operativo al momento de tu contacto.",
    iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`
  },
  {
    title: "Asistencia durante el proceso",
    description: "Te acompañamos paso a paso con instrucciones de acceso y configuración en tu televisor, teléfono inteligente o computadora.",
    iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>`
  }
];

export const FAQ_DATA = [
  {
    question: "¿Cómo puedo comprar un plan?",
    answer: "Solo debes hacer clic en el botón verde [Comprar] de la tarjeta que desees. Te abrirá directamente WhatsApp con el mensaje estructurado indicando la plataforma y el precio de oferta para que nuestro asesor confirme los datos de pago y te entregue las credenciales."
  },
  {
    question: "¿Cómo funciona el botón de Renovar?",
    answer: "Si ya eres cliente y tu suscripción está por vencer o venció, presiona el botón azul [Renovar]. Te conectará con nuestro equipo para mantener tu mismo perfil o extender el plazo de tu servicio sin perder tus listas de favoritos."
  },
  {
    question: "¿Qué duración tiene cada suscripción?",
    answer: "Las suscripciones en catálogo son mensuales (30 días de cobertura garantizada), con opción de renovación continua. Las tarjetas indican con exactitud la cantidad de perfiles o pantallas activas."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias locales (BCP, BBVA, Interbank, etc.) y billeteras digitales como Yape y Plin en Perú, además de opciones internacionales previa coordinación por WhatsApp."
  },
  {
    question: "¿Qué sucede si necesito ayuda?",
    answer: "Brindamos soporte directo por el mismo chat de WhatsApp ante cualquier consulta de configuración en tu Smart TV, celular, tablet o computadora."
  }
];
