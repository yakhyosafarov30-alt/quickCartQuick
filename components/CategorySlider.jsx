"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import {
  Camera,
  Monitor,
  Smartphone,
  Watch,
  Headphones,
  Gamepad2,
} from "lucide-react";

export default function CategorySlider() {
  const swiperRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    { name: "Phones", icon: Smartphone },
    { name: "Computers", icon: Monitor },
    { name: "SmartWatch", icon: Watch },
    { name: "Camera", icon: Camera },
    { name: "HeadPhones", icon: Headphones },
    { name: "Gaming", icon: Gamepad2 },
  ];

  // 🔹 Umumiy chiqish animatsiya variantlari
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 🔹 Ketma-ket chiqish uchun container
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-6"
        variants={fadeUp}
      >
        <div>
          <p className="text-red-500 font-semibold text-sm">Categories</p>
          <h2 className="text-2xl font-bold">Browse By Category</h2>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <span className="text-lg">←</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => swiperRef.current?.slideNext()}
            className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <span className="text-lg">→</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Swiper Slider */}
      <motion.div variants={fadeUp}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.name;
            return (
              <SwiperSlide key={idx}>
                <motion.div
                  variants={fadeUp}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex flex-col items-center justify-center border rounded-xl py-6 cursor-pointer transition-all duration-300 hover:shadow-md ${
                    active
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <Icon
                    size={32}
                    className={`${active ? "text-white" : "text-black"}`}
                  />
                  <p className="mt-2 font-medium">{cat.name}</p>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.div>
  );
}
