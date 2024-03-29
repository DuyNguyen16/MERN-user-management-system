import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full py-3 shadow-md flex justify-between px-10 items-center">
      <a className="font-bold" href="/">
        User Management System
      </a>
      <Link to={"/create"}>
        <button className="bg-green-300 px-4 py-2 rounded-sm font-bold hover:bg-green-400 transition-all">
          Create User
        </button>
      </Link>
    </div>
  );
};

export default Header;
