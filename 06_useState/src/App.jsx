import { useState } from "react"
import "./App.css"
const App = () => {

   const [user, setUser] = useState({name:"Prince", age:20});
   const [array, setARray] = useState([10,20,30]);

  //  const increaseVal = ()=>{
  //   if(counter >= 20) return ;
  //   seCounter(counter + 1)
    
  //  }
  //  const decreaseVal = ()=>{
  //   if(counter<=0) return;
  //   seCounter(counter - 1)
  // }

  const btnClicked = () =>{
    const newUser = {...user };
    newUser.name = "Santosh";
    console.log(newUser);
   setUser(newUser)
   // isi ko dusra tareeka
   setUser(prev => ({...prev,age:50}))

  //  setUser((prev+1))
  //  setUser((prev+1))           ? BAtch updates
  //  setUser((prev+1))


   
   const newArray = [...array];
   newArray.push(100);
   setARray(newArray)


  }

  return (
    <div className='container'> 
    <h3>The Value is : {user.name} </h3>
    <h3>The age is : {user.age} </h3>
    <h3>The age is : {array} </h3>
    <div>
    <button onClick={btnClicked} className="increase">Increase</button>
    {/* <button onClick={decreaseVal}  className="increase">Decrease</button> */}
    </div>
    </div>
  )
}

export default App
