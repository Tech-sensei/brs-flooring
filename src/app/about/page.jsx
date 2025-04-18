"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactSection from "@/components/views/ContactSection";
import AboutSection from "@/components/views/AboutSection";
import WhyChooseSection from "@/components/views/WhyChooseSection";

import { projectSecImg3, projectSecImg4, projectSecImg5 } from "../../../public/assets/images";

const projectsArr = [
  {
    id: 3,
    title: "SHAW’S KITCHEN REMODELLING",
    description: "Morbi at blandit est. Phasellus suscipit leo in dui dapibus, ac interdum eros imperdiet.",
    image: projectSecImg3,
    overlayBg: "bg-black/40",
  },
  {
    id: 4,
    title: "THE GRAYSONS",
    description: "Morbi at blandit est. Phasellus suscipit leo in dui dapibus, ac interdum eros imperdiet.",
    image: projectSecImg4,
    overlayBg: "bg-black/50",
  },
  {
    id: 5,
    title: "PREGO",
    description: "Morbi at blandit est. Phasellus suscipit leo in dui dapibus, ac interdum eros imperdiet.",
    image: projectSecImg5,
    overlayBg: "bg-black/50",
  },
];

const AboutPage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main className="">
      <Head>
        <title>About Us | BRS Floors</title>
        <meta
          name="description"
          content="Learn more about BRS Floors, our mission, and why we are the trusted choice for premium flooring solutions."
        />
        <meta
          name="keywords"
          content="about brs floors, flooring solutions, premium flooring, flooring company BRS Floors, about BRS Floors, flooring company, luxury vinyl flooring, hardwood floors, commercial flooring, residential remodeling, premium flooring solutions"
        />
        <link rel="canonical" href="https://brsflooring.com/about" />
      </Head>

      {/* aboutHero */}
      <section
        className="h-[413px] text-white-10 flex items-center lg:px-24 px-4 pt-[200px] pb-10 bg-no-repeat bg-center bg-cover"
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
              <Link href="/about" className="text-white-10 text-base font-sans font-normal leading-normal hover:underline">
                About
              </Link>{" "}
            </motion.p>

            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-white text-[36px] font-bold font-alt leading-normal"
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </section>

      <AboutSection />
      <WhyChooseSection />

      {/* <section className="bg-white py-24 lg:px-24 px-4 flex flex-col items-start gap-14">
      
        <div className="flex flex-col lg:flex-row items-start justify-between w-full">
          <div className="flex flex-col items-start lg:gap-4 flex-1">
            <p className="text-dark text-base font-sans font-normal uppercase leading-normal">
              Latest Project
            </p>
            <h2 className="text-dark text-[32px] font-alt font-semibold leading-normal">
              We design to inspire
            </h2>
          </div>

          <div className="flex flex-col items-start lg:gap-4 flex-1">
            <div className="w-[30%] h-[2px] bg-dark mb-2"></div>
            <p className="text-dark text-base font-sans font-normal leading-normal">
              Lectus si torquent ultrices letius potenti feugiat mattis integer
              tempus consequat. Ac quisque dignissim mollis nisl porttitor nisi
              venenatis primis sit vel. Erat senectus non mauris a laoreet
              ridiculus ad velit venenatis montes.
            </p>
          </div>
        </div>

      
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            {projectsArr.map((project, idx) => (
              <Link key={project.id} href={`/projects/${project.id}`} passHref>
                <figure
                  key={idx}
                  className="relative w-full h-[400px] lg:h-[500px] overflow-hidden group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-101"
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full p-6 rounded-b-lg transition-transform duration-300 ease-in-out translate-y-0 group-hover:-translate-y-2 ${project.overlayBg}`}
                  >
                    <h2 className="text-white text-xl font-alt font-semibold leading-normal uppercase">
                      {project.title}
                    </h2>
                    <p className="text-white text-base font-sans font-normal leading-normal">
                      {project.description}
                    </p>
                  </div>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      <ContactSection />
    </main>
  );
};

export default AboutPage;
