import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Movies from "../pages/Movies";
import About from "../pages/About";
import AppLayout from "../components/layout/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import Hollywood from "../pages/Hollywood";
import Bollywood from "../pages/Bollywood";

const AppRoutes = () => {
  return (
    <>
      <Routes>

        {/* // layout starts */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />



            {/* // nested route */}
          <Route path="/movies" element={<Movies />} >

               <Route path="hollywood" element = {<Hollywood/>} />
               <Route path = "bollywood" element = {<Bollywood/>} />

          
          </Route>


          <Route path="/about" element={<About />} />


                  {/* // layout ends */}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
