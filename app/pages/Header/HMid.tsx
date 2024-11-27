"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

function HMid({}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`flex h-auto w-auto flex-row items-center image-container"
      }`}
    >
      <Image
        src="/img/LogoLetra.png"
        alt="Imagen del evento"
        width={200}
        height={200}
      />
    </div>
  );
}

export default HMid;
