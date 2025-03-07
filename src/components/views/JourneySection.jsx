"use client";

import React from "react";
import VideoPlayer from "@/components/ui/VideoPlayer";

const JourneySection = () => {
  return (
    <section
      className="bg-white py-24 lg:px-24 px-4 flex flex-col lg:flex-row items-center justify-between gap-14 bg-no-repeat bg-center bg-cover h-full"
      style={{
        backgroundImage: "url('/assets/images/journeySectionImg.png')",
      }}
    >
      {/* video */}
      <div className="flex-1 w-full order-2 lg:order-none">
        <VideoPlayer />
      </div>

      {/* content */}
      <div className="flex flex-col items-start gap-2 w-full flex-1 order-1 lg:order-none">
        <h2 className="text-[32px] text-white-10 font-alt font-semibold leading-9 mb-4">
          Watch Our TransFormative
          <br /> Journey!
        </h2>
        <div className="w-[40%] lg:w-[20%] h-[2px] bg-white-10 mb-2"></div>
        <p className="text-white text-base font-sans font-normal leading-normal lg:w-[500px] ">
          Nullam eu malesuada risus praesent fermentum. Augue magnis proin
          primis tempor litora ullamcorper turpis ad netus. Fusce dolor mus
          justo nascetur donec pulvinar congue.
        </p>
      </div>
    </section>
  );
};

export default JourneySection;
