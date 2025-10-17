"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCartFlash from "./ProductCartFlash";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  // 🔹 Flash sale tugash sanasi — faqat 1 marta o‘rnatiladi
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3); // 3 kunlik chegirma
    return date;
  });

  // 🔹 Vaqtni hisoblash funksiyasi
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +targetDate - +now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col items-center pt-14 container mx-auto px-4">
      {/* Header qismi */}
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold">Flash Sales</p>

          {/* Flash Sale Timer */}
          <div className="flex items-center gap-3  px-4 py-2 rounded-lg">
            {[
              { label: "Days", value: formatTime(timeLeft.days) },
              { label: "Hours", value: formatTime(timeLeft.hours) },
              { label: "Minutes", value: formatTime(timeLeft.minutes) },
              { label: "Seconds", value: formatTime(timeLeft.seconds) },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="text-[12px] text-gray-500">
                    {item.label}
                  </span>
                  <span className="text-[22px] font-bold text-black">
                    {item.value}
                  </span>
                </div>
                {index < 3 && (
                  <span className="text-red-400 font-bold mx-2 text-xl">:</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => router.push("/all-products")}
          className="text-sm md:text-base px-6 py-2 border rounded text-gray-600 hover:bg-slate-50/90 transition"
        >
          See all products
        </button>
      </div>

      {/* Swiper Slider */}
      <div className="w-full mt-8 relative pb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-10"
        >
          {products.slice(0, 20).map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCartFlash product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination absolute left-1/2 -translate-x-1/2 bottom-0 flex justify-center"></div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6;
          width: 10px;
          height: 10px;
        }
      `}</style>
    </div>
  );
};

export default HomeProducts;
