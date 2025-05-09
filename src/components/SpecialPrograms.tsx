
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ReactTyped } from 'react-typed';
import { QrCode } from "lucide-react";

const SpecialPrograms = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  
  return (
    <section className="w-full max-w-4xl mx-auto my-16 p-8 rounded-3xl shadow-xl bg-gradient-to-br from-impact-green/10 via-impact-blue/5 to-impact-yellow/10">
      <div className="w-full max-w-xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2
            className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent animate-gradient-x drop-shadow-lg"
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', minWidth: 0, display: 'inline-block' }}
          >
            <ReactTyped
              strings={["Special Programs"]}
              typeSpeed={60}
              backSpeed={40}
              loop
              showCursor={false}
            />
          </h2>
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
          <a
            href="#donate"
            className="bg-impact-green hover:bg-impact-green/90 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-white font-semibold text-base text-center transition-colors duration-200"
          >
            Support This Initiative
          </a>
          
          {showQrCode && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg flex flex-col items-center">
              <p className="text-sm text-gray-600 mb-2">Scan to donate</p>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://impact-charitable-trust.org/donate" 
                alt="Donation QR Code" 
                className="h-32 w-32 object-contain"
              />
              <p className="text-xs text-gray-500 mt-2">Or visit our donation page</p>
            </div>
          )}
        </div>

        <div className="bg-white p-8 mt-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-impact-dark mb-6 text-center">Other Special Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="/Photos/Picture14.jpg" 
                alt="Elderly Care" 
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <h4 className="font-bold text-impact-blue text-lg mb-2">Elderly Care</h4>
              <p className="text-gray-600 text-sm">
                Establishing homes for the elderly with comprehensive care, activities, and community engagement.
              </p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="/Photos/Picture80.jpg" 
                alt="Orphanage Support" 
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <h4 className="font-bold text-impact-green text-lg mb-2">Orphanage Support</h4>
              <p className="text-gray-600 text-sm">
                Running orphanages for boys and girls with free boarding and daycare.
              </p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src="/Photos/WhatsApp%20Image%202025-05-02%20at%204.20.46%20PM%20(1).jpeg" 
                alt="Disaster Relief" 
                className="w-full h-40 object-contain rounded-md mb-4"
              />
              <h4 className="font-bold text-amber-600 text-lg mb-2">Disaster Relief</h4>
              <p className="text-gray-600 text-sm">
                Providing relief and rehabilitation for individuals displaced by disasters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SpecialPrograms;
