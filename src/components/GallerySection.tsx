import React from "react";

import { ReactTyped } from 'react-typed';
// List of all photo filenames in /public/Photos (add more as needed)
const galleryImages = [
  "Picture1.jpg", "Picture2.jpg", "Picture3.jpg", "Picture4.jpg", "Picture5.jpg", "Picture6.jpg", "Picture7.jpg", "Picture8.jpg", "Picture9.jpg", "Picture11.jpg", "Picture12.jpg", "Picture13.jpg", "Picture14.jpg", "Picture15.jpg", "Picture16.jpg", "Picture17.jpg", "Picture18.jpg", "Picture19.jpg", "Picture20.jpg", "Picture21.jpg", "Picture22.jpg", "Picture23.jpg", "Picture24.jpg", "Picture25.jpg", "Picture26.jpg", "Picture27.jpg", "Picture28.jpg", "Picture29.jpg", "Picture30.jpg", "Picture31.jpg", "Picture32.jpg", "Picture33.jpg", "Picture34.jpg", "Picture35.jpg", "Picture36.jpg", "Picture37.jpg", "Picture38.jpg", "Picture39.jpg", "Picture40.jpg", "Picture41.jpg", "Picture42.jpg", "Picture43.jpg", "Picture44.jpg", "Picture45.jpg", "Picture46.jpg", "Picture47.jpg", "Picture48.jpg", "Picture49.jpg", "Picture50.jpg", "Picture51.jpg", "Picture52.jpg", "Picture53.jpg", "Picture54.jpg", "Picture55.jpg", "Picture56.jpg", "Picture57.jpg", "Picture58.jpg", "Picture59.jpg", "Picture60.jpg", "Picture61.jpg", "Picture62.jpg", "Picture63.jpg", "Picture64.jpg", "Picture65.jpg", "Picture66.jpg", "Picture67.jpg", "Picture68.jpg", "Picture69.jpg", "Picture70.jpg", "Picture71.jpg", "Picture72.jpg", "Picture73.jpg", "Picture74.jpg", "Picture75.jpg", "Picture76.jpg", "Picture77.jpg", "Picture78.jpg", "Picture79.jpg", "Picture80.jpg", "Picture81.jpg", "Picture82.jpg", "Picture83.jpg", "Picture84.jpg", "Picture85.jpg", "Picture86.jpg", "Picture87.jpg", "Picture88.jpg", "Picture89.jpg", "Picture90.jpg", "Picture91.jpg", "Picture92.jpg", "Picture93.jpg", "Picture94.jpg", "Picture95.jpg", "Picture96.jpg", "Picture97.jpg", "Picture98.jpg", "Picture99.jpg", "Picture100.jpg"
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
  className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent text-center"
  style={{ whiteSpace: 'nowrap', overflow: 'hidden', minWidth: 0, display: 'inline-block' }}
>
  <ReactTyped
    strings={["Gallery"]}
    typeSpeed={60}
    backSpeed={40}
    loop
    showCursor={false}
  />
</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={img + idx} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 bg-white">
              <img
                src={`/Photos/${img}`}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
