import React from "react";
import Image from "next/image";
import { whyChooseUsImg1, whyChooseUsImg2 } from "../../../public/assets/images";
import { bulbIcon, fileIcon, clockIcon, penIcon } from "../../../public/assets/icons";

const WhyChooseArr = [
  {
    id: 1,
    icon: clockIcon,
    title: "Honest & Transparent Pricing:",
    description: "No hidden fees, just fair job-based quotes.",
  },

  {
    id: 2,
    icon: fileIcon,
    title: "Owner-Led Installations:",
    description: "Hands-on expertise in every project.",
  },

  {
    id: 3,
    icon: bulbIcon,
    title: "Strong Reputation & Referrals:",
    description: "Trusted by builders, remodelers, and homeowners.",
  },

  {
    id: 4,
    icon: penIcon,
    title: "Attention to Detail",
    description: "We treat every home like our own.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-[#FAFAFA] py-24 lg:px-24 px-4 flex flex-col lg:flex-row items-start gap-14">
      {/* image grid */}
      <div className="flex flex-col gap-6 items-start flex-1">
        <div className="grid  lg:grid-cols-2 items-start gap-4">
          <figure className="relative overflow-hidden rounded-xs flex flex-col justify-center gap-8 self-stretch bg-[#F8F7F5] transition-all duration-300 ease-in-out flex-1">
            <Image
              src={whyChooseUsImg1}
              alt="about us"
              quality={100}
              className="w-full h-full object-cover rounded-xs transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </figure>

          <div className="col-span-1 h-full flex flex-col gap-4">
            <figure className="relative overflow-hidden rounded-xs flex flex-col justify-center gap-8 self-stretch bg-[#F8F7F5] transition-all duration-300 ease-in-out flex-1">
              <Image
                src={whyChooseUsImg2}
                alt="about us"
                quality={100}
                className="w-full h-full object-cover rounded-xs transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </figure>

            <div className="flex items-center gap-3 p-6 rounded-xs border border-dark">
              <p className="text-dark text-base font-sans font-normal leading-normal">
                "The best rooms have something to say about the people who live in them." <br /> <br />{" "}
                <span className="font-semibold">Helio Da Silva</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* reasons contents */}
      <div className="flex flex-col gap-6 flex-1">
        <h3 className="text-dark text-base font-alt font-semibold leading-normal uppercase">Why Choose Us?</h3>

        <h2 className="text-dark text-[32px] font-sans font-semibold leading-normal">A style that makes a statement</h2>

        <div className="flex flex-col lg:flex-row items-center w-full gap-x-6">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="flex items-start gap-4 border-b lg:border-b-none  lg:border-b-2 lg:border-r-2 border-dashed  p-4 flex-1 ">
              <Image src={clockIcon} alt="icon" quality={100} className="object-cover rounded-xs" />

              <div className="flex flex-col gap-2 w-full lg:h-auto">
                <h2 className="text-dark text-xl font-semibold font-sans leading-normal">Honest & Transparent Pricing:</h2>

                <p className="text-dark text-base font-sans font-normal leading-normal">No hidden fees, just fair job-based quotes.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b lg:border-b-none  lg:border-b-2 lg:border-l-2 border-dashed  p-4 flex-1  ">
              <Image src={fileIcon} alt="icon" quality={100} className="object-cover rounded-xs" />

              <div className="flex flex-col gap-2 w-full lg:h-auto">
                <h2 className="text-dark text-xl font-semibold font-sans leading-normal">Owner-Led Installations:</h2>

                <p className="text-dark text-base font-sans font-normal leading-normal">Hands-on expertise in every project.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center w-full gap-x-6">
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <div className="flex items-start gap-4 border-b lg:border-b-transparent lg:border-r-2 lg:border-t-2 border-dashed p-4 flex-1">
              <Image src={bulbIcon} alt="icon" quality={100} className="object-cover rounded-xs" />

              <div className="flex flex-col gap-2 w-full lg:h-auto">
                <h2 className="text-dark text-xl font-semibold font-sans leading-normal">Strong Reputation & Referrals:</h2>

                <p className="text-dark text-base font-sans font-normal leading-normal">Trusted by builders, remodelers, and homeowners.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 lg:border-l-2 lg:border-t-2 border-dashed  p-4 flex-1 h-full ">
              <Image src={penIcon} alt="icon" quality={100} className="object-cover rounded-xs" />

              <div className="flex flex-col gap-2 w-full lg:h-auto">
                <h2 className="text-dark text-xl font-semibold font-sans leading-normal">Attention to Detail:</h2>

                <p className="text-dark text-base font-sans font-normal leading-normal">We treat every home like our own.</p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-fit flex items-center justify-center gap-2 py-4 px-6 bg-orange rounded-xs border border-transparent transition-all duration-500 ease-in-out hover:border-orange hover:bg-transparent hover:text-orange text-white-10 text-base text-center font-sans font-semibold leading-normal cursor-pointer"
        >
          Request Quote
        </button>
      </div>
    </section>
  );
};

export default WhyChooseSection;
