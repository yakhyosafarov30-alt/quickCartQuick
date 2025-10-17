"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  // 🔹 Boshlang‘ichda 10 ta mahsulot
  const [visibleCount, setVisibleCount] = useState(10);

  // 🔹 Tanlangan kategoriya
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔹 Scroll uchun ref
  const topRef = useRef(null);

  // 🔹 Router o‘zgarsa — qayta boshlasin
  useEffect(() => {
    setVisibleCount(10);
    setSelectedCategory("All");
  }, [router.pathname]);

  // 🔹 Unikal kategoriyalar ro‘yxati
  const uniqueCategories = useMemo(() => {
    const cats = products.map((p) => p.category).filter(Boolean);
    return ["All", ...new Set(cats)];
  }, [products]);

  // 🔹 Filterlangan mahsulotlar
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // 🔹 Ko‘rsatiladigan mahsulotlar
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // 🔹 Load More
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  // 🔹 Back tugmasi
  const handleBack = () => {
    setVisibleCount(10);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔹 Kategoriya tanlash
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
      {/* Header qismi */}
      <div className="flex items-center justify-between w-full">
        <p className="text-2xl font-medium">Browse By Category</p>
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

      {/* 🔹 Kategoriya tugmalari */}
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            className={`px-5 py-2 text-sm rounded-full border transition-all ${
              selectedCategory === cat
                ? "bg-black text-white border-black"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔹 Mahsulotlar grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full col-span-full">
            No products found in this category.
          </p>
        )}
      </div>

      {/* 🔹 Tugmalar qismi */}
      <div className="flex gap-4 mb-10">
        {visibleCount < filteredProducts.length && (
          <button
            onClick={handleLoadMore}
            className="px-12 py-2.5 border rounded text-gray-600 hover:bg-slate-50/90 transition"
          >
            Load More
          </button>
        )}

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
