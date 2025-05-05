
import { Star } from "lucide-react";

interface LogoProps {
  className?: string;
  includeText?: boolean;
}

const Logo = ({ className, includeText = false }: LogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/lovable-uploads/61656ee7-1563-4b3b-9b7e-1227794adb82.png"
        alt="Impact Charitable Trust Logo"
        className="w-full h-auto object-contain"
        draggable={false}
      />
      <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4">
        <Star className="h-4 w-4 text-impact-yellow animate-pulse-star" fill="#FFF176" />
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-star {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-pulse-star {
          animation: pulse-star 1.5s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default Logo;
