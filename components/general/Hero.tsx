import React from "react";
import { Source_Sans_3 } from "next/font/google";
import { Cinzel } from "next/font/google";
import { Button } from "../ui/button";

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
});

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/banner1.webp")' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Center-aligned content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-8 md:px-16 text-white">
        <div className="text-center max-w-3xl">
          <h1
            className={`text-lg md:text-2xl font-light mb-2 text-shadow-subtle ${sourceSansPro.className}`}
          >
            MARCI METZGER - THE RIDGE REALTY GROUP
          </h1>
          <p
            className={`text-4xl md:text-6xl leading-tight text-shadow-subtle ${cinzel.className}`}
          >
            PAHRUMP REALTOR
          </p>
          <Button
            className={`bg-white text-black px-6 py-3 mt-6 rounded-full font-semibold hover:bg-gray-200 cursor-pointer transition ${sourceSansPro.className}`}
          >
            CALL NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
