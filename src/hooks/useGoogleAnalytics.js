import { useEffect, useRef, useCallback } from 'react';
import { gaEvents } from '../utils/googleAnalytics';

export const useGoogleAnalytics = (pageName) => {
  const startTimeRef = useRef(Date.now());
  const scrollTrackedRef = useRef({ 25: false, 50: false, 75: false, 90: false });
  const timeTrackedRef = useRef({ 30: false, 60: false, 120: false, 300: false });
  const sectionsViewedRef = useRef(new Set());

  useEffect(() => {
    // Track page view
    gaEvents.pageView(pageName, window.location.pathname);
    
    // Reset tracking refs
    startTimeRef.current = Date.now();
    scrollTrackedRef.current = { 25: false, 50: false, 75: false, 90: false };
    timeTrackedRef.current = { 30: false, 60: false, 120: false, 300: false };
    sectionsViewedRef.current = new Set();

    // Scroll tracking mejorado
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      // Track diferentes niveles de scroll
      [25, 50, 75, 90].forEach(threshold => {
        if (scrollPercentage >= threshold && !scrollTrackedRef.current[threshold]) {
          scrollTrackedRef.current[threshold] = true;
          gaEvents.scrollDepth(threshold);
        }
      });
    };

    // Time tracking mejorado
    const timeTrackingInterval = setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - startTimeRef.current) / 1000);
      
      [30, 60, 120, 300].forEach(threshold => {
        if (timeOnPage >= threshold && !timeTrackedRef.current[threshold]) {
          timeTrackedRef.current[threshold] = true;
          gaEvents.timeOnPage(threshold, pageName);
        }
      });
    }, 5000); // Check every 5 seconds

    // Intersection Observer para secciones
    const observerOptions = {
      threshold: 0.5, // 50% visible
      rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section') || 
                             entry.target.id || 
                             entry.target.className.split(' ')[0];
          
          if (sectionName && !sectionsViewedRef.current.has(sectionName)) {
            sectionsViewedRef.current.add(sectionName);
            gaEvents.viewSection(sectionName);
          }
        }
      });
    }, observerOptions);

    // Observar secciones existentes
    const sections = document.querySelectorAll('[data-section], section, .section');
    sections.forEach(section => sectionObserver.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeTrackingInterval);
      sectionObserver.disconnect();
    };
  }, [pageName]);

  // Función para trackear secciones manualmente
  const trackSection = useCallback((sectionName) => {
    if (!sectionsViewedRef.current.has(sectionName)) {
      sectionsViewedRef.current.add(sectionName);
      gaEvents.viewSection(sectionName);
    }
  }, []);

  return { trackSection };
};

// Hook específico para formularios
export const useFormTracking = (formName) => {
  const formStartedRef = useRef(false);
  const currentStepRef = useRef(0);

  const trackFormStart = useCallback(() => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      gaEvents.formStart(formName);
    }
  }, [formName]);

  const trackFormProgress = useCallback((step) => {
    if (step > currentStepRef.current) {
      currentStepRef.current = step;
      gaEvents.formProgress(step, formName);
    }
  }, [formName]);

  const trackFormComplete = useCallback((formData = {}) => {
    gaEvents.formComplete(formName, formData);
  }, [formName]);

  const trackFormError = useCallback((errorType) => {
    gaEvents.formError(errorType, formName);
  }, [formName]);

  return {
    trackFormStart,
    trackFormProgress,
    trackFormComplete,
    trackFormError
  };
};

// Hook para tracking de videos
export const useVideoTracking = () => {
  const trackVideoPlay = useCallback((videoName, videoUrl) => {
    gaEvents.videoPlay(videoName, videoUrl);
  }, []);

  const trackVideoPause = useCallback((videoName, progress) => {
    gaEvents.videoPause(videoName, progress);
  }, []);

  const trackVideoComplete = useCallback((videoName) => {
    gaEvents.videoComplete(videoName);
  }, []);

  return {
    trackVideoPlay,
    trackVideoPause,
    trackVideoComplete
  };
};