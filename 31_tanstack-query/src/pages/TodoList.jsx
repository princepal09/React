import React from "react";

const TodoList = () => {
  return (
   <div className="mt-6 flex items-center justify-center ">
  <div className=" p-8 rounded-xl shadow-lg w-full max-w-md">
    <h1 className="text-3xl font-bold text-center mb-6">
      TODO LIST
    </h1>

    <form className="flex gap-3">
      <input
        type="text"
        placeholder="Enter your todo item"
        name="todo"
        id="todo"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Add
      </button>
    </form>

    <div className="mt-6">
      <ul className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
        <li className="font-medium">List 1</li>
        <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
          Remove
        </button>
      </ul>
    </div>
  </div>
</div>
  );
};

export default TodoList;
