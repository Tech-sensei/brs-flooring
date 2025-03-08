"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectsArr } from "@/components/views/ProjectSection";
import FAQ from "@/components/views/FAQ";

const ProjectDetail = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { id } = useParams();

  const project = projectsArr.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found</p>;
  return (
    <main className="">
      <section
        className="h-[413px] text-white-10 flex items-center px-24 pt-[200px] pb-10 bg-no-repeat bg-center bg-cover w-full"
        style={{
          backgroundImage: "url('/assets/images/homeHeroImg.png')",
        }}
      >
        <div className="flex flex-col items-start gap-4 w-[700px]">
          <div className="flex flex-col items-start w-full">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white-10 text-base font-sans font-normal leading-normal"
            >
              <Link
                href="/"
                className="text-white-10 text-base font-sans font-normal leading-normal hover:underline"
              >
                Home
              </Link>{" "}
              -
              <Link
                href="/projects"
                className="text-white-10 text-base font-sans font-normal leading-normal hover:underline"
              >
                Projects
              </Link>{" "}
            </motion.p>

            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-white text-[36px] font-bold font-alt leading-normal"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-white-10 text-base font-sans font-normal leading-normal"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Flooring Ideas Section */}
      <section
        className="h-auto text-white-10 flex items-center py-24 px-6 sm:px-8 md:px-12 lg:px-24 bg-no-repeat bg-center bg-cover relative"
        style={{
          backgroundImage: "url('/assets/images/projectIdeaImg.png')",
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-10 md:gap-14">
          {/* Text Content */}
          <div className="flex flex-col gap-4 items-center justify-center w-full text-center">
            <h3 className="text-white text-sm sm:text-base md:text-lg font-sans font-semibold leading-normal uppercase">
              FLOORING IDEAS
            </h3>

            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-alt font-semibold leading-normal">
              Make Your Home’s Interior Stand Out From The Others
            </h2>

            <p className="text-white-10 text-sm sm:text-base md:text-lg font-sans font-normal leading-normal max-w-[800px]">
              Nec lectus et integer convallis potenti si suscipit neque etiam.
              At ad convallis sociosqu tempus bibendum elementum si. Auctor nec
              hendrerit facilisi duis tincidunt lorem lobortis tristique eu leo
              donec. Mattis ac ante suspendisse mi amet.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Experience*/}
            <div className="flex flex-col items-center gap-2 p-8 bg-white shadow-md">
              <h3 className="text-orange text-[36px] font-semibold font-alt leading-normal">
                20+
              </h3>
              <p className="text-dark text-sm sm:text-base font-medium font-sans">
                Yrs Of Experience
              </p>
            </div>

            {/* project completed */}
            <div className="flex flex-col items-center gap-2 p-8 bg-white shadow-md">
              <h3 className="text-orange text-[36px] font-semibold font-alt leading-normal">
                150K
              </h3>
              <p className="text-dark text-sm sm:text-base font-medium font-sans">
                Project Completed
              </p>
            </div>

            {/* happy clients */}
            <div className="flex flex-col items-center gap-2 p-8 bg-white shadow-md">
              <h3 className="text-orange text-[36px] font-semibold font-alt leading-normal">
                97%
              </h3>
              <p className="text-dark text-sm sm:text-base font-medium font-sans">
                Happy Clients
              </p>
            </div>

            {/* Company Rating */}
            <div className="flex flex-col items-center gap-2 p-8 bg-white shadow-md">
              <h3 className="text-orange text-[36px] font-semibold font-alt leading-normal">
                4.7
              </h3>
              <p className="text-dark text-sm sm:text-base font-medium font-sans">
                Company Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
};

export default ProjectDetail;
