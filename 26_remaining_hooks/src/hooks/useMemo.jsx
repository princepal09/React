import React from 'react'
import Counter from '../components/Counter'

const useMemo = () => {

    const [count, setCount] = useState(0)
  return (
    <div>
       <Counter/> 

       <button onClick={() => setCount(count + 1)}>RE - Render Component</button>

       <p>{count}</p>
 

    </div>
  )
}

export default useMemo
