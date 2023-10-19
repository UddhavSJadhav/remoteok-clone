import Link from "next/link";
import React from "react";

const HireRemotely = () => {
  return (
    <>
      <nav className="p-4 flex justify-between items-center border-b border-color-bg-hover border-solid">
        <Link
          href="/"
          className="opacity-80 hover:opacity-60 user-select-none block"
        >
          <span className="ps-1 pe-2 font-pacifico text-4xl">remote</span>
          <span className="px-1 text-[28px] font-extrabold border-s-4 border-white leading-5">
            OK
          </span>
          <span className="text-xs ms-1">®</span>
        </Link>

        <Link
          href="/"
          className="opacity-80 hover:opacity-60 user-select-none hidden md:block px-1 text-3xl font-extrabold leading-5"
        >
          Hire Remotely
        </Link>

        <Link
          href="/buy-bundle"
          className="p-2 font-extrabold rounded-xl hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 me-2 transition-all ease-linear"
        >
          Buy a bundle →
        </Link>
      </nav>
    </>
  );
};

export default HireRemotely;
