import React from "react";
import { Link } from "react-router-dom";

const SidePanel = ({ menuOpen }) => {
  return (
    <div className="absolute top-[96px] left-0 z-50 min-h-auto w-1/5  grid grid-flow-row rounded-2xl ml-2 bg-gradient-to-r from-[#efd5ff] to-[#515ada] hover:shadow-lg hover:shadow-[#515ada]">
      <div 
        className="m-1 h-12 flex items-center justify-center hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
        onClick={menuOpen}
        >
        <Link to="/men" className="text-xl font-extralight text-white">
          Men
        </Link>
      </div>
      <div 
        className="m-1 h-12 flex items-center justify-center hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
        onClick={menuOpen}
      >
          <Link to="/women" className="text-xl font-extralight text-white">
            Women
          </Link>
      </div>
      <div 
        className="m-1 h-12 flex items-center justify-center hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
        onClick={menuOpen}
      >
        <Link
          to="/auth/register"
          className="text-xl font-extralight text-white"
        >
          Sign In
        </Link>
      </div>
      <div 
        className="m-1 h-12 flex items-center justify-center hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
        onClick={menuOpen}
      >
        <Link to="/cart-items" className="text-xl font-extralight text-white">
          My Orders
        </Link>
      </div>
      <div 
        className="m-1 h-12 flex items-center justify-center hover:cursor-pointer border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-300"
        onClick={menuOpen}
      >
        <Link to="/contact" className="text-xl font-extralight text-white">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;
