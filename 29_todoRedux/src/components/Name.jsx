import { MdDeleteForever } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Name = () => {
    const users = useSelector((state) => state.user);

    return (
        <div className='mt-10 flex-col flex gap-7 justify-center'>
           {users.map((elem, idx) => <div key={idx} className='tracking-wider gap-2 text-1xl flex justify-between' >
            <p >{elem}</p>
            <button className='bg-white cursor-pointer p-1 rounded-full'>
            <MdDeleteForever fontSize={26} color='red'  />
             </button>
           </div> )}
        </div>
    )
}

export default Name
