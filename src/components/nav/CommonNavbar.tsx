"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

import NavMenu from "./NavMenu";
import NavMenuDropdown from "./NavMenuDropdown";

const CommonNavbar = () => {
  const dropdownRef = useRef<HTMLInputElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onNavMenuClick = () =>
    setIsOpen((prev) => {
      if (!prev) dropdownRef?.current?.focus();
      return !prev;
    });
  const onNavClose = (e: any) => {
    if (
      e &&
      e?.relatedTarget &&
      e?.relatedTarget?.id &&
      e?.relatedTarget?.id === "nav-logo"
    )
      return;
    if (e && e?.relatedTarget && e?.currentTarget?.contains(e.relatedTarget))
      return;
    setIsOpen(false);
  };

  return (
    <nav className="relative bg-transparent text-center px-1 py-3 flex items-center">
      <NavMenu onClick={onNavMenuClick} />
      <div
        className="absolute z-10 w-[min(80vw,500px)] top-16"
        ref={dropdownRef}
        tabIndex={0}
        onBlur={onNavClose}
      >
        {isOpen && <NavMenuDropdown />}
      </div>
      <div className="flex mt-1 me-1 sm:me-3 ms-auto">
        <Link
          href="https://safetywing.com/nomad-health?referenceID=24730000"
          target="_blank"
          className="hidden md:block p-2 font-extrabold rounded-xl hover:text-teal-400 bg-blue-700 hover:bg-transparent border-2 border-solid border-blue-700 hover:border-teal-400 me-2 transition-all ease-linear"
        >
          Health insurance
        </Link>

        <Link
          href="/hire-remotely"
          className="p-2 font-extrabold rounded-xl hover:text-orange-500 bg-orange-600 hover:bg-transparent border-2 border-solid border-orange-600 hover:border-orange-500 me-2 transition-all ease-linear"
        >
          Post <span className="hidden sm:contents">a remote</span> job
        </Link>

        <Link
          href="/login"
          className="hidden md:block p-2 font-extrabold rounded-xl text-black hover:text-white bg-white hover:bg-transparent border-2 border-solid border-white transition-all ease-linear"
        >
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default CommonNavbar;
