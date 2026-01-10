// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Movies from "../pages/Movies";
import ErrorPager from "../pages/ErrorPager";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Pages WITH Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movies />} />
      </Route>

      {/* Error page WITHOUT Navbar */}
      <Route path="*" element={<ErrorPager />} />
    </Routes>
  );
};

export default AppRoutes;
