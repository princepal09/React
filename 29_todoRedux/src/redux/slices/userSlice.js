import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
     name : "user",
     initialState,

     reducers : {
          createUser(state,action){
             state.push(action.payload)
          },
          
          removeUser(state, action){

          },
          deleteAllUser(state, action){

          }
     }

})

export const {createUser, getUser, deleteAllUser} = userSlice.actions
export default userSlice.reducer