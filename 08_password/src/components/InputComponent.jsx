import React from 'react'

const InputComponent = ({inputValue,setInputValue}) => {

    function changeHandler(e){
         setInputValue(e.target.value)
    }
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
    </div>
  )
}

export default InputComponent
