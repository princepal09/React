import React, { useEffect, useState } from 'react'

const Challenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(" ");




    // Cleaner Funnctionn ===> 
        
    // useEffect( ()=>{

    //     const timer  = setInterval(  ()=>{
    //             setCount( (prev) => prev + 1 )
    //     },1000 )
    //     return () => clearInterval(timer);
    // },[])


    const handleIncrement = () =>{
        setCount(count + 1);
    }


    
    const changeName = (e) =>{
        const {value} = e.target
        setName(value)
    }

    useEffect( ()=>{
     document.title = `count:${count}`
    } ,[count])

    useEffect( ()=>{
        console.log(name);
    },[name] )

  return (
    <div>
        <h1>useEffect Challenge</h1>

        <div>
            <p>Count: <span>{count}</span> </p>
            <button onClick={handleIncrement}>Increment</button>

            <p>Name: <span>{name}</span> </p>
            <input  value={name} onChange={changeName} type="text" />
        </div>
      
    </div>
  )
}

export default Challenge
