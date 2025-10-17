"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCartFlash from "./ProductCartFlash";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  // 🔹 Flash sale tugash sanasi
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  });

  // 🔹 Timer funksiyasi
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +targetDate - +now;
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), );/// 1000
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col items-center pt-10 sm:pt-14 container mx-auto px-3 sm:px-4 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-6">
        {/* Chap tomon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">
            ⚡ Flash Sales
          </p>

          {/* Timer */}
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg">
            {[
              { label: "Days", value: formatTime(timeLeft.days) },
              { label: "Hours", value: formatTime(timeLeft.hours) },
              { label: "Min", value: formatTime(timeLeft.minutes) },
              { label: "Sec", value: formatTime(timeLeft.seconds) },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] sm:text-[12px] text-gray-500">
                    {item.label}
                  </span>
                  <span className="text-[16px] sm:text-[20px] font-bold text-black">
                    {item.value}
                  </span>
                </div>
                {index < 3 && (
                  <span className="text-red-400 font-bold mx-1 sm:mx-2 text-sm sm:text-xl">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* O‘ng tomon */}
        <div className="flex flex-col items-end w-full sm:w-auto gap-3">
          {/* See all products */}
          <button
            onClick={() => router.push("/all-products")}
            className="text-xs sm:text-sm md:text-base px-5 py-2 border rounded text-gray-700 hover:bg-gray-100 transition"
          >
            See all products
          </button>

          {/* Navigation tugmalari */}
          <div className="flex items-center gap-2 mt-6">
            <button className="swiper-button-prev !static border border-gray-200 bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="swiper-button-next !static border border-gray-200 bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <div className="w-full mt-8 relative pb-16">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={14}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {products.slice(0, 20).map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCartFlash product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeProducts;
