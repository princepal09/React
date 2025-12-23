import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";  
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate()

  const [formData, setDormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [accountType, setAccountType] = useState("student")

  const  [showPassword, setShowPassword] = useState(false);
  const  [confirmPassword, setConfirmPassword] = useState(false);

  const formHandler = (e) => {
    const { name, value } = e.target;

    setDormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const submitHandler = (e) =>{
     e.preventDefault()
     if(formData.password !== formData.confirmpassword){
      toast.error("Passwords do not match")
      return ;
     }

     setIsLoggedIn(true)
     toast.success("Account Created") 
     const data  = {
      ...formData
     }
     const finalData = {
      ...data , accountType
     }
     console.log(finalData);
     navigate('/dashboard')





  } 

  return (
    <div  >
      {/* Student - Instructor Tab  */}
      <div className="flex py-2 px-3 gap-x-1 my-3 rounded-full max-w-max bg-[#1a1919] ">
        <button className={`${accountType === "student"  ? " bg-[#544f4f] rounded-full px-3 py-2 text-white   " : "bg-transparent text-[#b2a0a0] py-1   px-5 rounded-full transition-all duration-200"}`}
         onClick={()=>{
          setAccountType("student")
        }} >Student</button>
        <button className={`${accountType === "instructor"  ? " bg-[#544f4f] rounded-full px-3 py-2 text-white   " : "bg-transparent text-[#b2a0a0] py-1   px-5 rounded-full transition-all duration-200"}`} onClick={()=>{
          setAccountType("instructor")
        }} >Instructor</button>
      </div>

      <form className="flex flex-col gap-y-2" onSubmit={submitHandler}>
        
        {/* Contains only first name and last name  */}
        <div className="flex gap-3">
          <label  className="w-full">
            <p className="text-[0.875rem] mb-1 leading-5.5">
              First name <sup className="text-pink-200">*</sup>
            </p>
          <input className="w-full bg-[#131111] outline-none border border-[#242424]  focus:border-blue-700 rounded-lg  px-3 py-2.5"
            type="text"
            name="firstname"
            onChange={formHandler}
            value={formData.firstname}
            placeholder="Enter your first name"
            required
          />
          </label>

          <label  className="w-full">
            <p className="text-[0.875rem] mb-1 leading-5.5">
              Last name <sup className="text-pink-200" >*</sup>
            </p>
          <input className="w-full bg-[#131111] outline-none border border-[#242424]  focus:border-blue-700 rounded-lg  px-3 py-2.5"
            type="text"
            name="lastname"
            onChange={formHandler}
            value={formData.lastname}
            placeholder="Enter your Last name"
            required
          />
          </label>
        </div>



               {/* Email field  */}
        <label  className="w-full relative"> 
          <p className="text-[0.875rem] mb-1 leading-5.5">
            Email <sup className="text-pink-200">*</sup>
          </p>
        <input  
        className="w-full bg-[#131111] outline-none border border-[#242424]  focus:border-blue-700 rounded-lg  px-3 py-2.5" 
          type="email"
          name="email"
          onChange={formHandler}
          value={formData.email}
          placeholder="Enter your Email"
          required
        /> 
        </label>
 



        {/* confirm Pass and pass  */}
        <div className="flex gap-3">

             <label  className="w-full relative">
          <p className="text-[0.875rem] mb-1 leading-5.5">
           Create Password <sup  className="text-pink-200">*</sup>
          </p>
        <input className="w-full mt-1 bg-[#131111] outline-none border border-[#242424]  focus:border-blue-700 rounded-lg  px-3 py-2.5" 
          type={showPassword ? ("text") : ("password")}
          name="password"
          onChange={formHandler}
          value={formData.password}
          placeholder="Password"
          required
        /> 
            <span className="absolute cursor-pointer right-3  bottom-3"  onClick={()=>setShowPassword((prev) => !prev)}> 
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24}/>)  
                : (<AiOutlineEye fontSize={24}/>)}
            </span>
        </label>

           <label className="w-full relative">
          <p>
            Confirm password <sup className="text-pink-200">*</sup>
          </p>
        <input
        className="w-full mt-1 bg-[#131111] outline-none border border-[#242424]  focus:border-blue-700 rounded-lg  px-3 py-2.5" 
          type={confirmPassword?("text"):("password")}
          name="confirmpassword"
          onChange={formHandler}
          value={formData.confirmpassword}
          placeholder="Confirm Password"
          required
        /> 
         <span className="absolute cursor-pointer right-3  bottom-3" onClick={()=>setConfirmPassword((prev) => !prev)}> 
                {confirmPassword ? (<AiOutlineEyeInvisible fontSize={24}/>)  
                : (<AiOutlineEye fontSize={24}/>)}
            </span>
        </label>
     
        </div>


        <button className="rounded-lg mt-2 text-center text-black cursor-pointer bg-yellow-500 font-medium py-2 w-full">
          Create Account 
        </button>
       

      </form>
    </div>
  );
};

export default SignupForm;
confirm