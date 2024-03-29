import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Avatar from "../Component/Avatar/Avatar";
import logoo from "../../src/assets/images/logo.png"

const Main = () => {
  const { handleLogOut, user } = useContext(AuthContext);
  const links = ["Home", "About", "Register", "Let`s Explore"];

  const navlinks = (
    <>
      <li>
        {" "}
        <Link to={"/"}> Home </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to={"/about"}> About </Link>{" "}
      </li>
      {/* {!user && (
        <li>
          {" "}
          <Link to={"/login"}> Login </Link>{" "}
        </li>
      )} */}
      {user ? (
        <li>
          {" "}
          <Link to={"/dashboard/create-todo"}> Dashboard </Link>{" "}
        </li>
      ) : (
        <li>
          {" "}
          <Link to={"/login"}> Lets Explore </Link>{" "}
        </li>
      )}
    </>
  );

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">

          <img src={logoo} alt="" />

          </div>
          <div className="block md:hidden">
            <Avatar></Avatar>
          </div>
          <div className="flex-none hidden lg:block items-center ">
            <div className="flex items-center px-4">
              <ul className="menu menu-horizontal mr-24">
                {/* Navbar menu content here */}
                {navlinks}
                <button>
                  {" "}
               { user?    <li onClick={() => handleLogOut()}> Logout </li>:    <li>
          {" "}
          <Link to={"/login"}> Login </Link>{" "}
        </li>  }
                </button>
              </ul>
              <Avatar></Avatar>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-[220px] md:w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navlinks}
        </ul>
      </div>
    </div>
  );
};

export default Main;
