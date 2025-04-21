
import { Button } from "@/components/ui/button";

const DonationVolunteerSection = () => {
  return (
    <section className="container mx-auto px-4 py-12 space-y-8" aria-label="Donate and Volunteer">
      <h2 className="text-3xl font-bold text-center text-impact-dark mb-8">Help Us Transform Lives Today</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-xl mx-auto">
        <Button className="bg-impact-green hover:bg-impact-green/90 text-white flex-1 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors">
          Donate Now
        </Button>
        <Button className="bg-impact-green hover:bg-impact-green/90 text-white flex-1 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors">
          Become a Volunteer
        </Button>
      </div>
    </section>
  );
};

export default DonationVolunteerSection;

