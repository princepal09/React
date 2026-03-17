import { createAsyncThunk } from "@reduxjs/toolkit";
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

