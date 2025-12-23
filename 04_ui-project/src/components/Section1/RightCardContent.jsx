
const RightCardContent = (props) => {
  return (
    <div className="absolute   p-8 flex flex-col justify-between  top-0 left-0 h-full w-full =">
      <h2 className="bg-white rounded-full h-12 w-12  flex justify-center items-center text-2xl font-bold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg leading-relaxed  text-white mb-14 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          magni obcaecati debitis recusandae suscipit. Id!
        </p>

        <div className="flex  justify-between">
          <button style = {{backgroundColor:props.color}} className=" cursor-pointer text-white font-medium px-8 py-3 rounded-full  text-lg ">
            {props.tag}
          </button>
          <button style = {{backgroundColor:props.color}} className="cursor-pointer  text-white font-medium px-4 py-2 rounded-full  text-lg">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
