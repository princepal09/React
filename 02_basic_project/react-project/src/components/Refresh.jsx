import React from 'react'

const Refresh = ({refreshTour}) => {
  return (
    <div className='flex justify-center flex-col items-center h-screen'>
        <h2 className='font-extrabold text-5xl fot-mono '>No Tours Left</h2>
        <button   className='bg-blue-600 px-19 py-2 mt-5 text-white font-mono text-3xl cursor-pointer hover:bg-blue-700' onClick={refreshTour}>Refresh</button>
      
    </div>
  )
}

export default Refresh
