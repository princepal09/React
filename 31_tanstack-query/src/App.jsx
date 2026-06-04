import React from "react";
import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import Github from "./pages/Github";
import { getProfileData } from "./utils/services";
import TodoList from "./pages/TodoList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route errorElement={<ErrorPage />} path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact/:contactId" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="todo" element={<TodoList />} />
      <Route loader = {getProfileData} path="github/:username" element={<Github />} />
    </Route>

    <Route   path="*" element={<NotFound />}/>
    </>


  ),
);

const App = () => {
  return <h1>Hello Jee</h1>;
};

export default App;
