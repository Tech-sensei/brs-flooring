import React from "react";
import Image from "next/image";
import {
  whyChooseUsImg1,
  whyChooseUsImg2,
} from "../../../public/assets/images";
import {
  bulbIcon,
  fileIcon,
  clockIcon,
  penIcon,
} from "../../../public/assets/icons";

const WhyChooseArr = [
  {
    id: 1,
    icon: clockIcon,
    title: "Fast Building",
    description:
      "Fast and efficient building services to help you create the perfect space.",
  },

  {
    id: 2,
    icon: fileIcon,
    title: "Carefully Planned",
    description:
      "Our team of experts will install your new flooring quickly and efficiently.",
  },

  {
    id: 3,
    icon: bulbIcon,
    title: "Smart Execute",
    description:
      "We use the latest technology and tools to ensure that your project.",
  },

  {
    id: 4,
    icon: penIcon,
    title: "Floor Installations",
    description:
      "We are committed to providing excellent customer service and support.",
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
                "The best rooms have something to say about the people who live
                in them." <br /> <br />{" "}
                <span className="font-semibold">Helio Da Silva</span>
              </p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-orange rounded-xs border border-transparent transition-all duration-500 ease-in-out hover:border-orange hover:bg-transparent hover:text-orange text-white-10 text-base text-center font-sans font-semibold leading-normal cursor-pointer"
        >
          Request Quote
        </button>
      </div>

      {/* reasons contents */}
      <div className="flex flex-col gap-6 flex-1">
        <h3 className="text-dark text-base font-alt font-semibold leading-normal uppercase">
          Why Choose Us?
        </h3>

        <h2 className="text-dark text-[32px] font-sans font-semibold leading-normal">
          A style that makes a statement
        </h2>

        <ul className="">
          <li className="list-disc text-dark text-base font-sans font-normal leading-normal">
            <strong className="font-semibold">
              Honest & Transparent Pricing:{" "}
            </strong>
            No hidden fees, just fair job-based quotes.
          </li>
          <li className="list-disc text-dark text-base font-sans font-normal leading-normal">
            <strong className="font-semibold">Owner-Led Installations: </strong>
            Hands-on expertise in every project.
          </li>
          <li className="list-disc text-dark text-base font-sans font-normal leading-normal">
            <strong className="font-semibold">
              Strong Reputation & Referrals:{" "}
            </strong>
            Trusted by builders, remodelers, and homeowners.
          </li>
          <li className="list-disc text-dark text-base font-sans font-normal leading-normal">
            <strong className="font-semibold">Attention to Detail: </strong>
            We treat every home like our own.
          </li>
        </ul>

        <div className="grid lg:grid-cols-2 gap-x-6 items-center">
          {WhyChooseArr.map((reason, index) => (
            <div
              key={reason.id}
              className={`flex items-start gap-4 lg:border-r-2 border-dashed  px-4 ${
                index < 2
                  ? "border-b-2 py-4 lg:pb-4"
                  : "border-b-2 lg:border-b-transparent py-4"
              } ${index === 1 ? "border-r-transparent lg:border-l-2" : ""}${
                index === 3 ? "border-r-transparent lg:border-l-2" : ""
              }`}
            >
              <Image
                src={reason.icon}
                alt="icon"
                quality={100}
                className="object-cover rounded-xs"
              />

              <div className="flex flex-col gap-2 w-full lg:h-auto">
                <h2 className="text-dark text-xl font-semibold font-sans leading-normal">
                  {reason.title}
                </h2>

                <p className="text-dark text-base font-sans font-normal leading-normal">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
