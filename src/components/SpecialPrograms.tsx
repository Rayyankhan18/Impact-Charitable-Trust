import { Button } from "@/components/ui/button";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1573497019236-61f684d1d9d1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
];

const SpecialPrograms = () => {
  const [idx, setIdx] = useState(0);
  
  const nextImage = () => setIdx((idx + 1) % images.length);
  const prevImage = () => setIdx((idx - 1 + images.length) % images.length);
  
  return (
    <div className="w-full max-w-xl">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
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
          <Button className="bg-impact-green hover:bg-impact-green/90 w-full">Support This Initiative</Button>
        </div>

        <div className="bg-white p-8 mt-8 rounded-xl shadow-md">
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
    </div>
  );
};

export default SpecialPrograms;
