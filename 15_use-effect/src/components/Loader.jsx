import React from 'react'
import "../Loader.css"

const Loader = () => {
  return (
    <div className='flex justify-center min-h-screen gap-3 flex-col  items-center'>
        <div className='spinner'></div>
        <p  className='font-mono font-extrabold text-3xl'>Loading....</p>
      
    </div>
  )
}

export default Loader
