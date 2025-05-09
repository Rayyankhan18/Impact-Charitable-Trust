
import { Star } from "lucide-react";

interface LogoProps {
  className?: string;
  includeText?: boolean;
}

const Logo = ({ className, includeText = false }: LogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/Photos/WhatsApp Image 2025-05-09 at 12.06.04 PM.jpeg"
        alt="Impact Charitable Trust Logo"
        style={{ height: 48, width: 'auto', display: 'block' }}
        className="object-contain"
        draggable={false}
      />


    </div>
  );
};

export default Logo;
