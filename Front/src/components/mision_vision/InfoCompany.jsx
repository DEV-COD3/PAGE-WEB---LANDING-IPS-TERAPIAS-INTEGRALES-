const InfoCompany = () => {
  return (
    <section className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md my-12">
      <h2 className="text-4xl font-bold text-center mb-9 text-[#174EB2]">
        Misión, Visión y Valores
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Valores */}
        <div>
          <h3 className="text-2xl text-gray-700 font-semibold mb-2">Valores Institucionales</h3>
          <ul className="list-inside space-y-2 text-gray-700 text-lg">
            <li><strong>- Pasión:</strong> ¡Da lo mejor de ti! En todo lo que hagas y con quien te rodeas, imprégnalos de tu compromiso, positivismo, amor, entrega, atención y servicio</li>
            <li><strong>- Innovación:</strong> ¡La sacamos del estadio! Le entregamos a nuestra compañía nuevas ideas creativas a través del desarrollo de los talentos únicos de nuestros ingeniosos coequiperos</li>
            <li><strong>- Comunidad:</strong> ¡Contigo! Valoramos tus aportes e incentivamos tus capacidades para que en unidad, desarrollemos habilidades hacia la construcción de una comunidad consciente, respetuosa y en paz</li>
            <li><strong>- Integridad:</strong> ¡Dignos de confianza! Honramos la confianza que nuestros pacientes han depositado en nosotros cumpliendo con los más altos principios éticos, profesionalismo, honestidad, respeto y lealtad</li>
          </ul>
        </div>

        {/* Misión y Visión */}
        <div className="space-y-10 text-gray-700 text-lg">
          {/* Misión */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Misión</h3>
            <p>
              
            </p>
          </div>

          {/* Visión */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Visión</h3>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCompany;
