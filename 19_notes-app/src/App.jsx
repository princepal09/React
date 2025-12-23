import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    heading: "",
    details: "",
  });

  const [notes, setNotes] = useState([]);

  // console.log(formData);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const copyNotes = [...notes];
    const { heading, details } = formData;
    copyNotes.push({ heading, details });
    setNotes(copyNotes);
    console.log(copyNotes);

    setFormData({ heading: "", details: "" });
  };

  const deleteTask = (idx) =>{
           const copyNotes = [...notes]
           copyNotes.splice(idx,1)
           console.log(copyNotes);
           setNotes(copyNotes)
  }

  return (
    <div className="h-screen   bg-black lg:flex    text-white">
      <form
        onSubmit={submitHandler}
        className="flex items-start gap-7 lg:w-1/2   p-10  flex-col   "
      >
        <h1 className="font-medium text-4xl">Add Notes</h1>
        <input
          placeholder="Enter Notes Heading"
          type="text"
          name="heading"
          required
          onChange={changeHandler}
          value={formData.heading}
          className="border-2 w-full font-medium outline-none placeholder:text-2xl  rounded px-5 py-7"
        />
        <textarea
          type="text"
          onChange={changeHandler}
          name="details"
          value={formData.details}
          className=" font-medium px-5 h-32 py-3 outline-none flex flex-row   w-full  placeholder:text-2xl border-2 rounded "
          placeholder="Write Details"
        />
        <button className="bg-white focus:scale-90  font-medium w-full outline-none  cursor-pointer text-2xl   rounded  text-black px-5 py-6 ">
          Add Note{" "}
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 ">
        <h1 className="text-4xl font-bold">Recent Notes </h1>
        <div className="flex  gap-5  mt-5 flex-wrap h-full overflow-auto ">
         {(notes.length) !== 0 ?  ( notes.map( (elem,idx) =>{
            return <div key={idx} className="h-70 w-65 p-7 bg-[url('https://png.pngtree.com/element_our/20190603/ourmid/pngtree-sticky-note-cartoon-illustration-image_1430615.jpg')] bg-cover  rounded-2xl  bg-center bg-scale-30 bg-no-repeat flex flex-col justify-between">
               <h3 className="t text-center text-4xl tracking-normal font-bold  text-gray-600 bg-yellowz">{elem.title}</h3>
                    <p className="  text-[20px] mt-2 px-4 text-center  text-black">{elem.details}</p>
                    <button onClick={() =>{
                      deleteTask(idx)
                    }} className="bg-amber-300 mt-5 px-2 rounded-lg hover:bg-red-300 cursor-pointer py-2">Delete Task</button>
              
            </div>
          } )) : (<h1>No Notes found</h1>)
         
        
        
        
        
        
        
        
        
        
        
        }
        </div>

        
      </div>
    </div>
  );
};

export default App;
