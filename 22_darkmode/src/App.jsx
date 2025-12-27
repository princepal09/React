import  { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const App = () => {

  const{theme,handleToggleButton} = useContext(ThemeContext);
  


  return (
    <div className={`min-h-screen flex flex-col gap-13 items-center justify-start p-20 ${theme === 'dark' ?'bg-black' : 'bg-white' } `}>
      <h1 className='bg-yellow-500 px-3 py-4 rounded-md font-mono text-2xl'>Dark Light Mode Website</h1>
      <p  className = {`font-bold ${theme ==='dark' ? 'text-white':'text-black'}`} >Hello!! Everyone</p>
      <button onClick={handleToggleButton} className={`shadow-md ${theme === 'dark'? 'bg-white text-black' : 'bg-black text-white'} rounded-lg px-5 py-6 font-mono  `}>Switch to {theme === 'dark' ? 'light' : 'dark' } mode </button>
    </div>
  )
}

export default App
