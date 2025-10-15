"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function SliderSales() {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 169,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      img: "/assets/jostik.png",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1369,
      discount: 35,
      rating: 4.0,
      reviews: 75,
      img: "/assets/klaviatura.png",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 490,
      discount: 30,
      rating: 4.5,
      reviews: 99,
      img: "/assets/klaviatura.png",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 279,
      oldPrice: 499,
      discount: 25,
      rating: 4.5,
      reviews: 99,
      img: "/assets/kompyuter.png",
    },
    {
      id: 5,
      name: "Gaming Mouse Pro",
      price: 89,
      oldPrice: 129,
      discount: 31,
      rating: 4.7,
      reviews: 64,
      img: "/assets/chair.png",
    },
  ];

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Custom navigation buttons */}
        <div className="absolute -top-10 right-4 flex gap-2 z-10">
          <button
            className="swiper-button-prev !static !w-8 !h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition shadow-sm"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="swiper-button-next !static !w-8 !h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition shadow-sm"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          // pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
            1920: { slidesPerView: 5 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative border rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition bg-white">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </span>
                <div className="flex justify-center items-center p-4 bg-gray-50 relative w-full h-48">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <div className="flex justify-center gap-2 mt-1 items-baseline">
                    <span className="text-red-600 font-bold text-lg">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${product.oldPrice}
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < Math.round(product.rating) ? "gold" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gold"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442a.562.562 0 01.316.986l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.726-2.885a.563.563 0 00-.586 0L6.981 20.537a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602a.562.562 0 01.316-.986l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                    <span className="text-gray-500 text-sm ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <button className="absolute bottom-0 left-0 w-full bg-black text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 4.293A1 1 0 007 19h10a1 1 0 00.93-.629L21 13M7 19a2 2 0 104 0M17 19a2 2 0 104 0"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
