import React from 'react'
import Chance from 'chance'
import { createUser } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import Name from './Name';

const UserDetails = () => {
    const chance = Chance();

    const dispatch = useDispatch();

    const addUser = () => {
        dispatch(createUser(chance.name()));
    };


    return (
        <div className='max-w-max w-11/12 p-10 mx-auto'>
            <div className='flex items-center w-full gap-20 text-2xl justify-between'>
                <h1>List of User Details</h1>
                <button onClick={addUser} className='bg-blue-500 cursor-pointer px-3 py-2 rounded-md'>Add new users</button>
            </div>
            <Name />
        </div>
    )
}

export default UserDetails
