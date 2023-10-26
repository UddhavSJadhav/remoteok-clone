import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative bg-transparent text-center px-1 py-4">
      <span className="hover:opacity-80 user-select-none">
        <Link href="/" className="ps-1 pe-2 font-pacifico text-4xl mt-2">
          <span> r</span>
          <span className="hidden sm:contents">emote</span>
        </Link>
        <Link
          href="/"
          className="px-1 text-2xl font-extrabold border-s-4 border-white leading-5"
        >
          <span>OK</span>
          <span className="text-xs ms-1">®</span>
        </Link>
      </span>

      <div className="absolute flex top-0 right-0 mt-3 me-1 sm:me-3">
        <Link
          href="https://safetywing.com/nomad-health?referenceID=24730000"
          target="_blank"
          className="hidden lg:block p-2 font-extrabold rounded-xl hover:text-teal-400 bg-blue-700 hover:bg-transparent border-2 border-solid border-blue-700 hover:border-teal-400 me-2 transition-all ease-linear"
        >
          Health insurance
        </Link>

        <Link
          href="/login"
          className="hidden lg:block p-2 font-extrabold rounded-xl text-black hover:text-white bg-white hover:bg-transparent border-2 border-solid border-white transition-all ease-linear"
        >
          Log in
        </Link>
        <div className="hidden 1.5lg:block w-40"></div>
        <Link
          href="/hire-remotely"
          className="ms-2 block 1.5lg:fixed right-3 z-[1001] p-2 font-extrabold rounded-xl hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 hover:border-red-500 transition-all ease-linear"
        >
          Post <span className="hidden sm:contents">a remote</span> job
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
