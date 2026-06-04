import { createSlice, current } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    todos: localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload)
            const todo = {
                _id: nanoid(),
                text: action.payload.todo,
                isCompleted: false
            }
            state.todos.push(todo)
            let todoData = JSON.stringify(state.todos)
            localStorage.setItem('todo', (todoData))


        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo._id !== action.payload)
            localStorage.setItem(
                "todo",
                JSON.stringify(state.todos)
            );
        }

    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;