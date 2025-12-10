import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ISOTIPO-AZUL-PQ.svg";
import { LanguageContext } from './LanguageContext';
export default function Footer() {
    const { language } = useContext(LanguageContext);
    const content = {
        es: {
            address: 'Dirección',
            contact: 'Contacto',
            socials: 'Redes sociales',
            navigate: 'Navegación',
            home: 'Inicio',
            contactUs: 'Contacto',
            privacyPolicy: 'Políticas de Privacidad'
        },
        en: {
            address: 'Address',
            contact: 'Contact',
            socials: 'Socials',
            navigate: 'Navigate',
            home: 'Home',
            contactUs: 'Contact',
            privacyPolicy: 'Privacy Policy'
        }
    }
    return (
        <footer className=" text-white  bg-custom-neutro relative  w-screen p-12">
            <div className="flex-none md:flex justify-between">
                <div className="grid grid-cols-1 content-start content-between text-custom-black mb-12 md:mb-0">
                    <img src={logo} alt="logo"  
                     
                    className="w-32 mb-4"
                    />
                    <p> QUINTA TECH LLC 2025</p>
                </div>
                <div className="text-custom-black grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-16">
                    <div className="">
                        <h3 className="font-bold">{content[language].address}</h3>
                        <p className="uppercase">Prol. Bernardo Quintana 562, <br />
                            Arboledas, 76140 Santiago de <br />
                            Querétaro, Qro.</p>
                    </div>
                    <div>
                        <h3 className="font-bold">{content[language].socials}</h3>
                        <ul>
                            <li><a className="uppercase font-normal" target="_blank" href="https://www.facebook.com/people/Quinta-App/100087969499753/">Facebook</a></li>
                            <li><a className="uppercase font-normal" target="_blank" href="https://www.instagram.com/quintatech/">Instagram</a></li>
                            <li><a className="uppercase font-normal" target="_blank" href="https://www.linkedin.com/company/quinta-tech/">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">{content[language].navigate}</h3>
                        <ul>
                            <li><Link className="uppercase font-normal hover:underline" to="/">{content[language].home}</Link></li>
                            <li><Link className="uppercase font-normal hover:underline" to="/contact">{content[language].contactUs}</Link></li>
                            <li><a className="uppercase font-normal hover:underline" href="/privacy-policy.html">{content[language].privacyPolicy}</a></li>
                        </ul>
                    </div>
                    <div className="grid">
                        <h3 className="font-bold">{content[language].contact}</h3>
                        <p className="uppercase"> +52 442 445 03 24</p>
                        <p className="uppercase">ventas@quinta.tech</p>
                    </div>
                </div>

            </div>
        </footer>

    )

}