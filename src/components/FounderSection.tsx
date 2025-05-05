
import Logo from "@/components/ui/logo";

const FounderSection = () => (
  <section className="section-padding bg-white relative z-10">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
        <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-impact-green h-40 w-40 lg:h-60 lg:w-60 flex items-center justify-center bg-gray-50">
          <img
            src="/Photos/WhatsApp Image 2025-05-02 at 3.17.55 PM (1).jpeg"
            alt="Founder portrait"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-impact-green">
          Meet Our Founder
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-impact-dark mb-1">Mr. Hidayathulla Khan</h3>
        <p className="text-impact-blue text-base mb-3 italic">Distinguished Postgraduate • Social Worker • Businessman</p>
        <p className="text-lg text-gray-700 mb-3">
          Hidayathulla Khan is a distinguished postgraduate, dedicated social worker, and successful businessman committed to bringing positive change to society. With extensive experience providing social services across different constituencies and platforms, he has become one of the most recognized personalities in the region.
        </p>
        <p className="text-lg text-gray-700 mb-3">
          His unwavering commitment and strong focus on uplifting poor and marginalized communities define his mission: to empower economically weaker sections by creating opportunities, fostering dignity, and contributing to a more just and equitable society.
        </p>
        <p className="text-lg text-gray-700 mb-3">
          Mr. Khan's primary focus is providing excellent education to children and vulnerable populations, irrespective of caste, creed, or religion. Through his various initiatives, he continues to bridge social gaps and create pathways for sustainable development within the communities he serves.
        </p>
        <div className="bg-impact-green/10 border-l-4 border-impact-green px-6 py-4 rounded-xl mt-6">
          <p className="text-impact-green text-base italic font-medium">
            "We believe that meaningful change comes from empowering individuals at the grassroots level. By providing access to quality education, healthcare, and vocational training, we can help build self-sufficient communities that thrive for generations to come."
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
