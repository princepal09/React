import React from 'react'

const Form = ({changeHandler,submitHandler,formData}) => {
  return (
    <div>
         <form onSubmit={submitHandler}>
          <div className="max-w-100.5 h-10   relative ">
            <input
              onChange={changeHandler}
              type="text "
              name="task"
              value={formData}
              className="outline-none w-full h-full bg-white px-3  py-1 rounded-lg text-black border"
            />
            <button className="text-white absolute w-28 h-full top-0 right-0 cursor-pointer  bg-blue-400 px-3 py-1 rounded-r-lg">
              Add Task
            </button>
          </div>
        </form>
    </div>
  )
}

export default Form
