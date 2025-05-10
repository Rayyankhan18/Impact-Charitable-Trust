import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    // When menu opens, prevent scrolling and append a style tag with an aggressive reset of any backdrop filters
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      // Create and insert a style tag with CSS that overrides any backdrop filters
      const styleTag = document.createElement('style');
      styleTag.id = 'menu-override-styles';
      styleTag.innerHTML = `
        body * {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
      `;
      document.head.appendChild(styleTag);
    } else {
      document.body.style.overflow = '';
      
      // Remove the style tag when menu closes
      const styleTag = document.getElementById('menu-override-styles');
      if (styleTag) styleTag.remove();
    }
    
    return () => {
      document.body.style.overflow = '';
      const styleTag = document.getElementById('menu-override-styles');
      if (styleTag) styleTag.remove();
    };
  }, [isMenuOpen]);

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
          {/* Ultra-simple fullscreen white overlay */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              zIndex: 2147483647, /* Highest possible z-index */
              padding: '20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>
            
            <a 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              style={{ margin: '10px 0', padding: '12px', backgroundColor: '#f5f5f5', color: '#333', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
            >
              Home
            </a>
            
            <a 
              href="/#about" 
              onClick={() => setIsMenuOpen(false)}
              style={{ margin: '10px 0', padding: '12px', color: '#333', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
            >
              About
            </a>
            
            <a 
              href="/#programs-section" 
              onClick={() => setIsMenuOpen(false)}
              style={{ margin: '10px 0', padding: '12px', color: '#333', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
            >
              Programs
            </a>
            
            <a 
              href="/#impact-section" 
              onClick={() => setIsMenuOpen(false)}
              style={{ margin: '10px 0', padding: '12px', color: '#333', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
            >
              Impact
            </a>
            
            <a 
              href="/#gallery" 
              onClick={() => setIsMenuOpen(false)}
              style={{ margin: '10px 0', padding: '12px', color: '#333', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
            >
              Gallery
            </a>
            
            <a 
              href="/#contact" 
              onClick={() => setIsMenuOpen(false)}
              style={{ margin: '10px 0', padding: '12px', color: '#333', borderRadius: '4px', textDecoration: 'none', fontWeight: 500 }}
            >
              Contact
            </a>
            
            <a 
              href="#donate" 
              onClick={() => setIsMenuOpen(false)}
              style={{ margin: '20px 0 10px 0', padding: '12px', backgroundColor: '#8BC34A', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, textAlign: 'center' }}
            >
              Donate Now
            </a>
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
