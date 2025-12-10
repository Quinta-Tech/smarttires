import { useState, useEffect ,useContext} from 'react';
import { Estados } from './../utils/estados.js';
import { LanguageContext } from './LanguageContext';
const LocationForm = ({  onLocationChange, initialLocation }) => {
  const [location, setLocation] = useState(initialLocation);
  const { language } = useContext(LanguageContext);

  let countries = [
    "Francia", "España", "EEUU", "Italia", "Turquía", "México", "Reino Unido", "Alemania", "Grecia", "Austria",
    "Tailandia", "Emiratos Árabes Unidos", "Arabia Saudí", "Portugal", "Japón", "Países Bajos", "Malasia", "Polonia",
    "Canadá", "Hong Kong (China)", "Egipto", "Marruecos", "Macao (China)", "Hungría", "Vietnam", "Corea del Sur",
    "Albania", "Túnez", "Sudáfrica", "República Dominicana", "Suecia", "Argentina", "Australia", "Uzbekistán", "Taiwan",
    "Irlanda", "Brasil", "Irán", "Colombia", "Baréin", "Camboya", "Jordania", "Puerto Rico", "Filipinas", "Georgia",
    "Catar", "Andorra", "Chipre", "Uruguay", "Chile"
  ];
  countries = countries.sort();
  
  countries.sort();
  const municipalities =  [
    { value: 'Amealco de Bonfil', label: 'Amealco de Bonfil' },
    { value: 'Arroyo Seco', label: 'Arroyo Seco' },
    { value: 'Cadereyta de Montes', label: 'Cadereyta de Montes' },
    { value: 'Colón', label: 'Colón' },
    { value: 'Corregidora', label: 'Corregidora' },
    { value: 'El Marqués', label: 'El Marqués' },
    { value: 'Ezequiel Montes', label: 'Ezequiel Montes' },
    { value: 'Huimilpan', label: 'Huimilpan' },
    { value: 'Jalpan de Serra', label: 'Jalpan de Serra' },
    { value: 'Landa de Matamoros', label: 'Landa de Matamoros' },
    { value: 'Pedro Escobedo', label: 'Pedro Escobedo' },
    { value: 'Peñamiller', label: 'Peñamiller' },
    { value: 'Pinal de Amoles', label: 'Pinal de Amoles' },
    { value: 'Querétaro', label: 'Querétaro' },
    { value: 'San Joaquín', label: 'San Joaquín' },
    { value: 'San Juan del Río', label: 'San Juan del Río' },
    { value: 'Tequisquiapan', label: 'Tequisquiapan' },
    { value: 'Tolimán', label: 'Tolimán' }
  ];
  useEffect(() => {
    setLocation(initialLocation);
  }, [initialLocation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value,
    }));
    onLocationChange({ ...location, [name]: value });
  };

  return (
    <div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="country" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {language === 'es' ? 'País' : 'Country'} <span className="text-red-500">*</span>
              </label>
              <select
                  id="country"
                  name="country"
                  value={location.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none cursor-pointer"
                  required
              >
                  <option value="" disabled>
                  {language === 'es' ? 'Selecciona un país' : 'Select a country'}
                  </option>
                  {countries.map((country) => (
                  <option key={country} value={country}>
                      {country}
                  </option>
                  ))}
              </select>
            </div>

            {location.country === 'México' && (
            <div>
            <label htmlFor="state" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {language === 'es' ? 'Estado' : 'State'}
            </label>
            <select
                id="state"
                name="state"
                value={location.state}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none cursor-pointer"
                required
            >
                <option value="" disabled>
                {language === 'es' ? 'Selecciona un estado' : 'Select a state'}
                </option>
                {Estados.map((state) => (
                <option key={state.nombre} value={state.nombre}>
                    {state.nombre}
                </option>
                ))}
            </select>
            </div>
            )}
            
            {location.state === 'QUERETARO' && (
            <div>
            <label htmlFor="municipality" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                {language === 'es' ? 'Municipio' : 'Municipality'}
            </label>
            <select
                id="municipality"
                name="municipality"
                value={location.municipality}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none cursor-pointer"
                required
            >
                <option value="" disabled>
                {language === 'es' ? 'Selecciona un municipio' : 'Select a municipality'}
                </option>
                {municipalities.map((municipality) => (
                <option key={municipality.value} value={municipality.value}>
                    {municipality.label}
                </option>
                ))}
            </select>
            </div>
        )}
        </div>
    </div>
  );
};

export default LocationForm;