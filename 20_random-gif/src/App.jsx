import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='w-full min-h-screen relative flex flex-col overflow-hidden background'>

      <h1 className=' bg-white w-11/12 items-center text-center mt-10 mx-auto font-bold text-3xl py-3 px-4  rounded-lg'  >RANDOM GIFS</h1>
      <div className='flex w-full items-center gap-y-10 mt-7.5  flex-col'>
        <Random/>
        <Tag/>
      </div>

      
    </div>
  )
}

export default App
