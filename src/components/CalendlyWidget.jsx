import React, { useEffect,useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { fbPixelEvents } from '../utils/fbPixel';
import { gaEvents } from '../utils/googleAnalytics';

const CalendlyWidget = ({theme}) => {
  const { language } = useContext(LanguageContext);
  const content = {
    es: 'Solicita una demo',  
    en:  '  Request a demo',    
  }
  useEffect(() => {
    // Añadir el CSS de Calendly
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Añadir el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    
    // Track click en Calendly - Facebook Pixel
    fbPixelEvents.clickCTA('Calendly Demo Request');
    
    // Track click en Calendly - Google Analytics
    gaEvents.clickCalendly(window.location.pathname);
    
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/fabian-quinta' });
    } else {
      console.error('Calendly script not loaded yet.');
    }
    return false;
  };

  return (
    <>
    {theme === 'light' && (
       <a href="" className="px-6 py-3 border-2 border-white rounded-full font-medium font-['Uncut Sans'] uppercase  tracking-wide text-md md:text-xl  hover:text-white text-white  mx-auto text-center hover:bg-white  hover:text-black transition duration-300 ease-in-out  "
       onClick={handleClick}>
          <i className="fa-regular fa-calendar mr-2"></i>
          {content[language]}
        </a>
    )}
    {theme === 'dark' && (
      <a href="" className="px-6 py-3 rounded-full font-medium font-['Uncut Sans'] uppercase  tracking-wide text-md md:text-xl bg-white hover:text-white text-custom-primary  mx-auto text-center transition duration-300 ease-in-out "
      onClick={handleClick}>
        <i className="fa-regular fa-calendar mr-2"></i>
        {content[language]}   
      </a>
    )}
    </>
  );
};

export default CalendlyWidget;