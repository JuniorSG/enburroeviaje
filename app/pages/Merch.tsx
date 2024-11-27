import Image from "next/image";
import React from "react";

type Props = {};

function Merch({}: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col gap-10 justify-around items-center">
      {/* Hot Sales */}
      <div className="w-full">
        {/* Item 1 */}
        <div className="flex flex-row justify-evenly mt-10">
          <div>
            <div className="relative w-[350px] h-[350px] -top-[10%]">
              <div className="absolute bg-white z-15">
                <h1 className="text-gray-200">ASDJASJDASJD</h1>
              </div>
              <div className="absolute bg-pink-200 h-[400px] w-[400px] inset-0 z-0"></div>
              <Image
                className="absolute inset-[28%] z-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqL4HHX1VK778KPxO_q-yWJNctFzj34RMw&usqp=CAU"
                alt="Imagen del evento"
                width={350}
                height={350}
              />
            </div>
          </div>
          {/* Item 2 */}
          <div>
            <div className="relative w-[350px] h-[350px] -bottom-[10%]">
              <div className="absolute bg-pink-200 h-[400px] w-[400px] inset-0 z-0"></div>
              <Image
                className="absolute inset-[28%] z-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqL4HHX1VK778KPxO_q-yWJNctFzj34RMw&usqp=CAU"
                alt="Imagen del evento"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carrousel */}
      <div className="flex w-[80%] gap-20 transition-transform justify-center bg-black duration-300 ease-in-out">
        <div className="min-w-[150px]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqL4HHX1VK778KPxO_q-yWJNctFzj34RMw&usqp=CAU"
            alt="Imagen del evento"
            width={150}
            height={150}
          />
          <p className="text-center mt-2">Camiseta</p>
        </div>

        <div className="min-w-[150px]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqL4HHX1VK778KPxO_q-yWJNctFzj34RMw&usqp=CAU"
            alt="Imagen del evento"
            width={150}
            height={150}
          />
          <p className="text-center mt-2">Chaqueta</p>
        </div>

        <div className="min-w-[150px]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqL4HHX1VK778KPxO_q-yWJNctFzj34RMw&usqp=CAU"
            alt="Imagen del evento"
            width={150}
            height={150}
          />
          <p className="text-center mt-2">Jeans</p>
        </div>

        <div className="min-w-[150px]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqL4HHX1VK778KPxO_q-yWJNctFzj34RMw&usqp=CAU"
            alt="Imagen del evento"
            width={150}
            height={150}
          />
          <p className="text-center mt-2">Vestido</p>
        </div>
      </div>
    </div>
  );
}

export default Merch;
