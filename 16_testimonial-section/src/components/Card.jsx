import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";



const Card = ({ data }) => {
  
  return (
    <div className="flex mt-4 flex-col md:relative">
      <div className="absolute -top-28 z-10 mx-auto">
        <img
          className="aspect-square   rounded-full w-[140px] h-[140px] z-25"
          src={data.image}
          loading="lazy"
        />

        <div className="absolute aspect-square rounded-full w-[140px] h-[140px] -top-1 -right-3  -z-20 bg-violet-400  "></div>
      </div>

      <div className="text-center mt-7">
        <p className="tracking-wider font-bold text-2xl capitalize">{data.name}</p>
      </div>

      <div className="text-center mt-1 ">
        <p className="text-sm text-violet-300 uppercase ">{data.job}</p>
      </div>

      <div className="text-center text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      <div className="text-center mx-auto mt-5 text-slate-500 ">{data.text.length > 200 ? data.text.slice(0,150) : data.text}....</div>

      <div className="text-center text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>

      
    </div>
  );
};

export default Card;
