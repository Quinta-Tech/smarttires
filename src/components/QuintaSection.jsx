import { TruckIcon, ShieldCheckIcon, ClockIcon, BanknoteIcon as BanknotesIcon } from "lucide-react"
import React, { useContext } from "react";
import { motion } from "framer-motion";
import logo_blanco from "./../assets/logo_blanco.png"
import { LanguageContext } from "./LanguageContext";
function ButtonMarkteplace(){
    const { language } = useContext(LanguageContext);
    return(
        <a href="https://www.quinta.tires/" target="_blank"  className="px-6 py-3 border-2 border-white rounded-full font-medium font-['Uncut Sans'] uppercase  tracking-wide text-md md:text-xl  hover:text-white text-white  mx-auto">
        {content[language]}
        </a>
    )
}

import ButtonGetInTouch from "./ButtonGetInTouch"
export default function SeccionQuinta() {

    const { language } = useContext(LanguageContext);
    const content = {
        es: {
          main_title: (
            <>
              Sabemos lo que se siente cuando <span className="text-primary-L400">una unidad se detiene</span> por una llanta.
            </>
          ),
            cards: {
                time: {
                    title: "Horas perdidas.",
                    description: "El tiempo es crucial en el transporte. Cada minuto detenido representa pérdidas significativas."
                },
                money: {
                    title: "Miles de pesos.",
                    description: "Las pérdidas económicas por paradas no programadas impactan directamente en tu negocio."
                },
                risks: {
                    title: "Riesgos que nadie quiere vivir.",
                    description: "La seguridad de tu equipo y carga está en juego cuando ocurren problemas con las llantas en la carretera."
                }
            },
            cta: {
                title: "En Quinta, transformamos esa impotencia en control.",
                subtitle1: "No es solo tecnología.",
                subtitle2: "Es paz.",
                subtitle3: "Es cuidar a quienes mueven al país."
            }
        },
        en: {
            main_title: (
                <>
                We know what it feels like when a <span className="text-primary-L400">vehicle stops</span> because of a tire.
                </>
            ),
            cards: {
                time: {
                    title: "Lost Hours.",
                    description: "Time is crucial in transportation. Every minute stopped represents significant losses."
                },
                money: {
                    title: "Thousands of dollars.",
                    description: "Economic losses from unscheduled stops directly impact your business."
                },
                risks: {
                    title: "Risks nobody wants to experience.",
                    description: "Your team's safety and cargo are at stake when tire problems occur on the road."
                }
            },
            cta: {
                title: "At Quinta, we transform that powerlessness into control.",
                subtitle1: "It's not just technology.",
                subtitle2: "It's peace of mind.",
                subtitle3: "It's taking care of those who move the country."
            }
        }
    };

  return (
    <section className="relative bg-white justify-center">
      <div className="bg-gradient-to-b from-custom-gray-1 to-white relative py-12 md:py-16 px-6 md:px-28">
      <div className="container mx-auto">
        {/* Animación del título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold text-3xl md:text-4xl lg:text-5xl t text-balance leading-relaxed mx-auto text-center text-custom-black mb-12 relative inline-block"
        >
          {content[language].main_title}
        </motion.h2>

        {/* Animación de las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {Object.keys(content[language].cards).map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {key === "time" && <ClockIcon className="h-8 w-8 text-primary-B mr-3" />}
                {key === "money" && <BanknotesIcon className="h-8 w-8 text-[rgb(34,51,176)] mr-3" />}
                {key === "risks" && <ShieldCheckIcon className="h-8 w-8 text-[rgb(34,51,176)] mr-3" />}
                <p className="text-base md:text-lg/relaxed lg:text-xl font-normal font-normal font-semibold text-gray-700">
                  {content[language].cards[key].title}
                </p>
              </div>
              <p className="text-gray-700 text-base md:text-lg/relaxed lg:xl font-normal">{content[language].cards[key].description}</p>
            </motion.div>
          ))}
        </div>

        {/* Animación de la sección de llamada a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="call2action relative"
        >
          <div className="bg-primary-B px-6 md:px-16 py-12 md:py-16 rounded-3xl">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <img src={logo_blanco} alt="logo" className="" />
            </div>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl  text-balance leading-relaxed text-white text-center font-medium"
            >
              {content[language].cta.title}
            </h3>
            <p
              className="text-white-B mt-4 text-center text-medium text-base md:text-lg/relaxed lg:text-xl font-normal font-normal"
            >
              {content[language].cta.subtitle1}
            </p>
            <p
              className="text-white-B text-center text-medium text-base md:text-lg/relaxed lg:text-xl font-normal font-normal "
            >
              {content[language].cta.subtitle2}
            </p>
            <p
              className="text-white-B text-center text-medium text-base md:text-lg/relaxed lg:text-xl font-normal font-normal "
            >
              {content[language].cta.subtitle3}
            </p>
            <div
              className="flex items-center justify-center mt-12"
            >
              <div className="flex gap-4 flex-col md:flex-row">
                <ButtonGetInTouch language={language} theme="light" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
     
    </section>
  )
}
