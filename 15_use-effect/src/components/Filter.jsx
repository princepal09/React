import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  const filterHandle = (title) => {
    setCategory(title);
  };

  return (
    <div className="w-11/12 font-medium text-[19px] mb-5  flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-7 justify-center">
      {filterData.map((elem) => {
        return (
          <button
            onClick={() => filterHandle(elem.title)}
            key={elem.id}
            className={`
    bg-black text-white px-3 py-2 rounded-md inline-block cursor-pointer 
    transition-all duration-200
    border-2     
    ${
      category === elem.title
        ? "border-red-950  opacity-100"
        : "opacity-80 hover:opacity-100"
    }
  `}
          >
            {elem.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
