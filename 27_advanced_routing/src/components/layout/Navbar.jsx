import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-black font-mono px-10 bg-white py-3  text-3xl">
      <ul className="flex justify-around py-3">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "text-black"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "text-black"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "text-black"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "text-black"
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
