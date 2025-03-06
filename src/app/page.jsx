import React from "react";
import HomeHero from "@/components/views/HomeHero";
import ContactSection from "@/components/views/ContactSection";
import AboutSection from "@/components/views/AboutSection";
import ServiceSection from "@/components/views/ServiceSection";
import WhyChooseSection from "@/components/views/WhyChooseSection";

const Homepage = () => {
  return (
    <main className="">
      <HomeHero />
      <AboutSection />
      <ServiceSection />
      <WhyChooseSection />
      <ContactSection />
    </main>
  );
};

export default Homepage;
