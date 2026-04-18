import React from 'react'
import { IoIosCart } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
const Cards = ({ product }) => {
  const dispatch = useDispatch();
    const add = (x)=>{
            dispatch(addToCart(x))
    }
  return (
    
    <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
      <Link to={`/product/${product._id}`}>
          <img 
          src={product.image}
          alt={product.name}
          className="h-40 rounded w-full object-contain object-center mb-6" />

          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.brand}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.title}</h2>
          <p className="leading-relaxed text-base">{product.description.slice(0,50)}...</p>
          </Link>
         <button type="button" className="flex text-center items-center  justify-center w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-base text-sm py-2.5 leading-5 mt-3 cursor-pointer" onClick={()=>add(product)}>Add To Cart &nbsp; <IoIosCart /></button>
          
    </div>

  )
}

export default Cards
