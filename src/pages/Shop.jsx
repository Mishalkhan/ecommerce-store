import React, { useState } from "react";
import Cards from "../components/Cards"; // 👈 your new component
import { phones } from "../data/phones";
import { cases } from "../data/cases";
import { watches } from "../data/watches";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Shop = () => {
  const [category, setCategory] = useState("all");

  // Merge all products
  const allProducts = [...phones, ...cases, ...watches];

  const filteredProducts =
    category === "all"
      ? allProducts
      : allProducts.filter((item) => item.category === category);

      console.log("phones:", phones);
      console.log("cases:", cases);
      console.log("watches:", watches);
  return (
    <Layout>
    <div className="bg-gray-100">
    <section className="container mx-auto px-6 py-16">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Shop All Products
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => setCategory("all")}
           type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        >
          All
        </button>

        <button
          onClick={() => setCategory("phones")}
          type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 cursor-pointer"
        >
          Phones
        </button>

        <button
          onClick={() => setCategory("cases")}
          type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 cursor-pointer"
        >
          Phone Cases
        </button>

        <button
          onClick={() => setCategory("watches")}
          type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 cursor-pointer"
        >
          Watches
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          
          <Cards
            key={`${product.category}-${product._id}`} 
            product={product} 
          />
        ))}
      </div>

    </section>
    </div>
    </Layout>
  );
};

export default Shop;