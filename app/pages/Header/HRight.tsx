import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
type Props = {};

function HRight({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 3 }} //
      className="z-10"
    >
      {/* Social Icons */}
      <div className="flex flex-row items-center w-auto ">
        {/* Whatsapp */}
        <SocialIcon
          target="_blank"
          url="https://wa.me/49017621922864"
          network="whatsapp"
          fgColor="white"
          bgColor="transparent"
          className="heroSocial"
        />
        {/* LinkedIn */}
        <SocialIcon
          target="_blank"
          url="https://www.instagram.com/enburroeviaje/"
          fgColor="white"
          bgColor="transparent"
          className="heroSocial"
        />
        {/* Github */}
        <SocialIcon
          target="_blank"
          url="https://www.tiktok.com/@enburroeviaje"
          fgColor="white"
          bgColor="transparent"
          className="heroSocial"
        />
        {/* Email */}
        {/* <SocialIcon
          target="_blank"
          url=""
          fgColor="white"
          network="email"
          bgColor="transparent"
          className="heroSocial"
        /> */}
      </div>
    </motion.div>
  );
}

export default HRight;
