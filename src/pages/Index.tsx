
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import SpecialPrograms from "@/components/SpecialPrograms";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FounderSection from "@/components/FounderSection";
import DonationVolunteerSection from "@/components/DonationVolunteerSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import DirectorsSection from "@/components/DirectorsSection";

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
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <SuccessStoriesSection />
        <FounderSection />
        <DirectorsSection />
        <div className="bg-gradient-to-br from-white via-impact-green/5 to-impact-blue/5">
          <section className="container mx-auto px-4 py-20" id="special-programs">
            <h2 className="text-3xl font-bold mb-12 text-impact-dark text-center">Special Programs</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
                alt="Special Programs"
                className="rounded-lg shadow-lg max-w-md w-full object-cover h-[400px]"
              />
              <SpecialPrograms />
            </div>
          </section>
        </div>
        <ImpactSection />
        <DonateSection />
        <DonationVolunteerSection />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
