import aliado1 from "../../assets/aliados/partner1.png";
import aliado2 from "../../assets/aliados/partner2.png";
import aliado3 from "../../assets/aliados/partner3.png";
import aliado4 from "../../assets/aliados/partner4.png";
import aliado5 from "../../assets/aliados/aliado5.png";
import aliado6 from "../../assets/aliados/aliado6.jpg";
import aliado7 from "../../assets/aliados/aliado7.jpeg";
import aliado8 from "../../assets/aliados/aliado8.jpeg";

const aliados = [
  { src: aliado1, alt: "Aliado 1" },
  { src: aliado2, alt: "Aliado 2" },
  { src: aliado3, alt: "Aliado 3" },
  { src: aliado4, alt: "Aliado 4" },
  { src: aliado5, alt: "Aliado 5" },
  { src: aliado6, alt: "Aliado 6" },
  { src: aliado7, alt: "Aliado 7" },
  { src: aliado8, alt: "Aliado 8" },
];

const NuestrosAliados = () => {
  return (
    <section id="aliados" className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block after:block after:h-1 after:bg-blue-600 after:w-20 after:mx-auto after:mt-2">
          Nuestros Aliados
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Colaboramos con organizaciones que comparten nuestra pasión por brindar atención integral y de calidad.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
          {aliados.map((aliado, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={aliado.src}
                alt={aliado.alt}
                className="w-full max-h-32 object-contain mx-auto  transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosAliados;
