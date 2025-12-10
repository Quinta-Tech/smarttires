import { motion } from "framer-motion"
import { useState, useContext } from "react"
import RecommendedTireCard from "./RecommendedTireCard"
import { LanguageContext } from "./LanguageContext";
import React from "react";
interface Tab {
    id: string
    label: string
}
interface Tire {
    _id: string;
    marca: string;
    modelo: string;
    medida: string;
    img: string;
    uso: string;
    costo: number;
    url: string;
  }

export default function RecommendedTires() {
    const [activeTab, setActiveTab] = useState<string>('medida1')
    const { language } = useContext(LanguageContext);

    const content = {
        es: {
            title: "Nuestras Smart Tires",
            description: "Llantas inteligentes con sensores integrados para monitoreo en tiempo real",
            uses: {
                steering: "Dirección",
                traction: "Tracción",
                trailer: "Remolque"
            }
        },
        en: {
            title: "Our Smart Tires",
            description: "Smart tires with integrated sensors for real-time monitoring",
            uses: {
                steering: "Steering",
                traction: "Traction",
                trailer: "Trailer"
            }
        }
    };
    const recommendedTires = {
      medida1: [
        {
          _id: '1',
          marca:'DOUBLECOIN',
          modelo:'FR610',
          medida:'11R22.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/DOUBLECOIN.FR610.png',
          uso:'steering',
          costo:4733.16,
          url:'fr-610'
        },
        {
          _id: '2',
          marca:'DOUBLECOIN',
          modelo:'RLB400',
          medida:'11R22.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/tire-RLB400.png',
          uso:'traction',
          costo:4733.16,
          url:'rlb-400'

        },
        {
          _id: '3',
          marca:'DOUBLECOIN',
          modelo:'RR150',
          medida:'11R22.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/DOUBLECOIN.RR150.DIRECCION.jpg',
          uso:'steering',
          costo:4733.16,
          url:'rr-150'
        }
      ],
      medida2: [
        {
          _id: '4',
          marca:'DOUBLECOIN',
          modelo:'FR610',
          medida:'11R24.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/DOUBLECOIN.FR610.png',
          uso:'steering',
          costo:4733.16,
          url:'fr-610'
        },
        {
          _id: '5',
          marca:'DOUBLECOIN',
          modelo:'RLB400',
          medida:'11R24.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/tire-RLB400.png',
          uso:'traction',
          costo:4733.16,
          url:'rlb-400'

        },
        {
          _id: '6',
          marca:'DOUBLECOIN',
          modelo:'RR150',
          medida:'11R24.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/DOUBLECOIN.RR150.DIRECCION.jpg',
          uso:'steering',
          costo:4733.16,
          url:'rr-150'
        }
      ],
      medida3: [
        {
          _id: '7',
          marca:'DOUBLECOIN',
          modelo:'FR610',
          medida:'295/75R22.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/DOUBLECOIN.FR610.png',
          uso:'steering',
          costo:4733.16,
        url:'fr-610'
        },
        {
          _id: '8',
          marca:'DOUBLECOIN',
          modelo:'RLB400',
          medida:'295/75R22.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/tire-RLB400.png',
          uso:'traction',
          costo:4733.16,
          url:'rlb-400'

        },
        {
          _id: '9',
          marca:'DOUBLECOIN',
          modelo:'RR150',
          medida:'295/75R22.5',
          img:'https://quinta-tires-images.s3.us-west-1.amazonaws.com/llantas/DOUBLECOIN.RR150.DIRECCION.jpg',
          uso:'steering',
          costo:4733.16,
          url:'rr-150'
        }
      ]
    };

    const tabs: Tab[] = [
        { id: 'medida1', label: '11R22.5' },
        { id: 'medida2', label: '11R24.5' },
        { id: 'medida3', label: '295/75R22.5' }
    ]

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId)
    }

    const renderTireGrid = (tires: Tire[]) => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tires.map((tire) => (
                    <RecommendedTireCard 
                        key={tire._id} 
                        tire={tire} 
                        language={language}
                        content={content[language]}
                    />
                ))}
            </div>
        )
    }

    return (
        <section className="w-full py-12 md:py-16 px-6 md:px-28 bg-white relative min-h-screen">
            <div className="container mx-auto">
                {/* Título y descripción */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <div className="flex gap-2 items-center mb-4 justify-center">

                        <h2 className="text-2xl md:text-3xl text-balance text-black uppercase">
                            {content[language].title}
                        </h2>
                    </div>
                    <p className="text-base md:text-lg/relaxed lg:text-xl font-normal text-balance text-gray-600 text-center">
                        {content[language].description}
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="mb-4 border-b border-secondary-200">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                        {tabs.map((tab) => (
                            <li key={tab.id} className="me-2" role="presentation">
                                <button
                                    className={`inline-block p-4 hover:border-b-2 rounded-t-lg text-xl transition-colors duration-200 cursor-pointer ${activeTab === tab.id
                                        ? 'text-primary-B border-b-2 border-primary-B'
                                        : 'text-gray-400 hover:text-gray-800 border-transparent'
                                        }`}
                                    onClick={() => handleTabClick(tab.id)}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === tab.id}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tab Content */}
                <div className="mb-12">
                    {/* Dirección Tab */}
                    <div
                        className={`p-6 rounded-lg bg-gray-50 ${activeTab === 'medida1' ? 'block' : 'hidden'}`}
                        role="tabpanel"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {renderTireGrid(recommendedTires.medida1)}
                        </motion.div>
                    </div>

                    {/* traction Tab */}
                    <div
                        className={`p-6 rounded-lg bg-gray-50 ${activeTab === 'medida2' ? 'block' : 'hidden'}`}
                        role="tabpanel"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {renderTireGrid(recommendedTires.medida2)}
                        </motion.div>
                    </div>

                    {/* Arrastre Tab */}
                    <div
                        className={`p-6 rounded-lg bg-gray-50 ${activeTab === 'medida3' ? 'block' : 'hidden'}`}
                        role="tabpanel"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {renderTireGrid(recommendedTires.medida3)}
                        </motion.div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}