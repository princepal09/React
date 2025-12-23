import { useState } from "react";

function App(){
  const [color , setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>

      <div className="fixed flex-wrap  bg-white bottom-12 flex justify-center gap-10 inset-x-0 px-2 py-7">
        <button onClick={() => setColor("blue")} className="bg-blue-700 text-white px-7 py-2 rounded  ">Blue</button>
        <button onClick={ () => setColor("red")} className="bg-red-700 text-white px-7 py-2 rounded  ">Red</button>
        <button onClick={ () => setColor("yellow")} className="bg-yellow-700 text-white px-7 py-2 rounded  ">Yellow</button>
      
      </div>


    </div>


  )
}

export default App ; 