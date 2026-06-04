import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/slices/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const submitHandler = (data) => {
      dispatch(addTodo(data));
    reset();
  };

  console.log(todos);

  return (
    <div className="mt-6 flex items-center justify-center ">
      <div className=" p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">TODO LIST</h1>

        <form onSubmit={handleSubmit(submitHandler)} className="flex gap-3">
          <input
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
            Add
          </button>
        </form>

        {todos.map((todo) => (
          <div key={todo?._id} className="flex mt-3   items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <p className="font-medium">{todo?.text}</p>
            <button onClick={()=> dispatch(removeTodo(todo?._id))} className="px-3 justify-end   py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
