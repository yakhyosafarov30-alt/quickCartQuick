'use client'
import { useEffect } from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from "aos";
// import FlashSales from "@/components/FlashSales";
import SalesFlash from "@/components/SalesFlash";
// import CategorySlider from "@/components/CategorySlider";
import MusicExperienceSection from "@/components/MusicExperienceSection"
import ServiceFeatures from "@/components/ServiceFeatures"
import NewArrival from "@/components/NewArrival";
import BrowseCetegorySlider from "@/components/BrowseCetegorySlider";
// import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      });
    }, []);
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        {/* <FlashSales /> */}
        <SalesFlash />
        {/* <CategorySlider /> */}
        <BrowseCetegorySlider />
        <MusicExperienceSection />
        <HomeProducts />
        <NewArrival />
        <ServiceFeatures />

        {/* <FeaturedProduct /> */}
        {/* <Banner /> */}
        {/* <NewsLetter /> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
