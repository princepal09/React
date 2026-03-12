import { MdDeleteForever } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/slices/userSlice';

const Name = () => {
    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div className='mt-10 flex-col flex gap-7 justify-center'>
           {users.map((elem, idx) => <div key={idx} className='tracking-wider gap-2 text-1xl flex justify-between' >
            <p >{elem}</p>
            <button onClick={() => dispatch(removeUser(idx))} className='bg-white cursor-pointer p-1 rounded-full'>
            <MdDeleteForever fontSize={26} color='red'  />
             </button>
           </div> )}
        </div>
    )
}

export default Name
