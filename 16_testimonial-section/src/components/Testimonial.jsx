import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonial = ({reviews}) => {

    const [index, setIndex] = useState(0)


    const leftShiftHandler = () =>{
        if(index - 1 < 0){
            setIndex(reviews.length - 1)
        }else{
            setIndex(index - 1)
        }
    }
    const rightShiftHandler = () =>{
          if(index + 1 >= reviews.length){
            setIndex(0)
        }else{
            setIndex(index + 1) 

        }
    }
    const surpriseHandler = () =>{
        const n = reviews.length
          let randomIndex = Math.floor(Math.random() * n )
          setIndex(randomIndex )
    }
  return (
    <div className='w-[85vw] md:w-[700px]  rounded-md bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-300 hover:shadow-2xl '>
      <Card data = {reviews[index]}/>

      <div className="flex gap-8 text-violet-400 text-3xl font-bold jusitfy-center mt-6 ">
        <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500 ml-auto "><FiChevronLeft/></button>
        <button onClick={rightShiftHandler}  className="cursor-pointer hover:text-violet-500 mr-auto"><FiChevronRight/></button>
      </div>
         <div className=" mt-4 ">
      <button onClick={surpriseHandler} 
      
      className="rounded-md  bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer hover: px-7 py-2 text-white font-senmibold  ">Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonial
