import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // const getData = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json();
  //   console.log(data);

  // }
  const [data, setData] = useState([])

  const getData = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
   setData(response.data)
   console.log(response.data);
    }
  
  return (
    <div>
    <button onClick={getData}> btn
        </button>
       
      <div>
       {data.map( (elem,idx) =>{
        return <h3>Hello {elem.title}  {idx}</h3>
       } )}
        
      </div>
      
    </div>
  )
}

export default App
