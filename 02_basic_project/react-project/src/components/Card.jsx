import React, { useState } from "react";

const Card = ({ id, image, info, price, name, removeBtn }) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}.....`;

  const readMoreHandler = () => {
    setReadmore(!readmore);
  };

  return (
    <div
      className="bg-zinc-100
 flex flex-col p-2 mt-5 items-center  rounded-md shadow-lg  w-[400px] h-max"
    >
      <img src={image} alt="IMG" className="w-[380px] aspect-square  " />

      <div className="flex  items-start mt-1 p-2 flex-col ">
        <div className=" text-2xl font-extrabold">
          <h4>{price}</h4>
          <h4>{name}</h4>
        </div>

        <div className="justify">
          {description}

          <span className="cursor-grabbing text-sky-400 font-semibold" onClick={readMoreHandler}>
            {readmore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>

      <button
        className="bg-red-300 border cursor-pointer hover:bg-red-600 border-red-500 outline-none rounded  text-black font-bold font-mono px-15 mt-8 mb-2 py-2 "
        onClick={() => {
          removeBtn(id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Card;
