"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function HLeft({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 3 }} //
      className="z-10"
    >
      <div className="pt-5">
        {/* Buttons Link */}
        <Link href="#hero">
          <button className="heroButton">home</button>
        </Link>
        <Link href="#eventos">
          <button className="heroButton">events</button>
        </Link>
        {/* <Link href="#merch">
          <button className="heroButton">merch</button>
        </Link> */}
        <Link href="#contact">
          <button className="heroButton">contact</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default HLeft;
