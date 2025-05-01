
import { Button } from "@/components/ui/button";
import { Gift, QrCode } from "lucide-react";
import { useState } from "react";

const DonateSection = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  
  return (
    <section className="section-padding bg-gradient-to-br from-impact-green/5 via-white to-impact-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-impact-dark mb-4">Make a Difference Today</h2>
          <p className="text-gray-600 text-lg">
            Your contribution helps us continue our work and create lasting impact in the lives of those in need.
          </p>
          <div className="bg-impact-green text-white mt-6 inline-block px-4 py-2 rounded-lg">
            <p className="font-bold">80G Tax Benefits Available</p>
            <p className="text-sm">Donations are eligible for tax exemption under Section 80G</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-impact-dark mb-4">Every Contribution Matters</h3>
              <p className="text-gray-600 mb-4">
                By sponsoring a child's education through our Education Sponsorship Program, you are investing in the leaders of tomorrow. Your support brings long-term impact—and that's exactly why we named our organization IMPACT.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Years of Impact</p>
                  <p className="text-2xl font-bold text-impact-dark">7</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Lives Changed</p>
                  <p className="text-2xl font-bold text-impact-dark">80</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-impact-green">✓</span>
                  <span className="text-gray-700">Get 80G tax exemption receipts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-impact-green">✓</span>
                  <span className="text-gray-700">Receive thank you certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-impact-green">✓</span>
                  <span className="text-gray-700">Track your impact through updates</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-impact-dark mb-4">Other Ways to Support</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-impact-green/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-impact-green" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-impact-dark">Volunteer With Us</h5>
                    <p className="text-sm text-gray-600">Join our volunteer program and contribute your time and skills.</p>
                    <a 
                      href="https://forms.google.com/volunteer-signup" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-impact-green hover:underline mt-1 inline-block"
                    >
                      Fill out our volunteer form →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-impact-blue/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-impact-blue" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-impact-dark">Corporate Partnerships</h5>
                    <p className="text-sm text-gray-600">Explore CSR opportunities and strategic partnerships.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-impact-yellow/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-impact-yellow" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-impact-dark">Spread Awareness</h5>
                    <p className="text-sm text-gray-600">Share our cause on social media and help us reach more people.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full bg-impact-green hover:bg-impact-green/90 flex items-center justify-center gap-2"
                  onClick={() => setShowQrCode(!showQrCode)}
                >
                  {showQrCode ? "Hide QR Code" : "Donate via QR Code"} 
                  <QrCode className="h-4 w-4" />
                </Button>
                
                {showQrCode && (
                  <div className="mt-4 p-4 bg-white rounded-lg flex flex-col items-center">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://impact-charitable-trust.org/donate" 
                      alt="Donation QR Code" 
                      className="h-32 w-32 object-contain"
                    />
                    <p className="text-xs text-gray-500 mt-2">Scan to make a secure donation</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
