
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-impact-green via-impact-blue to-impact-yellow opacity-90 z-0"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-white/10 rounded-full blur-xl"></div>
        
        {/* Moving Particles */}
        <div className="particle absolute h-2 w-2 rounded-full bg-white/70 top-1/4 left-1/4 animate-float"></div>
        <div className="particle absolute h-3 w-3 rounded-full bg-white/60 top-3/4 left-1/3 animate-float" style={{ animationDelay: '1s', animationDuration: '15s' }}></div>
        <div className="particle absolute h-4 w-4 rounded-full bg-white/50 top-1/2 left-2/3 animate-float" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="particle absolute h-2 w-2 rounded-full bg-white/60 top-1/3 left-3/4 animate-float" style={{ animationDelay: '0.5s', animationDuration: '18s' }}></div>
        <div className="particle absolute h-3 w-3 rounded-full bg-white/70 top-2/3 left-1/5 animate-float" style={{ animationDelay: '1.5s', animationDuration: '25s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">
            Help Us Transform Lives Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Impact Charitable Trust believes that every child deserves a fair chance—especially the most deprived. We are committed to delivering change through education, healthcare, and financial empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-impact-green hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1">
              Donate Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(100px, -100px); opacity: 0; }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
