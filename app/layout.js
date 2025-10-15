"use client";

import { useState, useEffect } from "react";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

// 🔸 Font
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

// 🔸 Loading component
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full bg-white">
      {/* Spinner */}
      <div className="relative flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 md:h-20 md:w-20 border-4 border-t-transparent border-orange-500"></div>
        <div className="absolute h-10 w-10 md:h-12 md:w-12 bg-white rounded-full"></div>
      </div>

      {/* Text */}
      <p className="mt-6 text-gray-600 text-sm md:text-base animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Exclusive - Yakhyo</title>
        <meta name="description" content="E-Commerce with Next.js" />
      </head>
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <Toaster />
        <AppContextProvider>
          {loading ? <Loading /> : children}
        </AppContextProvider>
      </body>
    </html>
  );
}
