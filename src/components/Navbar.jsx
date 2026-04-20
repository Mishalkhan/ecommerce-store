import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GrCart } from "react-icons/gr";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const data = useSelector((state)=> state.cartReducer.carts)
  const [menuOpen, setMenuOpen] = useState(false)   // ADD THIS

  return (
    <header className="bg-[#0F101F] text-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap p-5 flex-row items-center justify-between">

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
        
        {/* Logo */}
        <Link 
          to="/" 
          className="flex title-font font-medium items-center text-white "
        >
          <span className="ml-3 text-xl font-semibold">M.Khan Store</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-lg justify-center">
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
      {/* Mobile Dropdown */}
{menuOpen && (
  <div className="md:hidden bg-[#0F101F] px-5 pb-5">
    <nav className="flex flex-col items-center space-y-4 text-lg">
      <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
      <NavLink onClick={() => setMenuOpen(false)} to="/shop">Shop</NavLink>
      <NavLink onClick={() => setMenuOpen(false)} to="/phones">Phones</NavLink>
      <NavLink onClick={() => setMenuOpen(false)} to="/cases">Cases</NavLink>
      <NavLink onClick={() => setMenuOpen(false)} to="/watches">Watches</NavLink>
    </nav>
  </div>
)}
    </header>
  )
}

export default Navbar
