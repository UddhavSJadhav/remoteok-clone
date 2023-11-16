import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="text-white h-16 border-b border-solid border-stone-700 flex items-center justify-between px-2">
        <div>
          <Link
            href="/"
            className="hover:opacity-80 user-select-none block mb-2"
          >
            <span className="ps-1 pe-2 font-pacifico text-4xl">remote</span>
            <span className="px-1 text-[28px] font-extrabold border-s-4 border-[#bfbfbf] leading-5">
              OK
            </span>
            <span className="text-xs ms-1">®</span>
            <span className="text-[28px] font-extrabold ms-2">admin</span>
          </Link>
        </div>
        <div>Account</div>
      </nav>
    </header>
  );
};

export default Navbar;
