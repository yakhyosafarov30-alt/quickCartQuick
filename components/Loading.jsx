"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] w-full bg-white">
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

export default Loading;
