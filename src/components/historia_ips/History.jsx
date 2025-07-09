
import imgClarita from "../../assets/clarita/Clarita SS.png"
const History = () => {
  return (
    <section className="relative max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md my-12">
      <h2 className="text-4xl font-bold text-center mb-9 text-[#174EB2]">
        Historia
      </h2>

      {/* historia de la empresa */}
      <div className="space-y-10 text-gray-700 text-lg">
        <div>
          <h3 className="text-2xl font-semibold mb-2">IPS, Terapias Integrales Domiciliaria</h3>
          <p>
            La IPS Terapias integrales domiciliarias S.A.S se constituyo como sociedad anónima simplificada, el 21 de Julio de 2011, respondiendo a la necesidad del sector de oferta de atenciones en salud domiciliaria con enfoque integral, que garanticen la continuidad de la atención para los usuarios con los mismos estándares de calidad de la atención intrahospitalaria, pero desde la comodidad de su hogar.
            La motivación?... El déficit de camas en la red hospitalaria de Antioquia nos llevo a la creación de una empresa que hoy a pesar de su juventud nos llevo a la creación de una empresa que hoy a pesar de su juventud, lidera procesos y construye oportunidades, no solo para sus pacientes, sino para cientos de colombianos

          </p>

        </div>
        <div className="mt-7">
          <h3 className="text-2xl font-semibold mb-2">Nos caracteriza la EXCELENCIA</h3>
          <p>
            Brindar un excelente servicio será producto de alinearnos con el propósito, los valores y la visión de la compañía.
            Nuestra experiencia positiva inicia desde el saludo de clarita en la recepción, hasta una llamada contestada por la gerencia, para ello constantemente formamos a nuestro personal.
            Así mismo, brindamos un excelente servicio al cliente durante el proceso de venta y mas aún cuando haya finalizado su proceso con nosotros.
          </p>
        </div>

      </div>
      {/* Imagen flotando afuera hacia la derecha */}
      <img
        src={imgClarita}
        alt="Clarita"
        className="block sm:absolute bottom-0 left-0 sm:-left-20 md:-left-44 mt-6 sm:mt-0 w-40 sm:w-52 md:w-64 rounded-xl"
      />
    </section>

  );
};

export default History;
