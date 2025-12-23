import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)

    const changeTheme = () =>{
        setTheme(prev => prev == "lightt"? "darkk":"lightt")

    }


  return (
    <div>
         <button onClick={changeTheme}  className='bg-yellow-400 mt-5 px-2 py-3 font-extrabold text-6xl cursor-pointer'>Change Theme</button>

    </div>
  )
}

export default Button
