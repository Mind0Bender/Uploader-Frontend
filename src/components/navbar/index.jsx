import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

let Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-blue-600 shadow-md text-white">
        <div className="text-3xl font-bold p-3">snapvideo</div>
      </div>
      <div
        style={{
          transitionDuration: "500ms",
          borderRadius: isOpen ? "10px" : "50px",
          width: isOpen ? "250px" : "70px",
          height: isOpen ? "250px" : "70px",
          animation: isOpen ? "" : "bounce 5s infinite",
          zIndex: 999,
        }}
        className={`fixed right-0 top-5 shadow-lg  p-3 bg-white m-6`}
      >
        <div className={"flex flex-row-reverse"}>
          <Hamburger
            className="float-right"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>

        {isOpen && (
          <div
            style={{
              opacity: isOpen ? 1 : 0,
              transitionDuration: "500ms",
              zIndex: 999,
            }}
            className="w-56 text-center flex flex-col"
          >
            <NavLink
              to="/"
              onClick={() => {
                setIsOpen(false);
              }}
              className={
                "w-full px-3 py-2  text-3xl hover:bg-gray-300 cursor-pointer rounded-md text-center"
              }
            >
              Home
            </NavLink>
            <hr />
            <NavLink
              to="/upload"
              onClick={() => {
                setIsOpen(false);
              }}
              className={
                "w-full px-3 py-2 my-2 text-3xl hover:bg-gray-300 cursor-pointer rounded-md text-center"
              }
            >
              Upload
            </NavLink>
            <hr />
            <NavLink
              to="/profile"
              onClick={() => {
                setIsOpen(false);
              }}
              className={
                "w-full px-3 py-2 my-2 text-3xl hover:bg-gray-300 cursor-pointer rounded-md text-center"
              }
            >
              Profile
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
