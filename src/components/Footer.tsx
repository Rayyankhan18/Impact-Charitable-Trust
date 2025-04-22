
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-impact-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="/lovable-uploads/07dd1093-54e1-4bec-9228-a16d9058b83a.png"
            alt="Impact Charitable Trust Logo"
            className="h-10 w-auto mb-4"
          />
        </div>
        <p className="text-gray-300 mb-4 text-center">
          Empowering lives through education, healthcare, and compassion since 2018.
        </p>
        <p className="text-gray-300 flex items-center justify-center gap-1 mb-6">
          Made with <Heart className="h-4 w-4 text-impact-green" fill="#8AD03F" /> for a better tomorrow
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-impact-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-impact-green transition-colors">About Us</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-impact-green transition-colors">Our Programs</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-300 hover:text-impact-green transition-colors">Our Impact</a>
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
                <a href="#" className="text-gray-300 hover:text-impact-green transition-colors">Transgender Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-impact-green transition-colors">Donate</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-impact-green transition-colors">Volunteer</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-impact-green transition-colors">Partner With Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-impact-green transition-colors">Corporate Giving</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-impact-green transition-colors">Support 80G</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Impact Charitable Trust. All rights reserved.
            </p>
            <div className="flex space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;
