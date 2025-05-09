import React, { memo } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactTyped } from 'react-typed';

const ContactForm = memo(() => (
  <div className="bg-white rounded-xl shadow-md p-8 order-2 lg:order-1 min-w-0">
    <h3 className="text-2xl font-bold text-impact-dark mb-6">Send Us a Message</h3>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-impact-green focus:border-impact-green min-w-0"
            placeholder="John Doe"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-impact-green focus:border-impact-green min-w-0"
            placeholder="john@example.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-impact-green focus:border-impact-green min-w-0"
          placeholder="How can we help you?"
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-impact-green focus:border-impact-green min-w-0"
          placeholder="Your message here..."
        ></textarea>
      </div>
      <Button className="bg-impact-green hover:bg-impact-green/90 w-full min-w-0">
        Send Message
      </Button>
    </form>
  </div>
));

const ContactInfoPanel = memo(() => (
  <div className="order-1 lg:order-2 min-w-0">
    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
      <h3 className="text-2xl font-bold text-impact-dark mb-6">Contact Information</h3>
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="bg-impact-green/10 p-3 rounded-full flex-shrink-0">
            <MapPin className="h-6 w-6 text-impact-green" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Our Address</h4>
            <p className="text-gray-600 mt-1">
              Impact Charitable Trust, No. 635, 8th Cross, 5th Block, 1st Stage 1st Main HBR Layout Bangalore, Karnataka, India 560043
            </p>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="bg-impact-blue/10 p-3 rounded-full flex-shrink-0">
            <Mail className="h-6 w-6 text-impact-blue" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Email Us</h4>
            <p className="text-gray-600 mt-1">
              <a href="mailto:info@impactcharitabletrust.org" className="hover:text-impact-blue">
                info@impactcharitabletrust.org
              </a>
            </p>
            <p className="text-gray-600">
              <a href="mailto:support@impactcharitabletrust.org" className="hover:text-impact-blue">
                support@impactcharitabletrust.org
              </a>
            </p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="bg-impact-yellow/10 p-3 rounded-full flex-shrink-0">
            <Phone className="h-6 w-6 text-impact-yellow" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Call Us</h4>
            <p className="text-gray-600 mt-1">
              <a href="tel:+919886991235" className="hover:text-impact-yellow">
                +91 98869 91235
              </a>
            </p>
            <p className="text-gray-600">
              <a href="tel:+918035817679" className="hover:text-impact-yellow">
                +91 80 3581 7679
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Socials */}
    <div className="bg-white rounded-xl shadow-md p-8">
      <h3 className="text-xl font-bold text-impact-dark mb-4">Follow Us</h3>
      <p className="text-gray-600 mb-4">Connect with us on social media for updates and news.</p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="bg-impact-green/10 hover:bg-impact-green/20 text-impact-green p-3 rounded-full transition-colors"
          aria-label="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a
          href="#"
          className="bg-impact-blue/10 hover:bg-impact-blue/20 text-impact-blue p-3 rounded-full transition-colors"
          aria-label="Twitter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </a>
        <a
          href="#"
          className="bg-impact-yellow/10 hover:bg-impact-yellow/20 text-impact-yellow p-3 rounded-full transition-colors"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a
          href="#"
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </div>
  </div>
));
const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent"
            style={{ whiteSpace: 'normal', minWidth: 0, display: 'inline-block' }}
          >
            <ReactTyped
              strings={["Contact Us"]}
              typeSpeed={60}
              backSpeed={40}
              loop
              showCursor={false}
            />
          </h2>
          <div className="block w-full">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium text-xs md:text-sm mb-2 mt-1">
              Get in Touch
            </span>
          </div>
          <p className="text-gray-600 text-lg">
            Have questions or want to get involved? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfoPanel />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;