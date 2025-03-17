import React from "react";
import HomeHero from "@/components/views/HomeHero";
import ContactSection from "@/components/views/ContactSection";
import AboutSection from "@/components/views/AboutSection";
import ServiceSection from "@/components/views/ServiceSection";
import WhyChooseSection from "@/components/views/WhyChooseSection";
import HowItWork from "@/components/views/HowItWork";
import JourneySection from "@/components/views/JourneySection";
import TestimonialSection from "@/components/views/TestimonialSection";
import ProjectSection from "@/components/views/ProjectSection";

const Homepage = () => {
  return (
    <main className="">
      <HomeHero />
      <AboutSection />
      <ServiceSection />
      <WhyChooseSection />
      <HowItWork />
      <TestimonialSection />
      {/* <ProjectSection /> */}
      {/* <JourneySection /> */}
      <ContactSection />
    </main>
  );
};

export default Homepage;
