import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React, { useState, Suspense } from "react";

const AboutSection = React.lazy(() => import("./components/AboutSection"));
const GallerySection = React.lazy(() => import("./components/GallerySection"));
const DonateSection = React.lazy(() => import("./components/DonateSection"));
const SpecialPrograms = React.lazy(() => import("./components/SpecialPrograms"));
const ProgramsSection = React.lazy(() => import("./components/ProgramsSection"));
const SuccessStoriesSection = React.lazy(() => import("./components/SuccessStoriesSection"));
const ContactSection = React.lazy(() => import("./components/ContactSection"));
const DonationVolunteerSection = React.lazy(() => import("./components/DonationVolunteerSection"));
const FounderSection = React.lazy(() => import("./components/FounderSection"));
const ImpactSection = React.lazy(() => import("./components/ImpactSection"));
const CallToAction = React.lazy(() => import("./components/CallToAction"));
const DirectorsSection = React.lazy(() => import("./components/DirectorsSection"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
  // Create a new query client instance inside the component
  // This ensures it's only created when App component is rendered
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
