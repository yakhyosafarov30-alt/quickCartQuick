"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { currency, router, addToCart } = useAppContext();

  const handleProductClick = () => {
    // ✅ Sahifani tepayga sakramasdan silliq o‘tish uchun
    window.history.scrollRestoration = "manual";
    router.push(`/product/${product._id}`);
  };

  return (
    <motion.div
      onClick={handleProductClick}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-start gap-1 max-w-[220px] w-full cursor-pointer group"
    >
      {/* 🖼 Mahsulot rasmi */}
      <div className="relative bg-gray-500/10 rounded-lg w-full h-56 flex items-center justify-center overflow-hidden">
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

      {/* 📝 Nomi va tavsif */}
      <p className="md:text-base font-medium pt-2 w-full truncate group-hover:text-orange-600 transition">
        {product.name}
      </p>
      <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">
        {product.description}
      </p>

      {/* ⭐ Reyting */}
      <div className="flex items-center gap-2">
        <p className="text-xs">{4.5}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              className="h-3 w-3"
              src={
                index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon
              }
              alt="star_icon"
            />
          ))}
        </div>
      </div>

      {/* 💲 Narx va tugmalar */}
      <div className="flex items-end justify-between w-full mt-1 gap-2">
        <p className="text-base font-medium">
          {currency}
          {product.offerPrice}
        </p>

        <div className="flex gap-2">
          {/* 🛒 Add to Cart */}
          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product._id);
            }}
            className="max-sm:hidden px-3 py-1.5 text-white bg-orange-500 rounded-full text-xs hover:bg-orange-600 transition"
          >
            Add to Cart
          </button> */}

          {/* ⚡ Buy Now */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product._id);
              router.push("/cart");
            }}
            className="max-sm:hidden px-4 py-1.5 text-gray-700 border border-gray-400/20 rounded-full text-xs hover:bg-gray-100 transition"
          >
            Buy now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
