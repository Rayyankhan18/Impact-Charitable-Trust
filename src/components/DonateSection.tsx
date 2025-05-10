
import { Button } from "@/components/ui/button";
import { Gift, QrCode } from "lucide-react";
import { useState } from "react";
import { ReactTyped } from 'react-typed';

const DonateSection = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  
  return (
    <section id="donate" className="section-padding bg-gradient-to-br from-impact-green/5 via-white to-impact-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-impact-dark mb-4 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent"
            style={{ whiteSpace: 'normal', overflow: 'visible', minWidth: 0, display: 'block', wordBreak: 'break-word' }}
          >
            <ReactTyped
              strings={["Make a Difference Today"]}
              typeSpeed={60}
              backSpeed={40}
              loop={typeof window !== 'undefined' ? window.innerWidth >= 768 : true}
              showCursor={false}
            />
          </h2>
          <p className="text-gray-600 text-lg">
            Your contribution helps us continue our work and create lasting impact in the lives of those in need.
          </p>
          <div className="bg-impact-green text-white mt-6 inline-block px-4 py-2 rounded-lg">
            <p className="font-bold">80G Tax Benefits Available</p>
            <p className="text-sm">Donations are eligible for tax exemption under Section 80G</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-impact-green/5 to-impact-blue/10 rounded-3xl shadow-2xl p-0 md:p-2 max-w-5xl mx-auto border border-impact-green/10">
          <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0">
            {/* Left: Info & Stats */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-impact-dark mb-4 tracking-tight">Every Contribution Matters</h3>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                By sponsoring a child's education through our <span className="font-semibold text-impact-green">Education Sponsorship Program</span>, you are investing in the leaders of tomorrow. Your support brings long-term impact—and that's exactly why we named our organization <span className="font-semibold text-impact-green">IMPACT</span>.
              </p>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gradient-to-br from-impact-green/10 to-white rounded-2xl p-5 flex flex-col items-center shadow hover:shadow-impact-green/30 transition-shadow">
                  <span className="block text-xs font-medium text-gray-500 mb-1">Years of Impact</span>
                  <span className="text-4xl font-extrabold text-impact-green drop-shadow">7</span>
                </div>
                <div className="flex-1 bg-gradient-to-br from-impact-blue/10 to-white rounded-2xl p-5 flex flex-col items-center shadow hover:shadow-impact-blue/30 transition-shadow">
                  <span className="block text-xs font-medium text-gray-500 mb-1">Lives Changed</span>
                  <span className="text-4xl font-extrabold text-impact-blue drop-shadow">80</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-impact-green/10 text-impact-green"><QrCode className="h-5 w-5" /></span>
                  <span className="text-impact-dark">Get 80G tax exemption receipts</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-impact-green/10 text-impact-green"><Gift className="h-5 w-5" /></span>
                  <span className="text-impact-dark">Receive thank you certificates</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-impact-green/10 text-impact-green"><Gift className="h-5 w-5" /></span>
                  <span className="text-impact-dark">Track your impact through updates</span>
                </li>
              </ul>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-gradient-to-b from-impact-green/20 via-impact-blue/20 to-transparent mx-0 my-8"></div>
            {/* Right: QR & Support */}
            <div className="md:w-1/2 bg-gradient-to-br from-white via-impact-blue/5 to-impact-yellow/5 p-8 rounded-3xl flex flex-col justify-center items-center">
              <div className="w-full max-w-xs mx-auto bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-impact-green/30 transition-shadow relative">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-impact-green text-white text-xs font-semibold px-4 py-1 rounded-full shadow">Scan to Donate</span>
                <img
                  src="/Photos/Picture103.webp"
                  alt="Donate Now QR Code (UPI/Bank/QR)"
                  className="mx-auto w-full max-w-xs object-contain rounded-lg shadow-lg border-2 border-impact-green/20 hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-4 text-xs text-gray-500 text-center">Use the details in the image to make your donation. Thank you for your support!</p>
              </div>
              <div className="w-full mt-8 bg-white/80 rounded-xl p-4 shadow-sm">
                <h4 className="text-lg font-bold text-impact-dark mb-3 text-center">Other Ways to Support</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-impact-green/10 text-impact-green"><Gift className="h-5 w-5" /></span>
                    <div>
                      <span className="font-semibold text-impact-dark">Volunteer With Us</span>
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
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-impact-blue/10 text-impact-blue"><Gift className="h-5 w-5" /></span>
                    <div>
                      <span className="font-semibold text-impact-dark">Corporate Partnerships</span>
                      <p className="text-sm text-gray-600">Explore CSR opportunities and strategic partnerships.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-impact-yellow/10 text-impact-yellow"><Gift className="h-5 w-5" /></span>
                    <div>
                      <span className="font-semibold text-impact-dark">Spread Awareness</span>
                      <p className="text-sm text-gray-600">Share our cause on social media and help us reach more people.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
