"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/firebase/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialArr = ({ newReview }) => {
  const [testimonialArr, setTestimonialArr] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsQuery = query(collection(db, "reviews"), orderBy("createdAt", "desc"), limit(10));
      const snapshot = await getDocs(reviewsQuery);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTestimonialArr(data);
    };
    fetchReviews();
  }, []);

  // Add the new review to the state when it changes
  useEffect(() => {
    if (newReview) {
      setTestimonialArr((prev) => [newReview, ...prev.slice(0, 9)]);
    }
  }, [newReview]);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {testimonialArr.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex flex-col items-start justify-between gap-6 p-6 md:p-8 w-full max-w-[430px] h-[400px] md:h-[450px] rounded-2xl bg-white border border-[#CDC6B8] transition-all duration-500 ease-in-out hover:shadow-lg hover:border-transparent group">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-dark text-base font-semibold font-alt">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="text-dark text-sm lg:text-base font-normal font-sans leading-normal">
                  {testimonial.review || testimonial.message}
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="h-[1px] w-full bg-[#CDC6B8]"></div>
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

      <div className="flex items-start self-baseline gap-2 mt-4">
        {testimonialArr.map((_, i) => (
          <div
            key={i}
            className={`w-[42px] h-[4px] rounded-xs transition-all duration-300 ease-in-out cursor-pointer ${
              activeIndex === i ? "bg-white" : "bg-[#FFFFFF52]"
            }`}
            onClick={() => setActiveIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialArr;
