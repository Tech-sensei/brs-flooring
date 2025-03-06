"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceSection from "@/components/views/ServiceSection";
import ContactSection from "@/components/views/ContactSection";

const ServicePage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="">
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
              Home - Service
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

      <ServiceSection />
      <ContactSection />
    </main>
  );
};

export default ServicePage;
