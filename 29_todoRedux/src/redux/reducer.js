import { combineReducers} from '@reduxjs/toolkit'
import userSlice from '../redux/slices/userSlice'

export const rootReducer = combineReducers({
    user : userSlice
})