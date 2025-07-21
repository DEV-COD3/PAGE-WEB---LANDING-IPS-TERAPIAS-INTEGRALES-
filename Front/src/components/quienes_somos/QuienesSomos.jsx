import facility1 from "../../assets/quienes_somos/2.jpeg";
import facility2 from "../../assets/quienes_somos/6.jpg";

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block after:block after:h-1 after:bg-blue-600 after:w-20 after:mx-auto after:mt-2">
            ¿ Quienes Somos ?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            En <span className="text-blue-700 font-semibold">IPS Terapias Integrales</span>, nos especializamos en ofrecer atención médica domiciliaria con calidad humana, profesionalismo y compromiso. Creemos que el bienestar del paciente inicia en el hogar, por eso diseñamos terapias y servicios personalizados.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            <span className="text-blue-700 font-semibold">Propósito :</span>¡Somos tú! En tu hogar, en tu tiempo y en confianza cuidamos tu vida
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            <span className="text-blue-700 font-semibold">Propuesta de valor :</span>En tu hogar recibes soluciones de salud, seguras, humanizadas e innovadoras
          </p>
          <a
              href={"/history"}
              target={"_blank"}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md font-semibold shadow-lg  hover:bg-blue-700 transition"
              >
            Mira nuestra historia
            </a>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <img src={facility1} alt="Instalación 1" className="rounded-lg shadow-lg" />
          <img src={facility2} alt="Instalación 2" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
 