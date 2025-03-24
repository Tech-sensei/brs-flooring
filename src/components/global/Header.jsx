"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaChevronDown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { RiMenu2Fill, RiCloseLargeLine } from "react-icons/ri";
import { logoWhite, logoColored } from "../../../public/assets/images";

const navMenu = [
  { id: 1, name: "Home", url: "/", hasChevron: false },
  { id: 2, name: "About", url: "/about", hasChevron: false },
  { id: 3, name: "Services", url: "/services", hasChevron: false },
  // { id: 4, name: "Projects", url: "/projects", hasChevron: false },
  { id: 5, name: "Contact", url: "/contact-us", hasChevron: false },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="hidden lg:flex bg-[#FAFAFA] py-4 px-24 justify-end items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-orange" />
            <p className="text-dark text-base font-medium underline">
              (404) 552 2642
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange" />
            <p className="text-dark text-base font-medium">
              brsfloors@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`py-5 px-6 lg:px-24 flex justify-between items-center w-full transition-all duration-500 ${
          isScrolled ? "text-dark shadow-md" : "text-white"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src={isScrolled ? logoColored : logoWhite}
            alt="BRS Floors"
            width={160}
            height={40}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-4">
            {navMenu.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-center gap-3 py-3 px-4"
              >
                <Link
                  href={item.url}
                  className={`flex items-center justify-center gap-3 text-base font-sans font-medium leading-normal transition-all duration-500 ease-in-out ${
                    pathname === item.url
                      ? "text-orange font-bold"
                      : isScrolled
                      ? "text-dark hover:text-orange"
                      : "text-white hover:text-orange"
                  }`}
                >
                  {item.name}{" "}
                  {item.hasChevron && (
                    <FaChevronDown className=" text-orange" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <Link
            href="/contact-us"
            className={`py-3 px-6 border rounded transition-all duration-500 ${
              isScrolled
                ? "border-dark text-dark hover:bg-orange hover:text-white"
                : "border-white text-white hover:bg-orange"
            }`}
          >
            Get A Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {isMenuOpen ? (
            <RiCloseLargeLine
              className={`${isScrolled ? "text-dark" : "text-white"}`}
            />
          ) : (
            <RiMenu2Fill
              className={`${isScrolled ? "text-dark" : "text-white"}`}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu (Slide Down) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`lg:hidden bg-white text-dark shadow-md overflow-hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-start gap-2 py-6">
          {navMenu.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium block px-4 py-2 transition-all duration-300 ${
                  pathname === item.url
                    ? "text-orange font-bold"
                    : "hover:text-orange"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA Button */}
        <div className="flex justify-center w-full pb-6 px-4">
          <Link
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className=" w-full py-4 px-6 border border-transparent bg-orange text-white-10 text-center font-sans font-semibold rounded-xs transition-all duration-500 ease-in-out hover:bg-orange hover:text-white"
          >
            Get A Free Quote
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
