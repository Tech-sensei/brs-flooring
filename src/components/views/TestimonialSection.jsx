import React from "react";
import TestimonialArr from "../ui/TestimonialArr";

const TestimonialSection = () => {
  return (
    <section
      className="bg-white py-24 lg:px-24 px-4 flex flex-col lg:flex-row items-center justify-between gap-14 bg-no-repeat bg-center bg-cover h-full"
      style={{
        backgroundImage: "url('/assets/images/testimonialSectionImg.png')",
      }}
    >
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="text-[32px] text-white font-alt font-semibold leading-9 mb-4">
          What Our Clients Say
        </h2>

        <p className="text-white text-base font-sans font-normal leading-normal">
          BRS Floors is dedicated to providing the best flooring services in the
          area.
          <br /> But don't just take our word for it.
        </p>

        <TestimonialArr />

        {/* pagination */}
        <div className="flex items-center gap-2">
          <div className="w-[42px] h-[4px] rounded-xs bg-white flex items-start gap-2.5"></div>
          <div className="w-[42px] h-[4px] rounded-xs bg-[#FFFFFF52] flex items-start gap-2.5"></div>
          <div className="w-[42px] h-[4px] rounded-xs bg-[#FFFFFF52] flex items-start gap-2.5"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
