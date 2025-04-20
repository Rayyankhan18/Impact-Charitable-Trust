
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  includeText?: boolean;
}

const Logo = ({ className, includeText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative h-10 w-10 md:h-12 md:w-12">
        <img 
          src="/impact-logo.svg" 
          alt="Impact Charitable Trust Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
      {includeText && (
        <div className="flex flex-col items-start">
          <span className="font-bold text-xl leading-none text-impact-dark">IMPACT</span>
          <span className="text-sm font-medium text-gray-600 leading-tight">CHARITABLE TRUST</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
