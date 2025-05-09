
import { Button } from "@/components/ui/button";
import { QrCode, FileUp } from "lucide-react";
import { useState } from "react";

const DonationVolunteerSection = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  
  return (
    <section id="donate" className="container mx-auto px-4 py-12 space-y-8" aria-label="Donate and Volunteer">
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-xl mx-auto">
        <Button 
          className="bg-impact-green hover:bg-impact-green/90 text-white flex-1 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
          onClick={() => {
            setShowQrCode(true);
          }}
        >
          Donate Now <QrCode className="h-5 w-5" />
        </Button>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdf3CWT_OSfk9KgGTqeIssBGdq3HG8vKwbQmd5KgyfPL5I3tQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-impact-green hover:bg-impact-green/90 text-white flex-1 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-impact-green"
          aria-label="Fill out the volunteer form on Google Forms (opens in a new tab)"
          style={{ display: 'flex' }}
        >
          Fill Out the Volunteer Form
        </a>
      </div>
      
      {showQrCode && (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Donate Now</h3>
          <div className="flex justify-center">
            <img 
              src="/Photos/WhatsApp Image 2025-05-02 at 3.59.06 PM.jpeg" 
              alt="Donate Now Details (UPI/Bank/QR)" 
              className="w-full max-h-96 object-contain rounded-lg shadow"
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Use the details in the image to make your donation. Thank you for your support!
          </p>
        </div>
      )}
    </section>
  );
};

export default DonationVolunteerSection;
