
import { User, BookOpen, HeartPulse, GraduationCap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({ lives: 0, students: 0, camps: 0, scholarships: 0 });
  
  const stats = [
    {
      id: 1,
      icon: <User className="h-7 w-7 text-impact-green" />,
      value: "100+",
      targetValue: 100,
      countKey: "lives",
      label: "Lives Impacted",
      description: "Through our various programs and initiatives",
    },
    {
      id: 2,
      icon: <BookOpen className="h-7 w-7 text-impact-blue" />,
      value: "230+",
      targetValue: 230,
      countKey: "students",
      label: "Students Educated",
      description: "With free coaching and educational support",
    },
    {
      id: 3,
      icon: <HeartPulse className="h-7 w-7 text-impact-yellow" />,
      value: "25+",
      targetValue: 25,
      countKey: "camps",
      label: "Medical Camps",
      description: "Providing free healthcare services to communities",
    },
    {
      id: 4,
      icon: <GraduationCap className="h-7 w-7 text-impact-green" />,
      value: "80+",
      targetValue: 80,
      countKey: "scholarships",
      label: "Scholarships",
      description: "Awarded to deserving students for higher education",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "The scholarship from Impact Charitable Trust changed my life. I am now able to pursue my engineering degree without worrying about financial constraints.",
      name: "Priya Kumar",
      title: "Engineering Student",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      quote: "The medical camp organized by Impact Charitable Trust provided free health check-ups and medicines for our entire village. We are truly grateful for their service.",
      name: "Rajesh Sharma",
      title: "Village Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 3,
      quote: "Thanks to the vocational training program, I learned tailoring skills and now have my own small business. This financial independence has given me dignity and respect.",
      name: "Meena Devi",
      title: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
    {
      id: 4,
      quote: "The elderly care program has been a blessing for my father. The regular health check-ups and community activities have greatly improved his quality of life.",
      name: "Ahmed Khan",
      title: "Son of Beneficiary",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // ms
      const interval = 20; // ms
      const steps = duration / interval;
      
      let step = 0;
      const timer = setInterval(() => {
        if (step >= steps) {
          clearInterval(timer);
          return;
        }
        
        step++;
        const progress = step / steps;
        
        setCounts({
          lives: Math.floor(progress * 100),
          students: Math.floor(progress * 230),
          camps: Math.floor(progress * 25),
          scholarships: Math.floor(progress * 80),
        });
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="impact" className="section-padding bg-gradient-to-br from-white via-impact-yellow/5 to-impact-green/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-impact-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-impact-yellow/10 rounded-full blur-3xl"></div>
        
        {/* SVG wave */}
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-10">
            <path fill="#FFF176" fillOpacity="0.5" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,117.3C672,96,768,96,864,122.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-impact-yellow/20 backdrop-blur-sm rounded-full px-4 py-1 text-impact-dark font-medium text-sm mb-4">
            Our Impact
          </div>
          <h2 className="text-impact-dark mb-4 bg-gradient-to-r from-impact-yellow via-impact-green to-impact-blue bg-clip-text text-transparent">Making a Difference</h2>
          <p className="text-gray-600 text-lg">
            Our programs have touched thousands of lives. Here's a glimpse of the impact we've created through our initiatives.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`bg-white rounded-lg shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-transform duration-300 hover:scale-105 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${stat.id * 150}ms` }}
            >
              <div className="bg-gray-50 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent mb-2">
                {counts[stat.countKey as keyof typeof counts]}+
              </h3>
              <p className="font-semibold text-lg text-gray-800 mb-2">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-impact-green/10 via-impact-blue/10 to-impact-yellow/10 rounded-3xl transform skew-y-3"></div>
          <div className="relative py-12">
            <h3 className="text-center text-2xl font-bold text-impact-dark mb-12">Success Stories</h3>
            
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/2 xl:basis-1/2 p-4">
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 h-full flex flex-col">
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-impact-green"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-impact-dark">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic flex-grow">"<span className="bg-gradient-to-r from-impact-green/20 to-impact-blue/20 bg-[length:100%_0.5em] bg-no-repeat bg-[0_88%]">{testimonial.quote}</span>"</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
