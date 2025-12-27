import React, { createContext,useEffect,useState} from 'react'



export const ThemeContext = createContext();


const  ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState( () => localStorage.getItem("theme") || 'dark' );


  const handleToggleButton = () =>{
    return setTheme((prev)=> (prev === 'dark' ? 'light' :  'dark'));
  }


  useEffect( ()=>{
     localStorage.setItem("theme",theme);
  } , [theme]);

  const value = {
    theme,
    handleToggleButton
  }


  return (
    <ThemeContext.Provider value={value} >

      {children}

    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
