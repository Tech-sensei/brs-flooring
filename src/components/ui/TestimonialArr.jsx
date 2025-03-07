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
    name: "Michael Thompson",
    location: "USA, New York",
    review:
      "The hardwood flooring installation was seamless and the finish is stunning. Highly recommend their expert team!",
    rating: 5,
    image: male1,
  },
  {
    name: "Emily Rodriguez",
    location: "Canada, Vancouver",
    review:
      "We got luxury vinyl planks installed, and they transformed our space. Great quality and craftsmanship!",
    rating: 5,
    image: female2,
  },
  {
    name: "Daniel Carter",
    location: "UK, Manchester",
    review:
      "Outstanding service! The team installed our laminate floors perfectly and within the promised timeframe.",
    rating: 5,
    image: male1,
  },
  {
    name: "Sophia Wilson",
    location: "Australia, Sydney",
    review:
      "I love my new tile flooring! The attention to detail and quality of work exceeded my expectations.",
    rating: 5,
    image: female1,
  },
  {
    name: "Janet Anderson",
    location: "USA, Chicago",
    review:
      "Their carpet installation service was top-notch! Super soft and durable, my home feels much cozier now.",
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
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-dark text-base font-semibold font-alt">
                      {testimonial.name}
                    </h3>
                    <p className="text-dark text-sm font-medium font-sans">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Review */}
                <p className="text-dark text-sm lg:text-base font-normal font-sans leading-normal">
                  {testimonial.review}
                </p>
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
