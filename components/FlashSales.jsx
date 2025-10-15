"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SliderSales from "./SliderSales";

const FlashSales = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const days = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  // 🔹 Animatsiya variantlari
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
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.section
      className="overflow-hidden mt-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
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

      {/* Title & Timer */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-6 items-center flex-wrap"
      >
        {/* Title */}
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
      </motion.div>

      {/* Slider section */}
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
};

export default FlashSales;
