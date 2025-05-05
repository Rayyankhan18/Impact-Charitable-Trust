import React from "react";

// List of all photo filenames in /public/Photos (add more as needed)
const galleryImages = [
  "Picture1.jpg", "Picture2.jpg", "Picture3.jpg", "Picture4.jpg", "Picture5.jpg", "Picture6.jpg", "Picture7.jpg", "Picture8.jpg", "Picture9.jpg", "Picture10.jpg", "Picture11.jpg", "Picture12.jpg", "Picture13.jpg", "Picture14.jpg", "Picture15.jpg", "Picture16.jpg", "Picture17.jpg", "Picture18.jpg", "Picture19.jpg", "Picture20.jpg", "Picture21.jpg", "Picture22.jpg", "Picture23.jpg", "Picture24.jpg", "Picture25.jpg", "Picture26.jpg", "Picture27.jpg", "Picture28.jpg", "Picture29.jpg", "Picture30.jpg", "Picture31.jpg", "Picture32.jpg", "Picture33.jpg", "Picture34.jpg", "Picture35.jpg", "Picture36.jpg", "Picture37.jpg", "Picture38.jpg", "Picture39.jpg", "Picture40.jpg", "Picture41.jpg", "Picture42.jpg", "Picture43.jpg", "Picture44.jpg", "Picture45.jpg", "Picture46.jpg", "Picture47.jpg", "Picture48.jpg", "Picture49.jpg", "Picture50.jpg"
  // ...add all other images found in /public/Photos
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-impact-green text-center">Gallery</h2>
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
