"use client"

import { useState,useContext } from "react"
import { Smartphone, Archive, RefreshCw, Trash2, History, Target } from "lucide-react"
import ButtonGetInTouch from "./ButtonGetInTouch"
import { LanguageContext } from "./LanguageContext";
import Mobile from "../assets/Mobile.png"
import { motion } from "framer-motion";

export default function MobileAppSection() {
  const [activeTab, setActiveTab] = useState("registro")
  const { language } = useContext(LanguageContext);
 
  const content = {
    es: {
      title: (
        <>
          También puedes registrar y <span className="text-primary-L400">controlar</span>
        </>
      ),
      subtitle: "Toda tu operación de llantas, simplificada.",
      cta: "Conocer más",
      features: [
        {
          title: "Almacenes de llantas",
          description: "Gestiona el inventario de tus almacenes en tiempo real",
        },
        {
          title: "Llantas renovadas",
          description: "Seguimiento del proceso de renovación y reutilización",
        },
        {
          title: "Pilas de desecho",
          description: "Control de residuos y cumplimiento ambiental",
        },
        {
          title: "Historial completo por llanta",
          description: "Trazabilidad total desde la compra hasta el fin de vida útil",
        },
      ],
    },
    en: {
      title: (
        <>
          You can also register and <span className="text-primary-L400">control</span>
        </>
      ),
      subtitle: "Your entire tire operation, simplified.",
      cta: "Learn more",
      features: [
        {
          title: "Tire warehouses",
          description: "Manage your warehouse inventory in real time",
        },
        {
          title: "Renewed tires",
          description: "Track the renewal and reuse process",
        },
        {
          title: "Waste piles",
          description: "Control waste and ensure environmental compliance",
        },
        {
          title: "Complete history per tire",
          description: "Full traceability from purchase to end of life",
        },
      ],
    },
  };

  return (
    <section className="w-full py-12 md:py-16 px-6 md:px-28 bg-white relative">
    <div className="container mx-auto">
      <div className="flex grid gap-12 lg:grid-cols-2 items-center">
        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 order-1 lg:order-1"
        >
          <h4 className=" font-bold tracking-tighter text-custom-black text-xl md:text-2xl lg:text-3xl  text-balance leading-relaxed">
            {content[language].title}
          </h4>

          <div className="space-y-4">
            {content[language].features.map((feature, index) => (
              <div key={index}
                className="flex items-start gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  {index === 0 && <Archive className="h-5 w-5 text-primary-L400" />}
                  {index === 1 && <RefreshCw className="h-5 w-5 text-primary-L400" />}
                  {index === 2 && <Trash2 className="h-5 w-5 text-primary-L400" />}
                  {index === 3 && <History className="h-5 w-5 text-primary-L400" />}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base/relaxed lg:text-lg font-normal">{feature.title}</h4>
                  <p className="text-gray-700 text-sm md:text-base/relaxed lg:text-lg font-normal">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-base md:text-lg/relaxed lg:text-xl font-normal font-normal  text-gray-600"
          >
            {content[language].subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <ButtonGetInTouch language={language} theme="dark">
              {content[language].cta}
            </ButtonGetInTouch>
          </div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-2 flex justify-center"
        >
          <div className="relative max-w-[300px]">
            <img
              src={Mobile}
              alt={language === "es" ? "Imagen del software" : "Software image"}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
}
