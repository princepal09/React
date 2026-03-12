import React from 'react'

const UserDetails = () => {
  return (
    <div className='max-w-max w-11/12 p-10 mx-auto'>
        <div className='flex items-center w-full gap-20 text-2xl justify-between'>
            <h1>List of User Details</h1>
            <button className='bg-blue-500 cursor-pointer px-3 py-2 rounded-md'>Add new users</button>
        </div>
    </div>
  )
}

export default UserDetails
