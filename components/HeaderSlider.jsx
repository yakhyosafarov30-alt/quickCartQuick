"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { assets } from "@/assets/assets";

const slides = [
  {
    id: 1,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    img: assets.header_macbook_image,
    bg: "bg-black",
  },
  {
    id: 2,
    title: "PlayStation 5",
    subtitle: "Exclusive Deals Now!",
    img: assets.playstation_image,
    bg: "bg-gray-900",
  },
  {
    id: 3,
    title: "MacBook Air M3",
    subtitle: "Save up to $250",
    img: assets.macbook_image,
    bg: "bg-[#0b0b0b]",
  },
  {
    id: 4,
    title: "Smartwatch Series 9",
    subtitle: "Get Fit. Stay Connected.",
    img: assets.venu_watch_image,
    bg: "bg-neutral-900",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full mt-20 max-w-7xl mx-auto rounded-2xl overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${slide.bg} relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-10 h-full`}
            >
              {/* Gradient overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />

              {/* Text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 text-white flex flex-col gap-3 md:w-1/2 text-center md:text-left"
              >
                <p className="text-white/70 flex justify-center md:justify-start items-center gap-2 text-sm sm:text-base">
                  <Image
                    src={assets.logo}
                    alt="apple logo"
                    width={20}
                    height={20}
                    className="invert"
                  />
                  {slide.title}
                </p>
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {slide.subtitle}
                </h2>
                <button className="flex justify-center md:justify-start items-center gap-2 mt-4 font-semibold text-sm sm:text-base hover:underline">
                  Shop Now <ArrowRight size={16} />
                </button>
              </motion.div>

              {/* Image section */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 mt-6 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2"
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={420}
                  height={420}
                  className="object-contain w-[200px] sm:w-[300px] md:w-[380px] lg:w-[450px] drop-shadow-lg"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination customization */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: orange !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 10px;
          height: 10px;
        }
      `}</style>
    </div>
  );
}
