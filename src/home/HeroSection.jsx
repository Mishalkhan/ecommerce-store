import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src="/heroSection.webp"
        alt="Ecommerce Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-2 ">
  
  <div className="max-w-md md:max-w-lg text-left md:ml-2">
    
    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
      Upgrade Your Tech Style Today
    </h1>

    <p className="mt-4 text-gray-200 text-base md:text-md">
      Discover premium phones, stylish cases, and smart watches designed to elevate your everyday life.
    </p>

    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <Link to="/shop">
        <button className="px-6 py-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-3 text-center leading-5 cursor-pointer">
          Shop Now
        </button>
      </Link>

      <Link to="/phones">
        <button className="px-6 py-3 text-center items-center  justify-center w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-base text-sm leading-5 cursor-pointer">
          Explore Phones
        </button>
      </Link>
    </div>

    <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-300">
      <span>✔ Free Shipping</span>
      <span>✔ 7 Days Return</span>
      <span>✔ Secure Payment</span>
    </div>

  </div>
</div>

    </section>
  );
};

export default HeroSection;
