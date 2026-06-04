import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="font-semibold">YourBrand</h2>

        <div className="flex gap-4 text-sm text-gray-400">
          <Link className="hover:text-white">Home</Link>
          <Link  className="hover:text-white">About</Link>
          <Link  className="hover:text-white">Contact</Link>
        </div>

        <p className="text-sm text-gray-400 mt-2 md:mt-0">
          © {new Date().getFullYear()} YourBrand
        </p>
      </div>
    </footer>
  );
};

export default Footer;