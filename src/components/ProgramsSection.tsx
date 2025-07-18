import { Book, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactTyped } from 'react-typed';

export default function ProgramsSection() {
  // The section below is now anchorable via #programs

  // The section below is now anchorable via #programs

  const [activeIndex, setActiveIndex] = useState(0);
  
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
      image: "/Photos/Picture26.webp",
      stats: {
        students: "80+",
        passRate: "100%"
      }
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
      image: "/Photos/Picture78.jpg",
      stats: {
        patients: "1200",
        camps: "14+",
        vaccinations: "250+"
      }
    },
    {
      id: 3,
      title: "Special Programs",
      icon: <Award className="h-8 w-8 text-impact-dark" />,
      color: "bg-gray-100",
      borderColor: "border-impact-dark",
      description:
        "Support for the elderly, widows, orphans, transgender individuals with vocational training, and other initiatives for economic empowerment.",
      link: "#special-programs",
      image: "/Photos/Picture71.jpg",
      stats: {
        beneficiaries: "75+",
        programs: "4+",
        placements: "40+"
      }
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % programs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="programs-section" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent"
            style={{ whiteSpace: 'normal', overflow: 'visible', minWidth: 0, display: 'block', wordBreak: 'break-word' }}
          >
            <div className="min-h-[56px]">
              <ReactTyped
                strings={["Transforming Lives Through Our Programs"]}
                typeSpeed={60}
                backSpeed={40}
                loop={typeof window !== 'undefined' ? window.innerWidth >= 768 : true}
                showCursor={false}
              />
            </div>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We develop initiatives that create lasting change through education, healthcare, and financial support for vulnerable communities.
          </p>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full justify-center mb-8 gap-2 bg-gray-100 rounded-lg p-2">
            <TabsTrigger value="details">Program Details</TabsTrigger>
            <TabsTrigger value="impact">Impact & Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {programs.map((program) => (
                <Card key={program.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <picture>
  <source srcSet={program.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
  <img 
    src={program.image} 
    alt={program.title}
    className="w-full h-full object-cover"
    width={"100%"}
    height={192}
  />
</picture>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-full ${program.color}`}>
                        {program.icon}
                      </div>
                      <h3 className="text-lg font-bold">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button className="w-full bg-impact-blue hover:bg-impact-blue/90">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className={`${program.color} border-t-4 ${program.borderColor}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      {program.icon}
                      <h3 className="text-lg font-bold">{program.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(program.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-gray-600 capitalize">{key}</span>
                          <span className="text-xl font-bold text-impact-dark">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our programs are designed to create sustainable impact. We believe in empowering communities through education, healthcare, and financial support.
          </p>
          <a
            href="#donate"
            className="bg-impact-green hover:bg-impact-green/90 text-white px-8 py-4 rounded-lg shadow-lg text-lg font-semibold transition-colors inline-block text-center"
          >
            Support Our Work
          </a>
        </div>
      </div>
    </div>
  );
}