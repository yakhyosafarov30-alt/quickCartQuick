"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SliderSales from "./SliderSales";
import { useRouter } from "next/navigation";

export default function FlashSales() {
  const router = useRouter();


  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3); // 3 kunlik flash sale

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Raqam formatlash funksiyasi
  const formatNumber = (num) => String(num).padStart(2, "0");

  // 🔹 Animatsiyalar
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.section
      className="overflow-hidden mt-10 container mx-auto px-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 🔸 Header */}
      <motion.div
        className="flex items-start border-l-[15px] mb-2 border-orange-500"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h4 className="text-orange-500 font-semibold text-[16px] ml-2 mt-2">
          Today's
        </h4>
      </motion.div>

      {/* 🔸 Title, Timer & View All Button */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-between items-center gap-6"
      >
        {/* Chap tomon: Title + Timer */}
        <div className="flex gap-6 items-center flex-wrap">
          <motion.h1 variants={fadeUp} className="font-bold text-[36px]">
            Flash Sales
          </motion.h1>

          {/* Timer */}
          <motion.div
            variants={staggerContainer}
            className="flex gap-6 items-center"
          >
            {/* Days */}
            <motion.div variants={fadeUp} className="text-center">
              <h2 className="text-[12px] font-bold leading-[18px]">Days</h2>
              <div className="flex items-center font-bold text-[20px] gap-2">
                {formatNumber(time.days)}
                <p className="text-orange-500">:</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={fadeUp} className="text-center">
              <h2 className="text-[12px] font-bold leading-[18px]">Hours</h2>
              <div className="flex items-center font-bold text-[20px] gap-2">
                {formatNumber(time.hours)}
                <p className="text-orange-500">:</p>
              </div>
            </motion.div>

            {/* Minutes */}
            <motion.div variants={fadeUp} className="text-center">
              <h2 className="text-[12px] font-bold leading-[18px]">Minutes</h2>
              <div className="flex items-center font-bold text-[20px] gap-2">
                {formatNumber(time.minutes)}
                <p className="text-orange-500">:</p>
              </div>
            </motion.div>

            {/* Seconds */}
            <motion.div variants={fadeUp} className="text-center">
              <h2 className="text-[12px] font-bold leading-[18px]">Seconds</h2>
              <div className="flex items-center font-bold text-[20px] gap-2">
                {formatNumber(time.seconds)}
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* <motion.button
          variants={fadeUp}
          onClick={() => router.push("/all-products")}
          className="px-6 py-2 border border-gray-400 rounded text-gray-600 hover:bg-slate-50/80 transition text-sm md:text-base"
        >
          View All Products
        </motion.button> */}
      </motion.div>

      {/* 🔸 Slider bo‘limi */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6"
      >
        <SliderSales />
      </motion.div>
    </motion.section>
  );
}
