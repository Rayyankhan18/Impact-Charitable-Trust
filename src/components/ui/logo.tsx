
import { Star } from "lucide-react";

interface LogoProps {
  className?: string;
  includeText?: boolean;
}

const Logo = ({ className, includeText = false }: LogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <img
  src="/Photos/logo1.webp"
  alt="Impact Charitable Trust Logo"
  aria-label="Impact Charitable Trust Logo"
  className="object-contain h-14 w-auto mx-0 my-0" style={{ display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
  draggable={false}
/>


    </div>
  );
};

export default Logo;
