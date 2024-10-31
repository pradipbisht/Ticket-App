import React from "react";
import { PiTicketThin } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="flex items-center text-white transition duration-300 hover:text-yellow-400">
          <IoHomeOutline className="text-2xl" />
        </Link>
        <Link
          to="/create-ticket"
          className="flex items-center text-white transition duration-300 hover:text-yellow-400">
          <PiTicketThin className="text-2xl" />
        </Link>
      </div>
      <div>
        <p className="text-white text-sm">pradipbisht42@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
