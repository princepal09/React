import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import Button from './Button'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext)
    
    
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2    ' >
        <h3 className='text-white font-extrabold text-6xl'>Theme : {theme}  </h3>

         <Button/>

     


      
    </div>
  )
}

export default Navbar
