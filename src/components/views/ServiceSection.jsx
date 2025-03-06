import React from "react";
import Image from "next/image";
import Link from "next/link";
import { floor } from "../../../public/assets/images";

const floorServiceArr = [
  {
    id: 1,
    title: "Hardwood Flooring",
    description:
      "We offer a wide range of hardwood flooring services including installation, repair, and refinishing. Our team of experts can help you choose the best hardwood flooring for your home or business.",
  },

  {
    id: 2,
    title: "Laminate Flooring",
    description:
      "Laminate flooring is a cost-effective alternative to hardwood flooring. We offer laminate flooring installation and repair services to help you achieve the look you want for your space.",
  },

  {
    id: 3,
    title: "Vinyl Flooring Service",
    description:
      "Vinyl flooring is a durable and affordable option for any room in your home. We offer vinyl flooring installation and repair services to help you create a beautiful and functional space.",
  },

  {
    id: 4,
    title: "Tile Flooring Installation",
    description:
      "Tile flooring is a versatile option for any room in your home. We offer tile flooring installation and repair services to help you create a beautiful and durable space.",
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
          We offer a wide range of flooring services to meet your needs. From
          hardwood to tile, we have the expertise to help you create the perfect
          space for your home or business.
        </p>

        <Link
          href="/services"
          className="border border-white rounded-xs bg-transparent px-6 py-4 flex justify-center items-center gap-2 transition-all duration-500 ease-in-out hover:bg-orange hover:border-transparent hover:border text-white text-base font-sans font-semibold leading-normal"
        >
          Discover More
        </Link>
      </div>

      {/* floor lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-3">
        {floorServiceArr.map((service) => (
          <div
            key={service.id}
            className="flex flex-col its-start gap-6 rounded-xs lg:w-[392px] h-auto lg:h-[295px] bg-[#FAFAFAB8] p-8 transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl"
          >
            <Image
              src={floor}
              alt="floor"
              width={86}
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
