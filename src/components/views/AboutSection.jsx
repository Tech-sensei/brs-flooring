import React from "react";
import Image from "next/image";
import { signature, aboutSectionImg } from "../../../public/assets/images";

const AboutSection = () => {
  return (
    <section className="bg-white py-24 lg:px-24 px-4 grid lg:grid-cols-3 items-start gap-6">
      {/* header */}
      <div className="flex flex-col items-start">
        <div className="w-[40%] h-[2px] bg-dark mb-2"></div>
        <h2 className="text-[32px] text-dark font-alt font-semibold leading-9 mb-4">
          Welcome to <br /> BRS Floors
        </h2>
        <p className="text-dark text-base font-sans font-normal leading-normal">
          Whatever your needs, we know how to meet them with our flooring
          services!
        </p>
      </div>

      {/* signature */}
      <div className="flex flex-col items-start gap-4">
        <p className="text-dark text-base font-sans font-normal leading-normal">
          Our mission is to provide the best flooring services in the Atlanta
          metropolitan area. We are committed to delivering exceptional quality
          and customer service to every client. We take pride in our work and
          strive to exceed your expectations. Contact us today to learn more
          about our services and how we can help you create the perfect space
          for your home or business. We look forward to working with you!
        </p>

        <Image
          src={signature}
          alt="signature"
          width={147}
          height={35}
          quality={100}
        />

        <h2 className="text-dark text-base font-sans font-bold leading-normal">
          ALLEN D. LOPEZ, CEO
        </h2>
      </div>

      {/* image */}
      <figure className="relative overflow-hidden rounded-xs flex flex-col justify-center gap-8 self-stretch bg-[#F8F7F5] transition-all duration-300 ease-in-out flex-1">
        <Image
          src={aboutSectionImg}
          alt="about us"
          quality={100}
          className="w-full h-full object-cover rounded-xs transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </figure>
    </section>
  );
};

export default AboutSection;
