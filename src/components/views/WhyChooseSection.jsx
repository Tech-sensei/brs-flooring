import React from "react";
import Image from "next/image";
import { whyChooseImg1, whyChooseImg2 } from "../../../public/assets/images";

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-24 lg:px-24 px-4 flex flex-col lg:flex-row items-center">
      {/* image grid */}
      <div className="grid grid-cols-2 items-start gap-4 flex-1">
        <figure className="relative overflow-hidden rounded-xs flex flex-col justify-center gap-8 self-stretch bg-[#F8F7F5] transition-all duration-300 ease-in-out flex-1">
          <Image
            src={whyChooseImg1}
            alt="about us"
            quality={100}
            className="w-full h-full object-cover rounded-xs transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </figure>

        <div className="col-span-2">
          <figure className="relative overflow-hidden rounded-xs flex flex-col justify-center gap-8 self-stretch bg-[#F8F7F5] transition-all duration-300 ease-in-out flex-1">
            <Image
              src={whyChooseImg2}
              alt="about us"
              quality={100}
              className="w-full h-full object-cover rounded-xs transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </figure>

          <div className="flex flexcol items-center gap-3 p-6 rounded-xs border border-dark">
            <p className="text-dark text-base font-sans font-normal leading-normal">
              "The best rooms have something to say about the people who live in
              them." <br /> <br />{" "}
              <span className="font-semibold">David Hicks</span>
            </p>
          </div>
        </div>
      </div>

      {/* reasons contents */}
      <div className="flex flex-col gap-6 flex-1">
        <h3 className="text-dark text-base font-alt font-semibold leading-normal uppercase">
          Why Choose Us?
        </h3>

        <h2 className="text-dark text-[32px] font-sans font-semibold leading-normal">
          A style that makes a statement
        </h2>
        <p className="text-dark text-base font-sans font-normal leading-normal">
          We believe that your home should reflect your personal style, and our
          team of experts is here to help you achieve that. With a wide range of
          flooring options, we ensure that you get the best value for your
          investment.
        </p>

        <div className=""></div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
