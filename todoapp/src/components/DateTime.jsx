import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const DateTime = () => {
    
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
    
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDate(formattedDate);
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-col jusitfy-center items-center">
      <h1 className="text-7xl font-bold font-mono ">Todo List</h1>
      <h2 className="text-3xl font-bold  font-mono">
        {date} - {time}{" "}
      </h2>
    </div>
  );
};

export default DateTime;
