
import { AlertTriangle, MapPin, Thermometer, Gauge,Weight } from "lucide-react"
import tire_problem_1 from "../assets/tire_problem_1.jpg";
import tire_problem_2 from "../assets/tire_problem_2.jpg";
import tire_problem_3 from "../assets/tire_problem_3.jpg";
import tire_problem_5 from "../assets/tire_problem_5.png";
import camion_moviemiento from "../assets/camion_movimiento.png";
import ButtonGetInTouch from "./ButtonGetInTouch";
import { LanguageContext } from './LanguageContext';
import React,{useContext} from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo-full.svg";


const text_button = {
    es: {
        contact: 'Solicita una demo',     
    },
    en: {
        contact: 'Request a demo',
    }
  }
import { useState } from "react"
export default function BeforeAfterSection() {
      const { language } = useContext(LanguageContext);
    const images = [
        {
          src: "/placeholder.svg?height=800&width=600",
          alt: "Imagen 1",
          title: "Tecnología Avanzada",
        },
        {
          src: "/placeholder.svg?height=800&width=600",
          alt: "Imagen 2",
          title: "Monitoreo Continuo",
        },
        {
          src: "/placeholder.svg?height=800&width=600",
          alt: "Imagen 3",
          title: "Datos en Tiempo Real",
        },
        {
          src: "/placeholder.svg?height=800&width=600",
          alt: "Imagen 4",
          title: "Prevención Inteligente",
        },
      ]
      const content = {
        es: {
          before_title: "Antes de Quinta",
          before_subtitle: "Sin visibilidad, todo es",
          before_reaction: "reacción",
          before_points: [
            "Fallas inesperadas en carretera",
            "Tiempo y dinero perdidos en reparaciones",
            "Operadores en situaciones de riesgo",
            "Incertidumbre constante",
          ],
          after_title: "Con ",
          after_subtitle: "Con Quinta, todo es",
          after_prevention: "prevención",
          after_points: [
            "Monitoreo en tiempo real de tus llantas",
            "Alertas preventivas antes de fallas",
            "Mayor seguridad para operadores",
            "Control total de tu flota",
          ],
          footer_title: "Hoy tenemos control total.",
          footer_subtitle: "Ahora las llantas hablan.",
          footer_description:
            "Desde que usamos Quinta ya no es suerte, es sistema.",
        },
        en: {
          before_title: "Before Quinta",
          before_subtitle: "Without visibility, everything is",
          before_reaction: "reaction",
          before_points: [
            "Unexpected failures on the road",
            "Time and money lost on repairs",
            "Drivers in risky situations",
            "Constant uncertainty",
          ],
          after_title: "With Quinta",
          after_subtitle: "With Quinta, everything is",
          after_prevention: "prevention",
          after_points: [
            "Real-time monitoring of your tires",
            "Preventive alerts before failures",
            "Greater safety for drivers",
            "Total control of your fleet",
          ],
          footer_title: "Now we’re in full control",
          footer_subtitle: "the tires speak for themselves.",
          footer_description:
            "With Quinta, it’s not luck anymore. It’s a system that works.",
        },
      };
      const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <section className=" bg-white relative justify-center">
      <div className="w-full py-12 md:py-16 px-6 md:px-28 bg-gradient-to-b from-white to-custom-gray-1  ">
      <div className="container   mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* ANTES */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-100 rounded-xl p-8 relative overflow-hidden border border-gray-300 m-3 opacity-75 border-2 "
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-500 mb-8">
              {content[language].before_title}
            </h3>

            <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
              {/* Aquí van las imágenes */}
              <div className="absolute inset-0  z-10"></div>
              <div className="grid grid-cols-12 grid-rows-2 gap-4 w-full h-full opacity-70 ">
                {/* Imagen Grande */}
                <div
                className="col-span-12 md:col-span-8 md:row-span-2 relative overflow-hidden bg-black/50 object-cover rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_80px_-10px_rgba(34,51,176,0.5)]"
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
                >
                <img src={tire_problem_5} alt="yard" className="w-full h-full  object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-500">
                  {/*   <h3 className="text-white text-lg md:text-xl font-bold mb-2">{images[0].title}</h3> */}
                 {/*    <div
                    className={`w-16 h-1 bg-primary-L400 transition-all duration-500 ${hoveredIndex === 0 ? "w-32" : "w-16"}`}
                    ></div> */}
                </div>
                </div>

                {/* Imagen Superior Derecha */}
                <div
                className="col-span-6 md:col-span-4 relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_10px_40px_-5px_rgba(34,51,176,0.4)]"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
                >
                <img src={tire_problem_2} alt="yard" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-transform duration-500">
                 {/*    <h3 className="text-white text-md md:text-base font-bold mb-2">{images[1].title}</h3> */}
                  {/*   <div
                    className={`w-12 h-1 bg-primary-L400 transition-all duration-500 ${hoveredIndex === 1 ? "w-24" : "w-12"}`}
                    ></div> */}
                </div>
                </div>

                {/* Imágenes Inferiores Derecha */}
                <div
                className="col-span-6 md:col-span-4 relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_10px_40px_-5px_rgba(34,51,176,0.4)]"
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
                >
                <img src={tire_problem_3} alt="yard" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform transition-transform duration-500">
                   {/*  <h3 className="text-white text-xs md:text-base font-bold mb-1">{images[2].title}</h3> */}
                  {/*   <div
                    className={`w-8 h-1 bg-primary-L400 transition-all duration-500 ${hoveredIndex === 2 ? "w-16" : "w-8"}`}
                    ></div> */}
                </div>
                </div>

              
              </div> 
            </div>

            <h4 className="text-lg md:text-xl/relaxed lg:text-2xl  tracking-tighter text-balance leading-relaxed font-bold text-gray-500 mb-4">
              {content[language].before_subtitle}{" "}
              <span className="bg-danger-L400 px-2 py-1 text-white">
                {content[language].before_reaction}
              </span>
            </h4>

            <ul className="space-y-4 text-gray-500">
              {content[language].before_points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-danger-L400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-500 text-base md:text-lg/relaxed lg:xl font-normal">{point}</span>
                </li>
              ))}
            </ul>
            </motion.div>

          {/* DESPUÉS */}
       
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-primary-L200 rounded-xl p-8 relative overflow-hidden border border-primary-L400 border-2 transform scale-110 "
          >
            <div className="flex items-center   space-x-4 mb-3"> 
            <h3 className="text-lg md:text-xl/relaxed lg:text-2xl  font-bold text-black  ">
              {content[language].after_title}
            </h3>
            <img src={logo} alt="quinta" className=" 
            
            w-26 md:w-40
            "/>
            </div>
           

            <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
              {/* Aquí van las imágenes */}
               <img src={camion_moviemiento} alt="yard" className="w-full h-full object-cover" />

              {/* Data Overlays */}
              <div className="absolute top-1/4 right-1/3 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center text-white border border-white/20">
                <Thermometer className="w-4 h-4 mr-2 text-primary-L400" />
                <span className="text-xs md:text-sm font-medium">  {language == "es" ? "Temperatura" : "Temperature"  } </span>
              </div>

              <div className="absolute top-2/4 left-2/3  bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center text-white border border-white/20">
                <AlertTriangle className="w-4 h-4 mr-2 text-primary-L400" />
                <span className="text-xs md:text-sm font-medium"> 
                  {language == "es" ? "Presion" : "Pressure"  }
                </span>
              </div>

              <div className="absolute top-3/4 right-[10%] bg-white/10 backdrop-blur-sm px-3 py-2  rounded-lg flex items-center text-white border border-white/20">
                <MapPin className="w-4 h-4 mr-2 text-primary-L400" />
                <span className="text-xs md:text-sm font-medium">
                {language == "es" ? "Ubicacion" : "Location"  }
                </span>
              </div>

              <div className="absolute top-2/4 right-2/3 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center text-white border border-white/20">
                <Weight className="w-4 h-4 mr-2 text-primary-L400" />
                <span className="text-xs md:text-sm font-medium">
                  {language == "es" ? "Carga" : "Load"  }
                </span>
              </div>

              {/* Tire Indicators */}
            
              <div className="absolute top-3/4 right-1/2 w-8 h-8 rounded-full bg-primary-L400/80 border-2 border-white animate-pulse"></div>
            </div>

            <h4 className="text-lg md:text-xl/relaxed lg:text-2xl font-normaltracking-tighter text-balance leading-relaxed font-bold text-black mb-4">
              {content[language].after_subtitle}{" "}
              <span className="bg-info-L400 px-2 py-1 text-white ">
                {content[language].after_prevention}
              </span>
            </h4>

            <ul className="space-y-4 text-gray-300">
              {content[language].after_points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-info-L400 mr-2 mt-1 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-base md:text-lg/relaxed lg:xl font-normal text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
            </motion.div>
        </div>

        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 text-center">
        <h3
            className="text-2xl md:text-3xl lg:text-4xl tracking-tighter text-balance leading-relaxed font-bold text-custom-black mb-6"
          >
            {content[language].footer_title}
            <br />
            <span
              className="text-primary-L400"
            >
              {content[language].footer_subtitle}
            </span>
          </h3>

          {/* Animación del párrafo */}
          <p
            className="text-base md:text-lg/relaxed lg:text-xl font-normal font-normal  text-gray-600 mb-8"
          >
            {content[language].footer_description}
          </p>

          {/* Animación del botón */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex items-center justify-center mt-8"
          >
            <ButtonGetInTouch
              theme="dark"
              text={text_button[language].contact}
            />
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
