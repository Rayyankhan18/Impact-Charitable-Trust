import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ReactTyped } from 'react-typed';
import { Card, CardContent } from "@/components/ui/card";

interface Story {
  id: number;
  name: string;
  avatar: string;
  role: string;
  story: string;
}

const successStories: Story[] = [
  {
    id: 1,
    name: "Sameena Banu (B.COM)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "",
    story: "Through Impact's scholarship program, I was able to complete my B.COM Degree. Despite facing financial hardships, the trust supported my education."
  },
  {
    id: 2,
    name: "Stella Mary (B.COM)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "",
    story: "Impact Charitable Trust gave me hope when I needed it most. As a first-generation college student from a single-parent home, completing my B.COM degree seemed impossible. The trust not only provided financial assistance but also mentorship that helped me succeed."
  },
  {
    id: 3,
    name: "Shaista Banu (BBA)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "",
    story: "Through Impact Charitable Trust founder Mr Hidayathulla Khan Sir's help, I was able to complete my BBA Degree."
  },
  {
    id: 4,
    name: "Shazia Tabassum (B.COM)",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "",
    story: "Impact Trust's educational program helped me complete my degree in education. I now teach mathematics at a local school and volunteer with Impact to help other students achieve their dreams."
  },
  {
    id: 5,
    name: "Wasiqa Naseem P (BCA)",
    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "",
    story: "After attending Impact's healthcare training program, I secured a position as a community health worker. I now help provide essential healthcare services in my village, improving lives every day."
  },
  {
    id: 6,
    name: "Umme Hani (B.COM)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "",
    story: "Impact Trust's scholarship program funded my accounting degree. They also provided mentorship and helped me secure an internship. Today, I work at a respected accounting private firm in Bangalore"
  },
];

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="section-padding bg-gradient-to-br from-impact-green/5 via-white to-impact-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
  className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent"
  style={{ whiteSpace: 'normal', minWidth: 0, display: 'inline-block' }}
>
  <div className="min-h-[56px]">
    <ReactTyped
      strings={["Success Stories"]}
      typeSpeed={60}
      backSpeed={40}
      loop
      showCursor={false}
    />
  </div>
</h2>
<div className="block w-full">
  <span className="inline-block bg-white/50 backdrop-blur-sm rounded-full px-3 py-1 text-impact-dark font-medium text-xs md:text-sm mb-2 mt-1">
    Stories of Transformation
  </span>
</div>
          <p className="text-gray-600 text-lg">
            Meet the individuals whose lives have been transformed through our programs and your support.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story) => (
  <Card key={story.id} className="shadow-md rounded-xl bg-white/90">
    <CardContent className="p-6 flex flex-col items-start">
      <div className="font-bold text-impact-dark text-lg leading-tight mb-2">{story.name}</div>
      <blockquote className="text-impact-green border-l-4 border-impact-green pl-4 italic text-base">"{story.story}"</blockquote>
    </CardContent>
  </Card>
))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              These are just a few of the many lives we've touched. With your support, we can create many more success stories.
            </p>
            <div className="font-semibold text-base md:text-lg mt-10 text-center">
  Students Educated: <span className="text-impact-green font-bold">80+</span> | Medical Camps: <span className="text-impact-blue font-bold">14+</span> | Scholarships: <span className="font-bold" style={{color:'#FFA500'}}>80+</span>
</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SuccessStoriesSection;
