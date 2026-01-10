import React from 'react'
import { useRef } from 'react'

const UseRef = () => {

    const username = useRef(null)
    const password = useRef(null )



  const submitH = (e) =>{
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);

  }
  
  return (
    <div>
      <form onSubmit={submitH}>
        <input type="text" ref={username} />
        <input type="password" ref = {password} />
        <button></button>
      </form>
    </div>
  )
}

export default UseRef
