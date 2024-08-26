import React from "react";
import { appleImg } from "../../utils";
import { navLists } from "../../constants";
import { bagImg } from "../../utils";
import { searchImg } from "../../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 max-sm:px-10 screen-max-width">
      <nav className="flex justify-around items-baseline ">
        <img src={appleImg} alt="Apple" width={18} height={180} />
        <div
          className="flex 
                     max-sm:hidden 
                     items-center
                     justify-around
                     flex-1
                     max-w-[50%]
                     text-gray
                     "
        >
          {navLists.map((nav) => (
            <div className="hover:text-white transition-all text-md" key={nav}>{nav}</div>
          ))}
        </div>
        <div className="flex gap-7 items-center ">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Buy" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
