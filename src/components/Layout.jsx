import Footer from "./Footer";
import Navbar from "./Navbar";
import { LanguageProvider } from './LanguageContext';
const Layout = ({ children }) => {
    return (
        <>
         <LanguageProvider>
            <Navbar/>
            {children }
            <Footer />
         </LanguageProvider>
        </>
    );
}
export default Layout;