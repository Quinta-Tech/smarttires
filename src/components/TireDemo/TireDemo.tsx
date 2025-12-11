import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Wifi, Database, Brain, Gauge } from 'lucide-react';
import './TireDemo.css';
import ButtonGetInTouch from '../../components/ButtonGetInTouch'

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
          <ButtonGetInTouch theme="light" />
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
          <h2>Tecnología Inteligente Integrada</h2>
          <div className="tech-grid">
            <motion.div 
              className="tech-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="tech-icon">
                <Wifi size={40} />
              </div>
              <h3>Sensor Interno</h3>
              <p>Recopila datos en tiempo real sobre presión, temperatura y desgaste del neumático</p>
            </motion.div>

            <motion.div 
              className="tech-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="tech-icon">
                <Database size={40} />
              </div>
              <h3>Transmisión en Tiempo Real</h3>
              <p>Los datos son enviados instantáneamente a servidores en la nube para análisis continuo</p>
            </motion.div>

         

            <motion.div 
              className="tech-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="tech-icon">
                <Gauge size={40} />
              </div>
              <h3>Toma de Decisiones</h3>
              <p>Alertas y recomendaciones inteligentes para maximizar la vida útil y seguridad</p>
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
          {modelName} Ventajas
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
                  {currentSlide === slides.length - 1 && (
                    <div className="data-transmission">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="data-particle"
                          initial={{ 
                            y: 0, 
                            x: 0,
                            opacity: 0,
                            scale: 0
                          }}
                          animate={{ 
                            y: [-100, -200, -300],
                            x: [0, (i % 2 === 0 ? 20 : -20), (i % 2 === 0 ? 40 : -40)],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0.5]
                          }}
                          transition={{
                            duration: 2.5,
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                      <motion.div
                        className="wifi-icon"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Wifi size={40} />
                      </motion.div>
                    </div>
                  )}
                  
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
          {modelName} Especificaciones
        </motion.h2>

        <motion.div 
          className="table-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <table className="specs-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Tamaño</th>
                <th>Cal. Numeral</th>
                <th>Rango</th>
                <th>Índice Carga</th>
                <th>Velocidad</th>
                <th>Diámetro (pulg)</th>
                <th>Ancho (pulg)</th>
                <th>Prof.</th>
                <th>RIM</th>
                <th>Presión Individual</th>
                <th>Presión Doble</th>
                <th>Radio</th>
                <th>Rev/Milla</th>
                <th>Peso</th>
                <th>Tipo</th>
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
                  <td>{spec.profundidad_mm}</td>
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
        </motion.div>
      </section>
    </div>
  );
}
