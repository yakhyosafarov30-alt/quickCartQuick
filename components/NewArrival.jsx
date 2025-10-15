"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NewArrival() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="flex items-center gap-2 mb-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 font-semibold">Featured</span>
      </motion.div>

      <motion.h2
        className="text-4xl font-bold mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        New Arrival
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CHAPDAGI RASM — CHAPDAN CHIQADI */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="group relative rounded-xl overflow-hidden h-[500px] md:h-[600px] bg-black cursor-pointer"
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/playstation.png"
              alt="PlayStation 5"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

          <motion.div
            className="absolute bottom-6 left-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-sm opacity-80 max-w-xs">
              Black and White version of the PS5 coming out on sale.
            </p>
            <motion.button
              className="mt-3 underline font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ scale: 1.05 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* O‘NG TOMON — BIRINCHISI O‘NGDAN, QOLGANLAR PASTDAN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              src: "/assets/woman-shlape.png",
              title: "Women’s Collections",
              desc: "Featured woman collections that give you another vibe.",
              animation: { opacity: 0, x: 100 }, // 🔹 o‘ngdan chiqadi
              span: "sm:col-span-2",
            },
            {
              src: "/assets/alisa.png",
              title: "Speakers",
              desc: "Amazon wireless speakers",
              animation: { opacity: 0, y: 100 }, // 🔹 pastdan chiqadi
            },
            {
              src: "/assets/gucci.png",
              title: "Perfume",
              desc: "GUCCI INTENSE-OUD EDP",
              animation: { opacity: 0, y: 100 }, // 🔹 pastdan chiqadi
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={item.animation}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`group relative rounded-xl overflow-hidden h-[250px] md:h-[284px] cursor-pointer ${
                item.span || ""
              }`}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              <motion.div
                className="absolute bottom-6 left-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm opacity-80 max-w-xs">{item.desc}</p>
                <motion.button
                  className="mt-3 underline font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
