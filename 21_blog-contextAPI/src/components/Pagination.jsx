import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page,totalPages,handlePageChange} = useContext(AppContext);

  return (
    <div className='w-full fixed bottom-0 bg-white flex justify-center items-center border-2 border-gray-400  ' >
      <div className='flex justify-between items-center w-11/12 max-w-125 py-2'>
      <div className='flex gap-6'>
        { page > 1  && 
         ( <button className='border-2 rounded-md border-gray-300 text-sm  cursor-pointer py-2 px-2 ' onClick={() => 
          handlePageChange(page-1)} >
            Previous
          </button>)

        }

       { 
         page < totalPages && 
        (<button  className='border-2 rounded-md border-gray-300 text-sm py-2 cursor-pointer px-2 '  onClick={()=>{
          handlePageChange(page+1)
        }} >
            Next
        </button>)
        
        }

        </div>

        <p  className='font-bold text-sm '>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
