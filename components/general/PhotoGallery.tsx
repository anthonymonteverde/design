"use client";

import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { Cinzel } from "next/font/google";

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

const images = [
  "/banner1.webp",
  "/get-it-sold1.webp",
  "/get-it-sold-2.webp",
  "/get-it-sold-3.webp",
  "/get-to-know.webp",
  "/search-listing.webp",
];

const PhotoGallery = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className={`text-3xl font-semibold text-center mb-10 text-gray-600 ${cinzel.className}`}>
        Gallery
      </h2>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden shadow-md group relative">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-2 text-sm ${sourceSansPro.className}">
              Gallery Image {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
