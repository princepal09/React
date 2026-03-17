import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', 
    async () => {

        try{
            const res = axios.get("https://jsonplaceholder.typicode.com/users");
            return res;

        }catch(err){
            throw err;
        }

    }
)

const initialState = {
    users : [],
    loading : false,
    error : null
}

export const dataSlice = createSlice({
    name : "users",
    initialState,

    extraReducers : (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) =>{
          state.loading = true;
        }) 
        .addCase(fetchUsers.fulfilled, (state, action) =>{
            state.loading = true;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) =>{
             state.loading = false;
             state.users = action.error.message;

        })

    }
})
