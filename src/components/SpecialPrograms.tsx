
import { Button } from "@/components/ui/button";

const images = [
  "https://images.unsplash.com/photo-1573497019236-61f684d1d9d1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
];

import { useState } from "react";

const SpecialPrograms = () => {
  const [idx, setIdx] = useState(0);

  // Simple carousel navigation
  const nextImage = () => setIdx((idx + 1) % images.length);
  const prevImage = () => setIdx((idx - 1 + images.length) % images.length);
  
  return (
    <section id="special-programs" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-impact-yellow/20 rounded-full px-4 py-1 text-impact-dark font-medium text-sm mb-4">
            Special Initiatives
          </div>
          <h2 className="text-impact-dark mb-4">Special Programs</h2>
          <p className="text-gray-600 text-lg">
            We run specialized programs to support vulnerable groups and ensure everyone has equal opportunities to thrive.
          </p>
        </div>
        {/* Carousel: multiple photos */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 mb-12 items-center">
          <div className="lg:w-2/3 w-full">
            <div className="relative w-full rounded-xl overflow-hidden shadow-md">
              <img
                src={images[idx]}
                alt="Special Program highlight"
                className="w-full h-[260px] object-cover rounded-xl transition-all duration-500"
              />
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 text-impact-green shadow hover:bg-impact-green hover:text-white transition-all"
                onClick={prevImage}
                aria-label="Previous Image"
              >&lt;</button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 text-impact-green shadow hover:bg-impact-green hover:text-white transition-all"
                onClick={nextImage}
                aria-label="Next Image"
              >&gt;</button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`inline-block w-2 h-2 rounded-full ${i === idx ? "bg-impact-green" : "bg-white border border-impact-green"}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-impact-dark mb-4">Transgender Support Initiative</h3>
              <p className="text-gray-600 mb-4">
                Transgender individuals often face social stigma and are pushed into begging, theft, or exploitation. Through our dedicated program, we aim to empower this marginalized community by providing:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-impact-green font-bold">•</span>
                  <span className="text-gray-600">Vocational training in beauty services, tailoring, retail, and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-impact-green font-bold">•</span>
                  <span className="text-gray-600">Self-employment and business skills development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-impact-green font-bold">•</span>
                  <span className="text-gray-600">Support for securing formal employment and integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-impact-green font-bold">•</span>
                  <span className="text-gray-600">Advocacy for equal rights as per the Indian Constitution</span>
                </li>
              </ul>
              <Button className="bg-impact-green hover:bg-impact-green/90">Support This Initiative</Button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-impact-dark mb-6 text-center">Other Special Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-impact-blue mb-2">Elderly Care</h4>
              <p className="text-gray-600 text-sm">
                Establishing homes for the elderly with comprehensive care, activities, and community engagement.
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-impact-green mb-2">Orphanage Support</h4>
              <p className="text-gray-600 text-sm">
                Running orphanages for boys and girls with free boarding and daycare.
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-impact-yellow mb-2">Disaster Relief</h4>
              <p className="text-gray-600 text-sm">
                Providing relief and rehabilitation for individuals displaced by disasters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPrograms;
