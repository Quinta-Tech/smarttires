import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tailwind.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import ContactForm from './components/ContactForm.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import App from './App.jsx'

import RLB400 from './components/RLB400Demo/RLB400Demo.tsx';
import RR150 from './components/RR150Demo/RR150Demo.tsx';
import FR610 from './components/FR610Demo/FR610Demo.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "contact",
        element: <ContactForm />

      },
      {
        path: "rlb-400",
        element: <RLB400 />
      },
      {
        path: "rr-150",
        element: <RR150 />
      },
      {
        path: "fr-610",
        element: <FR610 />
      }
    /*   {
        path: "privacy-policy",
        element: <PrivacyPolicy />
      }, */
    
     

    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
