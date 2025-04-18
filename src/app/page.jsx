import React from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>BRS Floors | Premium Flooring Solutions At Your Reach</title>
        <meta
          name="description"
          content="BRS Floors offers premium hardwood, luxury vinyl, and tile flooring with expert installation worldwide. Quality and style you can trust."
        />
        <meta
          name="keywords"
          content="BRS Floors, flooring company, hardwood floors, vinyl floors, tile flooring, commercial flooring, residential flooring, expert installation, flooring contractors"
        />
          <link rel="canonical" href="https://brsflooring.com/" />
      </Head>
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
    </>
  );
};

export default Homepage;
