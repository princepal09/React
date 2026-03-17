import { combineReducers} from '@reduxjs/toolkit'
import { dataSlice } from './slices/dataSlice'

export const rootReducer = combineReducers({
    data : dataSlice

})