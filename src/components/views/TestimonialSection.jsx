"use client";
import React, { useState } from "react";
import TestimonialArr from "../ui/TestimonialArr";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/client";
import { GrSend } from "react-icons/gr";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

const ratingOptions = [
  { label: "5 - Excellent", value: "5" },
  { label: "4 - Good", value: "4" },
  { label: "3 - Okay", value: "3" },
  { label: "2 - Poor", value: "2" },
  { label: "1 - Terrible", value: "1" },
];

const TestimonialSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "",
  });

  // State to hold the latest reviews
  const [newReview, setNewReview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message || !formData.rating) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "reviews"), {
        name: formData.name,
        message: formData.message,
        rating: parseInt(formData.rating),
        createdAt: serverTimestamp(),
      });

      // Add the new review to the state
      setNewReview({
        id: docRef.id,
        name: formData.name,
        message: formData.message,
        rating: parseInt(formData.rating),
        createdAt: new Date(), // Temporary timestamp for immediate display
      });

      toast.success("Thank you for your review", { icon: <FaCheckCircle size={24} color="#fa7d1e" /> });
      setFormData({ name: "", message: "", rating: "" });
    } catch (error) {
      console.error("Error submitting review: ", error);
      toast.error("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-white py-24 lg:px-24 px-4 flex flex-col lg:flex-row items-center justify-between gap-14 bg-no-repeat bg-center bg-cover h-full"
      style={{
        backgroundImage: "url('/assets/images/testimonialSectionImg.png')",
      }}
    >
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="text-[32px] text-white font-alt font-semibold leading-9 mb-4">What Our Clients Say</h2>

        <p className="text-white text-base font-sans font-normal leading-normal">
          BRS Floors is dedicated to providing the best flooring services in the area.
          <br /> But don't just take our word for it.
        </p>

        {/* Pass the newReview state to TestimonialArr */}
        <TestimonialArr newReview={newReview} />

        <div className="flex flex-col items-start gap-4 w-full mt-10">
          <h2 className="text-[32px] text-white font-alt font-semibold leading-9 mb-4">Drop a review</h2>

          <form
            onSubmit={handleSubmit}
            className="w-full mt-6  p-6 rounded-xl shadow-lg border border border-white backdrop-blur-[1px] bg-white/10"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-neutral-100 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="text-white text-base font-sans font-normal leading-normal w-full border border-neutral-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-neutral-100 font-semibold mb-2">
                Review
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="text-white text-base font-sans font-normal leading-normal w-full border border-neutral-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500 resize-none"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-neutral-100 font-semibold mb-2">
                Rating
              </label>
              <div className="flex flex-wrap gap-2">
                {ratingOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleChange({ target: { name: "rating", value: option.value } })}
                    className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-semibold ${
                      formData.rating === option.value ? "bg-orange text-white border-orange" : "bg-white/10 text-white border-neutral-100"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-fit flex items-center justify-center gap-2 py-4 px-6 bg-orange rounded-xs border border-transparent transition-all duration-500 ease-in-out text-white-10 text-base text-center font-sans font-semibold leading-normal cursor-pointer group"
            >
              <span className="">{loading ? "Sending..." : "Submit Review"}</span>
              <GrSend
                size={18}
                className={`text-white transition-transform duration-300 ease-in-out ${
                  loading ? "animate-pulse" : "group-hover:translate-x-1 group-hover:text-orange"
                }`}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
