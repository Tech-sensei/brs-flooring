import React from "react";
import HomeHero from "@/components/views/HomeHero";
import ContactSection from "@/components/views/ContactSection";
import AboutSection from "@/components/views/AboutSection";
import ServiceSection from "@/components/views/ServiceSection";

const Homepage = () => {
  return (
    <main className="">
      <HomeHero />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
};

export default Homepage;
