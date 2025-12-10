import React,{useContext} from "react";
import BackgroundVideo from "./BackgroundVideo";
import ButtonGetInTouch from "./ButtonGetInTouch";
import Blogs from "./Blogs";
import CalendlyWidget from './CalendlyWidget';
import { LanguageContext } from './LanguageContext';
import BannerClients from "./BannerClients";
import logo_blanco from "../assets/logo_blanco.png";
import { Truck, Route, DollarSign, Users, Gauge, Thermometer, Weight, Ruler  } from "lucide-react"
import BeforeAfterSection from "./BeforeAfter";
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import SavingsCalculatorSection from "./Savings_calculator";
import ProductExplanation from "./ProductExplanation";
import SeccionQuinta from "./QuintaSection";
import { motion } from "framer-motion";
import SystemShowcase from "./SystemShowcase";
import { usePageTracking } from '../hooks/usePageTracking';
import { fbPixelEvents } from '../utils/fbPixel';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';
import ContactForm from "./ContactForm";
import RecommendedTires from "./RecommendedTires";

const Home = () => {
  const { language } = useContext(LanguageContext);
  
  // Tracking de página - Facebook Pixel
  usePageTracking('Home Page');
  
  // Tracking de página - Google Analytics
  const { trackSection } = useGoogleAnalytics('Home Page');
  const content = {
    es: {
      home_title: (
        <>
        Las primeras <span className="font-bold px-2 ">llantas inteligentes del mundo</span> 
         
        </>
      ),
      home_description: 'Cada llanta incluye un sensor inteligente integrado que te muestra en tiempo real:',
      meet: 'Parece tecnología de Fórmula 1',
      meet_description: 'Pero cuesta menos que una llanta nueva.',
      features: [
        {
          description: 'Presión',
          icon: Gauge,
        },
        {
          description: 'Temperatura',
          icon: Thermometer,
        },
        {
          description: 'Carga',
          icon: Weight,
        },
         {
          description: 'Profundidad',
          icon: Ruler,
        },
      ],
      final_text: "Y la mejor parte: cuestan lo mismo que una llanta normal. Tecnología incluida. Sin costo extra. Sin complicaciones.",
      automation: {
        title: "Automatización Total",
        description: "Nuestro sistema le permite monitorear su flota en tiempo real, optimizar costos y prevenir problemas antes de que ocurran."
    }
    
    },
    en: {
      home_title: (
        <>
        The world's first <span className="font-bold px-2 ">smart tires</span> 
         
        </>
      ),
      home_description: 'Each tire includes an integrated smart sensor that shows you in real time:',
      meet: 'Sounds like Formula 1 technology',
      meet_description: 'But costs less than a new tire.',
      features: [
        {
          description: 'Pressure',
          icon: Gauge,
        },
        {
          description: 'Temperature',
          icon: Thermometer,
        },
        {
          description: 'Load',
          icon: Weight,
        },
         {
          description: 'Depth',
          icon: Ruler,
        },
      ],
      final_text: "And the best part: they cost the same as a regular tire. Technology included. No extra cost. No hassle.",
      automation: {
        title: "Total Automation",
        description: "Our system allows you to monitor your fleet in real time, optimize costs, and prevent problems before they occur."
    }
    },
  };
  const text_button = {
    es: {
        contact: 'Solicita una demo',     
    },
    en: {
        contact: 'Request a demo',
    }
  }
    return (
      <>
        <div className="relative h-screen  w-screen">
          <BackgroundVideo />
          <div className="relative z-10 flex justify-center h-full">
            <div className="m-auto text-center py-6 px-6 md:py-12  md:px-28">
            <h1 className="text-white text-balance text-4xl md:text-5xl lg:text-6xl font-light uppercase leading-none mb-8 md:max-w-[850px] lg:max-w-5xl  mx-auto" >{content[language].home_title}</h1>
            <p className="font-['Uncut Sans',_sans-serif]  text-lg md:text-lg lg:text-xl text-gray-200 mx-auto font-normal md:max-w-[700px]">{content[language].home_description} </p> 
            <div className="flex items-center gap-4 md:gap-6 max-w-4xl mt-6 flex-wrap mx-auto justify-center">
              {content[language].features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex items-center gap-3 ">
                     <div className="bg-primary-L400 backdrop-blur-sm border-2 border-primary-L400 rounded-lg px-1 py-1 hover:bg-white/20 transition-all duration-300">
 <Icon className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" strokeWidth={1.5} />
                     </div>
                     
                      <span className="text-white text-base md:text-md font-black">
                        {feature.description}
                      </span>
                    </div>
                    {index < content[language].features.length - 1 && (
                      <div className="hidden md:block w-px h-8 bg-white/30"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <p className="font-['Uncut Sans',_sans-serif]  text-lg md:text-lg lg:text-xl text-text-gray-200  font-normal md:max-w-[700px] mt-6 mb-8 mx-auto">{content[language].final_text} </p>

            <div className="flex justify-center mt-12">
              <div className="flex gap-4 flex-col md:flex-row">
              <CalendlyWidget theme="light" />
              <ButtonGetInTouch  theme="dark" text={text_button[language].contact}/>
              </div>
            </div>
            </div>
          </div>
        </div>
      
        <BeforeAfterSection />
        <SeccionQuinta />
        <ProductExplanation />
        <section className="w-full  bg-white relative">
        <div className="bg-gradient-to-b from-custom-gray-1 to-white relative pb-12 pb-16 md:pb-24 px-2 md:px-28">
        <motion.div className="text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-xl md:text-2xl lg:text-3xl  text-balance leading-relaxed font-bold mb-4 text-custom-black ">{content[language].automation.title}</h2>
          <p className="text-base md:text-lg/relaxed lg:text-xl font-normal font-normal text-gray-600  mx-auto text-balance">
              {content[language].automation.description}
          </p>
          </motion.div>
          {/* System visualization */}
          <SystemShowcase />
          
        </div>
      
      </section>
       {/*  <Software />
        <MobileApp /> */}
        <RecommendedTires />
        <SavingsCalculatorSection />
         <div className=' relative   px-6  md:px-28 py-12 md:py-16  bg-white'>
          <motion.div className="bg-primary-B  px-6 md:px-16 py-12 rounded-3xl container mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className='flex items-center justify-center mb-8 md:mb-12'> 
            <img  src={logo_blanco} alt="logo" className="" />
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl  text-balance leading-relaxed text-white text-center font-medium'>{content[language].meet}</h2>
            <h2 className='text-2xl md:text-3xl lg:text-4xl  text-balance leading-relaxed text-white text-center font-medium'>{content[language].meet_description}</h2>
            <div className='flex items-center justify-center  mt-12'> 
              <div className="flex gap-4 flex-col md:flex-row">
                <CalendlyWidget theme="light" />
              {/*   <ButtonWhatsApp /> */}
              </div>
            </div>
          </motion.div>
        </div> 
        <div id="contact">
          <ContactForm/>
        </div>
        <Blogs />    
        
      </>
    );
}
export default Home;

const MetricCard = ({ icon: Icon, value, suffix, description, decimals = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] bg-white"
    >
      <div className="p-3 mb-4 rounded-full bg-gray-200 text-primary-B">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-3xl font-bold text-gray-800 flex items-baseline">
        <span className="text-primary-L400">+</span> 
        {inView ? <CountUp end={value} duration={1} separator="," decimals={decimals} enableScrollSpy /> : 0}
        {suffix && <span className="text-gray-600 ml-1">{suffix}</span>}
      </h3>
      <p className="mt-2 text-gray-700 text-center text-base md:text-lg/relaxed lg:xl font-normal">{description}</p>
    </div>
  )
}

const MetricsSection = () => {
  
  const { language } = useContext(LanguageContext);
  const content = {
    es: {
      metrics: [
        {
          description: 'llantas analizadas',
        },
        {
          description: 'de kilómetros recorridos',
        },
        {
          description: 'de pesos ahorrados en operación',
        },
        {
          description: 'de retención de clientes',
        },
      ],
    },
    en: {
      metrics: [
        {
          description: 'tires analyzed',
        },
        {
          description: 'kilometers traveled',
        },
        {
          description: 'dollars saved in operation',
        },
        {
          description: 'customer retention',
        },
      ],
    },
  }


  const metrics = [
    {
      icon: Truck,
      value: 320000,
      description: content[language].metrics[0].description,
    },
    {
      icon: Route,
      value:  400,
      suffix: language === 'es' ? 'millones' : 'million',
      description: content[language].metrics[1].description,
    },
    {
      icon: DollarSign,
      value: language === 'es' ? 60 : 3, // Conversión a dólares si el idioma es inglés

      suffix: language === 'es' ? 'millones' : 'million',
      description: content[language].metrics[2].description,
    },
    {
      icon: Users,
      value: 96,
      suffix: "%",
      description: content[language].metrics[3].description,
    },
  ]
  

  return (
    <section className=" py-12 px-6 md:py-16 md:px-28 bg-white-B relative">
    <div className="max-w-6xl mx-auto">
      {/* Animación del título */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-bold text-3xl md:text-4xl lg:text-5xl  text-balance leading-relaxed text-custom-black mb-12 text-center"
      >
        {language === "es" ? "Nuestro Impacto en Números" : "Our Impact in Numbers"}
      </motion.h2>

      {/* Animación de las métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  </section>
  )
}