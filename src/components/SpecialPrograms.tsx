
import { Button } from "@/components/ui/button";

const SpecialPrograms = () => {
  return (
    <section id="special-programs" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-impact-yellow/20 rounded-full px-4 py-1 text-impact-dark font-medium text-sm mb-4">
            Special Initiatives
          </div>
          <h2 className="text-impact-dark mb-4">Special Programs</h2>
          <p className="text-gray-600 text-lg">
            We run specialized programs to support vulnerable groups and ensure everyone has equal opportunities to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-impact-dark mb-4">Transgender Support Initiative</h3>
            <p className="text-gray-600 mb-4">
              Transgender individuals often face social stigma and are pushed into begging, theft, or exploitation. Through our dedicated program, we aim to empower this marginalized community by providing:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-impact-green font-bold">•</span>
                <span className="text-gray-600">Vocational training in beauty services, tailoring, retail, and maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-impact-green font-bold">•</span>
                <span className="text-gray-600">Self-employment opportunities and business skills development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-impact-green font-bold">•</span>
                <span className="text-gray-600">Support for securing formal employment and social integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-impact-green font-bold">•</span>
                <span className="text-gray-600">Advocacy for equal rights as guaranteed by the Indian Constitution</span>
              </li>
            </ul>
            <Button className="bg-impact-green hover:bg-impact-green/90">Support This Initiative</Button>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573497019236-61f684d1d9d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Vocational training"
              className="w-full h-auto object-cover aspect-square rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl">
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white text-lg font-medium">Empowering through skills and dignity</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-impact-dark mb-6 text-center">Other Special Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-impact-blue mb-2">Elderly Care</h4>
              <p className="text-gray-600 text-sm">
                Establishing homes for the elderly with comprehensive care, activities, and community engagement.
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-impact-green mb-2">Orphanage Support</h4>
              <p className="text-gray-600 text-sm">
                Running orphanages for boys and girls with free boarding facilities and daycare centers.
              </p>
            </div>
            <div className="p-5 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-bold text-impact-yellow mb-2">Disaster Relief</h4>
              <p className="text-gray-600 text-sm">
                Providing relief and rehabilitation for individuals displaced by natural disasters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPrograms;
