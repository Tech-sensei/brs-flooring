"use client";

import React from "react";
import { motion } from "framer-motion";

const HomeHero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="h-screen text-white-10 flex items-center py-24 lg:px-24 px-4  bg-no-repeat bg-center bg-cover "
      style={{
        backgroundImage: "url('/assets/images/homeHeroImg.png')",
      }}
    >
      <div className="flex flex-col items-start gap-4 w-full lg:w-[650px] pt-[308px] pb-[200px]">
        <div className="flex flex-col gap-2 items-start w-full">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-[40px] lg:text-[64px] font-bold font-alt lg:leading-16 leading-10"
          >
            Where Quality Meets Every Step...
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-white-10 text-[15px] lg:text-base font-sans font-medium leading-normal"
          >
            BRS Floors specializes in high-quality, durable, and stylish
            flooring solutions across the world. From hardwood to luxury vinyl,
            we offer expert installation and premium materials to transform your
            space.
          </motion.p>
        </div>

        {/* button */}
        <motion.button
          type="button"
          onClick={() => {}}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 py-4 px-6 bg-orange rounded-xs border border-transparent transition-all duration-500 ease-in-out hover:border-white hover:bg-transparent text-white-10 text-base text-center font-sans font-semibold leading-normal cursor-pointer"
        >
          Get An Estimate
        </motion.button>
      </div>
    </section>
  );
};

export default HomeHero;
