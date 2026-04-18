import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F101F] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">M.Khan Store</h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Premium phones, stylish cases, and smart watches designed
              to upgrade your tech lifestyle.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
              PAGES
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-indigo-400 cursor-pointer transition"><Link to="/">Home</Link></li>
              <li className="hover:text-indigo-400 cursor-pointer transition"><Link to="/shop">Shop</Link></li>
              <li className="hover:text-indigo-400 cursor-pointer transition">About Us</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
              CATEGORIES
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-indigo-400 cursor-pointer transition">Phones</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Cases</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Watches</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-indigo-400 cursor-pointer transition">FAQs</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Shipping Policy</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Return Policy</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026  All rights reserved by M.Khan</p>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <span className="hover:text-indigo-400 cursor-pointer transition">Facebook</span>
            <span className="hover:text-indigo-400 cursor-pointer transition">Twitter</span>
            <span className="hover:text-indigo-400 cursor-pointer transition">Instagram</span>
            <span className="hover:text-indigo-400 cursor-pointer transition">LinkedIn</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
