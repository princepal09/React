import React from "react";

const App = () => {
  function inputChanging(val){
    console.log(val);
    
  }
  return (
    <input  onChange={function(elem){
      inputChanging(elem.target.value)


    }} type="text" placeholder="Enter" className="bg-gray-300 m-5 px-3 py-5 " />
  );
};

export default App;
