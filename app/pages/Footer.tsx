import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import HLeft from "./Header/HLeft";
import HRight from "./Header/HRight";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-gray-900 w-full -mb-5">
      <div className="w-full border border-gray-300"></div>
      <div className="flex justify-center">
        <div className="flex gap-2 flex-col items-center">
          <div className="pt-5">
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
              network="email"
              fgColor="white"
              bgColor="transparent"
              className="heroSocial"
            /> */}
          </div>
          <div className="pb-5">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
