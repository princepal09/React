import React, { useState } from "react";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false)

    const toggleHandle = () =>{
        setIsOn(!isOn);
    }
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div onClick={toggleHandle}  className={`w-[400px] relative flex items-center justify-start rounded-full  h-[200px] ${isOn ? "bg-green-500" : "bg-slate-400"} ` }>
        <div  className={`absolute cursor-pointer  flex items-center justify-center w-[180px] h-[150px] rounded-full    left-4 top-5 ${isOn && "border-4"} text-white transition-all duration-500 ${isOn ? "bg-green-500 translate-x-full  ": "bg-slate-300" } `} >
          <span  className="font-mono cursor-pointer uppercase tracking-widest font-bold text-5xl">
            {isOn ? "On" : "Off"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
