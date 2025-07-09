import { useState } from "react";

const Pqrs = () => {
  // const [formData, setFormData] = useState({
  //   nombre: "",
  //   email: "",
  //   tipo: "Petición",
  //   mensaje: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Aquí podrías conectar con una API o manejar el envío del formulario
  //   alert(`Gracias por tu ${formData.tipo}, ${formData.nombre}. Nos pondremos en contacto.`);
  //   setFormData({ nombre: "", email: "", tipo: "Petición", mensaje: "" });
  // };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#174EB2]">Formulario PQRS</h2>
      
      <form  className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            // value={formData.nombre}
            // onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="tipo">Tipo de solicitud</label>
          <select
            id="tipo"
            name="tipo"
            // value={formData.tipo}
            // onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Petición</option>
            <option>Queja</option>
            <option>Reclamo</option>
            <option>Sugerencia</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            // value={formData.mensaje}
            // onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Pqrs;
