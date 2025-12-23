import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";
import Refresh from "./components/Refresh";

const App = () => {
  const [tours, setTours] = useState(data);

  const removeBtn = (id) => {
    const newTours = tours.filter((elem) => elem.id !== id);
    setTours(newTours);
  };
  const refreshTour = () =>{
    setTours(data)
  }
  return (
    <div>
      {tours?.length > 0 ? (
        <Tours removeBtn={removeBtn} data={tours} />
      ) : (
        <Refresh refreshTour = {refreshTour}  />
      )}
    </div>
  );
};

export default App;
