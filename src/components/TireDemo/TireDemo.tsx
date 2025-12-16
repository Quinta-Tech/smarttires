import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Wifi, Database, Gauge } from 'lucide-react';
import './TireDemo.css';
import ButtonGetInTouch from '../../components/ButtonGetInTouch';
import { LanguageContext } from '../LanguageContext';

interface TirePoint {
  number: string;
  text: string;
  position: { top: string; left: string };
}

interface TireSlide {
  id: number;
  image: string;
  points: TirePoint[];
}

interface TireSpec {
  codigo: string;
  tamano: string;
  calificacion: string;
  rango: string;
  carga: string;
  velocidad: string;
  diametro: string;
  ancho: string;
  profundidad: string;
  rim: string;
  presionIndividual: string;
  presionDoble: string;
  radio: string;
  revoluciones: string;
  peso: string;
  tipo: string;
}

interface TireDemoProps {
  modelName: string;
  subtitle: string;
  description: string;
  heroImage: string;
  slides: TireSlide[];
  specifications: TireSpec[];
}

export default function TireDemo({ 
  modelName, 
  subtitle, 
  description, 
  heroImage,
  slides, 
  specifications 
}: TireDemoProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useContext(LanguageContext);

  const content = {
    es: {
      smartTechTitle: "Tecnología Inteligente Integrada",
      sensorTitle: "Sensor Interno",
      sensorDescription: "Recopila datos en tiempo real sobre presión, temperatura y desgaste del neumático",
      transmissionTitle: "Transmisión en Tiempo Real",
      transmissionDescription: "Los datos son enviados instantáneamente a servidores en la nube para análisis continuo",
      decisionsTitle: "Toma de Decisiones",
      decisionsDescription: "Alertas y recomendaciones inteligentes para maximizar la vida útil y seguridad",
      advantagesTitle: "Ventajas",
      specificationsTitle: "Especificaciones",
      scrollHint: "← Desliza para ver más →",
      tableHeaders: {
        codigo: "Código",
        tamano: "Tamaño",
        calificacion: "Cal. Numeral",
        rango: "Rango",
        carga: "Índice Carga",
        velocidad: "Velocidad",
        diametro: "Diámetro (pulg)",
        ancho: "Ancho (pulg)",
        profundidad: "Prof.",
        rim: "RIM",
        presionIndividual: "Presión Individual",
        presionDoble: "Presión Doble",
        radio: "Radio",
        revoluciones: "Rev/Milla",
        peso: "Peso",
        tipo: "Tipo"
      }
    },
    en: {
      smartTechTitle: "Integrated Smart Technology",
      sensorTitle: "Internal Sensor",
      sensorDescription: "Collects real-time data on tire pressure, temperature and wear",
      transmissionTitle: "Real-Time Transmission",
      transmissionDescription: "Data is sent instantly to cloud servers for continuous analysis",
      decisionsTitle: "Decision Making",
      decisionsDescription: "Smart alerts and recommendations to maximize tire life and safety",
      advantagesTitle: "Advantages",
      specificationsTitle: "Specifications",
      scrollHint: "← Swipe to see more →",
      tableHeaders: {
        codigo: "Code",
        tamano: "Size",
        calificacion: "Rating",
        rango: "Range",
        carga: "Load Index",
        velocidad: "Speed",
        diametro: "Diameter (in)",
        ancho: "Width (in)",
        profundidad: "Depth",
        rim: "RIM",
        presionIndividual: "Single Pressure",
        presionDoble: "Dual Pressure",
        radio: "Radius",
        revoluciones: "Rev/Mile",
        peso: "Weight",
        tipo: "Type"
      }
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="tire-demo-container">
      {/* Hero Section */}
     <motion.section 
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {modelName}
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {subtitle}
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {description}
          </motion.p>
          <div className="hero-cta  flex items-center justify-center mt-6">
          <ButtonGetInTouch theme="light">
            {language === 'es' ? 'Contactar' : 'Get in Touch'}
          </ButtonGetInTouch>
          </div>
        </div>
        
        <div className="hero-overlay"></div>
      </motion.section>
 
      {/* Smart Technology Section */}
       <section className="smart-tech-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="smart-tech-content"
        >
          <h2>{content[language].smartTechTitle}</h2>
          <div className="tech-grid">
            <motion.div 
              className="tech-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="tech-icon">
                <Wifi size={40} />
              </div>
              <h3>{content[language].sensorTitle}</h3>
              <p>{content[language].sensorDescription}</p>
            </motion.div>

            <motion.div 
              className="tech-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="tech-icon">
                <Database size={40} />
              </div>
              <h3>{content[language].transmissionTitle}</h3>
              <p>{content[language].transmissionDescription}</p>
            </motion.div>

         

            <motion.div 
              className="tech-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="tech-icon">
                <Gauge size={40} />
              </div>
              <h3>{content[language].decisionsTitle}</h3>
              <p>{content[language].decisionsDescription}</p>
            </motion.div>
          </div>
        </motion.div>
      </section> 

      {/* Advantages Section */}
      <section className="advantages-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {modelName} {content[language].advantagesTitle}
        </motion.h2>

        <div className="deslizante-container">
          <button className="deslizante-btn prev" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>

          <div className="deslizante-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="slide"
              >
                <div className="tire-image-container">
                  <img 
                    src={slides[currentSlide].image} 
                    alt={`${modelName} - Slide ${currentSlide + 1}`}
                    className="tire-image"
                  />
                  
                  {/* Data Transmission Animation for last slide */}
                
                  
                  {slides[currentSlide].points.map((point, index) => (
                    <motion.div
                      key={point.number}
                      className="advantage-point"
                      style={{ top: point.position.top, left: point.position.left }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    >
                      <motion.div 
                        className="point-line"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      />
                      <div className="point-marker"></div>
                      <motion.div 
                        className="point-text"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                      >
                        {point.text}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Bullet Points */}
                <motion.div 
                  className="mobile-bullet-points"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <ul className="space-y-3">
                    {slides[currentSlide].points.map((point, index) => (
                      <motion.li
                        key={point.number}
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#2233b0]"></span>
                        <span className="text-sm leading-relaxed">{point.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="deslizante-btn next" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="deslizante-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
    
   


      {/* Specifications Section */}
     <section className="specifications-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {modelName} {content[language].specificationsTitle}
        </motion.h2>

        <motion.div 
          className="table-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Scroll hint for mobile */}
          <div className="scroll-hint">
            <span>{content[language].scrollHint}</span>
          </div>
          
          <div className="table-container">
            <table className="specs-table">
            <thead>
              <tr>
                <th>{content[language].tableHeaders.codigo}</th>
                <th>{content[language].tableHeaders.tamano}</th>
                <th>{content[language].tableHeaders.calificacion}</th>
                <th>{content[language].tableHeaders.rango}</th>
                <th>{content[language].tableHeaders.carga}</th>
                <th>{content[language].tableHeaders.velocidad}</th>
                <th>{content[language].tableHeaders.diametro}</th>
                <th>{content[language].tableHeaders.ancho}</th>
                <th>{content[language].tableHeaders.profundidad}</th>
                <th>{content[language].tableHeaders.rim}</th>
                <th>{content[language].tableHeaders.presionIndividual}</th>
                <th>{content[language].tableHeaders.presionDoble}</th>
                <th>{content[language].tableHeaders.radio}</th>
                <th>{content[language].tableHeaders.revoluciones}</th>
                <th>{content[language].tableHeaders.peso}</th>
                <th>{content[language].tableHeaders.tipo}</th>
              </tr>
            </thead>
            <tbody>
              {specifications.map((spec, index) => (
                <motion.tr
                  key={spec.codigo}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: '#f0f4ff' }}
                >
                  <td>{spec.codigo}</td>
                  <td>{spec.tamano}</td>
                  <td>{spec.calificacion}</td>
                  <td>{spec.rango}</td>
                  <td>{spec.carga}</td>
                  <td>{spec.velocidad}</td>
                  <td>{spec.diametro}</td>
                  <td>{spec.ancho}</td>
                  <td>{spec.profundidad}</td>
                  <td>{spec.rim}</td>
                  <td>{spec.presionIndividual}</td>
                  <td>{spec.presionDoble}</td>
                  <td>{spec.radio}</td>
                  <td>{spec.revoluciones}</td>
                  <td>{spec.peso}</td>
                  <td>{spec.tipo}</td>
                </motion.tr>
              ))}
            </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
