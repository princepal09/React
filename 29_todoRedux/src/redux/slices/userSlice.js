import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
     name : "user",
     initialState,

     reducers : {
          createUser(state,action){
             console.log(state);
          }
     }

})

export const {createUser} = userSlice.actions
export default userSlice.reducer