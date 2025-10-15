"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left image section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex w-1/2 items-center justify-center bg-[#E6F2F8] relative"
      >
        {/* Ichidagi rasm markazda joylashadi */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="relative w-[380px] h-[380px] lg:w-[450px] lg:h-[450px]"
        >
          <Image
            src="/assets/playstation.png"
            alt="Shopping phone"
            fill
            priority
            className="object-contain drop-shadow-[0_5px_30px_rgba(0,0,0,0.2)]"
          />
        </motion.div>
      </motion.div>

      {/* Right form section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-10"
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Create an account
        </h2>
        <p className="text-gray-500 mb-6">Enter your details below</p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition"
          >
            Create Account
          </motion.button>

          <div className="flex items-center justify-center gap-2 text-gray-500">
            <div className="h-px bg-gray-300 flex-grow" />
            <span className="text-sm">or</span>
            <div className="h-px bg-gray-300 flex-grow" />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-md flex items-center justify-center gap-2 transition"
          >
            <Image
              src="/assets/Icon-Google.svg"
              alt="Google"
              width={20}
              height={20}
            />
            Sign up with Google
          </motion.button>
        </motion.form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline font-medium">
            Log in
          </a>
        </p>
      </motion.div>
    </section>
  );
}
