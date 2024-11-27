import React from "react";

type Props = {
  title: string;
  lugar: string;
  informacion: string;
  img: string;
  available: boolean;
  fecha: string[];
  onImageClick: (imageUrl: string) => void; // Función para pasar la URL de la imagen
};

function ShowsComponents({
  title,
  lugar,
  informacion,
  img,
  available,
  fecha,
  onImageClick,
}: Props) {
  return available ? (
    <div className="flex flex-col sm:flex-row gap-1 items-center min-w-20 min-h-20">
      <div
        className="transform transition-all duration-300 hover:scale-110"
        onClick={() => onImageClick(img)} // Llamar a la función cuando se hace clic
      >
        <img
          src={img}
          alt="Imagen del evento"
          width={80}
          height={80}
          className="cursor-pointer"
        />
      </div>
      <div className="group flex justify-between w-full items-center relative overflow-hidden">
        <div className="ml-5 flex items-center gap-10 justify-between w-full transition-transform duration-300 ease-in-out group-hover:translate-x-[-100%]">
          <div className="flex items-center gap-5 w-1/2">
            <div className="flex flex-col sm:flex-row sm:gap-5">
              <div className="flex gap-2">
                <h1 className="text-1xl sm:text-5xl">{fecha[0]}</h1>
                <div className="flex sm:flex-col gap-2 sm:gap-0">
                  <h3 className="text-gray-600 group-hover:text-gray-500">
                    {fecha[1]}
                  </h3>
                  <h3 className="">{fecha[2]}</h3>
                </div>
              </div>
              <p className="text-pink-300 text-xl sm:text-3xl transition-transform duration-300 transform group-hover:translate-x-[-100%]">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center absolute inset-0 bg-transparent p-4 transition-transform duration-500 transform translate-x-full group-hover:translate-x-0">
          <h2 className="text-2xl font-semibold ">{lugar}</h2>
          <p className="text-gray-400">{informacion}</p>
        </div>
      </div>
      <div>
        <button className="bg-gray-400 text-gray-900 border border-gray-500 rounded-full px-5 py-1 mt-2 sm:mt-0 sm:px-6 sm:py-2 hover:bg-gray-300 hover:text-blue-700">
          Asistir
        </button>
      </div>
    </div>
  ) : (
    <div className="crime-tape">
      <div className="bg-black bg-opacity-60 h-full w-full">
        <h1 className="text-gray-300 text-3xl flex justify-center h-full w-full items-center whitespace-nowrap animate-move-left-right">
          MUY PRONTO • COMING SOON • KOMMT BALD • JUŻ WKRÓTCE • À VENIR •
          PROSSIMAMENTE
        </h1>
      </div>
    </div>
  );
}

export default ShowsComponents;
