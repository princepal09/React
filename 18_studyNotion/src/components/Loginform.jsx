import { AiOutlineEye } from "react-icons/ai";  
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Loginform = ({setIsLoggedIn}) => {

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()



    const [formData, setFormData] = useState({
        email : '',
        password : ''

    })


    const changeHandler = (e)=>{
         const {value,name} = e.target

         setFormData( (prev) =>(
            {
                ...prev,
                [name] : value 
            }
         ))

    }

    const submitHandler = (e) =>{
           e.preventDefault();
           setIsLoggedIn(true)
           toast.success("Logged In")
           navigate("/dashboard")
           console.log("Printingg Form data");
           console.log(formData);

    }
    
  return (
   <form className="flex flex-col justify-between w-full gap-y-4 mt-6" onSubmit={submitHandler} >

    <label className="w-full" >
        <p className="text-[0.875rem] mb-1 leading-5.5">Email Address <sup className="text-pink-200">*</sup></p>
        <input onChange={changeHandler} className="w-full bg-[#131111] outline-none border border-[#242424]  focus:border-blue-700 rounded-lg  px-3 py-2.5" type="email" placeholder='Enter your email' name='email' value={formData.email} required />
    </label>

    <label   className="w-full relative" >
        <p className="text-[0.875rem] mb-1 leading-5.5">Password <sup className="text-pink-200">*</sup></p>

        <input onChange={changeHandler} className="w-full bg-[#131111] outline-none border border-[#242424]  focus:border-blue-700 rounded-lg  px-3 py-2.5" type= {showPassword ? ("text") : ("password")} placeholder='Enter your password' name='password' value={formData.password} required />

    <span className="absolute cursor-pointer right-3 bottom-3" onClick={()=>setShowPassword((prev) => !prev)}> 
        {showPassword ? (<AiOutlineEyeInvisible fontSize={24}/>)  
        : (<AiOutlineEye fontSize={24}/>)}
    </span>
    </label>

    <Link to = '#'>
    <p className="text-sm  -mt-3 text-blue-400 max-w-max ml-auto">Forgot Password</p>
    </Link>

    <button className="rounded-lg text-center text-black cursor-pointer bg-yellow-500 font-medium py-2" >Sign In </button>


   </form>
  )
}

export default Loginform
