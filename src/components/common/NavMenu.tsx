"use client";

import React, { useState } from "react";
import NavMenuLink from "./NavMenuLink";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="my-2 ms-2 relative w-[75px] cursor-cell">
      <span onClick={() => setIsOpen((prev) => !prev)}>
        <div className="bg-black w-10 py-2 px-[2px] aspect-square rounded-full hover:opacity-50">
          <span className="font-pacifico me-1">r</span>
          <span className="border-s border-white text-xs font-bold ps-1 leading-[10px]">
            OK
          </span>
        </div>
        <div className="absolute top-[6px] pointer-events-none right-2 p-2 rounded-full">
          <div className="w-[14px] aspect-square bg-[url('/assets/chevron-down.svg')] bg-cover bg-[0_0] bg-no-repeat invert"></div>
        </div>
      </span>

      {isOpen && (
        <div className="absolute w-[min(100vw,500px)] cursor-auto text-left z-10">
          <div className="bg-color-bg m-1 text-stone-300 rounded-xl overflow-y-auto px-2 py-3 h-96 shadow-[0_0_0_1px_#30363d]">
            <NavMenuLink text="💻 Join Remote OK" href="/sign-up" />
            <NavMenuLink text="👋 Log in" href="/login" />

            <NavMenuLink text="🐥 Frontpage" href="/" />
            <NavMenuLink text="🙌 Remote jobs" href="/remote-jobs" />
            <NavMenuLink text="👷‍♀️ Hire remote workers" href="/workers" />
            <NavMenuLink text="👋 Log in" href="/login" />
            <NavMenuLink text="👋 Log in" href="/login" />
            <NavMenuLink text="👋 Log in" href="/login" />
            <NavMenuLink text="👋 Log in" href="/login" />
            <NavMenuLink text="👋 Log in" href="/login" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
