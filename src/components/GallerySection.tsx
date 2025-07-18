import React from "react";

import { ReactTyped } from 'react-typed';
// List of all photo filenames in /public/Photos (add more as needed)
const galleryImages = [
  ...Array.from({length: 127}, (_, i) => i + 1)
    .filter(n => ![101, 103, 38, 39, 40, 14, 73, 70, 71, 127, 107, 108, 96, 92, 78, 26].includes(n))
    .map(n => `Picture${n}.webp`)
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent text-center"
          style={{ whiteSpace: 'normal', overflow: 'visible', minWidth: 0, display: 'block', wordBreak: 'break-word' }}
        >
          <div className="min-h-[56px]">
            <ReactTyped
              strings={["Gallery"]}
              typeSpeed={60}
              backSpeed={40}
              loop={typeof window !== 'undefined' ? window.innerWidth >= 768 : true}
              showCursor={false}
            />
          </div>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.filter((_, idx) => idx !== 9).map((img, idx) => (
            <div key={img + idx} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 bg-white">
              <img
                src={`/Photos/${img}`}
                alt={`Gallery ${idx < 9 ? idx + 1 : idx + 2}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                loading="lazy"
                width={"100%"}
                height={192}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
