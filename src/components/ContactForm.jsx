import React, { useState,useEffect,useContext }  from "react";
import ContactDetailsForm from './ContactDetailsForm';
import LocationForm from "./locationForm";
import checkIcon from './../assets/check.svg';
import { LanguageContext } from './LanguageContext';
import { usePageTracking } from '../hooks/usePageTracking';
import { fbPixelEvents } from '../utils/fbPixel';
import { useGoogleAnalytics, useFormTracking } from '../hooks/useGoogleAnalytics';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Nuevo estado para controlar el envío exitoso

  const { language } = useContext(LanguageContext);
  
  // Tracking de página - Facebook Pixel
  usePageTracking('Contact Page');
  
  // Tracking de página - Google Analytics
  useGoogleAnalytics('Contact Page');
  
  // Tracking de formulario - Google Analytics
  const { trackFormStart, trackFormComplete, trackFormError } = useFormTracking('contact_form');

  useEffect(() => {
    // Track que el usuario vio la página de contacto
    fbPixelEvents.viewContact();
  }, []);
    const [contactDetails, setContactDetails] = useState({
      name: '',
      email: '',
      phone: ''
    });
    const [location, setLocation] = useState({
      state: '',
      municipality: '',
      country: ''
    });
    // Validación del formulario
    const isFormValid = () => {
      return (
        contactDetails.name.trim() !== '' &&
        contactDetails.email.trim() !== '' &&
        contactDetails.phone.trim() !== '' &&
        location.country.trim() !== ''
      );
    };
   
   
    const handleContactDetailsChange = (details) => {
      setContactDetails(details);
    };
    const handleLocationChange = (location) => {
      setLocation(location);
    };
    
    const submitLeading = async () => {   
      // Track inicio del proceso de contacto - Facebook Pixel
      fbPixelEvents.initiateContact();
      
      // Track inicio del formulario - Google Analytics
      trackFormStart();
      
        let obj = {
          nombre: contactDetails.name,
          correo: contactDetails.email,
          telefono: contactDetails.phone,
          empresa: contactDetails.company,
          productos: "",
          estado: location.country === 'México' ? location.state : location.country + ' - ' + location.state, 
          municipio: location.municipality
        }
        try {
          const response = await fetch('https://quintaapp.com.mx:2999/guardar-datos-cliente-expo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          
          // Track formulario completado exitosamente - Facebook Pixel
          fbPixelEvents.completeContact({
            num_units: number,
            country: location.country,
            company: contactDetails.company || 'Not provided'
          });
          
          // Track formulario completado - Google Analytics
          trackFormComplete({
            num_units: number,
            country: location.country,
            company: contactDetails.company || 'Not provided'
          });
          
          setIsSubmitted(true); // Cambiar el estado a enviado exitosamente
        } catch (error) {
          console.error('Error:', error);
          
          // Track error del formulario - Google Analytics
          trackFormError('submission_failed');
        }
    }
    return (
        <>
        <div className="relative  w-screen bg-neutral-L200 contact">
            <h2 className="flex justify-center block text-base md:text-2xl font-medium text-gray-700 font-['Uncut Sans',_sans-serif] pt-24">
            {language === 'es' ? 'Contacta con nosotros para obtener más información' : 'Contact us for more information'}
            </h2>
            <div className="relative  z-10 flex justify-center h-full bg-gradient-to-b from-custom-gray-2 to-custom-gray-1">
              
                <div className="  flex relative bg-white w-11/12 md:w-8/12 my-10 rounded-2xl border border-slate-200 shadow-lg"> 
                <div className="w-full   m-10">
                {isSubmitted ? ( // Mostrar mensaje de confirmación si se envió correctamente
                <div className="flex flex-col items-center">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="max-w-16 mb-4"
                  />
                  <h2 className="text-4xl font-bold my-4 text-slate-800">
                    {language === 'es' ? '¡Gracias!' : 'Thank you!'}
                  </h2>
                  <p className="text-slate-600 text font-medium font-['Uncut Sans',_sans-serif]">
                    {language === 'es'
                      ? 'Hemos recibido tu información y nos pondremos en contacto contigo lo antes posible.'
                      : 'We have received your information and will contact you as soon as possible.'}
                  </p>
                </div>
              ) : (
                // Mostrar formulario si no se ha enviado
                <>
                  <div className=" rounded-2xl bg-white min-h-72">
                    <ContactDetailsForm
                      onContactDetailsChange={handleContactDetailsChange}
                      initialContactDetails={contactDetails}
                    />

                    <LocationForm
                      onLocationChange={handleLocationChange}
                      initialLocation={location}
                    />
                  </div>
                  <div className="flex justify-between mt-4 w-full">
                    <button
                      className=" py-2 bg-custom-primary text-white rounded disabled:opacity-50 uppercase w-full "
                      disabled={!isFormValid()} // Deshabilitar si el formulario no es válido
                      onClick={submitLeading}
                      aria-label="Submit form"
                    >
                      {language === 'es' ? 'Enviar' : 'Send'}
                    </button>
                  </div>
                </>
              )}
                </div>
                </div>
            </div>
        </div>
      
        </>
    );
}

  
export default ContactForm;