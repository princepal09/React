import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("users")) || []

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        createUser(state, action) {
            state.push(action.payload)
            localStorage.setItem("users", JSON.stringify(state))
        },

        removeUser(state, action) {
            state.splice(action.payload, 1)
            localStorage.setItem("users", JSON.stringify(state))

        },
        deleteAllUser(state, action) {
            localStorage.removeItem("users");
            return []
        }
    }

})

export const { createUser, removeUser, deleteAllUser } = userSlice.actions
export default userSlice.reducer