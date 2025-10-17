"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";

const ProductCartFlash = ({ product }) => {
  const { currency, router, addToCart } = useAppContext();

  return (
    <motion.div
      onClick={() => router.push("/product/" + product._id)} // ✅ scrollTo olib tashlandi
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-start gap-1 max-w-[200px] w-full cursor-pointer group"
    >
      {/* 🖼 Mahsulot rasmi */}
      <div className="relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="group-hover:scale-105 transition-transform object-cover w-4/5 h-4/5 md:w-full md:h-full"
          width={800}
          height={800}
        />
        {/* ❤️ Like tugmasi */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <Image className="h-3 w-3" src={assets.heart_icon} alt="heart_icon" />
        </button>
      </div>

      {/* 📝 Mahsulot nomi */}
      <p className="md:text-base font-medium pt-2 w-full truncate group-hover:text-orange-600 transition">
        {product.name}
      </p>

      {/* 💲 Narx va tugmalar */}
      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium">
          {currency}
          {product.offerPrice}
        </p>

        {/* 🛒 Add to Cart tugmasi */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product._id);
          }}
          className="max-sm:hidden px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs hover:bg-orange-600 transition"
        >
          Add
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCartFlash;
