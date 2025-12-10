import React from "react";
import { useNavigate } from "react-router-dom";

interface RecommendedTireCardProps {
  tire: {
    _id: string;
    marca: string;
    modelo: string;
    medida: string;
    img: string;
    uso: string;
    costo: number;
    url: string;
  };
  language: string;
  content: {
    uses: {
      steering: string;
      traction: string;
      trailer: string;
    };
  };
}

const RecommendedTireCard: React.FC<RecommendedTireCardProps> = ({ tire, language, content }) => {
  const navigate = useNavigate();

  const translations = {
    es: {
      viewDetails: "Ver detalles",
      taxLabel: "+ IVA",
      measure: "Medida",
      poweredBy: "Smart / Powered by Quinta Tech"
    },
    en: {
      viewDetails: "View details",
      taxLabel: "+ VAT",
      measure: "Size",
      poweredBy: "Smart / Powered by Quinta Tech"
    }
  };

  // Calcular el precio final
  const calculatePrice = () => {
    const precio = tire.costo * 1.3;
    return precio;
  };

  const finalPrice = calculatePrice();

  // Formatear números
  const formatNumber = (num) => {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toLocaleString(
      "en-EN"
    );
  };

  // Manejar la navegación al producto
  const handleViewProduct = () => {
    console.log("RecommendedTireCard - Navigating to product:", tire.url);

    // Pequeño delay para asegurar que el evento se procese
    setTimeout(() => {
      navigate(`/${tire.url}`);
    }, 50);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-L200">
      <div className="p-6 flex flex-col h-full">
      <div className="space-y-4 flex-1 flex flex-col">
        {/* Imagen del neumático */}
        <div className="text-center bg-gray-50 rounded-lg p-6 flex items-center justify-center">
          <img
            src={tire.img}
            alt={`${tire.marca} ${tire.modelo}`}
            className="w-32 h-32 object-contain"
            loading="lazy"
          />
         
        </div>

        {/* Detalles del neumático */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">
            {tire.marca} {tire.modelo}
          </h3>
        </div>
        <div className="text-center">
          <span className="bg-primary-L200 text-primary-B600 px-3 py-1 rounded-full text-sm font-medium">
            {content.uses[tire.uso as keyof typeof content.uses]}
          </span>
        </div>
       <div className="text-center">
          <p className="text-gray-600 font-medium">{translations[language as keyof typeof translations].measure}: {tire.medida}</p>

       </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">
            ${formatNumber(finalPrice)} MXN
          </p>
          <p className=" 
          
            text-sm text-gray-500
          ">{translations[language as keyof typeof translations].taxLabel}</p>
        </div>
        <div className="text-center text-xs text-gray-500 font-medium">{translations[language as keyof typeof translations].poweredBy}</div>

        {/* Botón para ver detalles */}
        <div className="flex gap-3 pt-4 border-t mt-auto">
        <button
          onClick={handleViewProduct}
          className="w-full bg-primary-B text-white cursor-pointer py-3 px-4 rounded-md hover:bg-primary-B500 transition-colors duration-200 font-medium"
        >
          {translations[language as keyof typeof translations].viewDetails}
        </button>
        </div>
      
        
      </div>
      </div>
     
    </div>
  );
};

export default RecommendedTireCard;