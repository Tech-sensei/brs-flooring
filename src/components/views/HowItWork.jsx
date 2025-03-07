import React from "react";

const HowItWork = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 lg:px-24 px-4 flex flex-col items-center gap-14">
      {/* header */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-[20%] h-[2px] bg-dark mb-2"></div>
        <h2 className="text-[32px] text-dark text-center font-semibold font-alt leading-normal">
          How it Works?
        </h2>

        <p className="text-dark text-base text-center font-sans font-normal leading-normal">
          Simple & Hassle-Free Process – Get a free quote, schedule your
          service, and enjoy expert installation with quality results.
        </p>
      </div>

      {/* steps */}
      <div className="grid lg:grid-cols-3 items-center justify-between gap-10 w-full">
        {/* step 1 */}
        <div className="flex flex-col lg:flex-row items-start lg:gap-6">
          <span className="text-[#E7E6E6] text-6xl font-sans font-semibold leading-normal">
            01
          </span>

          <div className="flex flex-col items-start">
            <h2 className="text-dark text-xl font-sans font-semibold leading-normal">
              Request a Free Quote
            </h2>
            <p className="text-base text-dark font-sans font-normal leading-normal">
              Click On the “Get A Free Quote” Button and Get a Free Estimations
            </p>
          </div>
        </div>

        {/* step 2 */}
        <div className="flex flex-col lg:flex-row items-start lg:gap-6">
          <span className="text-[#E7E6E6] text-6xl font-sans font-semibold leading-normal">
            02
          </span>

          <div className="flex flex-col items-start">
            <h2 className="text-dark text-xl font-sans font-semibold leading-normal">
              Specify your project details
            </h2>
            <p className="text-base text-dark font-sans font-normal leading-normal">
              Take your time and specify all the parts of the project and submit
              for assessment.
            </p>
          </div>
        </div>

        {/* step 3 */}
        <div className="flex flex-col lg:flex-row items-start lg:gap-6">
          <span className="text-[#E7E6E6] text-6xl font-sans font-semibold leading-normal">
            03
          </span>

          <div className="flex flex-col items-start">
            <h2 className="text-dark text-xl font-sans font-semibold leading-normal">
              We will reach out to you within 24 hours.
            </h2>
            <p className="text-base text-dark font-sans font-normal leading-normal">
              And then, just wait for our team to reach out to you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
