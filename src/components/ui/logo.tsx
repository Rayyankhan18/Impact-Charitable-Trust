
interface LogoProps {
  className?: string;
  includeText?: boolean; // We will no longer use text as the user wants the exact logo image only
}

const Logo = ({ className, includeText = false }: LogoProps) => {
  // Using the exact uploaded logo image and allowing resizing via className
  return (
    <div className={className}>
      <img
        src="/lovable-uploads/61656ee7-1563-4b3b-9b7e-1227794adb82.png"
        alt="Impact Charitable Trust Logo"
        className="w-full h-auto object-contain"
        draggable={false}
      />
    </div>
  );
};

export default Logo;

