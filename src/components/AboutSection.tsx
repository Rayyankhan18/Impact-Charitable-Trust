
import { Button } from "@/components/ui/button";
import { ReactTyped } from 'react-typed';
import { useState, useEffect } from "react";

const staticImage = { src: "/Photos/Picture39.webp", alt: "Our Vision & Mission" };

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl flex justify-center items-center h-72 md:h-96 w-full">
  <img
    src={staticImage.src}
    alt={staticImage.alt}
    className="w-full h-full object-cover rounded-2xl shadow-lg"
  />
</div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-impact-green font-bold text-xl">Est. 2018</p>
                <p className="text-gray-600">Making a difference</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-impact-green/10 rounded-full px-4 py-1 text-impact-green font-medium text-sm mb-4">
              About Us
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-impact-green via-impact-blue to-impact-yellow bg-clip-text text-transparent"
              style={{ whiteSpace: 'normal', overflow: 'visible', minWidth: 0, display: 'block', wordBreak: 'break-word' }}
            >
              <div className="min-h-[56px]">
                <ReactTyped
                  strings={["Our Vision & Mission"]}
                  typeSpeed={60}
                  backSpeed={40}
                  showCursor={false}
                />
              </div>
            </h2>
            <p className="text-gray-600 mb-4">
              Impact Charitable Trust was established in February 2018 with the vision of uplifting the educational and financial status of women and children, regardless of caste, creed, or religion.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to set up and manage educational institutions, hospitals, technical and training centers, commercial institutes, and computer learning centers to support the backward classes and minority communities without any discrimination.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-impact-green font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To create a society where every individual has equal access to opportunities for growth and development.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-impact-blue font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower marginalized communities through education, healthcare, and financial assistance.
                </p>
              </div>
            </div>
            <Button className="bg-impact-green hover:bg-impact-green/90">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
