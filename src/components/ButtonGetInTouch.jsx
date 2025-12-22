import React,{useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import { fbPixelEvents } from '../utils/fbPixel';
import { gaEvents } from '../utils/googleAnalytics';

export default function ButtonGetInTouch({theme, children}) {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();
    const content = {
        es: {
            contact: 'Contáctanos',     
        },
        en: {
            contact: 'Get in touch',
        }
      }
      
    const handleClick = () => {
        // Track click en CTA - Facebook Pixel
        fbPixelEvents.clickCTA('Get in Touch Button');
        
        // Track click en CTA - Google Analytics
        gaEvents.clickGetInTouch(window.location.pathname);
        
        // Scroll suave a la sección de contacto
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
    {theme  === 'light' && ( <button target='_blank' aria-label="Get in touch" onClick={handleClick} type="button" className="px-6 py-3 border-2 border-white rounded-full font-medium font-['Uncut Sans'] uppercase  tracking-wide text-md md:text-xl   text-white  mx-auto text-center hover:bg-white  hover:text-black transition duration-300 ease-in-out " >
        <div className="flex items-center">

        <p className="mr-2 font-medium font-['Uncut Sans'] uppercase  tracking-wide" > {children ? children : content[language].contact} </p>   
     
        </div>

        </button>)}
    {theme  === 'dark' && (  <button target='_blank'  aria-label="Get in touch" onClick={handleClick} type="button" className="text-white bg-custom-primary-L400 hover:bg-custom-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full px-auto px-6 py-3 text-center  flex items-center justify-center  text-md md:text-xl transition duration-300 ease-in-out" >
        <div className="flex items-center">
        <p className="mr-2 font-medium font-['Uncut Sans'] uppercase  tracking-wide" > {children ? children : content[language].contact} </p>
     
        </div>      
        </button>)}
        </>
       
    )
}