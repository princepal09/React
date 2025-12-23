import React from 'react'

const App = () => {
   const user = {
    name:"prince",
    age:"20"
   }
   localStorage.setItem("user",JSON.stringify(user))
   const usera = JSON.parse(localStorage.getItem("user"))
   console.log(usera.name);

  return (
    <div>
      App
    </div>
  )
}

export default App
