import footerImage from "../../assets/images/footer logo.png";
import ellipse4 from "../../assets/images/Ellipse 4.png";
import ellipse5 from "../../assets/images/ellipse5.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#174EB2] text-white pt-12 pb-6 overflow-hidden">
      {/* Fondos decorativos */}
      <img
        src={ellipse4}
        alt="decorative ellipse"
        className="absolute top-0 left-0 w-40 opacity-30 pointer-events-none select-none"
      />
      <img
        src={ellipse5}
        alt="decorative ellipse"
        className="absolute bottom-0 right-0 w-40 opacity-30 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo y mensaje */}
        <div className="flex flex-col items-center md:items-start">
          <img src={footerImage} alt="Footer logo" className="w-32 mb-4" />
          <p className="text-center md:text-left text-gray-300 italic leading-relaxed">
            ¡Gracias por estar aquí,<br /> gracias por ser tú!
          </p>
        </div>

        {/* Ubicación */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Donde estamos</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Cra. 76 #49b-10</li>
            <li>Medellín</li>
            <li>Colombia</li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Nuestras redes sociales</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-500 transition"
              >
                Instagram@.com
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contáctenos</h4>
          <ul className="space-y-2 text-gray-400">
            <li>+57 315 5866867</li>
            <li>
              <a
                href="mailto:siau@ipstid.com"
                className="hover:text-blue-400 transition"
              >
                siau@ipstid.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* autor*/}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Developers
      </div>
    </footer>
  );
};

export default Footer;
