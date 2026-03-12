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
            state.splice(action.payload, 1)
          },
          deleteAllUser(state, action){

          }
     }

})

export const {createUser, removeUser, deleteAllUser} = userSlice.actions
export default userSlice.reducer