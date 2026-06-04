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
        },

        updateTodo : (state, action) =>{
            const {_id, text} = action.payload
            const existingTodo = state.todos.find((todo) => todo._id === _id )
            console.log(existingTodo)
            if(existingTodo){
                existingTodo.text = text
            }
            localStorage.setItem('todo',JSON.stringify(state.todos))

            
        },
        removeAll : (state, action) =>{
            state.todos = []
            localStorage.removeItem('todo');

        }

    }
})

export const { addTodo, removeTodo, updateTodo, removeAll} = todoSlice.actions;
export default todoSlice.reducer;