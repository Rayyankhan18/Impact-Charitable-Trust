
import { Button } from "@/components/ui/button";
import { ReactTyped } from 'react-typed';
import { useEffect, useState } from "react";
import { QrCode } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Set up the parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxElements = document.querySelectorAll('.parallax-element');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      parallaxElements.forEach(element => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute('data-speed') || "0.05");
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const heroImages = [
    "/Photos/Picture38.webp",
    "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  ];

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-impact-green/10 via-impact-blue/5 to-impact-yellow/10 pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-impact-green/20 rounded-full blur-3xl parallax-element animate-pulse" data-speed="0.05" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-impact-blue/20 rounded-full blur-3xl parallax-element" data-speed="0.08" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-impact-yellow/20 rounded-full blur-3xl parallax-element" data-speed="0.03" />
        
        {/* SVG waves */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-20">
            <path fill="#8AD03F" fillOpacity="0.4" d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,128C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto absolute bottom-0 opacity-20">
            <path fill="#34B5E5" fillOpacity="0.5" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,202.7C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-2 py-8 md:py-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="w-full sm:max-w-2xl">
            <div className="mb-1 inline-flex items-center px-2 py-1 bg-white/30 backdrop-blur-sm rounded-full text-impact-dark text-xs md:text-sm font-medium">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-impact-green"></span>
              Transforming Lives Since 2018
            </div>
            <h1 className="mb-4 md:mb-5">
              <span
                className="block bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent text-3xl md:text-5xl font-extrabold leading-tight"
                style={{ whiteSpace: 'normal', overflow: 'visible', minWidth: 0, display: 'block', wordBreak: 'break-word' }}
              >
                <ReactTyped
                  strings={["Empowering Lives Through Education & Compassion"]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop={typeof window !== 'undefined' ? window.innerWidth >= 768 : true}
                  showCursor={false}
                />
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Impact Charitable Trust works to uplift the educational and financial status of women and children, regardless of caste, creed, or religion.
            </p>
            <div className="flex flex-wrap gap-6 justify-start items-center mt-4">
              <a
                href="#donate"
                tabIndex={0}
                className="bg-impact-green text-white font-bold text-lg px-8 py-4 text-center"
              >
                Donate Now
              </a>
              <a
                href="#programs-section"
                className="bg-impact-green text-white font-bold text-lg px-8 py-4 text-center"
              >
                Our Programs
              </a>
            </div>
            {showQrCode && (
              <div className="mt-4 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg animate-fade-in">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-gray-600 mb-2">Scan to donate</p>
                  <picture>
  <source srcSet="/Photos/qr-code.webp" type="image/webp" />
  <img 
    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://impact-charitable-trust.org/donate" 
    alt="Donation QR Code" 
    className="h-32 w-32 object-contain"
  />
</picture>
                  <p className="text-xs text-gray-500 mt-2">Or visit our donation page</p>
                </div>
              </div>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg px-4 py-3 animate-fade-in delay-200 hover:scale-105 transition-transform duration-300">
                <p className="text-2xl font-bold bg-gradient-to-r from-impact-green to-impact-blue bg-clip-text text-transparent">80G</p>
                <p className="text-sm text-gray-600">Tax Benefits</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg px-4 py-3 animate-fade-in delay-300 hover:scale-105 transition-transform duration-300">
                <p className="text-2xl font-bold bg-gradient-to-r from-impact-blue to-impact-yellow bg-clip-text text-transparent">7+</p>
                <p className="text-sm text-gray-600">Years of Impact</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg px-4 py-3 animate-fade-in delay-400 hover:scale-105 transition-transform duration-300">
                <p className="text-2xl font-bold bg-gradient-to-r from-impact-yellow to-impact-green bg-clip-text text-transparent">80+</p>
                <p className="text-sm text-gray-600">Lives Changed</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/80 backdrop-blur-sm animate-fade-in">
              <Carousel className="w-full">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                        <img
                          src={image}
                          alt={`Impact Charitable Trust - ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-5000 hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <p className="text-white font-medium">Spreading the light of education among underprivileged children</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              
              {/* Morphing effect blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-impact-green/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-impact-blue/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
