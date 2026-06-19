import React, { useState } from "react";

const Log = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phNo: "",
    file: null,
    password: "",
  });

  const handleChange = (e) =>{
     const {name, value, files, type} = e.target;

     setData((prev) => ({
        ...prev, 
        [name] : type === 'file'?files[0] : value
     }))
  }


  const submitHandler = (e) =>{
    console.log("hellop")
      e.preventDefault();

      const formData = new FormData()

      formData.append("name", data?.name)
      formData.append("email", data?.email)
      formData.append("phNo", data?.phNo)
      formData.append("file", data?.file)
      formData.append("password", data?.password)

      for(const [key, value] of formData.entries()){
        console.log(`${key} : ${value}`)
      }
      
  }





  return (
    <div className="text-white p-10">
      <form onSubmit={submitHandler} className="flex flex-col gap-y-3 ">
        <div  className="flex gap-x-3">
          <label>Enter your name</label>
          <input onChange={handleChange}
            className=" bg-white p-1 text-black rounded-md outline-none"
            type="text"
            name="name" value={data.name}
          />
        </div>
        <div className="flex gap-x-3">
          <label>Enter your email</label>
          <input onChange={handleChange}
            className=" bg-white p-1 text-black rounded-md outline-none"
            type="email" 
            name="email" value={data.email}
          />
        </div>
        <div className="flex gap-x-3">
          <label>Enter your phoneNo</label>
          <input onChange={handleChange}
            className=" bg-white p-1 text-black rounded-md outline-none"
            type="number"
            name="phNo" value={data.phNo}
          />
        </div>
        <div className="flex gap-x-3">
          <label>Enter your file</label>
          <input
            className=" bg-white p-1 text-black rounded-md outline-none"
            type="file"
            name="file"   onChange={handleChange}
          />
        </div>
        <div className="flex gap-x-3">
          <label>Enter your password</label>
          <input onChange={handleChange}
            className=" bg-white p-1 text-black rounded-md outline-none"
            type="password"
            name="password" value={data.password}
          />
        </div>

        <button className="bg-yellow-300 max-w-max px-4 py-2 rounded-md  ">Submit</button>
      </form>
    </div>
  );
};

export default Log;
