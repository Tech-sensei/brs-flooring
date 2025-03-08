"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqContents = [
  {
    id: 1,
    question: "What types of flooring do you offer?",
    answer:
      "We offer hardwood, laminate, vinyl, tile, and carpet flooring options.",
  },
  {
    id: 2,
    question: "How long does the installation process take?",
    answer:
      "The installation time varies depending on the type of flooring and the size of the area. Typically, it takes 1-3 days.",
  },
  {
    id: 3,
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free estimates for all our flooring services.",
  },
  {
    id: 4,
    question: "Can I see samples of the flooring options?",
    answer:
      "Absolutely! We can bring samples to your home or you can visit our showroom.",
  },
  {
    id: 5,
    question: "Are your flooring materials eco-friendly?",
    answer: "Yes, we offer a range of eco-friendly flooring options.",
  },
  {
    id: 6,
    question: "Do you offer a warranty on your flooring?",
    answer:
      "Yes, we offer a warranty on both the materials and the installation.",
  },
  {
    id: 7,
    question: "How do I maintain my new flooring?",
    answer:
      "We provide maintenance guides for each type of flooring to help you keep it in top condition.",
  },
  {
    id: 8,
    question: "Can you remove my old flooring?",
    answer:
      "Yes, we offer old flooring removal services as part of our installation package.",
  },
  {
    id: 9,
    question: "Do you offer financing options?",
    answer: "Yes, we have flexible financing options available.",
  },
  {
    id: 10,
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling us or filling out the form on our website.",
  },
];

// Split the FAQ array into two equal parts
const leftColumn = faqContents.slice(0, Math.ceil(faqContents.length / 2));
const rightColumn = faqContents.slice(Math.ceil(faqContents.length / 2));

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleFAQ = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <section className="bg-[#1B13041A] py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center">
      {/* Section Title */}
      <div className="w-full mx-auto text-start">
        <div className="w-[40%] lg:w-[20%] h-[2px] bg-dark mb-4"></div>
        <h2 className="text-[32px] text-dark font-alt font-semibold leading-9">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Two-Column Layout */}
      <div className="w-full  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftColumn.map((faq) => (
            <div
              key={faq.id}
              className="flex flex-col items-start gap-4 bg-white px-6 py-5 w-full rounded-md shadow-sm"
            >
              {/* Question */}
              <div
                className="flex items-center justify-between gap-6 w-full cursor-pointer border-b border-[#1B13041A] pb-2"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-dark text-lg font-sans font-semibold leading-normal ">
                  {faq.question}
                </h3>

                <button
                  type="button"
                  className="flex justify-center items-center w-5 h-5 aspect-[1/1] bg-[#1B13041A] border-2 transition-transform duration-300 ease-in-out"
                >
                  {isOpen === faq.id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>

              {/* Animated Answer Section */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isOpen === faq.id ? "auto" : 0,
                  opacity: isOpen === faq.id ? 1 : 0,
                }}
                transition={{
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
                className="overflow-hidden"
              >
                <p className="text-dark text-base font-sans leading-normal ">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {rightColumn.map((faq) => (
            <div
              key={faq.id}
              className="flex flex-col items-start gap-4 bg-white px-6 py-5 w-full rounded-md shadow-sm"
            >
              {/* Question */}
              <div
                className="flex items-center justify-between gap-6 w-full cursor-pointer border-b border-[#1B13041A] pb-2"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-dark text-lg font-sans font-semibold leading-normal">
                  {faq.question}
                </h3>

                <button
                  type="button"
                  className="flex justify-center items-center w-5 h-5 aspect-[1/1] bg-[#1B13041A] border-2 transition-transform duration-300 ease-in-out"
                >
                  {isOpen === faq.id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>

              {/* Animated Answer Section */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isOpen === faq.id ? "auto" : 0,
                  opacity: isOpen === faq.id ? 1 : 0,
                }}
                transition={{
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                }}
                className="overflow-hidden"
              >
                <p className="text-dark text-base font-sans leading-normal mt-2">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
