
import { Heart } from "lucide-react";
import Logo from "@/components/ui/logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-impact-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <p className="text-gray-300 mb-2 text-center">
            Empowering lives through education, healthcare, and compassion since 2018.
          </p>
          <div className="flex flex-col items-center gap-1 mb-6">
  <span className="text-gray-300 text-sm font-medium mb-1">
    Designed & Developed by <a href="https://www.linkedin.com/in/rayyan-khan-" target="_blank" rel="noopener noreferrer" className="text-impact-green font-semibold hover:underline">Rayyan Khan</a>
  </span>
  <span className="text-gray-300 flex items-center justify-center gap-1">
    Made with <Heart className="h-4 w-4 text-red-500" fill="#e63946" /> in
    <span className="inline-block w-4 h-3 mx-1" style={{background: 'linear-gradient(90deg, #ff9933 33%, #fff 33%, #fff 66%, #138808 66%)', border: '1px solid #222', borderRadius: '2px'}}></span>
    <span className="sr-only">India</span>
  </span>
</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto text-center">
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-impact-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-impact-green transition-colors">About Us</a>
              </li>
              <li>
                <a href="#programs-section" className="text-gray-300 hover:text-impact-green transition-colors">Our Programs</a>
              </li>
              <li>
                <a href="#impact-section" className="text-gray-300 hover:text-impact-green transition-colors">Our Impact</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-impact-green transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#education" className="text-gray-300 hover:text-impact-green transition-colors">Education</a>
              </li>
              <li>
                <a href="#healthcare" className="text-gray-300 hover:text-impact-green transition-colors">Healthcare</a>
              </li>
              <li>
                <a href="#scholarships" className="text-gray-300 hover:text-impact-green transition-colors">Scholarships</a>
              </li>
              <li>
                <a href="#special-programs" className="text-gray-300 hover:text-impact-green transition-colors">Special Programs</a>
              </li>
              <li>
                <a href="#special-programs" className="text-gray-300 hover:text-impact-green transition-colors">Transgender Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <a href="#donate" className="text-gray-300 hover:text-impact-green transition-colors">Donate</a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdf3CWT_OSfk9KgGTqeIssBGdq3HG8vKwbQmd5KgyfPL5I3tQ/viewform" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-impact-green transition-colors">Volunteer</a>
              </li>
              <li>
                <a href="#partner" className="text-gray-300 hover:text-impact-green transition-colors">Partner With Us</a>
              </li>
              <li>
                <a href="#corporate" className="text-gray-300 hover:text-impact-green transition-colors">Corporate Giving</a>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-impact-green transition-colors">Support 80G</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © {currentYear} Impact Charitable Trust. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-impact-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-impact-green transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-impact-green transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
