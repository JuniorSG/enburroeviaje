"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "En Burro e viaje",
      " No somos el tipico podcast... ",
      " Tampoco queremos serlo ",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <Image
        src="/img/bevfondo.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
        fill // Ahora usas fill en lugar de layout
        style={{ objectFit: "cover" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 4 }} //
        className="z-10"
      >
        <Image
          src="/img/bev.png"
          alt="Imagen del evento"
          width={400}
          height={400}
        />
      </motion.div>

      {/* <div className="z-20">
        <h1 className="text-2xl lg:text-3xl front-semibold px-10">
          <span className="mr-3 text-cyan-400 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div> */}
    </div>
  );
}

export default Hero;
