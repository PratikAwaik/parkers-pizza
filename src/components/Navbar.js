import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-40 bg-theme-orange-100">
      <nav className="w-full px-2 sm:px-4 py-3 flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="mr-2 sm:mr-5 flex items-center">
            <h1 className="text-3xl font-bold text-theme-orange-300">
              Parker's Pizza
            </h1>
          </Link>

          <div className="flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-500 mr-4 hover:font-bold ${
                  isActive && "font-bold text-black"
                }`
              }
            >
              Home
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
