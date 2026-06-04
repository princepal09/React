import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          MyLogo
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8"> 
          <li>
            <NavLink to={'/'}  className  = {({isActive}) => `hover:text-blue-400 transition ${isActive && 'text-blue-400'}` }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className  = {({isActive}) => `hover:text-blue-400 transition ${isActive && 'text-blue-400'}` } >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={'/services'} className  = {({isActive}) => `hover:text-blue-400 transition ${isActive && 'text-blue-400'}` }>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to={'/contact/100'}className  = {({isActive}) => `hover:text-blue-400 transition ${isActive && 'text-blue-400'}` }>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;