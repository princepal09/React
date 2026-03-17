import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/slices/dataSlice';

const Data = () => {

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    useEffect(() => {
        console.log("Updated users:", users);
    }, [users]);




    return (
        <div className='grid grid-cols-4 gap-10 p-10'>

              {loading && <h3>Loading...</h3>}
              {error && <h3>{error}</h3>}
            {users.map((elem) => <p key={elem.id}>{elem.name}</p>)}

        </div>
    )
}

export default Data
