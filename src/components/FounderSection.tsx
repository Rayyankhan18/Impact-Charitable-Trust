
import Logo from "@/components/ui/logo";

const FounderSection = () => (
  <section className="section-padding bg-white relative z-10">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
        <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-impact-green h-40 w-40 lg:h-60 lg:w-60 flex items-center justify-center bg-gray-50">
          <img
            src="/lovable-uploads/07dd1093-54e1-4bec-9228-a16d9058b83a.png"
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
          <span className="font-bold text-impact-dark">Fazlur Rehman</span>, the visionary behind Impact Charitable Trust®, established the organization in 2016 with a deep commitment to social equity and community empowerment. With over 7 years of dedicated service in education and healthcare, our founder guides every initiative with compassion, integrity, and a focus on sustainable development.
        </p>
        <p className="text-gray-500 text-base">
          "We believe that meaningful change comes from empowering individuals at the grassroots level. By providing access to quality education, healthcare, and vocational training, we can help build self-sufficient communities that thrive for generations to come."
        </p>
      </div>
    </div>
  </section>
);

export default FounderSection;
