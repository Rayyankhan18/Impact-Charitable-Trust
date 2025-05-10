import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Programs", path: "/#programs-section" },
    { name: "Impact", path: "/#impact-section" },
    { name: "Gallery", path: "/#gallery" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Use the Logo component for consistent logo display */}
        <Logo className="h-12 w-auto" />

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-impact-dark hover:text-impact-green font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#donate" className="bg-impact-green hover:bg-impact-green/90 text-white font-medium px-4 py-2 rounded transition-colors">Donate Now</a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-impact-dark ml-auto"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          style={{ marginLeft: 'auto' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
  <>
    {/* Backdrop */}
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 transition-opacity duration-300" onClick={() => setIsMenuOpen(false)} />
    {/* Sidebar */}
    <div className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-50 transition-transform duration-300 transform translate-x-0 animate-slide-in-right" style={{ boxShadow: 'rgba(60,60,60,0.10) 0px 0px 32px 0px' }}>
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-4 right-4 text-impact-dark z-50"
        aria-label="Close menu"
      >
        <X size={28} />
      </button>
      <nav className="flex flex-col space-y-6 px-8 pt-24 pb-8 items-end">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="text-impact-dark hover:text-impact-green py-2 font-medium transition-colors text-lg w-full text-right"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#donate" className="bg-impact-green hover:bg-impact-green/90 w-full text-white py-2 px-4 rounded block text-right font-semibold transition-colors">Donate Now</a>
      </nav>
    </div>
  </>
)}
      <style>
        {`
          @keyframes slide-in-right {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;

// Add smooth scrolling globally
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

