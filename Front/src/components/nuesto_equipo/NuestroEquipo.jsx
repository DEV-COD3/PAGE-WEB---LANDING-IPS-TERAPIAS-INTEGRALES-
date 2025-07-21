import { useState } from "react";
import sphere2 from "../../assets/images/Ellipse 2.png";
import sphere3 from "../../assets/images/Ellipse 3.png";

import doctor1 from "../../assets/gallery/1.jpg";
import doctor2 from "../../assets/gallery/2.jpg";
import doctor3 from "../../assets/gallery/3.jpg";
import doctor4 from "../../assets/gallery/4.jpeg";
import doctor5 from "../../assets/gallery/5.jpg";
import doctor6 from "../../assets/gallery/6.jpg";
import doctor7 from "../../assets/gallery/7.jpeg";
import doctor8 from "../../assets/gallery/8.jpeg";

const NuestroEquipo = () => {
  const photos = [
    doctor1, doctor2, doctor3, doctor4,
    doctor5, doctor6, doctor7, doctor8,
  ];
  const [modalImage, setModalImage] = useState(null);

  return (
    <section id="equiped" className="relative bg-gradient-to-b from-blue-50 to-blue-100 py-20 px-4 sm:px-6">
      {/* Decoraciones */}
      <img className="absolute left-0 top-0 w-20 sm:w-28 opacity-10" src={sphere2} alt="" />
      <img className="absolute right-0 bottom-0 w-20 sm:w-28 opacity-10" src={sphere3} alt="" />

      {/* Encabezado */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 data-aos="fade-down" className="text-4xl font-bold text-gray-800 mb-4 relative inline-block after:block after:h-1 after:bg-blue-600 after:w-20 after:mx-auto after:mt-2">
          Nuestro equipo
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-700 text-lg max-w-2xl mx-auto"
        >
          Conoce a los rostros que hacen posible nuestra labor en Terapias Integrales Domiciliarias.
        </p>
      </div>

      {/* Galería style collage manito */}
      <div className="max-w-6xl mx-auto grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px]">
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setModalImage(photo)}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group transition-transform duration-300 hover:scale-105 
              ${i % 5 === 0 ? 'col-span-2 row-span-2' : ''}
            `}
          >
            <img
              src={photo}
              alt={`Miembro del equipo ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Zoom icon */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 4.553a1 1 0 01-1.415 1.414L13.586 12H12a5 5 0 11.17-9.995A5 5 0 0112 12h1.586z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal ampliación */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4 sm:p-6"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={modalImage}
              alt="Imagen ampliada"
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
              aria-label="Cerrar imagen"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default NuestroEquipo;
