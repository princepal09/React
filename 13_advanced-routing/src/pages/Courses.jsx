import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
             <div className='text-7xl flex justify-center gap-10 mt-5 -tracking-widest font-extrabold text-white underline  '>
              <Link to={'/courses/Dsa'} >DSA</Link>
              <Link to={'/courses/Mern'}>Mern</Link>
              <Link to={'/courses/Ai'}>Ai</Link>
             </div>

             <Outlet/> 

    </div>
  )
}

export default Courses
