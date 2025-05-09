import React, { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1200, className = "", suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrame);
      startTimestamp.current = null;
    };
  }, [value, duration]);

  return (
    <span className={className}>{displayValue}{suffix}</span>
  );
};

export default AnimatedNumber;
