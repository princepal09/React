import React from 'react'
import { useState } from 'react'

const InputComponent = ({setInputValue,inputValue}) => {
  return (
    <div>
      <input type="text" onChange={(e)=>{
        setInputValue(e.target.value)
      }} value={inputValue} />
    </div>
  )
}

export default InputComponent
