import React from 'react'
import InputComponent from './components/InputComponent'
import DisplayComponent from './components/DisplayComponent'
import { useState } from 'react'
import Toggle from './components/Toggle'

const App = () => {

      const [inputValue, setInputValue] = useState('')

  
  return (
    <>
       {/* <InputComponent inputValue = {inputValue} setInputValue = {setInputValue}/> 
       <DisplayComponent inputValue = {inputValue} />  */}
       <Toggle/>

    </>
  )
}

export default App
