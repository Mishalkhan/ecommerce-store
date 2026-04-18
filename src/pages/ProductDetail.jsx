import React from 'react'
import Layout from '../components/Layout'
import { phones } from '../data/phones'
import { cases } from '../data/cases'
import { watches } from '../data/watches'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const ProductDetail = () => {
    const dispatch = useDispatch();
    const add = (product)=>{
        dispatch(addToCart(product))
    }

    const allproduct = [...phones, ...cases, ...watches]
    const { id } = useParams();
    const product = allproduct.find((item) => item._id === parseInt(id))
    
    if (!product) {
        return <Layout><div className="py-20 text-center">Product Not Found</div></Layout>
    }

    return (
    <Layout>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">

      {/* Product Image */}
      <img
        alt={product.title}
            src={product.image}
            className="lg:w-1/2 w-full lg:h-[450px] h-80 object-contain object-center rounded-xl bg-gray-50 p-6"
      />

      {/* Product Info */}
      <div className="lg:w-1/2 w-full lg:pl-12 lg:py-6 mt-8 lg:mt-0">

        <h2 className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">
            {product.category}
        </h2>

        <h1 className="text-4xl font-bold text-gray-900 mt-3">
            {product.title}
        </h1>

        {/* Rating & Reviews */}
        <div className="flex items-center mt-4 mb-6">
            <div className="flex text-indigo-500">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        fill={index < product.rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
            <span className="text-gray-500 ml-3 text-sm">
                {product.reviews} Review{product.reviews > 1 ? 's' : ''}
            </span>
        </div>

        {/* Description */}
        <p className="leading-relaxed text-gray-600">
            {product.description}
        </p>

        {/* Stock Status */}
        <p className={`mt-4 font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock> 0 ? `In Stock` : 'Out of Stock'}
        </p>

        {/* Divider */}
        <div className="border-b border-gray-200 mt-8 mb-6"></div>

        {/* Price + Buttons */}
        <div className="flex items-center">
            <span className="text-3xl font-bold text-gray-900">
                ${product.price}
            </span>

            <button
            className={`ml-auto px-8 py-3 rounded-lg shadow-md text-white transition duration-300 cursor-pointer
                ${product.stock > 0 
                ? 'bg-indigo-600 hover:bg-indigo-700' 
                : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={product.stock === 0}
            onClick={()=>add(product)}
            >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>

            <button className="ml-4 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                ❤️
            </button>
        </div>

      </div>
      </div>
    </div>
    </section>
    </Layout>
    )
}

export default ProductDetail