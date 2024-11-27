"use client";

import React, { useState } from "react";
import ShowsComponents from "./components/ShowsComponents";
import Image from "next/image";

type Props = {};

function Eventos({}: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="w-screen h-screen bg-black flex flex-col gap-10 justify-center items-center">
      {/* <h1 className="text-3xl">EVENTS</h1> */}

      {/* Pantalla principal con la imagen seleccionada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            className="max-w-full max-h-full object-contain"
            src={selectedImage}
            alt="Imagen del evento"
            onClick={() => setSelectedImage(null)}
            layout="fill"
            // objectFit="contain"
          />
        </div>
      )}

      <div className="w-3/5 flex flex-col gap-5 sm:gap-5">
        <ShowsComponents
          title="Magic Forest"
          informacion="Eisenbahnstraße 98, 04315"
          lugar="Germany / Leipzig"
          fecha={["29", "Fri", "Nov"]}
          img="/img/MagincForest.jpeg"
          available={true}
          onImageClick={handleImageClick}
        />
        <div className="w-full border border-gray-400"></div>
        <ShowsComponents
          title="Magic Forest" //title
          informacion="Eisenbahnstraße 98, 04315" //informacion
          lugar="Germany / Leipzig" //lugar
          fecha={["29", "Fri", "Nov"]} //fecha
          img="/img/MagincForest.jpeg" //imagen
          available={false} //disponibilidad
          onImageClick={handleImageClick}
        />
        <div className="w-full border border-gray-400"></div>
        <ShowsComponents
          title="Magic Forest"
          informacion="Eisenbahnstraße 98, 04315"
          lugar="Germany / Leipzig"
          fecha={["29", "Fri", "Nov"]}
          img="/img/MagincForest.jpeg"
          available={false}
          onImageClick={handleImageClick}
        />
        <div className="w-full border border-gray-400"></div>
        <ShowsComponents
          title="Magic Forest"
          informacion="Eisenbahnstraße 98, 04315"
          lugar="Germany / Leipzig"
          fecha={["29", "Fri", "Nov"]}
          img="/img/MagincForest.jpeg"
          available={false}
          onImageClick={handleImageClick}
        />
      </div>
    </div>
  );
}

export default Eventos;
