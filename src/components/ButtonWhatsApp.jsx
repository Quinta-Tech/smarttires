import React,{useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';

export default function ButtonWhatsApp({theme}) {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();
    const content = {
        es: {
            contact: 'Mándanos un whatsapp',     
        },
        en: {
            contact: 'Send us a WhatsApp',
        }
      }
    return (
        <a href={"https://api.whatsapp.com/send/?phone=524462654710&text&type=phone_number&app_absent=0"} target='_blank' type="button" className="text-white bg-[#008069] hover:text-white font-medium rounded-full text-md px-6 py-3  flex items-center justify-center font-medium  md:text-xl" 
        style={{ textDecoration: 'none' }}>
        <i className="fab fa-whatsapp mr-2"></i> 
        <p className="mr-2 font-['Uncut Sans'] uppercase text-md md:text-xl text-center  " > {content[language].contact} </p>
        </a>
       
    )
}