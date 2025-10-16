"use client";
import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  // 🔹 Boshlang‘ichda 10 ta mahsulot
  const [visibleCount, setVisibleCount] = useState(10);

  // 🔹 Scroll uchun containerga ref
  const topRef = useRef(null);

  // 🔹 Router o‘zgarsa — 10 tadan qayta boshlasin
  useEffect(() => {
    setVisibleCount(10);
  }, [router.pathname]);

  // 🔹 Ko‘rsatilayotgan mahsulotlar
  const visibleProducts = products.slice(0, visibleCount);

  // 🔹 “Load more” bosilganda
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  // 🔹 “Back” bosilganda — scroll tepaga qaytadi va 10 ta product qoladi
  const handleBack = () => {
    setVisibleCount(10);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={topRef}
      className="flex flex-col items-center pt-14 container mx-auto px-4"
    >
      {/* Header qismi: title + See all products */}
      <div className="flex items-center justify-between w-full">
        <p className="text-2xl font-medium">Popular products</p>
        <button
          onClick={() => {
            router.push("/all-products");
            setVisibleCount(10);
          }}
          className="text-sm md:text-base px-6 py-2 border rounded text-gray-600 hover:bg-slate-50/90 transition"
        >
          See all products
        </button>
      </div>

      {/* Mahsulotlar grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* Tugmalar qismi */}
      <div className="flex gap-4 mb-10">
        {visibleCount < products.length && (
          <button
            onClick={handleLoadMore}
            className="px-12 py-2.5 border rounded text-gray-600 hover:bg-slate-50/90 transition"
          >
            Load More
          </button>
        )}

        {/* Back tugmasi — faqat 10 tadan ortiq bo‘lsa ko‘rsatiladi */}
        {visibleCount > 10 && (
          <button
            onClick={handleBack}
            className="px-12 py-2.5 border rounded text-gray-600 hover:bg-slate-50/90 transition"
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
