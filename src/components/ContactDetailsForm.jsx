import React, { useState, useEffect,useContext } from 'react';
import { LanguageContext } from './LanguageContext';
const ContactDetailsForm = ({  onContactDetailsChange, initialContactDetails }) => {
  const [contactDetails, setContactDetails] = useState(initialContactDetails);
  const [emailError, setEmailError] = useState('');
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    setContactDetails(initialContactDetails);
  }, [initialContactDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    onContactDetailsChange({ ...contactDetails, [name]: value });
    if (name === 'email') {
        if (!validateEmail(value)) {
          setEmailError(language === 'es' ? 'Correo electrónico no válido' : 'Invalid email address');
        } else {
          setEmailError('');
        }
      }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
         
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
            <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    {language === 'es' ? 'Nombre Completo' : 'Full Name'} <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactDetails.name}
                    onChange={handleChange}
                    placeholder={language === 'es' ? 'Ingresa tu nombre' : 'Enter your name'}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    required
            />
            </div>
    
            <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    {language === 'es' ? 'Correo Electrónico' : 'Email'} <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactDetails.email}
                    onChange={handleChange}
                    placeholder={language === 'es' ? 'correo@ejemplo.com' : 'email@example.com'}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    required
                />
                 {emailError && <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                   </svg>
                   {emailError}
                 </p>}
            </div>
            <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    {language === 'es' ? 'Número de Teléfono' : 'Phone Number'} <span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactDetails.phone}
                    onChange={handleChange}
                    placeholder={language === 'es' ? '+52 123 456 7890' : '+1 234 567 8900'}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    required
                />
            </div>
            <div>
                <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    {language === 'es' ? 'Empresa' : 'Company'}
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={contactDetails.company}
                    onChange={handleChange}
                    placeholder={language === 'es' ? 'Nombre de tu empresa' : 'Your company name'}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
            </div>
        </div>
    </div>
  );
};

export default ContactDetailsForm;