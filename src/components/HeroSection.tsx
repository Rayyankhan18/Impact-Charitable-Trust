
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-impact-green/5 to-impact-blue/10 pt-20">
      {/* Colorful shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-impact-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-impact-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-impact-yellow/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="mb-6">
              <span className="text-impact-dark block">Empowering Lives Through</span>
              <span className="text-impact-green">Education & Compassion</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Impact Charitable Trust works to uplift the educational and financial status of women and children, regardless of caste, creed, or religion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-impact-green hover:bg-impact-green/90 text-lg px-8 py-6">
                Donate Now
              </Button>
              <Button variant="outline" className="border-impact-green text-impact-green hover:bg-impact-green hover:text-white text-lg px-8 py-6">
                Our Programs
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm shadow-sm rounded-lg px-4 py-3">
                <p className="text-2xl font-bold text-impact-green">80G</p>
                <p className="text-sm text-gray-600">Tax Benefits</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm shadow-sm rounded-lg px-4 py-3">
                <p className="text-2xl font-bold text-impact-blue">10+</p>
                <p className="text-sm text-gray-600">Years of Impact</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm shadow-sm rounded-lg px-4 py-3">
                <p className="text-2xl font-bold text-impact-yellow">1000+</p>
                <p className="text-sm text-gray-600">Lives Changed</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Students learning in classroom"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">Spreading the light of education among underprivileged children</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
