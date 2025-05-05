import { Book, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
      image: "/images/Picture40.jpg",
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
      image: "/images/Picture15.jpg",
      stats: {
        patients: "1200",
        camps: "25+",
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
      image: "/images/Picture22.jpg",
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
          <h2 className="text-4xl font-bold mb-4 text-impact-green">
            Transforming Lives Through Our Programs
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We develop initiatives that create lasting change through education, healthcare, and financial support for vulnerable communities.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-center mb-8 gap-2 bg-gray-100 rounded-lg p-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Program Details</TabsTrigger>
            <TabsTrigger value="impact">Impact & Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={program.id}
                  className={`transition-all duration-300 cursor-pointer overflow-hidden bg-white border border-gray-100 hover:shadow-sm ${activeIndex === index ? 'ring-2 ring-impact-green/50' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="mb-4">{program.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-impact-dark">{program.title}</h3>
                    <p className="text-gray-600 text-base mb-4">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {programs.map((program) => (
                <Card key={program.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
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
          <Button 
            className="bg-gradient-to-r from-impact-green to-impact-blue text-white font-medium px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Support Our Work
          </Button>
        </div>
      </div>
    </div>
  );
}