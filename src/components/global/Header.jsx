"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { logoWhite } from "../../../public/assets/images";
import { FaChevronDown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const navMenu = [
  { id: 1, name: "Home", url: "/", hasChevron: false },
  { id: 2, name: "About", url: "/about", hasChevron: false },
  { id: 3, name: "Services", url: "/services", hasChevron: true },
  { id: 4, name: "Projects", url: "/projects", hasChevron: false },
  { id: 5, name: "Contact", url: "/contact-us", hasChevron: false },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full mx-auto">
      {/* top banner */}
      <div className="bg-[#FAFAFA] py-4 px-24 flex justify-end items-center shadow-md">
        <div className="flex items-center gap-6">
          {/* phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-orange" />
            <p className="text-dark text-base text-center font-sans font-medium leading-normal underline">
              (678) 716 7414
            </p>
          </div>
          {/* email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange" />
            <p className="text-dark text-base text-center font-sans font-medium leading-normal">
              info@brsflooringandrepairs.com
            </p>
          </div>
        </div>
      </div>
      
      {/* navigation menu  */}
      <nav className=" bg-transparent py-5 px-24 flex justify-between items-center w-full">
        {/* logo */}
        <Link href="/">
          <Image
            src={logoWhite}
            alt="BRS Floors"
            width={200}
            quality={100}
            height={40}
          />
        </Link>

        {/* nav menu */}
        <div className="flex items-center gap-4">
          {/* navList */}
          <ul className="flex items-center gap-4">
            {navMenu.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-center gap-3 py-3 px-4"
              >
                <Link
                  href={item.url}
                  className="flex items-center justify-center gap-3 text-white text-base text-center font-sans font-medium leading-normal transition-all duration-500 ease-in-out hover:text-orange"
                >
                  {item.name}
                  {item.hasChevron && <FaChevronDown className="text-orange" />}
                </Link>
              </li>
            ))}
          </ul>

          {/* navBtn */}
          <button
            type="button"
            onClick={() => {}}
            className="flex items-center justify-center gap-2 py-4 px-6 bg-transparent rounded-xs border border-white transition-all duration-500 ease-in-out hover:border-transparent hover:bg-orange text-white-10 text-base text-center font-sans font-medium leading-normal cursor-pointer"
          >
            Get A Free Quote
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
