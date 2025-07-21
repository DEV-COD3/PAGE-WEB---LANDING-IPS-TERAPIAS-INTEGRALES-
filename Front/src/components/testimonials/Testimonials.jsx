
const testimonials = [
  {
    name: "Sulima Quintero",
    age: 35,
    photo: "https://i.pravatar.cc/150?img=47",
    text: "El equipo médico fue muy atento y profesional. Me sentí cuidada en todo momento.",
  },
  {
    name: "Lina Maria",
    age: 42,
    photo: "https://i.pravatar.cc/150?img=33",
    text: "Recibí un tratamiento excelente en casa, muy recomendado el servicio.",
  },
  {
    name: "Dr Maria Isabel",
    age: 29,
    photo: "https://i.pravatar.cc/150?img=56",
    text: "Gracias a su atención domiciliaria pude recuperarme con tranquilidad en mi hogar.",
  },{
    name: "Clinica Heridas",
    age:23,
    photo:"https://i.pravatar.cc/150?img=56",
    text:""
  }
];

const Testimonials = () => {

  return (
    <section id="testimonials" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4 sm:px-8 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 data-aos="fade-down" className="text-4xl font-bold text-gray-800 mb-4 relative inline-block after:block after:h-1 after:bg-blue-600 after:w-20 after:mx-auto after:mt-2">
          Testimonios 
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Experiencias misionales
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <div
            key={i}           
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <img
              src={item.photo}
              alt={item.name}
              className="w-30 h-30 object-cover rounded-full border-4 border-blue-200 mb-4"
            />
            <h4 className="text-lg font-semibold">{item.name}, {item.age}</h4>
            <p className="text-gray-600 italic mt-3">"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
