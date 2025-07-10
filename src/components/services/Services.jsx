import { useState } from "react";
import services from "../../assets/services";
import { useDisclosure } from "@heroui/modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@heroui/button";
// modal hero 
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";

const Service = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [modalData, setModalData] = useState({ name: "", moreInfo: "" });

  const eOpenModal = (service) => {
    setModalData({
      name: service.name,
      moreInfo: service.moreInfo,
    });
    onOpen();
  };


  return (
    <section
      id="services"
      className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block after:block after:h-1 after:bg-blue-600 after:w-20 after:mx-auto after:mt-2">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Descubre cómo podemos ayudarte a mejorar tu bienestar con atención integral y personalizada.
          </p>
        </div>
        {/* Swiper de servicios */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 ease-in-out group">
                {/* Ícono */}
                <div className="bg-[#174EB2] p-5 rounded-full mb-6 shadow-md group-hover:scale-110 transition">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-12 h-12 object-contain  "
                  />
                </div>
                {/* Título */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {service.name}
                </h3>
                <Button onPress={() => eOpenModal(service)}
                  className="mt-6 px-5 py-2 bg-[#174EB2] text-white text-sm rounded-full hover:bg-blue-700 transition">
                  Más información
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* modal inicio */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"> {modalData.name} </ModalHeader>
                <ModalBody class="whitespace-pre-line px-5">
                  <p>
                    {modalData.moreInfo}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        {/* modal final */}
      </div>
    </section>
  );
};

export default Service;
