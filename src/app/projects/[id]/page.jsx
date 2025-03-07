"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectsArr } from "@/components/views/ProjectSection";

const ProjectDetail = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { id } = useParams();

  const project = projectsArr.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found</p>;
  return (
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
  );
};

export default ProjectDetail;
