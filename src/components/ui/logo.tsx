
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  includeText?: boolean;
}

const Logo = ({ className, includeText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative h-16 w-16 md:h-24 md:w-24">
        <img 
          src="/impact-logo.svg" 
          alt="Impact Charitable Trust Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
      {includeText && (
        <div className="flex flex-col items-start">
          <span className="font-bold text-2xl md:text-3xl leading-none text-impact-dark">IMPACT</span>
          <span className="text-base md:text-lg font-medium text-gray-600 leading-tight">CHARITABLE TRUST</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
