import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Landing from './Landing';
import Footer from './components/footer/Footer';
import Pqrs from './components/PQRS/Pqrs';
import NoValid from './components/RouteInvalid/NoValid';
import InfoCompany from './components/mision_vision/InfoCompany'
import  History  from './components/historia_ips/History';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

useEffect(() => {
  AOS.init({
    duration: 1000, // duración de las animaciones
    // once: true,     // animar solo una vez al hacer scroll
  });
}, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden font-sans bg-white">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="*" element={<NoValid />} /> {/* Ruta comodín */}
          <Route path="/" element={<Landing/>} />
          <Route path="/PQRS" element={<Pqrs/>} />
          <Route path="/vision_and_mission" element={<InfoCompany/>} />
          <Route path="/history" element={<History/>} />
        </Routes>
        <Footer/>
      </main>
    </div>
  );
}
export default App;
