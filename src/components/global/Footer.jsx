"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logoColored } from "../../../public/assets/images";
import { FaRegEnvelope, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { PiWhatsappLogo } from "react-icons/pi";
import { AiTwotoneClockCircle } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { map } from "../../../public/assets/images";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <figure className="">
        <Image src={map} alt="BRS Floors" quality={100} className="w-full h-full" />
      </figure>

      <footer className="flex items-center gap-14 py-14 lg:px-24 px-4 bg-[#FAFAFA]">
        <div className="flex flex-col items-start gap-8 w-full">
          {/* logo and newsletter */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full ">
            {/* logo */}
            <div className="flex flex-col items-start gap-2">
              <Link href="/">
                <Image src={logoColored} alt="BRS Floors" width={200} quality={100} height={40} />
              </Link>

              <p className="text-dark text-base font-sans font-normal leading-normal">
                Best Flooring Contractor In the Atlanta metropolitan area!
              </p>
            </div>

            {/* newsletter */}
            <form onSubmit={handleSubmit} className="flex items-center gap-4 ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="email"
                className="py-[18px] px-2 lg:px-6 w-full lg:w-[400px] rounded-xs bg-transparent border border-dark text-dark text-base font-sans font-normal leading-normal placeholder:text-[#B4B0AA]"
              />
              <button
                type="submit"
                className="py-[18px] px-6 bg-orange rounded-xs text-white text-base font-sans font-semibold leading-normal"
              >
                Submit
              </button>
            </form>
          </div>

          {/* info */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">
            {/* email */}
            <div className="flex items-center gap-3">
              <FaRegEnvelope className="text-dark" />
              <p className="text-dark text-base  font-sans font-normal leading-[150%] tracking-[-0.16px]">brsfloors@gmail.com</p>
            </div>

            {/* phone */}
            <div className="flex items-center gap-3">
              <PiWhatsappLogo className="text-dark" />
              <p className="text-dark text-base  font-sans font-normal leading-[150%] tracking-[-0.16px]">+404-552-2642</p>
            </div>

            {/* date */}
            {/* <div className="flex items-center gap-3">
              <AiTwotoneClockCircle className="text-[#4033181A]" />
              <p className="text-dark text-base  font-sans font-normal leading-[150%] tracking-[-0.16px]">Mon-Fri 10:00 am – 5:00 pm</p>
            </div> */}
          </div>

          {/* copyright and socials */}
          <div className="flex flex-col lg:flex-row items-center justify-between  gap-4 w-full">
            <small className="text-dark text-base text-center font-sans font-normal leading-[150%] tracking-[-0.16px] italic">
              © {new Date().getFullYear()} by BRS Flooring LLC. All rights reserved.
            </small>

            <div className="flex items-center gap-6">
              <FaFacebook size={20} className="text-dark" />
              <RiInstagramFill size={20} className="text-dark" />
              <FaLinkedinIn size={20} className="text-dark" />
              <RiWhatsappFill size={20} className="text-dark" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
