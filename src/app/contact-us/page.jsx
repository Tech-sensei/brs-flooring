"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { GrSend } from "react-icons/gr";
import { toast } from "react-toastify";

import { bulbIcon, fileIcon, clockIcon, penIcon } from "../../../public/assets/icons";

const WhyChooseArr = [
  // {
  //   id: 1,
  //   icon: clockIcon,
  //   title: "Our Location",
  //   description: "No. 123, Street Name, Atlanta, USA",
  // },

  {
    id: 2,
    icon: fileIcon,
    title: "Phone Number",
    description: "+(404) 552 2642",
  },

  // {
  //   id: 3,
  //   icon: bulbIcon,
  //   title: "Office Hours",
  //   description: "Mon-Sat : 8am-6pm Sunday : Closed",
  // },

  {
    id: 4,
    icon: penIcon,
    title: "Email Address",
    description: "brsfloors@gmail.com",
  },
];

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    setLoading(true); // Start loading
    try {
      const result = await emailjs.sendForm("service_eehh4hl", "template_ya9njxe", form.current, "2gw7Lwmm3mD6Te1u7");

      console.log(result.text);
      toast.success("Message sent successfully! 🎉");
      // setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" }); // Reset form
    } catch (error) {
      console.log(error.text);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <main className="">
      <section
        className="h-[413px] text-white-10 flex items-center lg:px-24 px-4 pt-[200px] pb-10 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/images/homeHeroImg.png')",
        }}
      >
        <div className="flex flex-col items-start gap-4 w-[608px]">
          <div className="flex flex-col items-start w-full">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white-10 text-base font-sans font-normal leading-normal"
            >
              <Link href="/" className="text-white-10 text-base font-sans font-normal leading-normal hover:underline">
                Home
              </Link>{" "}
              -
              <Link href="/contact-us" className="text-white-10 text-base font-sans font-normal leading-normal hover:underline">
                Contact US
              </Link>{" "}
            </motion.p>

            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-white text-[36px] font-bold font-alt leading-normal"
            >
              Contact Us
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:px-24 px-4 flex flex-col lg:flex-row items-start gap-14 w-full">
        {/* contact content */}
        <div className="flex flex-col flex-1">
          <div className="w-[40%] h-[2px] bg-dark mb-2"></div>

          <h2 className="text-dark text-[32px] font-alt font-semibold leading-normal mb-4">Don't hesitate to contact us</h2>

          <p className="text-dark text-base font-sans font-normal leading-normal mb-6">
            You can reach out to us for any inquiries or to get a free no obligation flooring quote.
          </p>

          <div className="grid lg:grid-cols-2 gap-x-6 items-center">
            {WhyChooseArr.map((reason, index) => (
              <div
                key={reason.id}
                className={`flex items-start gap-4 lg:border-r-2 border-dashed  px-4 ${
                  index < 2 ? "border-b-2 py-4 lg:pb-4" : "border-b-2 lg:border-b-transparent py-4"
                } ${index === 1 ? "border-r-transparent lg:border-l-2" : ""}${index === 3 ? "border-r-transparent lg:border-l-2" : ""}`}
              >
                <Image src={reason.icon} alt="icon" quality={100} className="object-cover rounded-xs" />

                <div className="flex flex-col gap-2 w-full lg:h-auto">
                  <h2 className="text-dark text-xl font-semibold font-sans leading-normal">{reason.title}</h2>

                  <p className="text-dark text-base font-sans font-normal leading-normal">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* form */}
        <form ref={form} onSubmit={handleSubmit} autoComplete="off" className="flex flex-col items-start gap-8 flex-1 w-full">
          {/* first and last name */}
          <div className="flex flex-col md:flex-row gap-6 items-start w-full">
            {/* First Name */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label htmlFor="firstName" className="text-base font-sans font-normal leading-normal tracking-[-0.32px] text-[#1B1304]">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="eg. John"
                className={`w-full flex items-center gap-2 py-[18px] px-6 h-[55px] rounded-xs border border-[#1B1304] text-dark outline-none focus:border focus:border-[#1B1304] placeholder:text-dark/40 placeholder:font-normal placeholder:font-sans ${
                  errors.firstName ? "border-red-500" : "border-[#1B1304]"
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label htmlFor="lastName" className="text-base font-sans font-normal leading-normal tracking-[-0.32px] text-[#1B1304]">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="eg. Doe"
                className={`w-full flex items-center gap-2 py-[18px] px-6 h-[55px] rounded-xs border border-[#1B1304] text-dark outline-none focus:border focus:border-[#1B1304] placeholder:text-dark/40 placeholder:font-normal placeholder:font-sans ${
                  errors.lastName ? "border-red-500" : "border-[#1B1304]"
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="email" className="text-base font-sans font-normal leading-normal tracking-[-0.32px] text-[#1B1304]">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="eg. johndoe@gmail.com"
              className={`w-full flex items-center gap-2 py-[18px] px-6 h-[55px] rounded-xs border border-[#1B1304] text-dark outline-none focus:border focus:border-[#1B1304] placeholder:text-dark/40 placeholder:font-normal placeholder:font-sans ${
                errors.email ? "border-red-500" : "border-[#1B1304]"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/*phone number  */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="phoneNumber" className="text-base font-sans font-normal leading-normal tracking-[-0.32px] text-[#1B1304]">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="1234567890"
              className={`w-full flex items-center gap-2 py-[18px] px-6 h-[55px] rounded-xs border border-[#1B1304] text-dark outline-none focus:border focus:border-[#1B1304] placeholder:text-dark/40 placeholder:font-normal placeholder:font-sans ${
                errors.phoneNumber ? "border-red-500" : "border-[#1B1304]"
              }`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          {/* message */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label htmlFor="message" className="text-base font-sans font-normal leading-normal tracking-[-0.32px] text-[#1B1304]">
              Tell Us About Your Project <span className="text-red-500">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write message here>>>"
              className={`w-full flex items-center gap-2 py-[18px] px-6 h-[150px] resize-none rounded-xs border border-[#1B1304] text-dark outline-none focus:border focus:border-[#1B1304] placeholder:text-dark/40 placeholder:font-normal placeholder:font-sans ${
                errors.message ? "border-red-500" : "border-[#1B1304]"
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* submit btn */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-orange rounded-xs border border-transparent transition-all duration-500 ease-in-out hover:border-orange hover:bg-transparent hover:text-orange text-white-10 text-base text-center font-sans font-semibold leading-normal cursor-pointer group"
          >
            <span className="">{loading ? "Sending..." : "Request Quote"}</span>
            <GrSend
              size={18}
              className={`text-white transition-transform duration-300 ease-in-out ${
                loading ? "animate-pulse" : "group-hover:translate-x-1 group-hover:text-orange"
              }`}
            />
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactUs;
