
import { Book, Heart, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Education",
      icon: <Book className="h-8 w-8 text-impact-green" />,
      color: "bg-impact-green-light",
      borderColor: "border-impact-green",
      description:
        "Free coaching classes for school dropouts and special training for Islamic scholars to become professionals. We help students pass exams through recognized boards.",
      link: "#education",
    },
    {
      id: 2,
      title: "Healthcare",
      icon: <Heart className="h-8 w-8 text-impact-blue" />,
      color: "bg-impact-blue-light",
      borderColor: "border-impact-blue",
      description:
        "Free medical camps, mobile counseling centers, and awareness campaigns on HIV/AIDS, Hepatitis B, Malaria, Dengue, and Polio vaccination.",
      link: "#healthcare",
    },
    {
      id: 3,
      title: "Scholarships",
      icon: <GraduationCap className="h-8 w-8 text-impact-yellow" />,
      color: "bg-impact-yellow-light",
      borderColor: "border-impact-yellow",
      description:
        "Financial assistance for deserving students covering tuition fees, examination fees, boarding and lodging, textbooks and study materials.",
      link: "#scholarships",
    },
    {
      id: 4,
      title: "Special Programs",
      icon: <Award className="h-8 w-8 text-impact-dark" />,
      color: "bg-gray-100",
      borderColor: "border-impact-dark",
      description:
        "Support for the elderly, widows, orphans, transgender individuals with vocational training, and other initiatives for economic empowerment.",
      link: "#special-programs",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-impact-dark mb-4">Our Programs</h2>
          <p className="text-gray-600 text-lg">
            We develop initiatives that create lasting change through education, healthcare, financial assistance, and special programs for vulnerable communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`rounded-xl ${program.color} p-6 border-l-4 ${program.borderColor} shadow-sm card-hover`}
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-impact-dark">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <a
                href={program.link}
                className="inline-block font-medium text-impact-dark hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our programs are designed to create sustainable impact. We believe in empowering communities through education, healthcare, and financial support.
          </p>
          <Button 
            className="bg-impact-green hover:bg-impact-green/90 text-white font-medium px-8 py-3"
          >
            Support Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
