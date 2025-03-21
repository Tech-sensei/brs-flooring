"use client";
import React, { useState,useRef  } from "react";
import Image from "next/image";
import { contactSectionImg } from "../../../public/assets/images";
import emailjs from "@emailjs/browser";
import { GrSend } from "react-icons/gr";
import { toast } from "react-toastify";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
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
    <section id="contact" className="bg-white py-24 lg:px-24 px-4 flex flex-col items-start gap-14">
      {/* header */}
      <div className="flex flex-col items-start">
        <h2 className="text-dark text-[32px] font-alt font-semibold leading-normal mb-1">Don't hesitate to contact us</h2>
        <div className="w-[60%] lg:w-[40%] h-[2px] bg-dark mb-4"></div>
        <p className="text-dark text-base font-sans font-normal leading-normal">
          Fill Out The Form Below To Get a Free No Obligation Flooring Quote!
        </p>
      </div>

      {/* form and image */}
      <div className="flex flex-col lg:flex-row items-center gap-14 w-full">
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
                placeholder="eg. Thomas"
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
                placeholder="eg. Thomas"
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
              placeholder="eg. Thomasfrank@gmail.com"
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
              placeholder="eg. Thomasfrank@gmail.com"
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
            className="w-fit flex items-center justify-center gap-2 py-4 px-6 bg-orange rounded-xs border border-transparent transition-all duration-500 ease-in-out hover:border-orange hover:bg-transparent hover:text-orange text-white-10 text-base text-center font-sans font-semibold leading-normal cursor-pointer group"
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

        {/* image */}
        <figure className="relative overflow-hidden rounded-xs flex flex-col justify-center gap-8 self-stretch bg-[#F8F7F5] transition-all duration-300 ease-in-out flex-1">
          <Image
            src={contactSectionImg}
            alt="BRS Floors"
            quality={100}
            className="w-full h-full object-cover rounded-xs transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </figure>
      </div>
    </section>
  );
};

export default ContactSection;
