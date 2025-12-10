import { useEffect, useRef } from 'react';
import { fbPixelEvents } from '../utils/fbPixel';

export const usePageTracking = (pageName) => {
  const startTimeRef = useRef(Date.now());
  const scrollTrackedRef = useRef({ 50: false, 75: false });
  const timeTrackedRef = useRef({ 30: false, 60: false });

  useEffect(() => {
    // Track page view
    fbPixelEvents.viewContent(pageName);
    
    // Reset tracking refs
    startTimeRef.current = Date.now();
    scrollTrackedRef.current = { 50: false, 75: false };
    timeTrackedRef.current = { 30: false, 60: false };

    // Scroll tracking
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= 50 && !scrollTrackedRef.current[50]) {
        scrollTrackedRef.current[50] = true;
        fbPixelEvents.scrollEngagement(50);
      }
      
      if (scrollPercentage >= 75 && !scrollTrackedRef.current[75]) {
        scrollTrackedRef.current[75] = true;
        fbPixelEvents.scrollEngagement(75);
      }
    };

    // Time tracking
    const timeTrackingInterval = setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - startTimeRef.current) / 1000);
      
      if (timeOnPage >= 30 && !timeTrackedRef.current[30]) {
        timeTrackedRef.current[30] = true;
        fbPixelEvents.timeOnPage(30);
      }
      
      if (timeOnPage >= 60 && !timeTrackedRef.current[60]) {
        timeTrackedRef.current[60] = true;
        fbPixelEvents.timeOnPage(60);
      }
    }, 5000); // Check every 5 seconds

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeTrackingInterval);
    };
  }, [pageName]);
};