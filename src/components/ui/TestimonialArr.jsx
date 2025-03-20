"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
import { female1, female2, male1 } from "../../../public/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const testimonialArr = [
  {
    name: "Chealsea Mitchell",
    location: "USA, New York",
    review:
      "Helio and his team were prompt, responsive and professional. They moved and covered all of my furniture and made sure it was not damaged during the demolition of my existing floor. Helio helped me find high quality low price flooring and his installation price was reasonable as well. He made sure I was satisfied and addressed any issues or concerns I had with my new floors and stairs. Will definitely use this company again.",
    rating: 5,
    image: male1,
  },
  {
    name: "Jackie Bleyer",
    location: "Canada, Vancouver",
    review:
      " ⁠Helio and his crew did a fantastic job in my home. They worked so fast and did a great job, I really appreciated his attention to detail and being new to town he had some good recommendations for other work | needed to get done.",
    rating: 5,
    image: female2,
  },
  {
    name: "Deb Cherry",
    location: "UK, Manchester",
    review:
      "I am a repeat client of BRS. Helio recently completed my front entryway and it turned out beautifully! He did a fabulous job of matching our existing hardwood. BRS are always professionals and I highly recommend!!",
    rating: 5,
    image: male1,
  },
  {
    name: "Lori Crowe",
    location: "Australia, Sydney",
    review:
      "Working with Helio & his team was my first time with any kind of floor replacement. Helio was helpful in answering my questions and was flexible with his schedule. My new floors are so beautiful and the price was very reasonable. Thank you!",
    rating: 5,
    image: female1,
  },
  {
    name: "Janet Anderson",
    location: "USA, Chicago",
    review: "Their carpet installation service was top-notch! Super soft and durable, my home feels much cozier now.",
    rating: 5,
    image: female2,
  },
  {
    name: "Elena Corbett",
    location: "USA, Chicago",
    review: "Love Helio and BRS Flooring! Professional, punctual, beautiful work - everything you want from a contractor!",
    rating: 5,
    image: female2,
  },
  {
    name: "Steve Tisma",
    location: "USA, Chicago",
    review:
      "I have used Mr Helio for many projects and referred him to several friends and family.. Always a great job on time and no problems.. BRS is the only choice for me.",
    rating: 4,
    image: female2,
  },
  {
    name: "JoAlice Patterson",
    location: "USA, Chicago",
    review: "Excellent flooring company! I would highly recommend them. Prompt & courteous employees. Their work is fabulous! All my flooring gorgeous after work completed. Owner oversees all phases of all jobs. This is a locally owned flooring company. Bravo to Helio and his staff!!!",
    rating: 5,
    image: female2,
  },
];

const TestimonialArr = () => {
  return (
    <div className="w-full">
      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {testimonialArr.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex flex-col items-start justify-between gap-6 p-6 md:p-8 w-full max-w-[430px] h-[350px] rounded-2xl bg-white border border-[#CDC6B8] transition-all duration-500 ease-in-out hover:shadow-lg hover:border-transparent group">
              <div className="flex flex-col items-start gap-4 w-full">
                {/* Image and Name */}
                <div className="flex items-center gap-4">
                  {/* <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="rounded-full object-cover" /> */}
                  <div>
                    <h3 className="text-dark text-base font-semibold font-alt">{testimonial.name}</h3>
                    {/* <p className="text-dark text-sm font-medium font-sans">{testimonial.location}</p> */}
                  </div>
                </div>

                {/* Review */}
                <p className="text-dark text-sm lg:text-base font-normal font-sans leading-normal">{testimonial.review}</p>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                {/* Divider */}
                <div className="h-[1px] w-full bg-[#CDC6B8]"></div>

                {/* Rating and Icon */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} size={20} className="fill-[#FFBA40]" />
                    ))}
                  </div>
                  <RiDoubleQuotesR size={28} className="fill-dark" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialArr;
