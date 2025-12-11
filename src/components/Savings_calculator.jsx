

import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { DollarSign, TrendingUp, Droplet, Wrench, Shield } from "lucide-react"
import tire_tpms from "../assets/tire_sensor.png"
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { motion } from "framer-motion";

export default function SavingsCalculatorSection() {
  const { language } = useContext(LanguageContext);
  const content = {
    es: {
      title: (
        <>
        Ahorro por camión
        </>
      ),
      description: "Con Quinta, dejas de apagar fuegos y empiezas a ahorrar desde el primer kilómetro.",
      savings_title: "1 mes- 10k kilómetros",
      total_savings: "Ahorro Total:",
      metrics: [
        {
          icon: TrendingUp,
          title: "En consumo de llantas",
          subtitle: "($0.20/km)",
          value: 2000 ,
          suffix: "MXN" ,
        },
        {
          icon: Droplet,
          title: "En combustible",
          subtitle: "3%",
          value: 3600,
          suffix: "MXN",
        },
        {
          icon: Shield,
          title: "En llantas voladas/talachas/robos",
          subtitle: "",
          value: 300,
          suffix: "MXN",
        },
        {
          icon: Wrench,
          title: "Por mejor mantenimiento",
          subtitle: "",
          value: 300,
          suffix: "MXN",
        },
      ],
      total: 6200,
      sufix: "MXN",

    },
    en: {
      title: (
        <>
        Savings per truck
        </>
      ),
      description: "With Quinta, you stop putting out fires and start saving from the first kilometer.",
      savings_title: "1 month- 10k kilometers",
      total_savings: "Total Savings:",
      metrics: [
        {
          icon: TrendingUp,
          title: "In tire consumption",
          subtitle: "($0.20/km)",
          value: 100 ,
          suffix: "USD" ,
        },
        {
          icon: Droplet,
          title: "In fuel",
          subtitle: "3%",
          value: 180,
          suffix: "USD",
        },
        {
          icon: Shield,
          title: "In blown tires/flat tires/thefts",
          subtitle: "",
          value: 15,
          suffix: "USD",
        },
        {
          icon: Wrench,
          title: "For better maintenance",
          subtitle: "",
          value: 15,
          suffix: "USD",
        },
      ],
      total: 310,
      sufix: "USD",
    },
  };
      const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
      });
      const metrics = content[language].metrics;

  return (
    <section className="w-full  bg-white relative">
      <div className=" py-12 md:py-16 px-6 md:px-28">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-6"
          >
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl  text-balance leading-relaxed text-custom-black mb-4">
              {content[language].title}
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed text-lg font-normal text-gray-600">
              {content[language].description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Lado izquierdo - Imagen del dispositivo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-md">
                <div className="aspect-square relative">
                  <img
                    src={tire_tpms}
                    alt={
                      language === "es"
                        ? "Dispositivo de monitoreo de neumáticos"
                        : "Tire monitoring device"
                    }
                    className="object-contain w-full h-full rounded-3xl"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-8">
                    <span className="text-xl md:text-2xl font-bold text-primary-B600">
                    
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lado derecho - Tabla de ahorros */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white rounded-xl p-8 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-custom-black mb-8">
                    {content[language].savings_title}
                  </h3>
                </div>
              </div>

              <div className="space-y-6" ref={ref}>
                {metrics.map((metric, index) => (
                  <div key={index}
                 
                  >
                    <MetricCard {...metric} />
                  </div>
                ))}

                {/* Ahorro total */}
                <div
                  className="flex items-center justify-between pt-2"
                >
                  <div className="text-2xl font-bold text-gray-800">
                    {content[language].total_savings}
                  </div>
                  <div className="text-4xl font-bold text-gray-800">
                    {inView ? <CountUp end={content[language].total} duration={1} separator="," /> : 0}
                    <span className="ml-1 text-gray-600">{content[language].sufix}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MetricCard = ({ icon: Icon, title, subtitle, value, suffix, bgColor = "bg-gray-100", iconColor = "text-primary-L400" }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="flex items-center justify-between pb-4 border-b border-gray-200"
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div>
          <p className="text-gray-800 font-medium " >{title}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-800">
        {inView ? <CountUp end={value} duration={1} separator="," /> : 0}
        {suffix && <span className="ml-1 text-gray-600">{suffix}</span>}
      </div>
    </div>
  );
};