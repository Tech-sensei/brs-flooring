"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectsArr } from "@/components/views/ProjectSection";
import FAQ from "@/components/views/FAQ";
import { FaRegCheckCircle } from "react-icons/fa";

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
      {/* hero */}
      <section
        className="h-[413px] text-white-10 flex items-center px-6 sm:px-8 md:px-12 lg:px-24 pt-[200px] pb-10 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url('/assets/images/homeHeroImg.png')`,
        }}
      >
        <div className="flex flex-col items-start gap-4 max-w-[608px]">
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
              className="text-white text-3xl lg:text-[36px] font-bold font-alt leading-normal"
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

      {/* description */}
      <section className="bg-white py-24 px-6 sm:px-8 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start gap-14">
        {/* desc content */}
        <div className="flex flex-col gap-4 items-start w-full lg:w-[70%]">
          <div className="flex flex-col gap-2 items-start">
            <h2 className="text-dark text-2xl font-alt font-semibold leading-normal">
              Description
            </h2>
            <p className="text-dark text-base font-sans font-normal leading-normal">
              Odio cras etiam lacus metus litora mus neque. Sit lacus risus
              pretium cursus primis diam donec. Mollis sapien per neque ante
              fermentum molestie dolor enim dui scelerisque. Duis est imperdiet
              ut id posuere vitae ex. Urna lectus inceptos etiam primis
              phasellus velit mi purus eget. Fames auctor lacus metus lorem
              letius erat commodo nec interdum fusce. Per fames rhoncus nisi
              magnis gravida praesent sit auctor finibus hac. Tristique montes
              praesent sapien elementum sodales massa vel. Aenean dapibus
              natoque congue porta bibendum duis consequat. Tempus hac accumsan
              himenaeos condimentum eros phasellus. Congue ultrices praesent
              mattis hendrerit purus sem et sagittis nec gravida proin.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <Image src={project.image} alt={project.title} quality={100} />
            <Image src={project.image} alt={project.title} quality={100} />
          </div>

          <div className="flex flex-col gap-1 items-start">
            <h2 className="text-dark text-2xl font-alt font-semibold leading-normal">
              Idea & Concept :
            </h2>
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
        </div>

        {/* project info */}
        <div className="w-full lg:w-[30%]">
          <div className="flex p-6 flex-col justify-center items-start gap-6 bg-[#FAFAFA]">
            <h2 className="text-dark text-2xl font-alt font-semibold leading-normal">
              Project Info
            </h2>

            <div className="flex flex-col gap-0.5 items-start border-b border-dashed border-dark w-full">
              <p className="text-orange font-sans text-xl font-semibold leading-normal">
                Client
              </p>
              <p className="text-dark font-sans text-xl font-medium leading-normal">
                Ruth E. Faust
              </p>
            </div>

            <div className="flex flex-col gap-0.5 items-start border-b border-dashed border-dark w-full">
              <p className="text-orange font-sans text-xl font-semibold leading-normal">
                Location
              </p>
              <p className="text-dark font-sans text-xl font-medium leading-normal">
                Atlanta, USA
              </p>
            </div>

            <div className="flex flex-col gap-0.5 items-start border-b border-dashed border-dark w-full">
              <p className="text-orange font-sans text-xl font-semibold leading-normal">
                Project Date
              </p>
              <p className="text-dark font-sans text-xl font-medium leading-normal">
                November 2024
              </p>
            </div>

            <div className="flex flex-col gap-0.5 items-start border-b border-dashed border-dark w-full">
              <p className="text-orange font-sans text-xl font-semibold leading-normal">
                Estimate Budget
              </p>
              <p className="text-dark font-sans text-xl font-medium leading-normal">
                $340,000
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-orange rounded-xs border border-transparent transition-all duration-500 ease-in-out hover:border-orange hover:bg-transparent hover:text-orange text-white-10 text-base text-center font-sans font-semibold leading-normal cursor-pointer mt-6"
          >
            Get A Free Quote
          </button>
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

            <h2 className="text-white text-xl sm:text-3xl md:text-3xl lg:text-4xl font-alt font-semibold leading-normal">
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
