import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../home/HeroSection'
import WhyChooseUs from '../home/WhyChooseUs'
import FeaturedProduct from '../home/FeaturedProduct'
import TestimonialSection from '../home/TestimonialSection'


const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Category Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto text-center">

          {/* Section Heading */}
          <h1 className="mb-6 text-4xl font-semibold tracking-tighter text-gray-900 md:text-5xl lg:text-6xl pb-3">
            Shop by Category
          </h1>

          <p className="mx-auto max-w-2xl text-gray-500 mb-6">
            Explore our wide range of premium gadgets and accessories designed to
            match your lifestyle and everyday needs.
          </p>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

            {/* Phones */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="Smartphones"
                  className="object-contain object-center h-full w-full"
                  src="../catPhone.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Smartphones
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Discover the latest smartphones with powerful performance,
                crystal-clear displays, and long-lasting battery life from top brands.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                Shop Phones
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Phone Cases */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="Phone Cases"
                  className="object-contain object-center h-full w-full"
                  src="../catCases3.webp"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Phone Cases
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Protect your phone with stylish and durable cases.
                Choose from shock-proof, slim, and designer covers made to fit perfectly.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                Shop Cases
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Watches */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="Smart Watches"
                  className="object-contain object-center h-full w-full"
                  src="../catWatch.png"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Smart Watches
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Stay connected and track your fitness with modern smart watches
                featuring health monitoring, notifications, and sleek designs.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                Shop Watches
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <FeaturedProduct/>

      {/* Why Choose Us */}
      <WhyChooseUs/>

      {/* Testimonals */}
      <TestimonialSection/>

    </Layout>
  )
}

export default Home
