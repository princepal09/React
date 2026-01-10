import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-10">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

