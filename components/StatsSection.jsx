"use client";

import { motion } from "framer-motion";
import { Store, DollarSign, Gift, Wallet } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Store className="w-8 h-8" />,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    id: 2,
    icon: <DollarSign className="w-8 h-8" />,
    value: "33k",
    label: "Monthly Product Sale",
  },
  {
    id: 3,
    icon: <Gift className="w-8 h-8" />,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    id: 4,
    icon: <Wallet className="w-8 h-8" />,
    value: "25k",
    label: "Annual gross sale on our site",
  },
];

export default function StatsSection() {
  return (
    <div className="max-w-6xl mx-auto py-14 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: i * 0.2,
          }}
          viewport={{ once: true }}
          className="group flex flex-col items-center justify-center p-6 rounded-lg border shadow-sm 
                     transition-all duration-300 transform hover:-translate-y-2 
                     bg-white hover:bg-red-500 hover:text-white"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mb-3 
                       bg-gray-100 border border-gray-200 group-hover:bg-white/20"
          >
            <div className="text-black group-hover:text-white">{stat.icon}</div>
          </div>

          <h3 className="text-2xl font-bold group-hover:text-white">
            {stat.value}
          </h3>

          <p className="text-sm mt-1 text-center text-gray-600 group-hover:text-white/90">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
