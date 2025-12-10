import {useContext} from "react";
import { LanguageContext } from './LanguageContext';
import IENTC_logo from "../assets/ientc.png";
import INTRA_logo from "../assets/intra_logo.png";
import tresguerras_logo from "../assets/tresguerras.png";
import alanis from "../assets/alanis.png";
import almu from "../assets/almu.png";
import double_coin from "../assets/double-coin.png";
import EBT from "../assets/EBT.png";

import salci from "../assets/salci.png";
import transmontes from "../assets/transmontes.png";
import traxion from "../assets/traxion.png";
import tsm from "../assets/tsm.png";
import urlin from "../assets/urlin.png";
import { motion } from "framer-motion";
import "./../styles/BannerClients.css"
export default function BannerClients(){
  const { language } = useContext(LanguageContext);
  const content = {
    es: {
        title: 'Elegido por quienes quieren operar mejor.',  
    },
    en: {
      title: 'Trusted by fleets committed to operational excellence',
    }
  }
    const banners = [
        { src: IENTC_logo, alt: "IENTC", className: "h-16 w-auto " },
        { src: INTRA_logo, alt: "INTRA", className: "h-12 w-auto " },
        { src: tresguerras_logo, alt: "TRESGUERRAS", className: "h-11 w-auto " },
        { src: alanis, alt: "ALANIS", className: "h-16 w-auto " },
        { src: almu, alt: "ALMU", className: "h-16 w-auto " },
        { src: double_coin, alt: "DOUBLE COIN", className: "h-16 w-auto " },
        { src: EBT, alt: "EBT", className: "h-16 w-auto " },
        
        { src: salci, alt: "SALCI", className: "h-16 w-auto " },
        { src: transmontes, alt: "TRANSMONTES", className: "h-16 w-auto " },
        { src: traxion, alt: "TRAXION", className: "h-16 w-auto " },
        { src: tsm, alt: "TSM", className: "h-16 w-auto " },
        { src: urlin, alt: "URLIN", className: "h-16 w-auto " },

      ];
    
    return (
        <section className="bg-white py-12 px-6 relative  w-screen">
          <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-black text-normal md:text-3xl font-bold text-center"
      >
        {content[language].title}
      </motion.h2>
      <div className="brandsCarousel mt-16">
        <div className="carouselTrack">
          {/* Original logos */}
          {banners.map((banner, index) => (
            <div key={`original-${index}`} className="brandLogo">
              <img 
                src={banner.src} 
                alt={banner.alt}
                className={banner.className}
              />
            </div>
          ))}
          {/* Cloned logos for seamless loop */}
          {banners.map((banner, index) => (
            <div key={`clone-${index}`} className="brandLogo">
              <img 
                src={banner.src} 
                alt={banner.alt}
                className={banner.className}
              />
            </div>
          ))}
        </div>
      </div>
      </section>
        
    )
}