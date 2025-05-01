
import { Button } from "@/components/ui/button";
import { QrCode, FileUp } from "lucide-react";
import { useState } from "react";

const DonationVolunteerSection = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  
  return (
    <section className="container mx-auto px-4 py-12 space-y-8" aria-label="Donate and Volunteer">
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-xl mx-auto">
        <Button 
          className="bg-impact-green hover:bg-impact-green/90 text-white flex-1 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
          onClick={() => {
            setShowQrCode(!showQrCode);
            setShowVolunteerForm(false);
          }}
        >
          Donate Now <QrCode className="h-5 w-5" />
        </Button>
        <Button 
          className="bg-impact-green hover:bg-impact-green/90 text-white flex-1 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors"
          onClick={() => {
            setShowVolunteerForm(!showVolunteerForm);
            setShowQrCode(false);
          }}
        >
          Become a Volunteer
        </Button>
      </div>
      
      {showQrCode && (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Scan to Donate</h3>
          <div className="flex justify-center">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://impact-charitable-trust.org/donate" 
              alt="Donation QR Code" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Scan this QR code with your phone's camera to make a secure donation
          </p>
        </div>
      )}
      
      {showVolunteerForm && (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Volunteer Application</h3>
          <form 
            action="https://forms.google.com/volunteer-signup" 
            method="POST" 
            target="_blank"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-impact-green"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-impact-green"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-impact-green"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                type="tel" 
                name="phone" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-impact-green"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
              <select 
                name="interest"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-impact-green"
                required
              >
                <option value="">Select an option</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="specialPrograms">Special Programs</option>
                <option value="fundraising">Fundraising</option>
                <option value="administration">Administration</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <FileUp className="w-8 h-8 text-gray-400" />
                    <p className="pt-1 text-sm text-gray-500">Upload your resume</p>
                    <p className="text-xs text-gray-400">PDF or DOCX up to 5MB</p>
                  </div>
                  <input type="file" name="resume" accept=".pdf,.docx" className="hidden" />
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <textarea 
                name="message" 
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-impact-green"
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="consent" 
                id="consent" 
                className="h-4 w-4 text-impact-green focus:ring-impact-green border-gray-300 rounded"
                required
              />
              <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                I agree to be contacted about volunteer opportunities
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-impact-green hover:bg-impact-green/90 text-white"
            >
              Submit Application
            </Button>
          </form>
        </div>
      )}
    </section>
  );
};

export default DonationVolunteerSection;
