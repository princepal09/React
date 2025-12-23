import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
const navigate = useNavigate()

  return (
  <div className='bg-white  px-6 py-8 flex gap-10 text-black  ' >
    <button onClick={ () =>{
      navigate('/')
    } }
      className='bg-yellow-400 px-5 py-3 '>Return to Home Page</button>
    <button  onClick={ () =>{
      navigate(-1)
    } } className='bg-yellow-400 px-5 py-3 '>Prev</button>
    <button 
     onClick={ () =>{
      navigate(+1)
    } } className='bg-yellow-400 px-5 py-3 '>Next</button>
  </div>
  )
}

export default Navbar2
