"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
  A20,
  A21,
  A22,
  A23,
  A24,
  A25,
  A26,
  A27,
  A28,
  A29,
  A30,
  A31,
  A32,
  A33,
  A34,
  A35,
  A36,
  A37,
  A38,
  A39,
  A40,
  A41,
  A42,
  A43,
  A44,
  A45,
  A46,
  A47,
  A48,
  A49,
  A50,
} from "../../../public/assets/images/pastWork";

const images = [
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
  A20,
  A21,
  A22,
  A23,
  A24,
  A25,
  A26,
  A27,
  A28,
  A29,
  A30,
  A31,
  A32,
  A33,
  A34,
  A35,
  A36,
  A37,
  A38,
  A39,
  A40,
  A41,
  A42,
  A43,
  A44,
  A45,
  A46,
  A47,
  A48,
  A49,
  A50,
];

const Gallery = () => {
  const getImg = (img) => {
    setTempImg(img);
    setModal(true);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <main className="">
      {/* Hero Section */}
      <section
        className="h-[413px] text-white-10 flex items-center px-6 sm:px-8 md:px-12 lg:px-24 pt-[200px] pb-10 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/images/homeHeroImg.png')",
        }}
      >
        <div className="flex flex-col items-start gap-4 w-full max-w-[608px]">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white-10 text-sm sm:text-base font-sans font-normal leading-normal"
          >
            <Link href="/" className="text-white-10 text-base font-sans font-normal leading-normal hover:underline">
              Home
            </Link>{" "}
            <Link href="/projects" className="text-white-10 text-base font-sans font-normal leading-normal hover:underline">
              Projects
            </Link>{" "}
          </motion.p>

          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-alt leading-normal"
          >
            Past Works
          </motion.h1>
        </div>
      </section>

      <section className="bg-white py-24 lg:px-24 px-4 flex flex-col items-start gap-14">
        {/* header */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full">
          <div className="flex flex-col items-start lg:gap-4 flex-1">
            <p className="text-dark text-base font-sans font-normal uppercase leading-normal">Our Latest Creation</p>
            <h2 className="text-dark text-[32px] font-alt font-semibold leading-normal">Crafting Spaces That Inspire</h2>
          </div>

          <div className="flex flex-col items-start lg:gap-4 flex-1">
            <div className="w-[30%] h-[2px] bg-dark mb-2"></div>
            <p className="text-dark text-base font-sans font-normal leading-normal">
              Every project we undertake is a testament to our commitment to excellence. From concept to completion, we blend creativity,
              precision, and passion to transform spaces into works of art. Let us bring your vision to life with designs that inspire and
              captivate.
            </p>
          </div>
        </div>
      </section>

      <section className="w-ful text-white py-10 px-4 lg:px-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileHover="hover"
              variants={imageVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="mb-3 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden rounded-2xl shadow-md"
              onClick={() => getImg(image)}
            >
              <Image src={image} alt="Gallery Image" quality={100} className="w-full h-auto transform transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
