import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { toast } from "react-toastify";
import Loader from "./components/Loader";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  const fetchData = async () => {
    setLoading(true)
    try {
      let response = await fetch(apiUrl);
      if(!response.ok){
        throw new Error(`HTTP ERROR! status:${response.status} `)
      }
      let data = await response.json();
      setCourses(data.data);
    } catch (err) {
      // console.log(err);
      toast.error(`Error : ${err.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      <div>
        <Header />
      </div>

      <div>
        <Filter category = {category} setCategory = {setCategory} filterData={filterData} />
      </div>

      <div className="w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-[50vh]  ">
       {loading ? <Loader/>  :  <Cards courses={courses} category= {category} />}
      </div>
    </div>
  );
};

export default App;
