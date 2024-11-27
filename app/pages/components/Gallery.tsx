"use client";

import { useState } from "react";
import Image from "next/image";

const Gallery = ({ img }: { img: string }) => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true); // Mostrar el modal al hacer clic en la imagen
  };

  const handleCloseModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  return (
    <div>
      {/* Imagen con hover */}
      <div className="transform transition-all duration-300 hover:scale-110 cursor-pointer">
        <Image
          src={img}
          alt="Imagen del evento"
          width={80} // Ancho de la imagen
          height={80} // Alto de la imagen
          onClick={handleImageClick} // Al hacer clic, se abre el modal
        />
      </div>

      {/* Modal (aparece si showModal es true) */}
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 opacity-0 transition-opacity duration-300 ease-in-out"
          style={{ opacity: showModal ? 1 : 0 }} // Opacidad para la transición
          onClick={handleCloseModal} // Cerrar modal al hacer clic fuera de la imagen
        >
          <div
            className="relative bg-white p-4 rounded-lg transition-all duration-300 transform scale-90 opacity-0"
            style={{
              opacity: showModal ? 1 : 0, // Hacer aparecer el contenido
              transform: showModal ? "scale(1)" : "scale(0.9)", // Escala para la animación
            }}
          >
            <Image
              src={img}
              alt="Imagen ampliada"
              width={600} // Tamaño grande de la imagen
              height={600} // Tamaño grande de la imagen
            />
            {/* Botón para cerrar el modal */}
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
