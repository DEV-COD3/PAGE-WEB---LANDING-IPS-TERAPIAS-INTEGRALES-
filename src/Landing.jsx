import Banner from "./components/banner/Banner";
import NuestroEquipo from "./components/nuesto_equipo/NuestroEquipo";
import QuienesSomos from "./components/quienes_somos/QuienesSomos";
import NuestrosAliados from "./components/aliados/NuestrosAliados";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

const Landing = () => {
  return (
    <>
      <Banner />
      <QuienesSomos/>
      <NuestrosAliados />
      <Services />
      <NuestroEquipo />
      <Testimonials />
    </>
  );
};

export default Landing;
