import React from "react";

import NavMenuLink from "./NavMenuLink";

const NavMenuDropdown = () => {
  return (
    <div className="bg-color-bg text-left m-1 text-stone-300 rounded-xl overflow-y-auto px-2 py-3 shadow-[0_0_0_1px_#30363d]">
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
  );
};

export default NavMenuDropdown;
