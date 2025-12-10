import ReactPixel from 'react-facebook-pixel';

// Configuración del pixel de Meta
const PIXEL_ID =  '1489743785664515';

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: process.env.NODE_ENV === 'development', // enable logs
};

export const initFacebookPixel = () => {
  ReactPixel.init(PIXEL_ID, options);
  ReactPixel.pageView(); // For tracking page view
};

// Eventos personalizados para tu aplicación
export const fbPixelEvents = {
  // Evento cuando alguien visita la página principal
  viewContent: (contentName = 'Home Page') => {
    ReactPixel.track('ViewContent', {
      content_name: contentName,
      content_category: 'page_view'
    });
  },

  // Evento cuando alguien ve la página de contacto
  viewContact: () => {
    ReactPixel.track('ViewContent', {
      content_name: 'Contact Page',
      content_category: 'contact'
    });
  },

  // Evento cuando alguien inicia el formulario de contacto
  initiateContact: () => {
    ReactPixel.track('InitiateCheckout', {
      content_name: 'Contact Form',
      content_category: 'lead_generation'
    });
  },

  // Evento cuando alguien completa el formulario de contacto
  completeContact: (formData = {}) => {
    ReactPixel.track('Lead', {
      content_name: 'Contact Form Completed',
      content_category: 'lead_generation',
      value: 1,
      currency: 'USD',
      ...formData
    });
  },

  // Evento cuando alguien hace clic en un botón de llamada a la acción
  clickCTA: (ctaName) => {
    ReactPixel.track('ClickButton', {
      content_name: ctaName,
      content_category: 'engagement'
    });
  },

  // Evento cuando alguien ve las políticas de privacidad
  viewPrivacyPolicy: () => {
    ReactPixel.track('ViewContent', {
      content_name: 'Privacy Policy',
      content_category: 'legal'
    });
  },

  // Evento cuando alguien cambia el idioma
  changeLanguage: (language) => {
    ReactPixel.track('CustomizeProduct', {
      content_name: 'Language Change',
      content_category: 'personalization',
      custom_parameter_1: language
    });
  },

  // Evento cuando alguien interactúa con testimonios
  viewTestimonials: () => {
    ReactPixel.track('ViewContent', {
      content_name: 'Testimonials',
      content_category: 'social_proof'
    });
  },

  // Evento cuando alguien hace scroll significativo (engagement)
  scrollEngagement: (percentage) => {
    if (percentage >= 50) {
      ReactPixel.track('ViewContent', {
        content_name: 'Page Scroll 50%',
        content_category: 'engagement'
      });
    }
    if (percentage >= 75) {
      ReactPixel.track('ViewContent', {
        content_name: 'Page Scroll 75%',
        content_category: 'engagement'
      });
    }
  },

  // Evento personalizado para tracking de tiempo en página
  timeOnPage: (seconds) => {
    if (seconds >= 30) {
      ReactPixel.track('ViewContent', {
        content_name: 'Time on Page 30s',
        content_category: 'engagement'
      });
    }
    if (seconds >= 60) {
      ReactPixel.track('ViewContent', {
        content_name: 'Time on Page 1min',
        content_category: 'engagement'
      });
    }
  }
};

export default ReactPixel;