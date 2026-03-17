import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', 
    async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        return res.data;
    }
);

const initialState = {
    users: [],
    loading: false,
    error: null
};

export const dataSlice = createSlice({
    name: "users",
    initialState,

    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        }) 
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});