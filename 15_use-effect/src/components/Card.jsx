import React from "react";
import { FaComputerMouse } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ course , likedCourses , setLikedCourses }) => {
   
  const clickHandler = () =>{
    const isLiked = likedCourses.includes(course.id)
    if(isLiked){
     setLikedCourses((prev) => prev.filter((elem) => elem !== course.id) )
     toast.warning("Like Removed")
      
    }else{
      setLikedCourses((prev) => [...prev , course.id])
      console.log();
      toast.success("Succesfully Liked") 
    } 
  }
 
  // console.log(course);
  return (
    <div className="w-[300px] rounded bg-gray-100 overflow-hidden ">
      <div className="relative ">
        <img src={course.image.url} loading="lazy" alt={course.image.alt} />

        <div>
          <button onClick={clickHandler}  className="bg-white rounded-full right-2 -bottom-5 p-3 absolute">
          {  likedCourses.includes(course.id) ?  <FcLike fontSize="1.75rem" /> :  <FcLikePlaceholder fontSize="1.75rem" />}

          </button>
        </div>
      </div>

      <div className=" flex flex-col gap-2 p-2">
        <p className="font-semibold font-mono text-2xl">{course.title}</p>
        <p className="leading-6">{course.description.length>100? (course.description.substring(0,200)+ "..."):(course.description)}</p>
      </div>
    </div>
  );
};

export default Card;
