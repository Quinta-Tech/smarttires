
import { useState , useContext} from "react"
import { ArrowRight, BarChart3, RefreshCw, DollarSign, Clock } from "lucide-react"
import software_desktop from "../assets/desktop_software.png"
import ButtonGetInTouch from "./ButtonGetInTouch"
import { LanguageContext } from "./LanguageContext";
import { motion } from "framer-motion";
export default function DashboardFeatureSection() {
  const [activeTab, setActiveTab] = useState("overview")
    const { language } = useContext(LanguageContext);
    const content = {
      es: {
        title: "Inteligencia Artificial para la Gestión de Neumáticos",
        description:
          "Transformamos datos complejos en decisiones estratégicas para optimizar el rendimiento de tu flota.",
          subtitle: (
            <>
              Nuestra <span className="text-primary-L400">IA</span> convierte todos esos <span className="text-primary-L400">datos en decisiones</span>
            </>
          ),
        details: [
          "Lo que antes requería revisión manual, hoy se ve en segundos.",
          "Lo que antes era adivinanza, hoy es estrategia.",
        ],
        cta: "Conocer más",
      },
      en: {
        title: "Artificial Intelligence for Tire Management",
        description:
          "We transform complex data into strategic decisions to optimize your fleet's performance.",
          subtitle: (
            <>
              Our <span className="text-primary-L400">AI</span> turns all that <span className="text-primary-L400">data into decisions</span>
            </>
          ),
        details: [
          "What used to require manual inspection, now takes seconds.",
          "What used to be guesswork, is now strategy.",
        ],
        cta: "Learn more",
      },
    };
  return (
    <section className="w-full py-12 md:py-16 px-6 md:px-28 bg-white relative">
    <div className="container mx-auto">
      {/* Título y descripción */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="font-bold text-3xl  sm:text-4xl md:text-5xl text-custom-black mb-4">
          {content[language].title}
        </h2>
        <p className="mx-auto max-w-[700px]  text-base md:text-lg/relaxed lg:text-xl font-normal font-normal text-balance text-gray-600">
          {content[language].description}
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2 items-center">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative mx-auto max-w-[500px]">
            <div className="absolute -left-8 -top-8 z-0"></div>
            <div className="overflow-hidden">
              <img
                src={software_desktop}
                alt={
                  language === "es"
                    ? "Imagen del software"
                    : "Software image"
                }
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-0 transform rotate-180"></div>
          </div>
        </motion.div>

        {/* Contenido */}
        <motion.div
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 order-1 lg:order-2"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl  text-balance leading-relaxed font-bold tracking-tighter sm:text-3xl text-custom-black">
            {content[language].subtitle}
          </h3>

          <p className="text-base md:text-lg/relaxed lg:text-xl font-normal font-normal text-gray-700">
            {language === "es"
              ? "Detecta desgastes irregulares, recomienda rotaciones, y calcula el costo real de cada llanta por unidad."
              : "Detects irregular wear, recommends rotations, and calculates the real cost of each tire per unit."}
          </p>

          <div className="space-y-4 border-l-2 border-blue-100 pl-4">
            {content[language].details.map((detail, index) => (
              <div key={index}
                className="flex items-center gap-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  {index === 0 ? (
                    <Clock className="h-4 w-4 text-primary-B" />
                  ) : (
                    <BarChart3 className="h-4 w-4 text-primary-B" />
                  )}
                </div>
                <p className=" text-gray-700 text-sm md:text-base/relaxed lg:text-lg font-normal ">{detail}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-4"
          >
            <ButtonGetInTouch language={language} theme="dark">
              {content[language].cta}
            </ButtonGetInTouch>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}
