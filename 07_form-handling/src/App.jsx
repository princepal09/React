import { useState } from "react";

const App = () => {
  // let [title, setTitle] = useState("")

  // const submitHandler = (e) =>{
  //   e.preventDefault()
  //   console.log("Form Submitted by",title);
  //   setTitle('')

  // }\

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    isChecked: false,
    gender:"",
    car:""
  });

  // console.log(formData);

  const formHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandle = (e)=>{
       e.preventDefault();
       console.log(formData);
       setFormData({  firstname: "",
    lastname: "",
    email: "",
    isChecked: false,
    gender:"",
    car:""})
  }

  return (
    <div>
      {/* <form onSubmit={(e) =>{
        submitHandler(e)
      }} className='flex mt-6 gap-5 flex-col justify-center items-center '>
           <input onChange={ (e ) =>{
            setTitle(e.target.value)
           }} value={title} type="text" className="border-2 focus:text-white placeholder:text-2xl border-solid w-7/8 rounded-md placeholder:text-white border-black  outline-0 px-9 py-4 bg-amber-700" placeholder='Enter Your Name...' />
            <button className='bg-blue-600 text-white px-6 py-2 text-2xl cursor-pointer rounded-md'>Submit</button>
      </form> */}

      <form onSubmit={submitHandle} className="mx-auto ml-8">
        <input
          className="border-2 border-black m-2 p-2 w-1/3"
          onChange={formHandler}
          type="text"
          placeholder="First Name"
          value={formData.firstname}
          name="firstname"
        />{" "}
        <br />
        <input
          className="border-2 border-black m-2 p-2 w-1/3"
          onChange={formHandler}
          type="text"
          placeholder="Last Name"
          value={formData.lastname}
          name="lastname"
        />
        <input
          className="border-2 border-black m-2 p-2 w-1/3"
          onChange={formHandler}
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          name="email"
        /> <br />
        <input
          type="checkbox"
          id="checked"
          name="isChecked"
          checked={formData.isChecked}
          onChange={formHandler}
        />
        <label  htmlFor="checked">
          Please Click This
        </label> <br />

        <input value='male'  checked ={formData.gender === 'male'} onChange={formHandler} type="radio" name="gender" id="male"  />
        <label htmlFor="male">Male</label> <br />

        <input value= 'female' checked = {formData.gender === 'female'} onChange={formHandler}  type="radio" name="gender" id="female" />
        <label  htmlFor="female">Female</label>

        <select name="car" id="car" className="m-4" onChange={formHandler} value={formData.car}>

          <option value="Defender">Defender</option>
          <option value="Ford">'Ford'</option>
          <option value="BMW">BMW</option>
          <option value="Ferrari">Ferrari</option>

        </select>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
