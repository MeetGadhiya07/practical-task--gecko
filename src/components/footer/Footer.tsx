import React from "react";
import logo from "../../assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import Transition from "../../utils/animations";

const Footer = () => {
  return (
    <footer className="bg-skyBlue">
      <Transition>
        <div className="container flex pt-[100px]">
          <div className="w-[calc(50%-0.5px)]">
            <p className="text-[22px] leading-[32px] font-bold">
              Tagline will go here. Lorem ipsum d oler sit amet…
            </p>
            <p className="text-[#00D5F8] text-[22px] leading-[32px] font-bold mt-[24px]">
              user@email.com
            </p>
          </div>
          <div className="w-[1px] h-[150px] bg-[#90a1aa]"></div>
          <div className="flex w-[calc(50%-0.5px)]">
            <div className="w-[50%] flex justify-center">
              <div>
                <p className="text-[13px] leading-[24px] font-semibold">
                  Address
                </p>
                <p className="text-[15px] leading-[30px] mt-[15px] ">
                  101 Office No,
                  <br /> Road name,
                  <br /> India
                </p>
              </div>
            </div>
            <div className="w-[50%] flex justify-center">
              <div>
                <p className="text-[13px] leading-[24px] font-semibold">
                  Contacts
                </p>
                <p className="text-[15px] leading-[30px] mt-[15px]">
                  user@email.com <br />
                  (276) 341-7690
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition>
        <div className=" container flex justify-between items-center pb-[46px] mt-[100px]">
          <img src={logo} alt="Logo" height={60} width={135} />
          <nav className="flex space-x-8 items-center">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-secondary text-[15px] leading-[24px] ${isActive ? "font-bold" : ""}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-secondary text-[15px] leading-[24px] ${isActive ? "font-bold" : ""}`
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `text-secondary text-[15px] leading-[24px] ${isActive ? "font-bold" : ""}`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                `text-secondary text-[15px] leading-[24px] ${isActive ? "font-bold" : ""}`
              }
            >
              Case Studies
            </NavLink>
          </nav>
          <p className="text-[#263238] text-xs leading-4">
            ￼© 2022. All rights reserved
          </p>
        </div>
      </Transition>
    </footer>
  );
};

export default Footer;
