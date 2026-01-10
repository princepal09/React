import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  const {fetchApi} = useContext(AppContext);

  useEffect( () =>{

    
  },[]);
   
  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/blog/:blogId' element = {<BlogPage/>} />
      <Route path='/tags/:tag' element = {<TagPage/>} />
      <Route path='/categories/:category' element = {<CategoryPage/>} />
    </Routes>
  )
}

export default App
