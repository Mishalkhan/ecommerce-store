import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GrCart } from "react-icons/gr";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const data = useSelector((state)=> state.cartReducer.carts)
  return (
    <header className="bg-[#0F101F] text-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl font-semibold">M.Khan Store</span>
        </Link>

        {/* Nav Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
          <NavLink to="/" className="mr-6 hover:text-indigo-400 transition">Home</NavLink>
          <NavLink to="/shop" className="mr-6 hover:text-indigo-400 transition">Shop</NavLink>
          <NavLink to="/phones" className="mr-6 hover:text-indigo-400 transition">Phones</NavLink>
          <NavLink to="/cases" className="mr-6 hover:text-indigo-400 transition">Cases</NavLink>
          <NavLink to="/watches" className="mr-6 hover:text-indigo-400 transition">Watches</NavLink>
        </nav>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative inline-flex items-center text-xl"
        >
          <GrCart className="hover:text-indigo-400 transition" />

          <span className="absolute -top-1 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
           {data.length}
          </span>
        </Link>

      </div>
    </header>
  )
}

export default Navbar
