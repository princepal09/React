import React from 'react'
import { useParams } from 'react-router-dom'

const Prince = () => {
    const params = useParams()
    console.log(params);



  return (
    <div>
      <h1 className='text-7xl -tracking-widest font-extrabold text-white underline absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2' >PrincePal</h1>
    </div>
  )
}
    
export default Prince
