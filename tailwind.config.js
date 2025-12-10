/** @type {import('tailwindcss').Config} */
export default {
  content: ['./App.html',"./src/*.{html,js}." ,"./src/**"],
  theme: {
    extend: {
      colors: {
        'custom-gray-1': 'rgba(23, 23, 23, 0.09)',
        'custom-gray-2': 'rgba(238, 238, 233, 0.3)',
        'custom-primary' : '#2233B0',
        'custom-secondary' : '#ED0C48',
        'custom-primary-L400': '#3447D8',
        'custom-black': '#1C1C1C',
        'custom-neutro': '#EEEEE9',
        'custom-primary-L300': '#AAB2EE',
        'primary-B': '#2233b0',
        'primary-L200': '#E5EEFF',
        'primary-L300': '#94AAEA',
        'primary-L400': '#3447D8',
        'primary-B500': '#1a2685',
        'primary-B600': '#08125E',
        'secondary-B': '#fc1250',
        'secondary-L200': '#ffd6e1',
        'secondary-L300': '#fcb1c5',
        'secondary-L400': '#f53d6e',
        'secondary-B500': '#d00b40',
        'secondary-B600': '#a50e36',
        'neutral-B': '#7c81b6',
        'neutral-L100': '#f2f3ff',
        'neutral-L200': '#e6e8ff',
        'neutral-L300': '#bec2e5',
        'neutral-L400': '#a9accc',
        'neutral-B500': '#6c7093',
        'neutral-B600': '#3c3d48',
        'danger-B': '#ef0644',
        'danger-L200': '#ffe5e9',
        'danger-L300': '#f9b5be',
        'danger-L400': '#f95d72',
        'danger-B500': '#b8142a',
        'danger-B600': '#a11225',
        'warning-B': '#e3c922',
        'warning-L200': '#fff7c2',
        'warning-L300': '#fbeb84',
        'warning-L400': '#f8e253',
        'warning-B500': '#c2a90a',
        'warning-B600': '#8e810b',
        'success-B': '#22e34c',
        'success-L200': '#ccffd7',
        'success-L300': '#a1e5b0',
        'success-L400': '#79d28c',
        'success-B500': '#14b838',
        'success-B600': '#0a5c1c',
        'info-B': '#2233b0',
        'info-L200': '#cce1ff',
        'info-L300': '#a1bde5',
        'info-L400': '#2374E5',
        'info-B500': '#0f428a',
        'info-B600': '#0a2c5c',
        'black-B': '#15161a',
        'white-B': '#fafaff',
       
      },
      keyframes: {
        fadein: {
          '0%': {   
            /* Effect values */
            opacity: '0',
            transform: 'translateY(50px)'
          
         },
         '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        fadein: 'fadein 2.25s ease-in',
      }
    },
  },
  plugins: [],
}

