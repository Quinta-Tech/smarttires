import React, { useEffect,useContext } from "react";
import { LanguageContext } from './LanguageContext';
export default function Testimonials ({text,image}){

    const { language } = useContext(LanguageContext);
    const content = {
        es: {
            title: 'Historias de éxito',
            description: 'Nuestros clientes confían en nosotros',
           
          },
          en: {
            title: 'Success stories',
            description: 'Our clients trust us',
           
          }
      }
    return (
        <section className="bg-white dark:bg-primary-L200">
     {/*    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <h2 className="text-balance text-2xl md:text-4xl md:max-w-[850px] lg:max-w-5xl mx-auto text-center mb-2 text-black">{content[language].title}</h2>
            <p className="text-lg md:text-xl font-normal text-neutral-B600 ">{content[language].description}</p>
            <svg className="h-12 mx-auto my-3 text-black-B " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-black-B ">"{text[language].quote}"</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-black-B ">{text[language].author}</div>
                <div className="pl-3 text-sm font-light text-gray-500 ">{text[language].position}</div>
              </div>
            </figcaption>
          </figure>
        </div> */}
      </section>
        
    )


}