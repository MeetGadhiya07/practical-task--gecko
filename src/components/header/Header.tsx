import React from "react";
import logo from "../../assets/Images/logo.png";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-5 ">
        <img src={logo} alt="Logo" className="" />
        <nav className="flex space-x-8 items-center">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-secondary text-xl ${isActive ? "font-bold" : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-secondary text-xl ${isActive ? "font-bold" : ""}`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-secondary text-xl ${isActive ? "font-bold" : ""}`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              `text-secondary text-xl ${isActive ? "font-bold" : ""}`
            }
          >
            Case Studies
          </NavLink>
          <button className="bg-primary text-white px-[23px] py-[14px] rounded-full text-xl leading-6 shadow-[0_4px_4px_0px_#00000040]">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
