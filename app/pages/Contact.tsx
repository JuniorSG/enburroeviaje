"use client";

import React from "react";
import Footer from "./Footer";
import ContactCards from "./ContactCards";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-evenly items-center">
      <ContactCards />
    </div>
  );
}
