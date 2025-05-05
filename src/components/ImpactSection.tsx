import { User, Heart, Book } from "lucide-react";
import { useState, useEffect } from "react";

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
    <section id="impact-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-impact-dark">Our Impact</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex flex-col items-center bg-impact-green-light rounded-lg p-6 shadow-md">
            <User className="h-10 w-10 text-impact-green mb-2" />
            <span className="text-3xl font-bold">{count}+</span>
            <span className="text-gray-700 mt-1">Lives Impacted</span>
          </div>
          <div className="flex flex-col items-center bg-impact-blue-light rounded-lg p-6 shadow-md">
            <Heart className="h-10 w-10 text-impact-blue mb-2" />
            <span className="text-3xl font-bold">250+</span>
            <span className="text-gray-700 mt-1">Medical Camps</span>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 rounded-lg p-6 shadow-md">
            <Book className="h-10 w-10 text-impact-yellow mb-2" />
            <span className="text-3xl font-bold">80+</span>
            <span className="text-gray-700 mt-1">Students Educated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
