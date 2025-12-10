



import { useState, useContext } from "react";
import { Cpu, BarChart3, Globe, Gauge} from "lucide-react";
import { LanguageContext } from "./LanguageContext";
import { motion } from "framer-motion";
export default function ProductExplanation() {
	const [step, setStep] = useState(0);
    const { language } = useContext(LanguageContext);
    const content = {
        es: {
            title: "¿Cómo funciona?",
            description: "Nuestro sistema de monitoreo de llantas y GPS le brinda control total sobre su flota",
            steps: {
                0: {
                    description: <>Se coloca la <span className="font-semibold text-primary"> llanta inteligente </span> y se asocia a nuestro GPS </>
                },
                1: {
                    description: <>El sistema <span className="font-semibold text-primary">recopila datos en tiempo real</span> de las llantas y la ubicación del vehículo.</>
                },
                2: {
                    description: <>La información se <span className="font-semibold text-primary">transmite a nuestra plataforma web</span> para su análisis.</>
                },
                3: {
                    description: <>Usted obtiene <span className="font-semibold text-primary">automatización total</span> y monitoreo constante de su flota.</>
                }
            },
            automation: {
                title: "Automatización Total",
                description: "Nuestro sistema le permite monitorear su flota en tiempo real, optimizar costos y prevenir problemas antes de que ocurran."
            }
        },
        en: {
            title: "How does it work?",
            description: "Our tire and GPS monitoring system gives you total control over your fleet",
            steps: {
                0: {
                    description: <>A <span className="font-semibold text-primary">sensor is placed on each tire</span> and a <span className="font-semibold text-primary">GPS device</span> is installed for each unit, which centralizes the information.</>
                },
                1: {
                    description: <>The system <span className="font-semibold text-primary">collects real-time data</span> from tires and vehicle location.</>
                },
                2: {
                    description: <>Information is <span className="font-semibold text-primary">transmitted to our web platform</span> for analysis.</>
                },
                3: {
                    description: <>You get <span className="font-semibold text-primary">total automation</span> and constant fleet monitoring.</>
                }
            },
            automation: {
                title: "Total Automation",
                description: "Our system allows you to monitor your fleet in real-time, optimize costs and prevent problems before they occur."
            }
        }
    };
    const steps = [
        {
          icon: <Cpu className="h-6 w-6" />
        },
        {
          icon: <BarChart3 className="h-6 w-6" />
        },
        {
          icon: <Globe className="h-6 w-6" />
        },
        {
          icon: <Gauge className="h-6 w-6" />
        },
      ]
  return (
    <>  
      <section className="w-full  bg-white relative">
        <div className="bg-gradient-to-b from-white to-custom-gray-1  py-12 py-12 md:py-16 px-6 md:px-28">

        <div className="container mx-auto ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div className="space-y-2"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="inline-block rounded-lg bg-[rgba(34,51,176,0.1)] px-3 py-1 text.sm md:text1120-0base text-[rgb(34,51,176)] mb-8 uppercase font-semibold">
                {language === "es" ? "Proceso simple" : "Simple process"}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl  text-balance leading-relaxed font-bold  text-custom-black ">
                {content[language].title}
              </h2>
              <p className="max-w-[900px] text-gray-600 text-base md:text-lg/relaxed lg:text-xl  font-normal">
                {content[language].description}
              </p>
            </motion.div>
          </div>
          {/* Steps for larger screens */}
          <div className="hidden md:grid grid-cols-4 gap-8 mt-16">
            {steps.map((step, index) => (
              <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
               key={index} className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(34,51,176)] text-white mb-4">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-0.5 bg-gray-200">
                    <div className="w-full h-full"></div>
                  </div>
                )}
                <p className="text-gray-700 text-sm md:text-base/relaxed lg:text-lg font-normal">
                  {
                    content[language].steps[index].description
                  }
                </p>
              </motion.div>
            ))}
          </div>

          {/* Steps for mobile */}
          <div className="md:hidden space-y-8 mt-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgb(34,51,176)] text-white mr-4">
                  {step.icon}
                </div>
                <div>
                  <p className="text-gray-700 text-sm md:text-base/relaxed lg:text-lg font-normal">
                  {
                    content[language].steps[index].description
                  }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
