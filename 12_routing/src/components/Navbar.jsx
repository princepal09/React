import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>

        <a href="">Prince</a>

         <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
           

          </ul>

    </header>
  )
}

export default Navbar
