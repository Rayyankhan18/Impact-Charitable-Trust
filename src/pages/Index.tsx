
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";
import SpecialPrograms from "@/components/SpecialPrograms";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FounderSection from "@/components/FounderSection";
import DonationVolunteerSection from "@/components/DonationVolunteerSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";


const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href === '#') return;

        const element = document.querySelector(href || '#');
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-impact-green/10 via-impact-blue/5 to-impact-yellow/10 backdrop-blur-sm">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <SuccessStoriesSection />
        <FounderSection />
        <SpecialPrograms />
        <ImpactSection />
        <DonateSection />
        <DonationVolunteerSection />
        <ContactSection />
        <GallerySection />
        <CallToAction />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
