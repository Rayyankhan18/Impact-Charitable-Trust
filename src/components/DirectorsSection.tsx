
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Director {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

const directors: Director[] = [
  {
    id: 1,
    name: "Dr. Amir Khan",
    position: "Chairperson",
    bio: "With over 25 years of experience in education administration, Dr. Khan leads our strategic initiatives and overall governance.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Priya Mehta",
    position: "Vice Chairperson",
    bio: "A passionate advocate for women's education, Priya brings expertise in program development and community outreach.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Dr. Sanjay Verma",
    position: "Medical Director",
    bio: "Leading our healthcare initiatives, Dr. Verma is a respected physician with dedication to providing quality healthcare to underserved communities.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "Rahul Sharma",
    position: "Treasurer",
    bio: "A finance professional with expertise in nonprofit fund management, Rahul ensures transparency and accountability in all financial matters.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 5,
    name: "Fatima Ahmed",
    position: "Secretary",
    bio: "With a background in social work, Fatima coordinates our special programs and ensures efficient administration of trust activities.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const DirectorsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-impact-dark">Our Directors</h2>
          <p className="text-gray-600 text-lg">
            Meet the dedicated team guiding our mission and vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {directors.map((director) => (
            <div key={director.id} className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 border-4 border-impact-green/20 mb-4">
                <AvatarImage src={director.image} alt={director.name} className="object-cover" />
                <AvatarFallback>{director.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-impact-dark">{director.name}</h3>
              <p className="text-impact-green font-medium mb-2">{director.position}</p>
              <p className="text-gray-600 text-sm max-w-xs">{director.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
