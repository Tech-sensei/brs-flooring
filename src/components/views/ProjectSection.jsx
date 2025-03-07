import React from "react";
import Image from "next/image";
import {
  projectSecImg1,
  projectSecImg2,
  projectSecImg3,
  projectSecImg4,
  projectSecImg5,
} from "../../../public/assets/images";

const projects = [
  {
    id: 1,
    title: "SALLY’S WORKSPACE",
    description:
      "Morbi at blandit est. Phasellus suscipit leo in dui dapibus, ac interdum eros imperdiet.",
    image: projectSecImg1,
    overlayBg: "bg-white/50",
  },
  {
    id: 2,
    title: "THE JOHNSONS LIVING ROOM",
    description:
      "Morbi at blandit est. Phasellus suscipit leo in dui dapibus, ac interdum eros imperdiet.",
    image: projectSecImg2,
    overlayBg: "bg-black/40",
  },
  {
    id: 3,
    title: "SHAW’S KITCHEN REMODELLING",
    description:
      "Morbi at blandit est. Phasellus suscipit leo in dui dapibus, ac interdum eros imperdiet.",
    image: projectSecImg3,
    overlayBg: "bg-black/40",
  },
  {
    id: 4,
    title: "THE GRAYSONS",
    description:
      "Morbi at blandit est. Phasellus suscipit leo in dui dapibus, ac interdum eros imperdiet.",
    image: projectSecImg4,
    overlayBg: "bg-black/50",
  },
  {
    id: 5,
    title: "PREGO",
    description:
      "Morbi at blandit est. Phasellus suscipit leo in dui dapibus, ac interdum eros imperdiet.",
    image: projectSecImg5,
    overlayBg: "bg-black/50",
  },
];

const ProjectSection = () => {
  return (
    <section className="bg-white py-24 lg:px-24 px-4 flex flex-col items-start gap-14">
      {/* header */}
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

      {/* project grid list */}
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 w-full">
          {projects.slice(0, 2).map((project, idx) => (
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
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {projects.slice(2, 5).map((project, idx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
