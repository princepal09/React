import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  // const [count, setCount] = useState(0)
  // // let val = useRef(0);
  // const btnRef = useRef();


  // const btnHandler = () => {
  //   // val.current += 1;
  //   // console.log("The val of val is ", val.current)
  //   setCount(count + 1);
  // }


  // useEffect(() => {

  //   console.log("mein firse render hogyaaa")
  // })

  // const changeColor = () => {
  //   btnRef.current.style.backgroundColor = "red"

  // }
  // const inputRef = useRef(null)

  const [time, setTime] = useState(0)
  const timeRef = useRef(null)
  
  function startTimer() {
    stopTimer()
     timeRef.current = setInterval(() =>{
       setTime( (time) => time + 1 )
    }, 1000)

  }
  function stopTimer() {
    clearInterval(timeRef.current)
    timeRef.current = null

  }
  function resetTimer() {
    stopTimer()
    setTime(0)

  }
  return (
    <div>
      <h1>Stopwatch:{time} seconds</h1>
      <button onClick={startTimer}
      >Start</button>
      <br /> <br />

      <button onClick={stopTimer}
      >Stop</button>
      <br /> <br />

      <button onClick={resetTimer}
      >Reset</button>
    </div>

  )
}





// <div className='container'>

//   <input ref={inputRef} />
//   <button onClick={() => {
//     inputRef.current.focus()
//   }}>Click ME</button>

{/* <div>
        <button ref={btnRef}
          onClick={btnHandler}
        >Increment</button>
        <button onClick={changeColor}
        >Change Color of 1st button</button>
        <p>Count : {count}</p>

      </div> */}

// </div>




export default UseRef
