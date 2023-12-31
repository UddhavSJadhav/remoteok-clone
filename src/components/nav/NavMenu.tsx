"use client";

import React from "react";

interface NavMenuProps {
  onClick: Function;
}

const NavMenu = ({ onClick }: NavMenuProps) => {
  return (
    <div
      id="nav-logo"
      className="my-2 ms-2 relative w-[75px] min-w-[75px] cursor-cell"
      onClick={(e) => onClick(e, "nav")}
      tabIndex={0}
    >
      <div className="user-select-none bg-black w-10 py-2 px-[2px] aspect-square rounded-full hover:opacity-50 active:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]">
        <span className="font-pacifico me-1">r</span>
        <span className="border-s border-white text-xs font-bold ps-1 leading-[10px]">
          OK
        </span>
      </div>
      <div className="absolute top-[6px] pointer-events-none right-2 p-2 rounded-full">
        <div className="w-[14px] aspect-square bg-[url('/assets/chevron-down.svg')] bg-cover bg-[0_0] bg-no-repeat invert"></div>
      </div>
    </div>
  );
};

export default NavMenu;
