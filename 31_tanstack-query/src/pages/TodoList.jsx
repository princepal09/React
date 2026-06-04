import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAll, removeTodo, updateTodo } from "../redux/slices/todoSlice";
import { data } from "react-router-dom";

const TodoList = () => {
    const todoRef = useRef(null);
    const [editId, setEditId] = useState(null)
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data)
      if(editId){
        dispatch(updateTodo({_id : editId, text : data.todo}))
        setEditId(null)
      }else{
        dispatch(addTodo(data))
      }

      reset();
    
      
  };

  const handleEdit = (todo) =>{
    setEditId(todo?._id);
    setValue("todo", todo?.text);
    todoRef.current?.focus();

  }

  console.log(todos);

  return (
    <div className="mt-6 flex items-center justify-center ">
      <div className=" p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">TODO LIST</h1>

        <form onSubmit={handleSubmit(submitHandler)} className="flex gap-3">
          <input ref={todoRef}
            {...register("todo", { required: true })}
            type="text"
            placeholder="Enter your todo item"
            name="todo"
            id="todo"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.todo && <span>{errors.todo.message}</span>}
          <button
            disabled={isSubmitting}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {editId ? 'Update' : 'Add'}
          </button>

           <button
            disabled={isSubmitting} onClick={() => dispatch(removeAll())}
            className="px-1 mt-4 py-2  bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Remove All
          </button>
          
        </form>
                                                                                                

        {todos.map((todo) => (
          <div key={todo?._id} className="flex mt-3   items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <p className="font-medium">{todo?.text}</p>
            <button onClick={()=> dispatch(removeTodo(todo?._id))} className="px-3 justify-end   py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
              Remove
            </button>
            <button   onClick={()=> handleEdit(todo)} className="px-3 justify-end   py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
              Edit
            </button>
            <button   onClick={()=> handleEdit(todo)} className="px-3 justify-end   py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
