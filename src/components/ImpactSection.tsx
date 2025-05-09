import { User, Heart, Book } from "lucide-react";
import { ReactTyped } from 'react-typed';
import { useState, useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";

const ImpactSection = () => {
  // Dummy stats and animation for demonstration
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 100;
    const interval = setInterval(() => {
      start += 5;
      setCount(start);
      if (start >= end) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="impact-section" className="py-16 bg-gradient-to-b from-white via-impact-green/10 to-impact-blue/10">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent"
          style={{ whiteSpace: 'normal', minWidth: 0, display: 'inline-block' }}
        >
          <ReactTyped
            strings={["Our Impact"]}
            typeSpeed={60}
            backSpeed={40}
            loop
            showCursor={false}
          />
        </h2>
        <div className="text-gray-500 text-base md:text-lg mb-8">Our Impact in Numbers (Since 2018)</div>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-0 md:space-x-[-32px] relative z-10">
          {/* Card 1 */}
          <div className="flex-1 flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-8 md:mt-8 md:mb-0 mx-2 md:mx-0 backdrop-blur-md border border-impact-green/10">
            <span className="flex items-center justify-center h-16 w-16 rounded-full bg-impact-green/10 mb-3">
              <User className="h-8 w-8 text-impact-green" />
            </span>
            <AnimatedNumber value={100} suffix="+" className="text-3xl font-bold text-impact-green" />
            <div className="text-gray-700 mt-2 font-medium">Lives Impacted</div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-8 md:-mt-4 mx-2 md:mx-0 backdrop-blur-md border border-impact-blue/10 z-20">
            <span className="flex items-center justify-center h-16 w-16 rounded-full bg-impact-blue/10 mb-3">
              <Heart className="h-8 w-8 text-impact-blue" />
            </span>
            <AnimatedNumber value={250} suffix="+" className="text-3xl font-bold text-impact-blue" />
            <div className="text-gray-700 mt-2 font-medium">Medical Camps</div>
          </div>
          {/* Card 3 */}
          <div className="flex-1 flex flex-col items-center bg-white/80 rounded-2xl shadow-lg p-8 md:mt-8 md:mb-0 mx-2 md:mx-0 backdrop-blur-md border border-impact-yellow/10">
            <span className="flex items-center justify-center h-16 w-16 rounded-full bg-impact-yellow/10 mb-3">
              <Book className="h-8 w-8 text-impact-yellow" />
            </span>
            <AnimatedNumber value={80} suffix="+" className="text-3xl font-bold text-impact-yellow" />
            <div className="text-gray-700 mt-2 font-medium">Students Educated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
