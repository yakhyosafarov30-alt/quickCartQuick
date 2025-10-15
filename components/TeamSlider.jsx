"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
// import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/assets/Tom.png",
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Managing Director",
    image: "/assets/Emma.png",
  },
  {
    id: 3,
    name: "Will Smith",
    role: "Product Designer",
    image: "/assets/Will.png",
  },
  {
    id: 4,
    name: "Robert Fox",
    role: "Marketing Head",
    image: "/assets/Tom.png",
  },
];

export default function TeamSlider() {
  return (
    <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Team</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={member.id}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative bg-gray-100 flex justify-center items-center h-[380px] md:h-[400px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="object-contain w-auto h-full transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Text content */}
              <div className="py-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>

                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="hover:text-red-500 transition">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="hover:text-red-500 transition">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="hover:text-red-500 transition">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
