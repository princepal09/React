import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'

const App = () => {
  const {fetchApi} = useContext(AppContext);

  useEffect( () =>{
    fetchApi();
  },[]);
   
  return (
    <div className='w-full h-full flex flex-col gap-y-6 justify-center items-center '>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
