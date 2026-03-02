import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByVal } from "./redux/slices/counterSlice"
import { useState } from "react"

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value )
  const [input, setInput] = useState(2)


  return (
    <div className='bg-black min-h-screen w-full text-white '>
       <h1 className='text-8xl font-mono pt-20 text-center'>{count}</h1>
       <div className='flex gap-4 pt-20'> 
       <button onClick={() =>{
        dispatch(increment())
       }}  className='text-2xl px-3 py-2 bg-yellow-300 rounded-2xl '>Increment</button>
       <button  onClick={() =>{
        dispatch(decrement())
       }}
        className='text-2xl px-3 py-2 bg-yellow-300 rounded-2xl '>Decrement</button>

        <input onChange={(e) =>{
          setInput(e.target.value)
        }}   value={input}
         className="bg-white  text-black" type="number"  />
 
       <button  onClick={() =>{
        dispatch(incrementByVal(Number(input)))
       }}
        className='text-2xl px-3 py-2 bg-yellow-300 rounded-2xl '>Increase By Val</button>
       </div>
       
    </div>
  )
}

export default App
