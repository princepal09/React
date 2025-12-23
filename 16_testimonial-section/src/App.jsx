import React from 'react'
import Testimonial from './components/Testimonial'
import reviews from './data'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col w-screen bg-gray-200   justify-center items-center'>
      <div className='text-center' >
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-violet-400 h-1 mx-auto mt-1 w-1/5'></div>
        <Testimonial reviews = {reviews}/>
      </div>
      
    </div>
  )
}

export default App
