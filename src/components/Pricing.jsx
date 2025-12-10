import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";




const handleClick = () => {
    // navigate(path);
    window.location.assign("/contact");
};


const TireManagementPricing = {
    es: {
        pricing: "Precios + IVA",
        solution: "Soluciones de Gestión de Llantas",
        scalablePricing: "Precios escalables que crecen con tu flota. Elige el plan perfecto para tus necesidades.",
        mostPopular: "Más Popular",
        per: "/mes",
        forFleetsWithUnits: units => `Para flotas con ${units} unidades`,
        features: [
            "Soporte 24/7",
            "Aplicación Móvil",
            "Analíticas y Dashboard",
        ],
        getStarted: "Comenzar",
        needLargerPlan: "¿Necesitas un plan más grande?",
        contactSales: "Contacta a nuestro equipo de ventas para soluciones empresariales personalizadas y descuentos por volumen.",
        pricingTiers: [
            { range: "Inicial", price: "5,000", units: "0-50", isPopular: false },
            { range: "Básico", price: "7,500", units: "51-100", isPopular: false },
            { range: "Crecimiento", price: "10,900", units: "101-150", isPopular: true },
            { range: "Escala", price: "15,000", units: "151-200", isPopular: false },
            { range: "Empresa S", price: "18,000", units: "200-300", isPopular: false },
            { range: "Empresa M", price: "22,000", units: "300-400", isPopular: false },
            { range: "Empresa L", price: "25,000", units: "400-500", isPopular: false },
            { range: "Empresa XL", price: "28,000", units: "501-700", isPopular: false },
            { range: "Empresa 2XL", price: "32,000", units: "701-1000", isPopular: false },
            { range: "Personalizado", price: "35,000", units: "1000+", isPopular: false },
        ]
    },
    en: {
        pricing: "Pricing",
        solution: "Tire Management Solutions",
        scalablePricing: "Scalable pricing that grows with your fleet. Choose the perfect plan for your needs.",
        mostPopular: "Most Popular",
        per: "/month",
        forFleetsWithUnits: (units) => `For fleets with ${units} units`,
        features: [
            "24/7 Support",
            "Mobile App",
            "Analytics Dashboard",
        ],
        getStarted: "Get Started",
        needLargerPlan: "Need a larger plan?",
        contactSales: "Contact our sales team for custom enterprise solutions and volume discounts.",
        pricingTiers: [
            { range: "Starter", price: "241.55", units: "0-50", isPopular: false },
            { range: "Basic", price: "362.32", units: "51-100", isPopular: false },
            { range: "Growth", price: "526.57", units: "101-150", isPopular: true },
            { range: "Scale", price: "724.64", units: "151-200", isPopular: false },
            { range: "Enterprise S", price: "869.57", units: "200-300", isPopular: false },
            { range: "Enterprise M", price: "1,063.77", units: "300-400", isPopular: false },
            { range: "Enterprise L", price: "1,207.73", units: "400-500", isPopular: false },
            { range: "Enterprise XL", price: "1,353.14", units: "501-700", isPopular: false },
            { range: "Enterprise 2XL", price: "1,545.89", units: "701-1000", isPopular: false },
            { range: "Custom", price: "1,690.82", units: "1000+", isPopular: false },
        ]
    },
};

const YardManagementPricing = {
    es: {
        pricing: "Precios + IVA",
        solution: "Soluciones de Entradas y Salidas de Patios",
        scalablePricing: "Precios escalables que crecen con tu flota. Elige el plan perfecto para tus necesidades.",
        mostPopular: "Más Popular",
        per: "/mes",
        forFleetsWithUnits: units => `Para flotas con ${units} unidades`,
        features: [
            "Soporte 24/7",
            "Aplicación Móvil",
            "Analíticas y Dashboard",
        ],
        getStarted: "Comenzar",
        needLargerPlan: "¿Necesitas un plan más grande?",
        contactSales: "Contacta a nuestro equipo de ventas para soluciones empresariales personalizadas y descuentos por volumen.",
        pricingTiers: [
            { range: "Inicial", price: "5,000", units: "0-50", isPopular: false },
            { range: "Básico", price: "7,500", units: "51-100", isPopular: false },
            { range: "Crecimiento", price: "10,900", units: "101-150", isPopular: true },
            { range: "Escala", price: "15,000", units: "151-200", isPopular: false },
            { range: "Empresa S", price: "18,000", units: "200-300", isPopular: false },
            { range: "Empresa M", price: "22,000", units: "300-400", isPopular: false },
            { range: "Empresa L", price: "25,000", units: "400-500", isPopular: false },
            { range: "Empresa XL", price: "28,000", units: "501-700", isPopular: false },
            { range: "Empresa 2XL", price: "32,000", units: "701-1000", isPopular: false },
            { range: "Personalizado", price: "35,000", units: "1000+", isPopular: false },
        ]
    },
    en: {
        pricing: "Pricing",
        solution: "Yard Management Solutions",
        scalablePricing: "Scalable pricing that grows with your fleet. Choose the perfect plan for your needs.",
        mostPopular: "Most Popular",
        per: "/month",
        forFleetsWithUnits: (units) => `For fleets with ${units} units`,
        features: [
            "24/7 Support",
            "Mobile App",
            "Analytics Dashboard",
        ],
        getStarted: "Get Started",
        needLargerPlan: "Need a larger plan?",
        contactSales: "Contact our sales team for custom enterprise solutions and volume discounts.",
        pricingTiers: [
            { range: "Starter", price: "241.55", units: "0-50", isPopular: false },
            { range: "Basic", price: "362.32", units: "51-100", isPopular: false },
            { range: "Growth", price: "526.57", units: "101-150", isPopular: true },
            { range: "Scale", price: "724.64", units: "151-200", isPopular: false },
            { range: "Enterprise S", price: "869.57", units: "200-300", isPopular: false },
            { range: "Enterprise M", price: "1,063.77", units: "300-400", isPopular: false },
            { range: "Enterprise L", price: "1,207.73", units: "400-500", isPopular: false },
            { range: "Enterprise XL", price: "1,353.14", units: "501-700", isPopular: false },
            { range: "Enterprise 2XL", price: "1,545.89", units: "701-1000", isPopular: false },
            { range: "Custom", price: "1,690.82", units: "1000+", isPopular: false },
        ]
    },
};



const YardAndTireManagementPricing = {
    es: {
        pricing: "Precios + IVA",
        solution: "Soluciones de Gestión de Llantas + Soluciones de Entradas y Salidas",
        scalablePricing: "Precios escalables que crecen con tu flota. Elige el plan perfecto para tus necesidades.",
        mostPopular: "Más Popular",
        per: "/mes",
        forFleetsWithUnits: units => `Para flotas con ${units} unidades`,
        features: [
            "Soporte 24/7",
            "Aplicación Móvil",
            "Analíticas y Dashboard",
        ],
        getStarted: "Comenzar",
        needLargerPlan: "¿Necesitas un plan más grande?",
        contactSales: "Contacta a nuestro equipo de ventas para soluciones empresariales personalizadas y descuentos por volumen.",
        pricingTiers: [
            { range: "Inicial", price: "7,500", units: "0-50", isPopular: false },
            { range: "Básico", price: "11,250", units: "51-100", isPopular: false },
            { range: "Crecimiento", price: "16,350", units: "101-150", isPopular: true },
            { range: "Escala", price: "22,500", units: "151-200", isPopular: false },
            { range: "Empresa S", price: "27,000", units: "200-300", isPopular: false },
            { range: "Empresa M", price: "33,000", units: "300-400", isPopular: false },
            { range: "Empresa L", price: "37,500", units: "400-500", isPopular: false },
            { range: "Empresa XL", price: "42,000", units: "501-700", isPopular: false },
            { range: "Empresa 2XL", price: "48,000", units: "701-1000", isPopular: false },
            { range: "Personalizado", price: "49,500", units: "1000+", isPopular: false },
        ]
    },
    en: {
        pricing: "Pricing",
        solution: "Yard Management Solutions",
        scalablePricing: "Scalable pricing that grows with your fleet. Choose the perfect plan for your needs.",
        mostPopular: "Most Popular",
        per: "/month",
        forFleetsWithUnits: (units) => `For fleets with ${units} units`,
        features: [
            "24/7 Support",
            "Mobile App",
            "Analytics Dashboard",
        ],
        getStarted: "Get Started",
        needLargerPlan: "Need a larger plan?",
        contactSales: "Contact our sales team for custom enterprise solutions and volume discounts.",
        pricingTiers: [
            { range: "Starter", price: "362.32", units: "0-50", isPopular: false },
            { range: "Basic", price: "543.48", units: "51-100", isPopular: false },
            { range: "Growth", price: "789.86", units: "101-150", isPopular: true },
            { range: "Scale", price: "1,086.96", units: "151-200", isPopular: false },
            { range: "Enterprise S", price: "1,304.35", units: "200-300", isPopular: false },
            { range: "Enterprise M", price: "1,594.20", units: "300-400", isPopular: false },
            { range: "Enterprise L", price: "1,811.59", units: "400-500", isPopular: false },
            { range: "Enterprise XL", price: "2,028.99", units: "501-700", isPopular: false },
            { range: "Enterprise 2XL", price: "2,318.84", units: "701-1000", isPopular: false },
            { range: "Custom", price: "2,391.30", units: "1000+", isPopular: false },
        ]
    },
};

const HardwarePricing = {
    es: {
        pricing: "Precios + IVA",
        solution: "Hardware",
        scalablePricing: "Precios escalables que crecen con tu flota. Elige el plan perfecto para tus necesidades.",
        mostPopular: "Más Popular",
        
        getStarted: "Conseguir",
        needLargerPlan: "¿Necesitas un plan más grande?",
        contactSales: "Contacta a nuestro equipo de ventas para soluciones empresariales personalizadas y descuentos por volumen.",
        pricingTiers: [
            { range: "Profundimetro BT", price: "1,900", isPopular: false },
            { range: "Profundimetro BT + RFID", price: "2,200", isPopular: false },
            { range: "BT RFID Reader", price: "500",  isPopular: false },
            { range: "RFID + Android Phone", price: "1,000",  isPopular: false },
            { range: "1 Puerta (2 Antenas)", price: "1,200",  isPopular: false },
            { range: "2 Puertas (4 Antenas)", price: "1,700",  isPopular: false },
            
        ]
    },
    en: {
        pricing: "Pricing",
        solution: "Hardware",
        scalablePricing: "Scalable pricing that grows with your fleet. Choose the perfect plan for your needs.",
        mostPopular: "Most Popular",
        getStarted: "Get",
        needLargerPlan: "Need a larger plan?",
        contactSales: "Contact our sales team for custom enterprise solutions and volume discounts.",
        pricingTiers: [
            { range: "BT Depth Gauge", price: "1,900", isPopular: false },
            { range: "BT Depth Gauge + RFID", price: "$2,200", isPopular: false },
            { range: "BT RFID Reader", price: "500", isPopular: false },
            { range: "RFID + Android Phone", price: "1,000", isPopular: false },
            { range: "1 Door (2 Antennas)", price: "1,200", isPopular: false },
            { range: "2 Doors (4 Antennas)", price: "1,700", isPopular: false },
        ]
    }
};

const TagsPricing = {
    es: {
        pricing: "Precios + IVA",
        solution: "RFID TAGS",
        scalablePricing: "Precios escalables que crecen con tu flota. Elige el plan perfecto para tus necesidades.",
        mostPopular: "Más Popular",
        
        getStarted: "Conseguir",
        needLargerPlan: "¿Necesitas un plan más grande?",
        contactSales: "Contacta a nuestro equipo de ventas para soluciones empresariales personalizadas y descuentos por volumen.",
        pricingTiers: [
            { range: "50 Tags", price: "5,000", isPopular: false },
            { range: "100 Tags", price: "7,500", isPopular: false },
            { range: "200 Tags", price: "13,500",  isPopular: false },
            { range: "500 Tags", price: "20,000",  isPopular: false },
            
            
        ]
    },
    en:{
        pricing: "Pricing",
        solution: "RFID TAGS",
        scalablePricing: "Scalable pricing that grows with your fleet. Choose the perfect plan for your needs.",
        mostPopular: "Most Popular",
        getStarted: "Get",
        needLargerPlan: "Need a larger plan?",
        contactSales: "Contact our sales team for custom enterprise solutions and volume discounts.",
        pricingTiers: [
            { range: "50 Tags", price: "5,000", isPopular: false },
            { range: "100 Tags", price: "7,500", isPopular: false },
            { range: "200 Tags", price: "13,500", isPopular: false },
            { range: "500 Tags", price: "20,000", isPopular: false },
        ]
    }
};

  function Card({ children, className }) {
    return <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>{children}</div>
  }
  
  function Badge({ children, className }) {
    return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${className}`}>{children}</span>
  }
  
  export default function PricingSection({platform}) {
    const ranges = [
        { range: "0-50" },
        { range: "51-100" },
        { range: "101-150" },
        { range: "151-200" },
        { range: "200-300" },
        { range: "300-400" },
        { range: "400-500" },
        { range: "501-700" },
        { range: "701-1000" },
        { range: "1000-1500" }
      ];
    const [selectedRange, setSelectedRange] = useState(0);
    const handleSelectChange = (event) => {
        setSelectedRange(event.target.value);
      };
    const { language } = useContext(LanguageContext);
   
    let pricingData = {};
    switch (platform) {
        case "tire-management":
            pricingData = TireManagementPricing;
            break;
        case "yard-management":
            pricingData = YardManagementPricing;
            break;
        case "yard-and-tire-management":
            pricingData = YardAndTireManagementPricing;
            break;
        case "hardware":
            pricingData = HardwarePricing;
            break;
        case "tags":
            pricingData = TagsPricing;
            break;
        default:
            pricingData = TireManagementPricing;
    }
    pricingData = pricingData[language];
    // const { pricingTiers, pricing, forFleetsWithUnits, features, solution, scalablePricing, mostPopular, getStarted, per} = pricingData[language];
    return (
      <section className="w-full py-12 bg-gradient-to-b from-gray-50 bg-white to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-gray-100 text-gray-800 ">{pricingData.pricing}</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">{pricingData.solution}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              {pricingData.scalablePricing}
            </p>
          </div>
        <div className="flex justify-center mb-8 items-center">
            <label htmlFor="units" className="mr-2 text-black">{language === 'es' ? 'Elige el tamaño de tu flota' : 'Choose the size of your fleet'}</label>
            <select   value={selectedRange}
                onChange={handleSelectChange} className="border border-gray-300 rounded-lg px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                {ranges.map((unit, index) => (
                    <option key={index} value={index}>{unit.range} {language === 'es' ? 'Unidades' : 'Units'}</option>
                ))}

            </select>
           
        </div>
          <div className="flex flex-wrap justify-center gap-4">
            
            <div
                className="translate-y-4 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${100}ms` }}
              >
                 <Card className="relative border-[#2233B0] border-2 shadow-xl scale-105">
                  <div className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="space-y-2">
                       {/*  <h3 className="text-2xl font-bold text-black">{pricingData.pricingTiers[selectedRange].range} </h3> */}
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl text-black font-bold">{language === "en" ? "$" : "MXN "}{pricingData.pricingTiers[selectedRange].price}</span>
                          <span className="text-sm text-gray-500 ">{pricingData.pricingTiers[selectedRange].per}</span>
                        </div>
                        { (platform != "hardware" && platform != "tags")  && (<p className="text-sm text-gray-500 "> { pricingData.forFleetsWithUnits(pricingData.pricingTiers[selectedRange].units)} </p> )}
                      </div>
                      {pricingData.features && (
                      <div className="space-y-2 pt-4 border-t border-gray-200">
                        {pricingData.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                            <svg width="23px" height="23px" strokeWidth="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#062685"><path d="M5 13L9 17L19 7" stroke="#062685" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span className="text-sm text-black">{feature}</span>
                          </div>
                        ))}
                        
                      </div>
                      )}

                      <button
                            onClick={handleClick}
                            type="button"
                            aria-label="Get Started"
                            className={`mt-12 text-white bg-[#2233B0] hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md md:text-xl px-6 py-3 transition hover:scale-110 ease-out duration-300`}
                        >
                            <p className="mr-2  uppercase  tracking-wide">
                                
                            {pricingData.getStarted} <i className="fa-solid fa-arrow-right"/>
                            </p>
                        </button>

                    </div>
                  </div>
                </Card> 
              </div> 
            
          </div>
        </div>
      </section>
    )
}