
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-impact-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Help Us Transform Lives Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Impact Charitable Trust believes that every child deserves a fair chance—especially the most deprived. We are committed to delivering change through education, healthcare, and financial empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-impact-green hover:bg-gray-100 text-lg px-8 py-6">
              Donate Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
