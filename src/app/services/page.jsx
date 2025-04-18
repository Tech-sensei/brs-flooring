"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import ServiceSection from "@/components/views/ServiceSection";
import ContactSection from "@/components/views/ContactSection";
import HowItWork from "@/components/views/HowItWork";
import VideoPlayer from "@/components/ui/VideoPlayer";
import TestimonialSection from "@/components/views/TestimonialSection";

const ServicePage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="">
      <Head>
        <title>Our Services | BRS Floors</title>
        <meta
          name="description"
          content="Explore BRS Floors' wide range of professional flooring services including installation, remodeling, and maintenance. Quality guaranteed."
        />
        <meta
          name="keywords"
          content="flooring services, vinyl installation, hardwood flooring, tile flooring, floor remodeling, BRS Floors, commercial flooring, residential flooring, premium flooring solutions"
        />
        <link rel="canonical" href="https://brsflooring.com/services" />
      </Head>

      <section
        className="h-[413px] text-white-10 flex items-center px-24 pt-[200px] pb-10 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/images/homeHeroImg.png')",
        }}
      >
        <div className="flex flex-col items-start gap-4 w-[608px]">
          <div className="flex flex-col items-start w-full">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white-10 text-base font-sans font-normal leading-normal"
            >
              <Link href="/" className="text-white-10 text-base font-sans font-normal leading-normal hover:underline">
                Home
              </Link>{" "}
              -
              <Link href="/services" className="text-white-10 text-base font-sans font-normal leading-normal hover:underline">
                Services
              </Link>{" "}
            </motion.p>

            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-white text-[36px] font-bold font-alt leading-normal"
            >
              Our Services
            </motion.h1>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-16 lg:px-24 px-4 flex flex-col lg:flex-row items-start gap-6">
     
        <div className="flex flex-col items-start gap-4 w-full flex-1">
          <div className="w-[40%] lg:w-[20%] h-[2px] bg-dark mb-2"></div>
          <h2 className="text-[32px] text-dark font-alt font-semibold leading-9 mb-4">
            Interior design makes the place spacious
          </h2>
          <p className="text-dark text-base font-sans font-normal leading-normal">
            Nullam eu malesuada risus praesent fermentum. Augue magnis proin
            primis tempor litora ullamcorper turpis ad netus. Fusce dolor mus
            justo nascetur donec pulvinar congue.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <FaRegCheckCircle className="text-dark" />
              <p className="text-dark text-base font-sans font-normal leading-normal">
                Faucibus mattis aptent ac
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaRegCheckCircle className="text-dark" />
              <p className="text-dark text-base font-sans font-normal leading-normal">
                Faucibus mattis aptent ac
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaRegCheckCircle className="text-dark" />
              <p className="text-dark text-base font-sans font-normal leading-normal">
                Faucibus mattis aptent ac
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaRegCheckCircle className="text-dark" />
              <p className="text-dark text-base font-sans font-normal leading-normal">
                Faucibus mattis aptent ac
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaRegCheckCircle className="text-dark" />
              <p className="text-dark text-base font-sans font-normal leading-normal">
                Faucibus mattis aptent ac
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaRegCheckCircle className="text-dark" />
              <p className="text-dark text-base font-sans font-normal leading-normal">
                Faucibus mattis aptent ac
              </p>
            </div>
          </div>
        </div>

    
        <div className="flex-1 w-full">
          <VideoPlayer />
        </div>
      </section> */}

      <ServiceSection />
      <HowItWork />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
};

export default ServicePage;
