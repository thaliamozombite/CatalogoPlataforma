/**
 * CATÁLOGO DE PLATAFORMAS Y PLANES (DATOS DE DEMOSTRACIÓN)
 * --------------------------------------------------------
 * Todos los datos están claramente identificados como demostración.
 * El administrador puede agregar, editar o eliminar plataformas y planes
 * modificando este archivo o conectándolo con una API en el futuro.
 */

export const CATEGORIES = [
  { id: "all", name: "Todas las plataformas", icon: "sparkles" },
  { id: "movies", name: "Películas & Series", icon: "film" },
  { id: "music", name: "Música & Audio", icon: "music" },
  { id: "anime", name: "Anime & Entretenimiento", icon: "play" },
  { id: "sports", name: "Deportes & En Vivo", icon: "tv" }
];

export const PLATFORMS_DATA = [
  {
    id: "netflix",
    name: "Netflix",
    category: "movies",
    categoryLabel: "Películas & Series",
    brandColor: "#E50914",
    accentGlow: "rgba(229, 9, 20, 0.35)",
    badge: "Más Solicitado",
    tagline: "Series exclusivas y estrenos mundiales",
    shortDescription: "La plataforma líder con las series más aclamadas, películas galardonadas y documentales en Ultra HD 4K.",
    fullDescription: "Accede a todo el catálogo global de Netflix con perfiles privados protegidos por PIN, resolución 4K HDR y sonido envolvente.",
    priceFrom: 4.50,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "available", // 'available' | 'low_stock' | 'check_stock'
    availabilityLabel: "Disponible",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#141414"/>
      <path d="M312 216H424V808H312V216Z" fill="#E50914"/>
      <path d="M600 216H712V808H600V216Z" fill="#E50914"/>
      <path d="M312 216L712 808H600L312 240V216Z" fill="#B81D24"/>
    </svg>`,
    plans: [
      {
        id: "netflix-perfil",
        name: "Plan 1 Pantalla (Perfil Privado)",
        duration: "1 Mes",
        price: 4.50,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Económico",
        features: [
          "1 Dispositivo en simultáneo",
          "Resolución Ultra HD 4K + HDR",
          "Perfil privado con PIN personal",
          "Reproducción en TV, PC, tablet o móvil",
          "Descargas para ver sin conexión"
        ],
        conditions: "Servicio entregado en cuenta compartida con perfil exclusivo protegido. Renovación mensual disponible previa confirmación."
      },
      {
        id: "netflix-2p",
        name: "Plan 2 Pantallas",
        duration: "1 Mes",
        price: 8.50,
        currency: "$",
        availability: "Disponible",
        highlight: true,
        badge: "Recomendado",
        features: [
          "2 Dispositivos simultáneos",
          "Resolución Ultra HD 4K",
          "2 Perfiles personalizados",
          "Compatible con Smart TV y consolas",
          "Audio espacial Dolby Atmos"
        ],
        conditions: "Ideal para parejas o compartir en el hogar. Soporte directo ante cualquier duda."
      },
      {
        id: "netflix-full",
        name: "Plan Cuenta Completa (4 Pantallas)",
        duration: "1 Mes",
        price: 15.00,
        currency: "$",
        availability: "Consultar disponibilidad",
        highlight: false,
        badge: "Control Total",
        features: [
          "4 Pantallas en simultáneo",
          "Resolución Ultra HD 4K HDR",
          "Hasta 5 perfiles para toda la familia",
          "Cuenta privada con correo asignado",
          "Soporte prioritario"
        ],
        conditions: "Sujeto a disponibilidad de cupos de facturación mensual. Consulta previa requerida por WhatsApp."
      },
      {
        id: "netflix-trimestral",
        name: "Plan Trimestral (1 Pantalla)",
        duration: "3 Meses",
        price: 12.00,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Ahorro",
        features: [
          "3 meses continuos de servicio",
          "1 Pantalla Ultra HD 4K",
          "Mismo perfil y recomendaciones durante el período",
          "Ahorro frente al pago mensual"
        ],
        conditions: "Garantía de continuidad durante los 90 días contratados."
      }
    ]
  },

  {
    id: "disney",
    name: "Disney+",
    category: "movies",
    categoryLabel: "Películas & Series",
    brandColor: "#113CCF",
    accentGlow: "rgba(17, 60, 207, 0.35)",
    badge: "Familiar",
    tagline: "Disney, Pixar, Marvel, Star Wars & NatGeo",
    shortDescription: "El universo cinematográfico completo con producciones originales, clásicos animados y deportes en vivo.",
    fullDescription: "Disfruta de sagas legendarias, estrenos directos de cine, series exclusivas de Marvel y Star Wars, además de contenido deportivo.",
    priceFrom: 3.50,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "available",
    availabilityLabel: "Disponible",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#040714"/>
      <path d="M512 220C350.7 220 220 350.7 220 512C220 673.3 350.7 804 512 804C673.3 804 804 673.3 804 512C804 350.7 673.3 220 512 220Z" fill="url(#disney_grad)"/>
      <path d="M380 430C410 390 480 370 540 400C590 425 610 475 590 525C565 590 470 630 400 620C360 615 340 590 345 560C350 530 380 520 410 525C450 530 490 515 500 480C508 450 485 435 450 435C400 435 365 470 360 510L320 500C330 440 380 395 440 395C505 395 550 435 540 495C530 555 465 585 410 580C390 578 380 568 382 555C384 545 395 540 410 542C440 546 470 535 480 505C490 470 460 450 430 450C395 450 370 475 365 500" stroke="#FFFFFF" stroke-width="28" stroke-linecap="round"/>
      <defs>
        <linearGradient id="disney_grad" x1="220" y1="220" x2="804" y2="804" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0E215C"/>
          <stop offset="1" stop-color="#1E52E8"/>
        </linearGradient>
      </defs>
    </svg>`,
    plans: [
      {
        id: "disney-std",
        name: "Plan Estándar (1 Pantalla)",
        duration: "1 Mes",
        price: 3.50,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Básico",
        features: [
          "1 Dispositivo en simultáneo",
          "Resolución Full HD 1080p",
          "Perfil privado con PIN",
          "Control parental y perfiles infantiles",
          "Catálogo completo Disney y Star"
        ],
        conditions: "Perfil privado con acceso inmediato. Compatible con todos los dispositivos Smart."
      },
      {
        id: "disney-prem",
        name: "Plan Premium 4K (1 Pantalla)",
        duration: "1 Mes",
        price: 4.80,
        currency: "$",
        availability: "Disponible",
        highlight: true,
        badge: "Más Elegido",
        features: [
          "1 Pantalla Ultra HD 4K + HDR",
          "Audio Dolby Atmos inmersivo",
          "Eventos deportivos de ESPN incluidos",
          "Perfil exclusivo con PIN",
          "Descargas ilimitadas en móvil"
        ],
        conditions: "Incluye la señal en vivo de eventos deportivos ESPN seleccionados."
      },
      {
        id: "disney-trimestral",
        name: "Plan Trimestral Premium",
        duration: "3 Meses",
        price: 12.50,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Trimestral",
        features: [
          "3 meses de cobertura",
          "Calidad 4K HDR con ESPN",
          "Perfil exclusivo sin interrupciones",
          "Soporte continuo durante el período"
        ],
        conditions: "Tarifa preferencial por compra trimestral."
      }
    ]
  },

  {
    id: "max",
    name: "Max",
    category: "movies",
    categoryLabel: "Películas & Series",
    brandColor: "#002BE7",
    accentGlow: "rgba(0, 43, 231, 0.35)",
    badge: "HBO & Warner",
    tagline: "El hogar de HBO, Warner Bros y DC",
    shortDescription: "Series de culto, producciones galardonadas de HBO, estrenos del cine directo a tu pantalla y el universo DC.",
    fullDescription: "Vive la experiencia de House of the Dragon, The Last of Us, Succession, Champions League en vivo según región y los mayores éxitos de taquilla.",
    priceFrom: 3.80,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "available",
    availabilityLabel: "Disponible",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#001460"/>
      <path d="M220 360L360 660H430L512 480L594 660H664L804 360H714L630 550L550 360H474L394 550L310 360H220Z" fill="#002BE7"/>
      <circle cx="512" cy="512" r="80" fill="#FFFFFF"/>
    </svg>`,
    plans: [
      {
        id: "max-std",
        name: "Plan Estándar (1 Pantalla)",
        duration: "1 Mes",
        price: 3.80,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Estándar",
        features: [
          "1 Pantalla Full HD 1080p",
          "Acceso ilimitado a producciones HBO",
          "Perfil personal con contraseña PIN",
          "Sin cortes publicitarios"
        ],
        conditions: "Activación rápida en perfil individual. Renovación mensual a solicitud."
      },
      {
        id: "max-platino",
        name: "Plan Platino 4K UHD",
        duration: "1 Mes",
        price: 5.20,
        currency: "$",
        availability: "Disponible",
        highlight: true,
        badge: "Calidad Máxima",
        features: [
          "1 Pantalla Ultra HD 4K + Dolby Vision",
          "Sonido envolvente Dolby Atmos",
          "Deportes en vivo (según disponibilidad territorial)",
          "Perfil personal privado"
        ],
        conditions: "Máxima resolución disponible de la plataforma para televisores 4K."
      },
      {
        id: "max-completa",
        name: "Plan Cuenta Familiar (2 Pantallas)",
        duration: "1 Mes",
        price: 9.00,
        currency: "$",
        availability: "Consultar disponibilidad",
        highlight: false,
        badge: "Familiar",
        features: [
          "2 Pantallas simultáneas",
          "Calidad 4K UHD",
          "Múltiples perfiles independientes",
          "Soporte preferente"
        ],
        conditions: "Consulta disponibilidad de cuentas compartidas o privadas vía WhatsApp."
      }
    ]
  },

  {
    id: "prime",
    name: "Amazon Prime Video",
    category: "movies",
    categoryLabel: "Películas & Series",
    brandColor: "#00A8E1",
    accentGlow: "rgba(0, 168, 225, 0.35)",
    badge: "Originales Prime",
    tagline: "El Señor de los Anillos, The Boys e Invincible",
    shortDescription: "Contenido galardonado original de Amazon, canales temáticos y una amplia selección de películas de estreno.",
    fullDescription: "Accede a las producciones más aclamadas de Prime Video con audio en múltiples idiomas, subtítulos personalizados y calidad 4K HDR.",
    priceFrom: 3.00,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "available",
    availabilityLabel: "Disponible",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#000511"/>
      <path d="M280 430C280 370 330 320 400 320C470 320 520 370 520 430C520 490 470 540 400 540C330 540 280 490 280 430ZM350 430C350 460 370 480 400 480C430 480 450 460 450 430C450 400 430 380 400 380C370 380 350 400 350 430Z" fill="#00A8E1"/>
      <path d="M570 330H635V540H570V330Z" fill="#00A8E1"/>
      <path d="M240 640C380 720 620 720 760 620C770 612 785 624 778 635C660 770 350 780 225 655C218 648 228 632 240 640Z" fill="#00A8E1"/>
      <path d="M720 590L775 625L750 670C745 680 730 675 735 660L745 635L715 615C705 605 710 585 720 590Z" fill="#00A8E1"/>
    </svg>`,
    plans: [
      {
        id: "prime-1p",
        name: "Plan 1 Pantalla Individual",
        duration: "1 Mes",
        price: 3.00,
        currency: "$",
        availability: "Disponible",
        highlight: true,
        badge: "Más Accesible",
        features: [
          "1 Pantalla Ultra HD 4K",
          "Perfil privado asignado con PIN",
          "Función X-Ray de actores y trivia",
          "Descargas offline para viajes"
        ],
        conditions: "Activación directa en cuenta gestionada. Duración exacta de 30 días con recordatorio de renovación."
      },
      {
        id: "prime-3m",
        name: "Plan Trimestral (1 Pantalla)",
        duration: "3 Meses",
        price: 8.00,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Ahorro",
        features: [
          "3 meses continuos de acceso",
          "Resolución 4K Ultra HD",
          "Perfil individual permanente",
          "Soporte garantizado durante todo el período"
        ],
        conditions: "Sin interrupciones ni cambios de credenciales durante el trimestre contratado."
      }
    ]
  },

  {
    id: "spotify",
    name: "Spotify Premium",
    category: "music",
    categoryLabel: "Música & Audio",
    brandColor: "#1DB954",
    accentGlow: "rgba(29, 185, 84, 0.35)",
    badge: "Música Sin Límites",
    tagline: "Millones de canciones sin anuncios",
    shortDescription: "Toda la música que amas, podcasts exclusivos, listas personalizadas y reproducción sin conexión con la más alta calidad.",
    fullDescription: "Escucha tus artistas favoritos en cualquier dispositivo, salta canciones ilimitadamente y descarga tus playlists para viajar sin gastar tus datos móviles.",
    priceFrom: 2.50,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "available",
    availabilityLabel: "Disponible",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#121212"/>
      <circle cx="512" cy="512" r="320" fill="#1DB954"/>
      <path d="M380 430C460 405 570 410 655 460C665 466 670 480 660 490C652 500 638 504 628 498C555 455 455 450 385 472C372 476 360 468 356 455C352 442 365 434 380 430Z" fill="#121212"/>
      <path d="M400 515C470 495 565 500 635 540C645 546 648 558 642 568C636 578 624 581 614 575C552 538 468 534 406 552C394 555 382 548 379 536C376 524 388 518 400 515Z" fill="#121212"/>
      <path d="M420 600C475 585 550 590 605 622C614 627 617 638 612 646C607 655 596 658 588 653C540 625 475 620 426 634C416 637 406 631 403 621C400 611 410 603 420 600Z" fill="#121212"/>
    </svg>`,
    plans: [
      {
        id: "spotify-indiv",
        name: "Plan Premium Mensual",
        duration: "1 Mes",
        price: 2.50,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Mensual",
        features: [
          "Música 100% libre de anuncios",
          "Reproducción a la carta y saltos ilimitados",
          "Descarga de canciones en alta calidad (320kbps)",
          "Compatible con Spotify Connect y parlantes inteligentes"
        ],
        conditions: "Activación en cuenta personal o mediante invitación familiar según disponibilidad."
      },
      {
        id: "spotify-trimestral",
        name: "Plan Premium 3 Meses",
        duration: "3 Meses",
        price: 6.50,
        currency: "$",
        availability: "Disponible",
        highlight: true,
        badge: "Más Conveniente",
        features: [
          "90 días continuos de música",
          "Conserva todas tus playlists y favoritos",
          "Calidad de audio muy alta",
          "Garantía de reposición inmediata"
        ],
        conditions: "Continuidad del servicio garantizada sin cambios inesperados de cuenta."
      },
      {
        id: "spotify-semestral",
        name: "Plan Semestral (6 Meses)",
        duration: "6 Meses",
        price: 11.50,
        currency: "$",
        availability: "Consultar disponibilidad",
        highlight: false,
        badge: "Largo Plazo",
        features: [
          "180 días de entretenimiento sonoro continuo",
          "Ahorro significativo frente al pago mes a mes",
          "Soporte preferente vía WhatsApp"
        ],
        conditions: "Consulta cupos vigentes antes de solicitar."
      }
    ]
  },

  {
    id: "crunchyroll",
    name: "Crunchyroll Mega Fan",
    category: "anime",
    categoryLabel: "Anime & Entretenimiento",
    brandColor: "#F47521",
    accentGlow: "rgba(244, 117, 33, 0.35)",
    badge: "Mundo Anime",
    tagline: "La mayor biblioteca de anime del planeta",
    shortDescription: "Episodios estreno en simultáneo con Japón (Simulcast), doblajes al español y miles de títulos sin anuncios.",
    fullDescription: "Disfruta de Attack on Titan, Demon Slayer, Jujutsu Kaisen, One Piece y cientos de series anime con subtítulos oficiales en HD.",
    priceFrom: 3.00,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "available",
    availabilityLabel: "Disponible",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#141519"/>
      <circle cx="512" cy="512" r="280" fill="#F47521"/>
      <path d="M512 290C635 290 734 389 734 512C734 635 635 734 512 734C440 734 376 700 334 647C395 647 445 597 445 536C445 475 395 425 334 425C370 345 435 290 512 290Z" fill="#FFFFFF"/>
      <circle cx="610" cy="460" r="45" fill="#F47521"/>
    </svg>`,
    plans: [
      {
        id: "crunchy-fan",
        name: "Plan Fan (1 Dispositivo)",
        duration: "1 Mes",
        price: 3.00,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Básico",
        features: [
          "Sin publicidad comercial",
          "Nuevos episodios 1 hora después de Japón",
          "Acceso ilimitado a la biblioteca de anime",
          "Resolución Full HD 1080p"
        ],
        conditions: "Activación rápida con perfil privado asignado."
      },
      {
        id: "crunchy-mega",
        name: "Plan Mega Fan (4 Dispositivos + Offline)",
        duration: "1 Mes",
        price: 4.50,
        currency: "$",
        availability: "Disponible",
        highlight: true,
        badge: "Simulcast Completo",
        features: [
          "Hasta 4 dispositivos en simultáneo",
          "Visualización sin conexión (descargas móviles)",
          "Episodios simulcast inmediatos",
          "Acceso a eventos especiales y contenido exclusivo"
        ],
        conditions: "Ideal para compartir entre amigos o familia amante del anime."
      },
      {
        id: "crunchy-anual",
        name: "Plan Mega Fan Anual (12 Meses)",
        duration: "12 Meses",
        price: 28.00,
        currency: "$",
        availability: "Consultar disponibilidad",
        highlight: false,
        badge: "Anual VIP",
        features: [
          "1 año completo garantizado",
          "Visualización en 4 pantallas simultáneas",
          "Soporte VIP prioritario todo el año",
          "Mayor tasa de ahorro"
        ],
        conditions: "Suscripción anual con respaldo y garantía permanente."
      }
    ]
  },

  {
    id: "youtube",
    name: "YouTube Premium",
    category: "music",
    categoryLabel: "Música & Audio",
    brandColor: "#FF0000",
    accentGlow: "rgba(255, 0, 0, 0.35)",
    badge: "Sin Pausas",
    tagline: "Videos sin publicidad y reproducción en segundo plano",
    shortDescription: "Disfruta de todos los videos de YouTube sin pausas publicitarias, modo segundo plano en tu smartphone y YouTube Music incluido.",
    fullDescription: "Convierte cualquier dispositivo en una experiencia multimedia fluida. Apaga la pantalla del celular y sigue escuchando tus videos o música.",
    priceFrom: 3.20,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "low_stock",
    availabilityLabel: "Consultar disponibilidad",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#0F0F0F"/>
      <path d="M780 370C773 345 753 325 728 318C682 306 512 306 512 306C512 306 342 306 296 318C271 325 251 345 244 370C232 416 232 512 232 512C232 512 232 608 244 654C251 679 271 699 296 706C342 718 512 718 512 718C512 718 682 718 728 706C753 699 773 679 780 654C792 608 792 512 792 512C792 512 792 416 780 370Z" fill="#FF0000"/>
      <polygon points="456,412 600,512 456,612" fill="#FFFFFF"/>
    </svg>`,
    plans: [
      {
        id: "yt-individual",
        name: "Plan Mensual Tu Cuenta",
        duration: "1 Mes",
        price: 3.20,
        currency: "$",
        availability: "Consultar cupos",
        highlight: true,
        badge: "En tu correo",
        features: [
          "Sin publicidad en todos los videos",
          "Reproducción con la pantalla apagada (segundo plano)",
          "Descarga de videos en alta definición",
          "Acceso ilimitado a YouTube Music Premium"
        ],
        conditions: "Se activa directamente mediante invitación a tu correo electrónico de Google."
      },
      {
        id: "yt-trimestral",
        name: "Plan 3 Meses",
        duration: "3 Meses",
        price: 8.50,
        currency: "$",
        availability: "Consultar cupos",
        highlight: false,
        badge: "Trimestral",
        features: [
          "3 meses continuos sin interrupciones",
          "Videos y música sin anuncios",
          "Soporte directo de reactivación"
        ],
        conditions: "Verificación de elegibilidad de cuenta Google previa vía WhatsApp."
      }
    ]
  },

  {
    id: "paramount",
    name: "Paramount+",
    category: "movies",
    categoryLabel: "Películas & Series",
    brandColor: "#0064FF",
    accentGlow: "rgba(0, 100, 255, 0.35)",
    badge: "Cine & Series",
    tagline: "Montañas de entretenimiento con Showtime",
    shortDescription: "Franquicias de renombre como Star Trek, Yellowstone, películas de Paramount Pictures y torneos deportivos.",
    fullDescription: "Accede a contenido exclusivo de Showtime, producciones familiares de Nickelodeon y clásicos de MTV.",
    priceFrom: 2.80,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "available",
    availabilityLabel: "Disponible",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#001844"/>
      <path d="M512 280L690 680H334L512 280Z" fill="#0064FF"/>
      <circle cx="512" cy="440" r="30" fill="#FFFFFF"/>
      <circle cx="440" cy="510" r="26" fill="#FFFFFF"/>
      <circle cx="584" cy="510" r="26" fill="#FFFFFF"/>
      <circle cx="380" cy="590" r="22" fill="#FFFFFF"/>
      <circle cx="644" cy="590" r="22" fill="#FFFFFF"/>
    </svg>`,
    plans: [
      {
        id: "paramount-std",
        name: "Plan 1 Pantalla Full HD",
        duration: "1 Mes",
        price: 2.80,
        currency: "$",
        availability: "Disponible",
        highlight: true,
        badge: "Económico",
        features: [
          "1 Dispositivo en simultáneo",
          "Resolución Full HD 1080p",
          "Perfil privado con PIN",
          "Catálogo completo de Paramount y Showtime"
        ],
        conditions: "Entrega inmediata tras confirmar solicitud por WhatsApp."
      },
      {
        id: "paramount-trimestral",
        name: "Plan Trimestral (3 Meses)",
        duration: "3 Meses",
        price: 7.50,
        currency: "$",
        availability: "Disponible",
        highlight: false,
        badge: "Ahorro",
        features: [
          "3 meses continuos de acceso",
          "Perfil exclusivo",
          "Garantía total durante el período"
        ],
        conditions: "Renovación garantizada con el mismo perfil."
      }
    ]
  },

  {
    id: "appletv",
    name: "Apple TV+",
    category: "movies",
    categoryLabel: "Películas & Series",
    brandColor: "#A2AAAD",
    accentGlow: "rgba(162, 170, 173, 0.35)",
    badge: "Producciones Premium",
    tagline: "Historias premiadas con calidad cinematográfica",
    shortDescription: "Series originales galardonadas con premios Emmy, películas aclamadas por la crítica y documentales en 4K HDR.",
    fullDescription: "Ted Lasso, Severance, The Morning Show y documentales con la más alta tasa de bits y audio espacial Dolby Atmos.",
    priceFrom: 3.00,
    priceUnit: "mes",
    durationFrom: "1 mes",
    availability: "low_stock",
    availabilityLabel: "Consultar disponibilidad",
    isDemo: true,
    logoSvg: `<svg viewBox="0 0 1024 1024" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" rx="220" fill="#000000"/>
      <path d="M570 300C585 280 595 250 590 220C565 225 535 240 520 260C508 275 498 305 502 335C530 335 558 318 570 300Z" fill="#FFFFFF"/>
      <path d="M592 510C592 445 645 410 650 405C620 360 570 355 555 355C515 350 475 380 455 380C435 380 400 355 370 355C315 355 260 400 235 480C205 580 260 720 310 790C335 825 365 860 405 860C440 860 455 838 495 838C535 838 548 860 585 860C625 860 652 825 675 790C705 745 718 705 720 700C712 697 660 675 660 600C660 535 710 500 715 498C685 450 635 442 620 440" fill="#FFFFFF"/>
    </svg>`,
    plans: [
      {
        id: "apple-std",
        name: "Plan Mensual Apple TV+",
        duration: "1 Mes",
        price: 3.00,
        currency: "$",
        availability: "Consultar cupos",
        highlight: true,
        badge: "Ultra HD",
        features: [
          "Calidad 4K Dolby Vision y Dolby Atmos",
          "Catálogo completo de Apple Originals",
          "Acceso en Smart TV, Apple TV, PC y consolas",
          "Perfil privado"
        ],
        conditions: "Activación sujeta a verificación previa de compatibilidad de dispositivo."
      }
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Explora el catálogo",
    description: "Navega por las distintas plataformas de streaming, usa los filtros por categoría o el buscador para encontrar tus servicios favoritos.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>`
  },
  {
    stepNumber: "02",
    title: "Selecciona el plan que te interesa",
    description: "Haz clic en 'Ver planes' para revisar las características de cada opción: duración, número de pantallas, calidad de reproducción y condiciones.",
    iconSvg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>`
  },
  {
    stepNumber: "03",
    title: "Consulta y coordina por WhatsApp",
    description: "Toca 'Consultar este plan' para abrir un mensaje directo con los datos de tu selección. Te confirmamos disponibilidad y resolvemos tus dudas.",
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
    answer: "El proceso es simple: explora las plataformas de nuestro catálogo, haz clic en 'Ver planes' de la opción que te interese y presiona 'Consultar este plan'. Serás redirigido a WhatsApp con un mensaje prellenado donde nuestro asesor te confirmará el precio vigente, la disponibilidad de cupos y las formas de pago disponibles."
  },
  {
    question: "¿Qué duración tiene cada suscripción?",
    answer: "Las suscripciones habitualmente se ofrecen en modalidades mensuales (30 días), trimestrales (90 días) y anuales según la plataforma. Cada plan en nuestro catálogo especifica con claridad su duración estimada para que elijas la alternativa que mejor se adapte a tus necesidades."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Los métodos de pago exactos se coordinan y confirman de forma directa mediante WhatsApp. Usualmente se admiten transferencias bancarias locales, billeteras digitales y otros medios comunes según el país de compra."
  },
  {
    question: "¿Cómo verifico la disponibilidad?",
    answer: "En el catálogo cada tarjeta muestra una etiqueta de estado (por ejemplo 'Disponible' o 'Consultar disponibilidad'). Al escribirnos a WhatsApp, nuestro asesor revisará en tiempo real la existencia de cupos activos para la plataforma solicitada antes de formalizar la activación."
  },
  {
    question: "¿Qué sucede si necesito ayuda?",
    answer: "Brindamos asistencia y acompañamiento post-consulta a través del mismo canal de WhatsApp. Si presentas dudas para vincular tu dispositivo, ingresar las credenciales o configurar tu perfil con PIN, te guiaremos de forma personalizada."
  }
];
