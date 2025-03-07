import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  floor1,
  floor2,
  floor3,
  floor4,
  floor5,
  floor6,
} from "../../../public/assets/images";

const floorServiceArr = [
  {
    id: 1,
    image: floor1,
    title: "Flooring Installation",
    description:
      "BRS Floors specializes in expert flooring installation, including wood, laminate, LVP, and tile...",
  },

  {
    id: 2,
    image: floor2,
    title: "Vinyl Flooring Services",
    description:
      "BRS Floors offers expert vinyl flooring installation, including luxury vinyl plank (LVP) and vinyl tile...",
  },

  {
    id: 3,
    image: floor3,
    title: "Flooring Refinishing",
    description:
      "BRS Floors specializes in flooring refinishing, restoring the beauty of hardwood and other surfaces",
  },

  {
    id: 4,
    image: floor4,
    title: "Tile Flooring Installation",
    description:
      "BRS Floors offers professional tile flooring installation, including porcelain and ceramic tiles.",
  },
  {
    id: 5,
    image: floor5,
    title: "Carpet Installation",
    description:
      "BRS Floors provides expert carpet installation, delivering comfort, style, and durability.",
  },
  {
    id: 6,
    image: floor6,
    title: "Painting Services",
    description:
      "BRS Floors offers professional painting services, delivering smooth, high-quality finishes for interiors and exteriors.",
  },
];

const ServiceSection = () => {
  return (
    <section
      className="bg-white py-24 lg:px-24 px-4 flex flex-col lg:flex-row items-center justify-between gap-14 bg-no-repeat bg-center bg-cover h-full"
      style={{
        backgroundImage: "url('/assets/images/serviceSectionImg.png')",
      }}
    >
      {/* header */}
      <div className="flex flex-col items-start gap-4  w-full lg:w-[400px]">
        <h3 className="text-white text-base font-alt font-semibold leading-normal tracking-wider">
          OUR SERVICE
        </h3>
        <h2 className="text-white text-[32px] font-sans font-semibold leading-9">
          Solutions for <br /> every corner
        </h2>
        <p className="text-white text-base font-sans font-normal leading-normal">
          High-Quality Flooring & Painting Services for a Durable and Stylish
          Home.
        </p>

        <Link
          href="/services"
          className="border border-white rounded-xs bg-transparent px-6 py-4 flex justify-center items-center gap-2 transition-all duration-500 ease-in-out hover:bg-orange hover:border-transparent hover:border text-white text-base font-sans font-semibold leading-normal"
        >
          Discover More
        </Link>
      </div>

      {/* floor lists */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-3">
        {floorServiceArr.map((service) => (
          <div
            key={service.id}
            className="flex flex-col its-start gap-4 rounded-xs lg:w-[250px] h-auto lg:h-[330px] bg-[#FAFAFAB8] p-8 transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl"
          >
            <Image
              src={service.image}
              alt="floor"
              width={70}
              height={37}
              quality={100}
              className="object-cover rounded-xs"
            />

            <h2 className="text-dark text-xl font-semibold font-sans leading-normal">
              {service.title}
            </h2>

            <p className="text-dark text-base font-sans font-normal leading-normal">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
