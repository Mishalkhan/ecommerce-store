import React from "react";
import { IoIosCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
    const add = (x)=>{
            dispatch(addToCart(x))
    }
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <Link to={`/product/${product._id}`}>
        <img
          className="h-40 rounded w-full object-contain object-center mb-6"
          src={product.image}
          alt={product.title}
        />

        <h2 className="text-lg text-gray-900 font-semibold mb-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-600 mb-3">
          {product.description.slice(0, 50)}...
        </p>

        <p className="text-lg font-bold text-gray-900 mb-4">
          ${product.price}
        </p>
        </Link>
        <button type="button" className="flex text-center items-center  justify-center w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-base text-sm py-2.5 leading-5 mt-3 cursor-pointer" onClick={()=>add(product)}>Add To Cart &nbsp; <IoIosCart /></button>

      </div>
    </div>
  );
};

export default ProductCard
