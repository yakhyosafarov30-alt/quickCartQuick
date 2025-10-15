"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>{" "}
        / <span className="text-gray-700 font-medium">About</span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-gray-600 leading-relaxed mt-5 text-sm md:text-base">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/twu-woman.png"
            alt="About Us Image"
            width={550}
            height={400}
            className="rounded-lg object-cover w-full h-auto max-w-md md:max-w-full shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
