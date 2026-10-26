# StreamVault - Catálogo Web de Suscripciones Digitales & Streaming

Sitio web comercial moderno y responsive para la exhibición de planes de entretenimiento digital (Netflix, Disney+, Max, Amazon Prime Video, Spotify, Crunchyroll, Apple TV+, YouTube Premium, Paramount+), con filtros en tiempo real, buscador inteligente, visualización detallada de planes y generación automática de mensajes de consulta a WhatsApp.

---

## 🚀 Características Principales

- **Diseño UI/UX Premium:** Estética oscura (obsidiana y gris carbón) con acentos violeta, cian y carmesí, tipografía moderna (*Outfit* y *Plus Jakarta Sans*) y efectos glassmorphism.
- **Catálogo Interactivo:**
  - Filtrado por categorías (*Películas & Series*, *Música & Audio*, *Anime & Entretenimiento*, *Deportes & En Vivo*).
  - Buscador reactivo en tiempo real con limpieza rápida de búsqueda y estado vacío estilizado.
  - Indicadores de estado de disponibilidad (*Disponible*, *Consultar cupos*).
  - Precios referenciales claramente identificados como datos de demostración.
- **Detalle de Planes (Modal Accesible):**
  - Vista ampliada de características técnicas (calidad 4K HDR, número de pantallas, sonido Dolby Atmos, condiciones de servicio).
  - Botón de consulta directa por plan con mensaje personalizado para WhatsApp.
- **Integración con WhatsApp:**
  - Construcción y codificación automática (`encodeURIComponent`) del mensaje según la plataforma y el plan seleccionado.
  - Formato del mensaje:  
    *“Hola, quisiera información sobre el plan de [PLATAFORMA], opción [PLAN]. ¿Podrían indicarme el precio y la disponibilidad?”*
  - Número configurable en formato internacional sin espacios ni caracteres especiales.
  - **Configurador Sandbox en vivo:** Permite probar cualquier número de teléfono desde la misma interfaz web antes de modificar los archivos de código.
- **Secciones Informativas:**
  - **Hero:** Título comercial, badges de confianza y tarjeta visual interactiva.
  - **Cómo Funciona:** Proceso de 3 pasos sencillos e ilustrados.
  - **Beneficios Garantizados:** Compromisos honestos y realistas (atención personalizada, información clara, consulta de disponibilidad y asistencia técnica).
  - **Preguntas Frecuentes (FAQ):** Acordeón interactivo con transiciones suaves y accesibilidad por teclado.
  - **Aviso Legal y Pie de Página:** Declaración explícita de propiedad de marcas comerciales registradas y enlaces a Términos y Condiciones / Política de Privacidad.

---

## 📁 Estructura del Proyecto

```text
catalogoPedidos/
├── index.html           # Estructura semántica, accesibilidad y SEO
├── package.json         # Configuración y scripts para servidor local
├── .gitignore           # Exclusión de temporales y librerías
├── README.md            # Documentación del proyecto
├── css/
│   └── styles.css       # Sistema de diseño, tokens CSS, componentes y responsive
└── js/
    ├── config.js        # Configuración del número de WhatsApp y datos comerciales
    ├── data.js          # Base de datos de plataformas, planes y FAQs (fácil de editar)
    └── app.js           # Lógica frontend reactiva (filtros, modales, WhatsApp)
```

---

## ⚙️ Cómo Configurar tu Número de WhatsApp

### Opción 1: Directamente en el código
Abre el archivo [js/config.js](file:///c:/Users/User/OneDrive/Documentos/catalogoPedidos/js/config.js) y edita la propiedad `whatsappNumber`:

```javascript
export const CONFIG = {
  // Ingresa tu número en formato internacional (código de país + número, sin + ni espacios)
  // Ejemplo México: "5215512345678"
  // Ejemplo Colombia: "573001234567"
  // Ejemplo Perú: "51987654321"
  // Ejemplo Ecuador: "593987654321"
  // Ejemplo Argentina: "5491112345678"
  whatsappNumber: "593900000000",
  ...
};
```

### Opción 2: Desde la interfaz web (Sandbox)
1. Abre la página en tu navegador.
2. En la franja superior de aviso, haz clic en **"⚙️ Configurar número de prueba"**.
3. Ingresa tu número de WhatsApp con código de país.
4. Todos los botones de consulta en la página se actualizarán instantáneamente para chatear con tu número.

---

## 🛠️ Ejecución Local

Para visualizar el proyecto localmente puedes utilizar cualquier servidor web estático o ejecutar:

```bash
# Iniciar servidor local
npm start
```

Luego abre tu navegador en `http://localhost:3000`.

---

## ⚖️ Aviso Legal de Marcas
Los nombres comerciales, logotipos, imágenes y marcas de las plataformas de streaming (Netflix, Disney+, Max, Amazon Prime Video, Spotify, Crunchyroll, entre otras) pertenecen a sus respectivos titulares y propietarios. Este sitio web opera únicamente como un catálogo comercial e informativo independiente para la intermediación de consultas.
