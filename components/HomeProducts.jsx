"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  // 🔹 Boshlang‘ichda 10 ta mahsulot ko‘rsatiladi
  const [visibleCount, setVisibleCount] = useState(10);

  // 🔹 Ko‘rsatilayotgan mahsulotlar
  const visibleProducts = products.slice(0, visibleCount);

  // 🔹 “Load more” bosilganda
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="flex flex-col items-center pt-14 container">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>

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

      {/* Tugmalar */}
      <div className="flex gap-4">
        {visibleCount < products.length ? (
          <button
            onClick={handleLoadMore}
            className="px-12 py-2.5 border rounded text-gray-600 hover:bg-slate-50/90 transition"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={() => router.push("/all-products")}
            className="px-12 py-2.5 border rounded text-gray-600 hover:bg-slate-50/90 transition"
          >
            See all products
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
