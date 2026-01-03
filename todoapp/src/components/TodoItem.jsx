import React from "react";
import { MdDeleteForever } from "react-icons/md";
import tick from "../assets/check.png";

const TodoItem = ({ elem, tasks, setTasks }) => {
   
  const removeTask = () => {
    const updatedTasks = tasks.filter((curr) => curr.id !== elem.id);
    setTasks(updatedTasks);
  };

  const onCheckedHandle = () => {
    const updatedTasks = tasks.map((curr) => {
      if (curr.content === elem.content) {
        return { ...curr, checked: !curr.checked };
      } else {
        return curr;
      }
    });

    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  return (
    <div className="bg-white w-full h-14 text-black flex justify-between px-8  items-center mt-5 rounded-full">
      <p
        className={`text-1xl tracking-wider font-mono ${
          elem.checked ? "line-through" : "no-underline "
        } `}
      >
        {elem.content}
      </p>

      <div className="flex gap-2 justify-center items-center">
        <button onClick={onCheckedHandle}>
          <img
            src={tick}
            className="w-full h-7 object-contain "
            alt="tick img"
          />
        </button>
        <button onClick={removeTask}>
          <MdDeleteForever color="red" fontSize={40} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
