
import { Book, Heart, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProgramsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('programs-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % programs.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const programImages = {
    education: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1169&q=80"
    ],
    healthcare: [
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=1170&q=80"
    ],
    specialPrograms: [
      "https://images.unsplash.com/photo-1593113598332-cd59a93f9724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1609234500459-34302e58ad50?auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1170&q=80"
    ]
  };

  const [imageIndex, setImageIndex] = useState({
    education: 0,
    healthcare: 0,
    specialPrograms: 0
  });

  const cycleImages = (programType) => {
    setImageIndex(prev => ({
      ...prev,
      [programType]: (prev[programType] + 1) % programImages[programType].length
    }));
  };

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
      image: programImages.education[imageIndex.education],
      programType: "education",
      stats: {
        students: "80+",
        passRate: "100%",
        scholarships: "80"
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
      image: programImages.healthcare[imageIndex.healthcare],
      programType: "healthcare",
      stats: {
        patients: "1,200",
        camps: "25+",
        vaccinations: "250+"
      }
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
      image: programImages.specialPrograms[imageIndex.specialPrograms],
      programType: "specialPrograms",
      stats: {
        beneficiaries: "75+",
        programs: "4+",
        placement: "40%"
      }
    },
  ];

  return (
    <section id="programs-section" className="section-padding bg-gradient-to-br from-white via-impact-green/5 to-impact-blue/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-impact-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-impact-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-full px-4 py-1 text-impact-dark font-medium text-sm mb-4">
            Our Focus Areas
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent">
            Transforming Lives Through Our Programs
          </h2>
          <p className="text-gray-600 text-lg">
            We develop initiatives that create lasting change through education, healthcare, and financial support for vulnerable communities.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-center mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Program Details</TabsTrigger>
            <TabsTrigger value="impact">Impact & Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="hidden lg:block relative">
                {programs.map((program, index) => (
                  <div 
                    key={program.id}
                    className={`rounded-xl overflow-hidden shadow-xl transition-all duration-700 absolute ${
                      index === activeIndex 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ display: index === activeIndex ? 'block' : 'none' }}
                  >
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover rounded-xl aspect-[4/3]"
                    />
                    <button 
                      onClick={() => cycleImages(program.programType)}
                      className="absolute top-2 right-2 bg-white/70 hover:bg-white rounded-full p-1 text-xs"
                      title="Next image"
                    >
                      ↻
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl">
                      <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-white text-2xl font-bold mb-2">{program.title}</h3>
                        <p className="text-white/90 mb-4">{program.description}</p>
                        <Button className="bg-white text-impact-dark hover:bg-opacity-90">
                          Learn more →
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {programs.map((program, index) => (
                  <Card
                    key={program.id}
                    className={`transition-all duration-300 cursor-pointer overflow-hidden ${
                      program.color
                    } border-l-4 ${program.borderColor} ${
                      isInView ? "animate-fade-in" : "opacity-0"
                    } ${
                      activeIndex === index 
                        ? "scale-105 shadow-xl" 
                        : "hover:scale-102 hover:shadow-lg"
                    }`}
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      transform: `translateY(${isInView ? '0' : '20px'})` 
                    }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-white/80 p-3 rounded-full">
                          {program.icon}
                        </div>
                        <div>
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
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold">{program.title}</h3>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-2 flex gap-1">
                      {programImages[program.programType].map((_, imgIndex) => (
                        <button 
                          key={imgIndex}
                          className={`h-2 w-2 rounded-full ${imageIndex[program.programType] === imgIndex ? 'bg-white' : 'bg-white/40'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageIndex(prev => ({...prev, [program.programType]: imgIndex}));
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-full ${program.color}`}>
                        {program.icon}
                      </div>
                      <h3 className="text-lg font-bold">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                    
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {programImages[program.programType].map((image, imgIdx) => (
                        <div 
                          key={imgIdx}
                          className={`rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                            imageIndex[program.programType] === imgIdx ? 'border-impact-green scale-105' : 'border-transparent'
                          }`}
                          onClick={() => setImageIndex(prev => ({...prev, [program.programType]: imgIdx}))}
                        >
                          <img 
                            src={image} 
                            alt={`${program.title} image ${imgIdx + 1}`} 
                            className="w-full h-16 object-cover"
                          />
                        </div>
                      ))}
                    </div>
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
    </section>
  );
};

export default ProgramsSection;
