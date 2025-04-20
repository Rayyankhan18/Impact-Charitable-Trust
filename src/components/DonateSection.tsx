
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Gift } from "lucide-react";

const DonateSection = () => {
  const donationOptions = [
    {
      id: 1,
      title: "One-Time Donation",
      icon: <Heart className="h-6 w-6 text-white" />,
      color: "bg-impact-green",
      description: "Make a one-time donation to support our work and impact lives.",
      amounts: [500, 1000, 2500, 5000],
      defaultAmount: 1000,
    },
    {
      id: 2,
      title: "Monthly Giving",
      icon: <Calendar className="h-6 w-6 text-white" />,
      color: "bg-impact-blue",
      description: "Become a regular donor and support our programs consistently.",
      amounts: [200, 500, 1000, 2000],
      defaultAmount: 500,
    },
    {
      id: 3,
      title: "Sponsor a Child",
      icon: <Gift className="h-6 w-6 text-white" />,
      color: "bg-impact-yellow",
      description: "Sponsor a child's education, healthcare, and overall development.",
      amounts: [1500, 3000, 5000, 10000],
      defaultAmount: 3000,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-impact-green/5 via-white to-impact-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-impact-dark mb-4">Make a Difference Today</h2>
          <p className="text-gray-600 text-lg">
            Your contribution helps us continue our work and create lasting impact in the lives of those in need.
          </p>
          <div className="bg-impact-green text-white mt-6 inline-block px-4 py-2 rounded-lg">
            <p className="font-bold">80G Tax Benefits Available</p>
            <p className="text-sm">Donations are eligible for tax exemption under Section 80G</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {donationOptions.map((option) => (
            <div key={option.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className={`${option.color} p-4 flex items-center gap-3`}>
                <div className="bg-white/20 rounded-full p-2">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{option.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {option.amounts.map((amount) => (
                    <button
                      key={amount}
                      className={`py-2 px-4 rounded border ${
                        amount === option.defaultAmount
                          ? "bg-gray-100 border-gray-300 font-medium"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                
                <Button className={`w-full ${
                  option.id === 1 ? "bg-impact-green hover:bg-impact-green/90" :
                  option.id === 2 ? "bg-impact-blue hover:bg-impact-blue/90" :
                  "bg-impact-yellow hover:bg-impact-yellow/90 text-impact-dark"
                }`}>
                  Donate Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-impact-dark mb-4">Every Contribution Matters</h3>
              <p className="text-gray-600 mb-4">
                By sponsoring a child's education through our Education Sponsorship Program, you are investing in the leaders of tomorrow. Your support brings long-term impact—and that's exactly why we named our organization IMPACT.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-impact-green">✓</span>
                  <span className="text-gray-700">Get 80G tax exemption receipts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-impact-green">✓</span>
                  <span className="text-gray-700">Receive thank you certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-impact-green">✓</span>
                  <span className="text-gray-700">Track your impact through updates</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-impact-dark mb-4">Other Ways to Support</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-impact-green/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-impact-green" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-impact-dark">Volunteer With Us</h5>
                    <p className="text-sm text-gray-600">Join our volunteer program and contribute your time and skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-impact-blue/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-impact-blue" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-impact-dark">Corporate Partnerships</h5>
                    <p className="text-sm text-gray-600">Explore CSR opportunities and strategic partnerships.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-impact-yellow/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-impact-yellow" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-impact-dark">Spread Awareness</h5>
                    <p className="text-sm text-gray-600">Share our cause on social media and help us reach more people.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
