"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MusicExperienceSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let seconds = prev.seconds - 1;
        let minutes = prev.minutes;
        let hours = prev.hours;
        let days = prev.days;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }

        return { hours, days, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto my-16 shadow-2xl">
      {/* 💫 Moving gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Left Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="space-y-6 max-w-md z-10"
      >
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-green-400 font-semibold tracking-wider"
        >
          Categories
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Enhance Your <br /> Music Experience
        </motion.h2>

        {/* ⏰ Timer */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white text-black w-16 h-16 rounded-full flex flex-col items-center justify-center font-semibold shadow-lg"
            >
              <span className="text-lg">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* 🟢 Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(34,197,94,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-green-500 text-white font-semibold px-8 py-3 rounded-md mt-4 shadow-md hover:bg-green-600"
        >
          Buy Now!
        </motion.button>
      </motion.div>

      {/* 🎶 Right Section — image with smooth entrance + float animation */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 md:mt-0 relative z-10"
      >
        {/* Green glow aura */}
        <motion.div
          className="absolute -inset-10 bg-green-500/30 blur-3xl rounded-full"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Speaker Image float animation */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          whileHover={{ scale: 1.08, rotate: 1 }}
          className="relative"
        >
          <Image
            src="/assets/speaker.png"
            alt="JBL Speaker"
            width={500}
            height={400}
            className="drop-shadow-[0_0_40px_rgba(0,255,0,0.6)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
