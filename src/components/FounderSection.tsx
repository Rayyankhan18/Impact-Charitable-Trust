
import Logo from "@/components/ui/logo";

const FounderSection = () => (
  <section className="section-padding bg-white relative z-10">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
        <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-impact-green h-40 w-40 lg:h-60 lg:w-60 flex items-center justify-center bg-gray-50">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80"
            alt="Founder portrait"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-impact-green flex items-center gap-3">
          <Logo className="h-10 w-10" includeText={false} />
          Meet Our Founder
        </h2>
        <p className="text-lg text-gray-700 mb-3">
          <span className="font-bold text-impact-dark">Fazlur Rehman</span>, the visionary behind Impact Charitable Trust®, established the organization with a deep passion for social equity and empowerment. With decades devoted to education and philanthropy, our founder guides every initiative with compassion, transparency, and dedication to a brighter future for all.
        </p>
        <p className="text-gray-500 text-base">
          "Our vision is to create lasting change in communities by providing access to quality education, healthcare, and dignity for every individual—regardless of background."
        </p>
      </div>
    </div>
  </section>
);

export default FounderSection;
