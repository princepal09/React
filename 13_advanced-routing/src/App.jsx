import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import NotFoundPage from './pages/NotFoundPage'
import Mern from './pages/Mern'
import Dsa from './pages/DSA'
import Ai from './pages/Ai'
import Prince from './pages/prince'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

      <Navbar/>
      <Navbar2/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/About/:id' element = {<Prince/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Courses' element={<Courses/>}>
          <Route path = 'Dsa' element = {<Dsa/>} />
          <Route path = 'Mern' element = {<Mern/>} />
          <Route path = 'Ai' element = {<Ai/>} />
        </Route>
        <Route path='*' element ={<NotFoundPage/>} />

      </Routes>
      
    </div>
  )
}

export default App
