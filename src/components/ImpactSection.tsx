
import { User, BookOpen, HeartPulse, GraduationCap } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      id: 1,
      icon: <User className="h-7 w-7 text-impact-green" />,
      value: "5000+",
      label: "Lives Impacted",
      description: "Through our various programs and initiatives",
    },
    {
      id: 2,
      icon: <BookOpen className="h-7 w-7 text-impact-blue" />,
      value: "2500+",
      label: "Students Educated",
      description: "With free coaching and educational support",
    },
    {
      id: 3,
      icon: <HeartPulse className="h-7 w-7 text-impact-yellow" />,
      value: "1000+",
      label: "Medical Camps",
      description: "Providing free healthcare services to communities",
    },
    {
      id: 4,
      icon: <GraduationCap className="h-7 w-7 text-impact-green" />,
      value: "500+",
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
  ];

  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-impact-yellow/20 rounded-full px-4 py-1 text-impact-dark font-medium text-sm mb-4">
            Our Impact
          </div>
          <h2 className="text-impact-dark mb-4">Making a Difference</h2>
          <p className="text-gray-600 text-lg">
            Our programs have touched thousands of lives. Here's a glimpse of the impact we've created through our initiatives.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-gray-50 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-impact-dark mb-2">{stat.value}</h3>
              <p className="font-semibold text-lg text-gray-800 mb-2">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-impact-green/5 rounded-3xl transform skew-y-3"></div>
          <div className="relative py-12">
            <h3 className="text-center text-2xl font-bold text-impact-dark mb-12">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
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
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-impact-dark mb-6">Our Partners & Supporters</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* These would be replaced with actual partner logos */}
            <div className="bg-gray-200 w-32 h-12 rounded flex items-center justify-center">Partner 1</div>
            <div className="bg-gray-200 w-32 h-12 rounded flex items-center justify-center">Partner 2</div>
            <div className="bg-gray-200 w-32 h-12 rounded flex items-center justify-center">Partner 3</div>
            <div className="bg-gray-200 w-32 h-12 rounded flex items-center justify-center">Partner 4</div>
            <div className="bg-gray-200 w-32 h-12 rounded flex items-center justify-center">Partner 5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
