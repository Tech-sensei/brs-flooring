"use client";

import React from "react";
import Gallery from "@/components/global/Gallery";

const page = () => {
  return <Gallery />;
};

export default page;

// import Image from "next/image";
// import { motion } from "framer-motion";
// import ContactSection from "@/components/views/ContactSection";
// import ProjectSection from "@/components/views/ProjectSection";
// import {
//   chatIcon,
//   phoneIcon,
//   envelopeIcon,
// } from "../../../public/assets/icons";

// const ProjectPage = () => {
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <main className="">
//       {/* Hero Section */}
//       <section
//         className="h-[413px] text-white-10 flex items-center px-6 sm:px-8 md:px-12 lg:px-24 pt-[200px] pb-10 bg-no-repeat bg-center bg-cover"
//         style={{
//           backgroundImage: "url('/assets/images/homeHeroImg.png')",
//         }}
//       >
//         <div className="flex flex-col items-start gap-4 w-full max-w-[608px]">
//           <motion.p
//             variants={textVariants}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//             className="text-white-10 text-sm sm:text-base font-sans font-normal leading-normal"
//           >
//             Home - Project
//           </motion.p>

//           <motion.h1
//             variants={textVariants}
//             initial="hidden"
//             animate="visible"
//             transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
//             className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-alt leading-normal"
//           >
//             Projects
//           </motion.h1>
//         </div>
//       </section>

//       <ProjectSection />

//       {/* Flooring Ideas Section */}
//       <section
//         className="h-auto text-white-10 flex items-center py-24 px-6 sm:px-8 md:px-12 lg:px-24 bg-no-repeat bg-center bg-cover relative"
//         style={{
//           backgroundImage: "url('/assets/images/projectIdeaImg.png')",
//         }}
//       >
//         <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-10 md:gap-14">
//           {/* Text Content */}
//           <div className="flex flex-col gap-4 items-center justify-center w-full text-center">
//             <h3 className="text-white text-sm sm:text-base md:text-lg font-sans font-semibold leading-normal uppercase">
//               FLOORING IDEAS
//             </h3>

//             <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-alt font-semibold leading-normal">
//               Make Your Home’s Interior Stand Out From The Others
//             </h2>

//             <p className="text-white-10 text-sm sm:text-base md:text-lg font-sans font-normal leading-normal max-w-[800px]">
//               Nec lectus et integer convallis potenti si suscipit neque etiam.
//               At ad convallis sociosqu tempus bibendum elementum si. Auctor nec
//               hendrerit facilisi duis tincidunt lorem lobortis tristique eu leo
//               donec. Mattis ac ante suspendisse mi amet.
//             </p>
//           </div>

//           {/* Cards Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//             {/* Consultation */}
//             <div className="flex flex-col items-start gap-4 p-6 sm:p-8 bg-white rounded-lg shadow-md">
//               <Image
//                 src={chatIcon}
//                 alt="chat"
//                 quality={100}
//                 className="w-10 h-10 sm:w-12 sm:h-12"
//               />
//               <h3 className="text-dark text-lg sm:text-xl font-semibold font-alt">
//                 Consultation
//               </h3>
//               <p className="text-dark text-sm sm:text-base font-medium font-sans">
//                 Amet est imperdiet commodo ante placerat. Urna aenean
//                 ullamcorper
//               </p>
//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-2 py-3 px-5 sm:py-4 sm:px-6 bg-orange rounded-md border border-transparent transition-all duration-500 hover:border-orange hover:bg-transparent hover:text-orange text-white-10 text-sm sm:text-base font-sans font-semibold cursor-pointer"
//               >
//                 Chat Us
//               </button>
//             </div>

//             {/* Ticket Support */}
//             <div className="flex flex-col items-start gap-4 p-6 sm:p-8 bg-white rounded-lg shadow-md">
//               <Image
//                 src={envelopeIcon}
//                 alt="chat"
//                 quality={100}
//                 className="w-10 h-10 sm:w-12 sm:h-12"
//               />
//               <h3 className="text-dark text-lg sm:text-xl font-semibold font-alt">
//                 Ticket Support
//               </h3>
//               <p className="text-dark text-sm sm:text-base font-medium font-sans">
//                 Amet est imperdiet commodo ante placerat. Urna aenean
//                 ullamcorper
//               </p>
//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-2 py-3 px-5 sm:py-4 sm:px-6 bg-orange rounded-md border border-transparent transition-all duration-500 hover:border-orange hover:bg-transparent hover:text-orange text-white-10 text-sm sm:text-base font-sans font-semibold cursor-pointer"
//               >
//                 Send Ticket
//               </button>
//             </div>

//             {/* Contact Us */}
//             <div className="flex flex-col items-start gap-4 p-6 sm:p-8 bg-white rounded-lg shadow-md">
//               <Image
//                 src={phoneIcon}
//                 alt="phone"
//                 quality={100}
//                 className="w-10 h-10 sm:w-12 sm:h-12"
//               />
//               <h3 className="text-dark text-lg sm:text-xl font-semibold font-alt">
//                 Contact Us
//               </h3>
//               <p className="text-dark text-sm sm:text-base font-medium font-sans">
//                 Amet est imperdiet commodo ante placerat. Urna aenean
//                 ullamcorper
//               </p>
//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-2 py-3 px-5 sm:py-4 sm:px-6 bg-orange rounded-md border border-transparent transition-all duration-500 hover:border-orange hover:bg-transparent hover:text-orange text-white-10 text-sm sm:text-base font-sans font-semibold cursor-pointer"
//               >
//                 Call Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <ContactSection />
//     </main>
//   );
// };

// export default ProjectPage;


