/** @format */

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log out successfully",
        showConfirmButton: false,
        timer: 2000
      });
      location.reload()
    })
    .catch(error => {
      console.log(error);
    })
  }
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/addTourist"}>Add tourist spot</NavLink>
      </li>
      <li>
        <NavLink to={"/allTouristSpot"}>All Tourist Spots</NavLink>
      </li>
      <li>
        <NavLink to={"/carts"}>My Carts</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="text-4xl pl-4 font-bold text-[#007E8F]">ExploreBD.com</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 px-1 text-lg font-semibold">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className=" text-white font-semibold py-1 px-5 bg-[#007E8F] rounded-lg border border-[#007E8F]">
            Log out
          </button>
        ) : (
          <Link
            to={"/login"}
            className=" text-white font-semibold py-1 px-5 bg-[#007E8F] rounded-lg border border-[#007E8F]">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
