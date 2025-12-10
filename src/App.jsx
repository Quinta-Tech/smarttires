import './App.css'
import { Outlet } from "react-router-dom";
import './tailwind.css';
import Layout from "./components/Layout";
import { useEffect } from 'react';
import { initFacebookPixel } from './utils/fbPixel';
import { initGA } from './utils/googleAnalytics';

function App() {
  useEffect(() => {
    // Inicializar Facebook Pixel cuando la app se monta
    initFacebookPixel();
    
    // Inicializar Google Analytics cuando la app se monta
    initGA();
  }, []);

  return (
    <Layout>
        <Outlet />
    </Layout>
  )
}

export default App
