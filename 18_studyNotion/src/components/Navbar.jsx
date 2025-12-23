import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    


  return (
    <div className="flex p-5 text-white items-center justify-between w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link>
        <img src={logo} loading="lazy" alt="Logo" width={260} height={80} />
      </Link>

      <nav>
        <ul className="flex  text-[20px] gap-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Login - SignUP - Logout - Dashboard  */}
      <div className="flex  items-center gap-x-4  ">
        { !isLoggedIn &&   
          <Link to="/login">
            <button  className=" py-2 borde border text-[#e6dede] rounded-lg border-[#5d5a5a] cursor-pointer bg-[#201f1f]  px-3">Login</button>
          </Link>
        }
        { !isLoggedIn && 
          <Link to="/signup">
            <button  className=" py-2 borde border text-[#e6dede]  rounded-lg border-[#5d5a5a] cursor-pointer bg-[#201f1f]  px-3">Sign Up</button>
          </Link>
        }
        { isLoggedIn && 
          <Link to="/">
            <button  className=" py-2 borde border  text-[#e6dede]  rounded-lg border-[#5d5a5a] cursor-pointer bg-[#201f1f]  px-3" onClick={()=>{
                setIsLoggedIn(false)
                toast.success("Logged Out")
            }}>Log Out</button>
          </Link>
        }
        { isLoggedIn && 
          <Link to="/dashboard">
            <button  className=" py-2 borde border text-[#e6dede]  rounded-lg border-[#5d5a5a] cursor-pointer bg-[#201f1f]  px-3">Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
