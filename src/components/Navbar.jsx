import { useState, useContext, useEffect } from 'react'
import quintaLogo from '../assets/logo-full.svg'
import quintaLogoBlanco from '../assets/logo-full-blanco.svg'
import { LanguageContext } from './LanguageContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { language, handleLanguageChange } = useContext(LanguageContext);
  const [bgColor, setBgColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleChange = (event) => {
    const newLanguage = event.target.checked ? 'en' : 'es';
    handleLanguageChange(newLanguage);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor('#ffffff'); // Cambia el color de fondo al hacer scroll
      setTextColor('black');
    } else {
      setBgColor('transparent'); // Color de fondo inicial
      setTextColor('white');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const content = {
    es: {
      products: 'Productos',
      products_items: {
        online_tire_store: 'Tienda en Línea de llantas',
        tire_management: 'Gestión de llantas',
        yard_in_out_management: 'Gestión de entradas y salidas de patios',
        fleet_tire_purchase: 'Compra de llantas para flotas'
      },
      resources: 'Nosotros',
      resources_items: {

        blog: 'Blog',

      },
      contact: 'Contacto',
      contact_items: {
        affiliated_workshops: 'Talleres afiliados',
        tire_sales: 'Venta de llantas',
        marketing: 'Comercializar'
      },
      login: 'Iniciar Sesión',
      login_items: {
        quinta_tech: 'quinta.tech',

      }
    },
    en: {
      products: 'Products',
      products_items: {
        online_tire_store: 'Online Tire Store',
        tire_management: 'Tire Management',
        yard_in_out_management: 'Yard In-Out Management',
        fleet_tire_purchase: 'Fleet Tire Purchase'
      },
      resources: 'About Us',
      resources_items: {

        blog: 'Blog',

      },
      contact: 'Contact',
      contact_items: {
        affiliated_workshops: 'Affiliated Workshops',
        tire_sales: 'Tire Sales',
        marketing: 'Marketing'
      },
      login: 'Log In',
      login_items: {
        quinta_tech: 'quinta.tech',

      }
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav style={{ backgroundColor: bgColor }} className='fixed w-full z-40 top-0 start-0'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={textColor == 'white' ? quintaLogoBlanco : quintaLogo} className="h-12" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <label className="switch rounded-full flex flex-row items-center p-2">
            <input type="checkbox" className="hidden" name="lan-switch" checked={language === 'en'} onChange={handleChange} />
            <div className="slider rounded-full shadow-lg"></div>
          </label>

          <span className="ml-2 flex text-black items-center font-['Uncut Sans-Semibold',_sans-serif]" style={{ color: textColor }}>{language === 'es' ? 'Eng' : 'Esp'}</span>
          <button data-collapse-toggle="navbar-sticky" onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-label="navbar-sticky"
            aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div >
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:rounded-full bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700'>
             <li className='relative group block hover:blue md:bg-transparent text-white md:p-3 ' >
              <a href="#contact">{content[language].contact}</a>
            </li>
            <li className='relative group block hover:blue md:bg-transparent text-white md:p-3 ' aria-current="page">
              <a to="#">{content[language].resources}</a>
              <ul className="absolute z-40 left-0 w-10/12 md:w-72 hidden mt-2 space-y-2 bg-white text-black border  border-gray-100 rounded-lg shadow-lg group-hover:block group-focus-within:block">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="https://www.blog.quinta.tech/" target='_blank'>
                    {content[language].resources_items.blog}
                  </a>
                </li>
              </ul>
            </li>
           
            <li className='relative group block hover:blue md:bg-transparent text-white md:p-3 ' aria-current="page">
              <a href="https://tms.quinta.tech/" target='_blank'>{content[language].login}</a>
            </li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </nav>
  )
}
export default Navbar
