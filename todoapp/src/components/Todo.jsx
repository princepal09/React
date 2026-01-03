import { useState } from "react";
import TodoItem from "./TodoItem";
import DateTime from "./DateTime";
import Form from "./Form";

const Todo = () => {
  const [formData, setFormData] = useState({});
  const [tasks, setTasks] = useState([]);

  const changeHandler = (e) => {
    const { value } = e.target;
    setFormData({ id: value, content: value, checked: false });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { id, content, checked } = formData;

    // to check if input field is empty or not
    const contentVal = content.trim();
    if (!contentVal) return;

    // to check if the data is already exisiting or not

    const ifTodoContentMatched = tasks.find((curr) => curr.content === content);
    if (ifTodoContentMatched) {
      setFormData({id:"",content:"",checked:false})
      return; }
    
    // setTasks((prev) => [...prev, {id:id,content:content,checked:checked}]) // aise bhi likhh skte hainn 
    setTasks((prev) => [...prev, {id,content,checked}])

    setFormData({id:"",content:"",checked:false})
  };

  const clearAllHandle = () => {
    setTasks([]);
  };

  return (
    <div className="mt-20 text-white">
      <DateTime />
      <div className="mt-5">
        <Form
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          formData={formData.content}
        />
      </div>

      <div>
        {tasks.map((elem) => (
          <TodoItem key={elem.id} tasks={tasks} setTasks={setTasks} elem={elem} />
        ))}
      </div>

      <div className="flex justify-center">
        {tasks.length > 0 && (
          <button
            onClick={clearAllHandle}
            className="mt-4 text-white bg-red-500 rounded-md px-4 py-3 cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
