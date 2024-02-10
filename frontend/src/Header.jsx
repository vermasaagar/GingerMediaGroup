import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="flex items-center justify-between px-10 py-6 bg-shadow bg-gray-300">
      <img
        className="h-16"
        src="https://www.gingermediagroup.com/wp-content/uploads/2022/10/gmg-logo.png "
        alt="logo"
      />
      <ul className="flex gap-5">
        <li className="bg-[#209bde] px-2 py-1 font-bold text-white rounded-sm cursor-pointer hover:bg-[#2a9750] rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-[#209bde] px-2 py-1 font-bold text-white rounded-sm cursor-pointer hover:bg-[#2a9750] rounded-lg">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
