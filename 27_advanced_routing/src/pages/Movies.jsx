import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const Movies = () => {
  return (
    <div>

      {/* <h1><Link to='/' >Go TO Home</Link></h1> */}


      <h1>
        <Link to="hollywood">Hollywood</Link>
      </h1>

      <h1>
        <Link to="bollywood">Bollywood</Link>
      </h1>

      <Outlet />


    </div>
  )
}

export default Movies

