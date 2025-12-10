// EJEMPLO: Cómo agregar tracking a secciones específicas
// Este archivo es solo de referencia, no necesitas importarlo

import React, { useEffect } from 'react';
import { gaEvents } from '../utils/googleAnalytics';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

const TrackingExample = () => {
  const { trackSection } = useGoogleAnalytics('Example Page');

  // Ejemplo 1: Tracking manual de sección
  useEffect(() => {
    // Track cuando el componente se monta
    trackSection('hero_section');
  }, [trackSection]);

  // Ejemplo 2: Tracking de interacciones específicas
  const handleStatisticClick = (statName, value) => {
    gaEvents.sendGAEvent('statistic_interaction', {
      category: 'engagement',
      label: statName,
      value: value,
      statistic_name: statName,
      statistic_value: value
    });
  };

  // Ejemplo 3: Tracking de hover en elementos importantes
  const handleHover = (elementName) => {
    gaEvents.sendGAEvent('hover_interaction', {
      category: 'engagement',
      label: elementName,
      element_name: elementName
    });
  };

  // Ejemplo 4: Tracking de calculadora de ahorros
  const handleCalculatorUse = (inputValue, result) => {
    gaEvents.useSavingsCalculator(result);
    
    // Evento adicional con más detalles
    gaEvents.sendGAEvent('calculator_interaction', {
      category: 'tool_usage',
      label: 'savings_calculator',
      value: result,
      input_value: inputValue,
      calculation_result: result
    });
  };

  // Ejemplo 5: Tracking de descarga de recursos
  const handleDownload = (fileName, fileType) => {
    gaEvents.downloadResource(fileName, fileType);
  };

  return (
    <div>
      {/* Sección con data-section para tracking automático */}
      <section data-section="hero_section" className="hero">
        <h1>Hero Section</h1>
        <p>Esta sección se trackea automáticamente</p>
      </section>

      {/* Estadística con tracking de click */}
      <div 
        onClick={() => handleStatisticClick('cost_savings', 25000)}
        onMouseEnter={() => handleHover('savings_statistic')}
        className="statistic cursor-pointer"
      >
        <h3>$25,000</h3>
        <p>Ahorros promedio</p>
      </div>

      {/* Calculadora con tracking */}
      <div className="calculator">
        <input 
          type="number" 
          placeholder="Número de unidades"
          onChange={(e) => {
            const units = parseInt(e.target.value);
            const savings = units * 1500; // Ejemplo de cálculo
            if (units > 0) {
              handleCalculatorUse(units, savings);
            }
          }}
        />
      </div>

      {/* Botón de descarga con tracking */}
      <button 
        onClick={() => handleDownload('brochure_quinta_tech.pdf', 'pdf')}
        className="download-btn"
      >
        Descargar Brochure
      </button>

      {/* Link externo con tracking */}
      <a 
        href="https://external-site.com"
        onClick={() => gaEvents.clickExternalLink('https://external-site.com', 'External Resource')}
        target="_blank"
        rel="noopener noreferrer"
      >
        Recurso Externo
      </a>

      {/* Redes sociales con tracking */}
      <div className="social-media">
        <button 
          onClick={() => gaEvents.clickSocialMedia('facebook', 'click')}
        >
          Facebook
        </button>
        <button 
          onClick={() => gaEvents.clickSocialMedia('linkedin', 'click')}
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default TrackingExample;