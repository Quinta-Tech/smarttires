import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useContext, useEffect, useState } from "react";
import { LanguageContext } from './LanguageContext';

import unidad_98_movil from "../assets/unidad_98_movil.png";
import unidad_98_web from "../assets/unidad_98_web.png";
import unidad_110_movil from "../assets/unidad_110_movil.png";
import unidad_110_web from "../assets/unidad_110_web.png";
import unidad_415_movil from "../assets/unidad_415_movil.png";
import unidad_415_web from "../assets/unidad_415_web.png";
import unidad_719_movil from "../assets/unidad_719_movil.png";
import unidad_719_web from "../assets/unidad_719_web.png";


import unidad_98_movil_eng from "../assets/unidad_98_movil_eng.png";
import unidad_98_web_eng from "../assets/unidad_98_web_eng.png";
import unidad_110_movil_eng from "../assets/unidad_110_movil_eng.png";
import unidad_110_web_eng from "../assets/unidad_110_web_eng.png";
import unidad_415_movil_eng from "../assets/unidad_415_movil_eng.png";
import unidad_415_web_eng from "../assets/unidad_415_web_eng.png";
import unidad_719_movil_eng from "../assets/unidad_719_movil_eng.png";
import unidad_719_web_eng from "../assets/unidad_719_web_eng.png";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/SystemShowCase.css";
export default function SystemShowcase() {
  const { language } = useContext(LanguageContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambiar a móvil si el ancho es menor o igual a 768px
    };

    handleResize(); // Ejecutar al cargar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    {
      img: isMobile
      ? language === "es"
        ? unidad_415_movil
        : unidad_415_movil_eng
      : language === "es"
      ? unidad_415_web
      : unidad_415_web_eng,
      text: language === "es" ? (
        <>
          Mantén tus llantas con presión correcta para ahorrar hasta{" "}
          <span className="font-bold text-primary-B">10% en combustible</span> y
          alargar hasta{" "}
          <span className="font-bold text-primary-B">35% la vida útil de las llantas</span>.
        </>
      ) : (
        <>
          Keep your tires at the correct pressure to save up to{" "}
          <span className="font-bold text-primary-B">10% on fuel</span> and extend{" "}
          <span className="font-bold text-primary-B">tire life by up to 35%</span>.
        </>
      ),
    },
    {
      img: isMobile
      ? language === "es"
        ? unidad_110_movil
        : unidad_110_movil_eng
      : language === "es"
      ? unidad_110_web
      : unidad_110_web_eng,
      text: language === "es" ? (
        <>
          La temperatura en las llantas nos ayuda a prevenir reventones, a encontrar{" "}
          <span className="font-bold text-primary-B">problemas mecánicos</span> y{" "}
          <span className="font-bold text-primary-B">evita accidentes</span>.
        </>
      ) : (
        <>
          Tire temperature helps us prevent blowouts, detect{" "}
          <span className="font-bold text-primary-B">mechanical issues</span>, and{" "}
          <span className="font-bold text-primary-B">avoid accidents</span>.
        </>
      ),
    },
    {
      img: isMobile
      ? language === "es"
        ? unidad_719_movil
        : unidad_719_movil_eng
      : language === "es"
      ? unidad_719_web
      : unidad_719_web_eng,
      text: language === "es" ? (
        <>
          <span className="font-bold text-primary-B">Olvídate de las revisiones</span>, cambia tus llantas a tiempo con{" "}
          <span className="font-bold text-primary-B">datos reales</span> y evita accidentes.
        </>
      ) : (
        <>
          <span className="font-bold text-primary-B">Forget manual inspections</span>, replace your tires on time with{" "}
          <span className="font-bold text-primary-B">real data</span> and avoid accidents.
        </>
      ),
    },
    {
      img: isMobile
      ? language === "es"
        ? unidad_98_movil
        : unidad_98_movil_eng
      : language === "es"
      ? unidad_98_web
      : unidad_98_web_eng,
      text: language === "es" ? (
        <>
          <span className="font-bold text-primary-B">Evita el robo de llantas</span>: recibe alertas en tiempo real ante
          cualquier desconexión y{" "}
          <span className="font-bold text-primary-B">protege tu inversión</span>.
        </>
      ) : (
        <>
          <span className="font-bold text-primary-B">Prevent tire theft</span>: receive real-time alerts for any
          disconnection and{" "}
          <span className="font-bold text-primary-B">protect your investment</span>.
        </>
      ),
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true ,
    autoplaySpeed: 15000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  



  return (
    <div translate="no" className="relative w-full md:w-[80vw] max-w-sm md:max-w-4xl px-4 md:px-0   mx-auto h-[510px]  slider-container" id="system-showcase" >
    {/* Carrusel */}

 <Slider {...settings}>
          {slides.concat(slides).map((banner, index) => (
              <div
                key={index}
                
              >
                <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-[1fr_3fr] rounded-xl ">
                  <img
                    src={banner.img}
                    alt={`Slide ${index + 1}`}
                    className="w-full  h-full object-cover order-1 md:order-2"
                  />
                  <div className=" bottom-0 left-0 right-0 bg-custom-gray-1 text-custom-black px-8 py-8 text-balance  min-h-[105px] order-2 md:order-1 text-base md:text-lg   font-normal">
                    {banner.text}
                  </div>
                </div>
              </div>
          ))}
        </Slider>
  </div>
);
}