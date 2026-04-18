import React from 'react'
import Layout from '../components/Layout'
import { IoIosCart } from "react-icons/io";
import { phones } from '../data/phones';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Phones = () => {
  const dispatch = useDispatch();
  const add = (x)=>{
          dispatch(addToCart(x))
  }
    return (
        <Layout>
        <div className='bg-gray-100'>
         <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Small category label */}
          <span className="text-sm tracking-widest uppercase text-blue-600 font-semibold">
            Collection
          </span>

          {/* Main title */}
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Smartphones
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            Discover our latest premium smartphones designed for performance,
            innovation, and everyday excellence.
          </p>

          {/* Subtle divider */}
          <div className="mt-10 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>

        </div>
        </section>
        <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24  mx-auto">
        <div className="flex flex-wrap -m-4">
          {phones.map((x) => {
            return (            
            <div key={x._id} className="xl:w-1/4 md:w-1/2 p-4">
            
            <div className="bg-white border border-gray-100 p-6 rounded-lg text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
            <Link to={`/product/${x._id}`}>
                <img
                    src={x.image}
                    alt={x.title}
                    className="h-40 rounded w-full object-contain object-center mb-6" />

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{x.brand}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{x.title}</h2>
                <p className="leading-relaxed text-base">{x.description.slice(0, 50)}...</p>
              </Link>
                <button type="button" className="flex text-center items-center  justify-center w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-base text-sm py-2.5 leading-5 mt-3 cursor-pointer" onClick={()=>add(x)}>Add To Cart &nbsp; <IoIosCart /></button>

            </div>
            </div>
            )
        })}
        </div>
        </div>
        </section>
        </div>
        </Layout>
    )
}

export default Phones
