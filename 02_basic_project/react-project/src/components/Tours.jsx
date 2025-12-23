import React from 'react'
import Card from './Card'
const Tours = ({data , removeBtn}) => {
   
  return (
   <div className=' min-h-screen  w-full p-10 '>
   <div> 
  <h2 className='text-7xl border-8 border-dotted border-blue-700 font-mono font-extrabold rounded-xl px-19 py-3  mx-auto text-center w-fit  '>Plan With Love</h2>
  </div>

  <div className='mt-5 p-3 w-3/4 gap-4
   mx-auto flex flex-wrap justify-center  '> 
    {data.map((elem) => (
      <Card removeBtn = {removeBtn} key={elem.id} {...elem} />
    ))} 
  </div>
</div>

  )
}

export default Tours
