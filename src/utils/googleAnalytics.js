// Configuración de Google Analytics
const GA_MEASUREMENT_ID = 'G-G43KBLNF35';

// Función helper para gtag
const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(args);
  }
};

// Inicializar Google Analytics
export const initGA = () => {
  // Solo ejecutar en el navegador
  if (typeof window === 'undefined') return;

  // Verificar si ya está inicializado
  if (window.gtag) return;

  // Inicializar dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Crear función gtag global
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Cargar el script de Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onload = () => {
    // Configurar GA4 después de que el script se carga
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      debug_mode: process.env.NODE_ENV === 'development',
      send_page_view: true
    });
  };
  
  document.head.appendChild(script);
};

// Función para enviar eventos personalizados
export const sendGAEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }
};

// Función para tracking de páginas
export const sendPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Eventos específicos para la landing page
export const gaEvents = {
  // === EVENTOS DE NAVEGACIÓN ===
  pageView: (pageName, path) => {
    sendGAEvent('page_view', {
      page_title: pageName,
      page_location: path,
      category: 'navigation'
    });
  },

  // === EVENTOS DE ENGAGEMENT ===
  
  // Scroll tracking
  scrollDepth: (percentage) => {
    sendGAEvent('scroll', {
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage,
      scroll_depth: percentage
    });
  },

  // Tiempo en página
  timeOnPage: (seconds, pageName) => {
    sendGAEvent('timing_complete', {
      category: 'engagement',
      label: pageName,
      value: seconds,
      name: 'time_on_page',
      time_seconds: seconds
    });
  },

  // === EVENTOS DE INTERACCIÓN CON BOTONES ===
  
  // Botón principal CTA
  clickGetInTouch: (location = 'unknown') => {
    sendGAEvent('click', {
      category: 'cta_interaction',
      label: `get_in_touch_${location}`,
      button_name: 'Get in Touch',
      button_location: location
    });
  },

  // Calendly widget
  clickCalendly: (location = 'unknown') => {
    sendGAEvent('click', {
      category: 'lead_generation',
      label: `calendly_${location}`,
      button_name: 'Request Demo',
      button_location: location,
      conversion_type: 'demo_request'
    });
  },

  // === EVENTOS DE FORMULARIO ===
  
  // Inicio de formulario
  formStart: (formName = 'contact_form') => {
    sendGAEvent('form_start', {
      category: 'lead_generation',
      label: formName,
      form_name: formName
    });
  },

  // Progreso del formulario
  formProgress: (step, formName = 'contact_form') => {
    sendGAEvent('form_progress', {
      category: 'lead_generation',
      label: `${formName}_step_${step}`,
      form_name: formName,
      form_step: step
    });
  },

  // Formulario completado
  formComplete: (formName = 'contact_form', formData = {}) => {
    sendGAEvent('form_submit', {
      category: 'conversion',
      label: formName,
      value: 1,
      form_name: formName,
      num_units: formData.num_units || 0,
      country: formData.country || 'unknown',
      company_provided: formData.company ? 'yes' : 'no'
    });
  },

  // === EVENTOS DE CONTENIDO ===
  
  // Visualización de secciones importantes
  viewSection: (sectionName) => {
    sendGAEvent('view_item', {
      category: 'content_engagement',
      label: sectionName,
      item_name: sectionName,
      content_type: 'section'
    });
  },

  // Interacción con testimonios
  viewTestimonials: () => {
    sendGAEvent('view_item', {
      category: 'social_proof',
      label: 'testimonials_section',
      content_type: 'testimonials'
    });
  },

  // Calculadora de ahorros
  useSavingsCalculator: (calculatedSavings) => {
    sendGAEvent('calculator_use', {
      category: 'tool_interaction',
      label: 'savings_calculator',
      value: calculatedSavings || 0,
      tool_name: 'savings_calculator'
    });
  },

  // === EVENTOS DE PERSONALIZACIÓN ===
  
  // Cambio de idioma
  changeLanguage: (fromLang, toLang) => {
    sendGAEvent('language_change', {
      category: 'personalization',
      label: `${fromLang}_to_${toLang}`,
      from_language: fromLang,
      to_language: toLang
    });
  },

  // === EVENTOS DE NAVEGACIÓN EXTERNA ===
  
  // Links externos
  clickExternalLink: (url, linkText) => {
    sendGAEvent('click', {
      category: 'external_link',
      label: url,
      link_url: url,
      link_text: linkText
    });
  },

  // Redes sociales
  clickSocialMedia: (platform, action = 'click') => {
    sendGAEvent('social_interaction', {
      category: 'social_media',
      label: platform,
      social_network: platform,
      social_action: action
    });
  },

  // === EVENTOS DE CONVERSIÓN ===
  
  // Descarga de recursos (si los hay)
  downloadResource: (resourceName, resourceType) => {
    sendGAEvent('file_download', {
      category: 'resource_download',
      label: resourceName,
      file_name: resourceName,
      file_type: resourceType
    });
  },

  // Visualización de información de contacto
  viewContactInfo: () => {
    sendGAEvent('view_item', {
      category: 'contact_engagement',
      label: 'contact_information',
      content_type: 'contact_info'
    });
  },

  // === EVENTOS DE ERROR ===
  
  // Errores de formulario
  formError: (errorType, formName = 'contact_form') => {
    sendGAEvent('exception', {
      category: 'form_error',
      label: `${formName}_${errorType}`,
      description: errorType,
      fatal: false
    });
  },

  // === EVENTOS DE BÚSQUEDA (si implementas búsqueda) ===
  
  search: (searchTerm, resultsCount = 0) => {
    sendGAEvent('search', {
      category: 'site_search',
      label: searchTerm,
      search_term: searchTerm,
      results_count: resultsCount
    });
  },

  // === EVENTOS DE VIDEO (si tienes videos) ===
  
  videoPlay: (videoName, videoUrl) => {
    sendGAEvent('video_play', {
      category: 'video_engagement',
      label: videoName,
      video_title: videoName,
      video_url: videoUrl
    });
  },

  videoPause: (videoName, progress) => {
    sendGAEvent('video_pause', {
      category: 'video_engagement',
      label: videoName,
      video_title: videoName,
      video_progress: progress
    });
  },

  videoComplete: (videoName) => {
    sendGAEvent('video_complete', {
      category: 'video_engagement',
      label: videoName,
      video_title: videoName
    });
  }
};

export default { initGA, sendGAEvent, sendPageView, gaEvents };