import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../pages/Footer'

const Layout = () => {
  return (
    <>
    <div className='min-h-screen flex-flex-col w-full'> 
      <Navbar/>

      <main className='flex-1'>
      <Outlet/>
      </main>

      <Footer/>
      </div>
    </>
  )
}

export default Layout
