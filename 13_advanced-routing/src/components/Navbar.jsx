import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white  px-6 py-8 flex justify-around items-center text-black  '>
        <Link className='text-4xl font-bold leading-2 -tracking-widest'>PrincePal</Link>
        <ul className='flex gap-10 text-3xl font-mono items-center'>
            <li><Link to={'/'}>Home</Link>
            </li>
            <li 
            >< Link to={'/about'} >About</Link>
            </li>
            <li><Link to={'/contact'}>Contact</Link>
            </li>
            <li ><Link to={'/courses'} >Courses</Link>
            </li>

          
        </ul>

      
    </div>
  )
}

export default Navbar
