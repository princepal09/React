import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    firstname : '',
    lastname : '',
    email : '',
    country : '',
    address : '',
    city : '',
    zip : '',
    state : '',
    isComment : false ,
    isCandidate : false ,
    isOffer : false ,
    notifications : ''

  })
  
  // console.log(formData);
  const changeHandler = (e) =>{

    const {name,type, checked, value} = e.target 
     
    setFormData( prev => ({
      ...prev,
      [name] : type === 'checkbox' ? checked : value 
    }) )
    

  }

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(formData);
    setFormData({
       firstname : '',
    lastname : '',
    email : '',
    country : '',
    address : '',
    city : '',
    zip : '',
    state : '',
    isComment : false ,
    isCandidate : false ,
    isOffer : false ,
    notifications : ''

    })
  }


  
  return (
    <div className='min-h-screen flex  justify-center p-10  text-black '>
      <form onSubmit={submitHandler} className='mx-auto  border-gray-100 border-2 rounded-md p-6 w-[770px] ' >

          {/* First Name  */}

        <div>
          <label className='block font-semibold tracking-wider' >First Name</label>
          <input className=' border-b-blue-400 border-t-yellow-300 w-full px-2 mt-2 border-x-gray-300 py-1 rounded-md outline-none border' placeholder ='Prince' onChange={changeHandler} name='firstname' value={formData.firstname} type="text" />

        </div>

         {/* Last Name  */}
        <div>
          <label className='block font-semibold tracking-wider' >Last Name</label>
          <input className='  border-b-blue-400 border-t-yellow-300 w-full border-x-gray-300  px-2 mt-2 py-1 rounded-md border outline-none' placeholder ='Pal' onChange={changeHandler} name='lastname' value={formData.lastname} type="text" />

        </div>
           {/* Email  */}
        <div>
          <label className='block font-semibold tracking-wider' >Email Address</label>
          <input className=' w-full border-b-blue-400 border-t-yellow-300   border-x-gray-300  px-2 mt-2 py-1 rounded-md border outline-none' placeholder ='exa@4.com' onChange={changeHandler} name='email' value={formData.email} type="email" />

        </div>
          
           {/* Country  */}
        <div>
          <label className='block font-semibold tracking-wider' >Country</label>
          <select  className='w-full border-b-blue-400 border-t-yellow-300   border-x-gray-300   px-2 mt-2 py-1 rounded-md border outline-none ' onChange={changeHandler} name='country'  value = {formData.country} >
            <option value=''></option>
            <option value='India'>India</option>
            <option value="Autralia">Autralia</option>
            <option value="Nepal">Nepal</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bangladesh">Bangladesh</option>
          </select>
        

        </div>
         
          {/* Address  */}
         <div>
          <label className='block font-semibold tracking-wider' >Street Address</label>
          <input className=' w-full px-2 mt-2 py-1 rounded-md border outline-none' placeholder ='1234 Main ST' onChange={changeHandler} name='address' value={formData.address} type="text" />

        </div>

            {/* City  */}
         <div>
          <label className='block font-semibold tracking-wider' >City</label>
          <input className=' w-full px-2 mt-2 py-1 rounded-md border outline-none' placeholder ='Pithoragarh' onChange={changeHandler} name='city' value={formData.city} type="text" />

        </div>

          {/* State  */}
         <div>
          <label className='block font-semibold tracking-wider' >State/Province</label>
          <input className=' w-full px-2 mt-2 py-1 rounded-md border outline-none' placeholder ='Uttarakhand' onChange={changeHandler} name='state' value={formData.state} type="text" />

        </div>

           {/* ZIP  */}
         <div>
          <label className='block font-semibold tracking-wider' >ZIP / Postal Code</label>
          <input className=' w-full px-2 mt-2 py-1 rounded-md border outline-none' placeholder ='262501' onChange={changeHandler} name='zip' value={formData.zip} type="text" />

        </div>

        <fieldset className='mt-3' >
          <legend className='font-semibold tracking-wider'>By Email</legend>


          <div className='mt-4'>
            <input id='comments' name='isComment' checked  = {formData.isComment} onChange={changeHandler} type="checkbox" />
            <label className='font-semibold p-4 tracking-wider'
             htmlFor="comments">Comments</label>
            <p className='pl-7 text-gray-700'>Get Notifid when someone posts a comment on a posting</p>
          </div>


          <div className='mt-4'>
            <input id='isCandidate' name='isCandidate' checked  = {formData.isCandidate} onChange={changeHandler} type="checkbox" />
            <label className='font-semibold p-4 tracking-wider'
             htmlFor="isCandidate">Candidates</label>
            <p className='pl-7 text-gray-700'>Get Notifid when someone posts a comment on a posting</p>
          </div>


          <div className='mt-4'>
            <input id='isOffer' name='isOffer' checked  = {formData.isOffer} onChange={changeHandler} type="checkbox" />
            <label className='font-semibold p-4 tracking-wider'
             htmlFor="isOffer">Offers</label>
            <p className='pl-7 text-gray-700'>Get Notifid when someone posts a comment on a posting</p>
          </div>

        </fieldset>

        <fieldset className='mt-3'>
          <legend  className='font-semibold tracking-wider'>Push Notifications</legend>
          <p className='text-gray-700'>Their are delivered via by your SMS Phone</p>

          <div className='flex flex-col gap-2'>
            <div className='flex mt-3 gap-2'>
            <input type="radio" name="notifications"  onChange={changeHandler} value="everything"checked = {formData.notifications === 'everything'}  id='everything' />
            <label  className='font-normal' htmlFor="everything">Everything</label>
          </div>
          <div className='flex gap-2'>
            <input type="radio" name="notifications"  onChange={changeHandler} value="sameasemail"checked = {formData.notifications === 'sameasemail'} id='sameasemail' />
            <label className='font-normal' htmlFor="sameasemail">Same as Email</label>
          </div>
          <div className='flex gap-2'>
            <input type="radio" name="notifications" onChange={changeHandler} value="nopush" checked = {formData.notifications === 'nopush'}  id='nopush' />
            <label className='font-normal' htmlFor="nopush">No Push Notifications</label>
          </div>
          </div>

        </fieldset>

        <button className='bg-blue-500 px-7  py-2 mt-5 rounded-md text-1xl font-semibold text-white'>Save</button>

      

      </form>
      
    </div>
  )
}

export default App
