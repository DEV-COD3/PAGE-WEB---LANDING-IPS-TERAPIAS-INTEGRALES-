import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import walpapper from "../../assets/walppaper/8.jpeg";
import walpapper2 from "../../assets/walppaper/5.jpeg";
import walpapper3 from "../../assets/walppaper/6.jpg";

const slides = [
  {
    title: "IPS Terapias Integrales",
    text: "Atención centrada en el paciente, con servicios profesionales y humanos.",
    bg: walpapper2,
    link1: { href: "https://wa.link/5fj3kj", label: "Solicita tu cita" },
    link2: { href: "/vision_and_mission", label: "Mision vision y valores ", target:"_blank"},
  },
  {
    title: "Tu bienestar es nuestra misión",
    text: "Ofrecemos terapias personalizadas y atención médica domiciliaria.",
    bg: walpapper,
    link1: { href: "https://wa.link/5fj3kj", label: "Solicita tu cita" },
    link2: { href: "/vision_and_mission", label: "Mision vision y valores ", target:"_blank" },
  },
  {
    title: "Confianza, calidad y compromiso",
    text: "Cuidamos tu salud con amor, ética y profesionalismo.",
    bg: walpapper3,
    link1: { href: "https://wa.link/5fj3kj", label: "Solicita tu cita" },
    link2: { href: "/vision_and_mission", label: "Mision vision y valores ", target:"_blank" }, 
  },
];

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="h-screen relative font-sans">
      {/* Flechas */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 p-3 bg-white/30 rounded-full shadow-lg hover:bg-white/50 transition"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 p-3 bg-white/30 rounded-full shadow-lg hover:bg-white/50 transition"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="h-full"
      >
        {slides.map(({ title, text, bg, link1, link2 }, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full flex items-center justify-center bg-cover bg-center relative"
              style={{ backgroundImage: `url(${bg})` }}
            >
              {/* Degradado oscuro */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-0" />

              {/* Contenido */}
              <div className="z-10 max-w-2xl mx-auto text-center space-y-6 text-white px-6 backdrop-blur-sm bg-black/30 rounded-xl py-10">
                <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">{title}</h2>
                <p className="text-lg font-medium text-white/90">{text}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <a
                    href={link1.href}
                    target={link1.target || "_self"}
                    className="px-6 py-3 bg-[#174EB2] rounded-lg font-semibold shadow-lg hover:bg-white hover:text-[#174EB2] transition text-center"
                  >
                    {link1.label}
                  </a>
                  <a
                    href={link2.href}
                    target={link2.target || "_self"}
                    className="px-6 py-3 border border-white rounded-lg font-semibold shadow-lg hover:bg-[#174EB2] hover:text-white transition text-center"
                  >
                    {link2.label}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
