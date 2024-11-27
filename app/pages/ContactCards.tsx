import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ContactCards({}: Props) {
  return (
    <div className="flex justify-center translate-y-10 gap-10 w-full items-center">
      <motion.div
        initial={{ opacity: 0, x: 600 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }} //
        className="w-[25%] text-justify"
      >
        <h3 className="translate-y-10">
          We are a group of young people with a common purpose: a love for art.
          Comprised of singers, DJs, and editors, each of us brings our talent
          and vision to a project born from the conviction that music and art
          are powerful tools to change the world. Our mission is clear: we want
          to be a source of inspiration for all those young people starting to
          explore the world of music and DJing, showing them that it’s worth
          fighting for their dreams. We know how difficult it can be to take
          that first step in the arts. Uncertainty, lack of support, or
          frustration can lead many to give up before reaching their goals.
          That’s why our mission is not only to follow our own dreams but also
          to help others not lose hope. We want emerging talents to feel
          supported, to know that with effort and dedication, they can make it.
          Art has the power to unite and transform us, and we are here to foster
          that journey, because we firmly believe it’s possible to build a
          career through passion.
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 10 }}
        transition={{ duration: 4 }} //
        className="w-[25%]"
      >
        <Image
          src="/img/LogoLetra.png"
          alt="Imagen del evento"
          width={400}
          height={400}
        />
        <div className="-translate-x-3 mt-5">
          <div className="rounded-full border-[5px] border-white">
            <div className="rounded-full border-[20px] border-black">
              <div className="rounded-full border-[5px] border-white">
                <Link
                  href="https://calendly.com/op-jasg/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/img/FondoC.jpeg"
                    alt="Imagen del evento"
                    width={600}
                    height={550}
                    className="rounded-full"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="https://calendly.com/op-jasg/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="translate-x-3 rounded-md bg-gradient-to-tr from-[#ffcccc] to-[#ff6666] hover:from-[#000000] hover:to-[#ff6666] hover:text-white text-black p-2 w-[400px]">
                ¡Contact us!
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -600 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }} //
        className="w-[25%] text-justify"
      >
        <h3 className="translate-y-10">
          In the future, our vision is to become a showcase for all those
          artists, musicians, and creators seeking a space to display their
          talent. We want to be a meeting point for those who, like us, have art
          as the driving force of their lives. In this space, it’s about
          loyalty, respect, and love for what we do—principles that guide each
          of our steps and that we share with our community. What sets us apart
          is that we don’t just talk about art; we live for it. We are a group
          of young people with conviction, a clear purpose, and, above all, the
          hope that by working together, we can achieve great things. We are
          dedicated to doing what we love and are willing to give everything for
          art, because we believe that, in the end, that’s what truly matters.
          If you’re a young creator, if you feel that art is your path, or if
          you simply believe in the transformative power of music, we invite you
          to be part of this journey. Because here, at En Burro e Viaje, we are
          all art; we are all one.
        </h3>
      </motion.div>
    </div>
  );
}

export default ContactCards;
