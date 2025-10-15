"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
  const { products } = useAppContext();

  // 🔹 Boshlang‘ichda 10 ta mahsulot ko‘rsatiladi
  const [visibleCount, setVisibleCount] = useState(10);

  // 🔹 Ko‘rsatilayotgan mahsulotlar
  const visibleProducts = products.slice(0, visibleCount);

  // 🔹 “Load more” bosilganda
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-10 items-start px-6 md:px-16 lg:px-32">
        {/* Sarlavha */}
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">All products</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>

        {/* Mahsulotlar grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 pb-14 w-full"
          data-aos="fade-up"
        >
          {visibleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Load more tugmasi */}
        {visibleCount < products.length && (
          <div className="flex justify-center w-full mb-10">
            <button
              onClick={handleLoadMore}
              className="px-12 py-2.5 border rounded text-gray-600 hover:bg-slate-50/90 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
