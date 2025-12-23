import framePattern from '../assets/frame.png'
import SignupForm from './SignupForm'
import Loginform from './Loginform'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    
    <div className='flex justify-between text-white  max-w-[1160px] mt-3 w-11/12 p-7 mx-auto gap-x-12 gap-y-0'>

        <div className='w-11/12 max-w-[450px]' >
            <h1 className='text-[#c8bebe] font-extrabold tracking-wide text-4xl'>{title}</h1>
            <p className='flex flex-col leading-5 mt-5'>
                <span className='text-[#b1a3a3]'>{desc1}</span>
                <span className='text-blue-400 italic tracking-wide'>{desc2}</span>
            </p>

            { formtype === "signup" ? 
            (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>) : 
             (<Loginform setIsLoggedIn = {setIsLoggedIn}/>)}


             <div className='flex text-white  items-center gap-x-2 my-4'>
                <div className='h-px w-full bg-[#f0eaea]'></div>
                <p className='font-medium leading-5.5'>Or</p>
                <div className='h-px w-full bg-[#f0eaea]'></div> 
             </div>
             <button  className='flex font-medium justify-center  w-full cursor-pointer border rounded-lg items-center px-20 py-2  space-x-2'>
              <FcGoogle />
                <p className='text-[#b1a3a3] text-1xl '>Sign up with google</p>
             </button>

        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={framePattern} width={558} height={504}  loading='lazy' alt="Pattern" />
            <img src={image} width={558} height={504} className='absolute -top-4 right-4' loading='lazy' alt="Image" />
        </div>
      
    </div>
  )
}

export default Template
