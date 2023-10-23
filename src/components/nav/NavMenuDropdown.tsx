import React from "react";

import NavMenuLink from "./NavMenuLink";

const NavMenuDropdown = () => {
  return (
    <div className="bg-color-bg text-left m-1 text-stone-300 rounded-xl overflow-y-auto px-2 py-3 shadow-[0_0_0_1px_#30363d]">
      <NavMenuLink text="💻 Join Remote OK" href="/sign-up" />
      <NavMenuLink text="👋 Log in" href="/login" />

      <div className="mt-1 w-full px-4 flex items-center">
        <div className="text-[10px] font-extrabold uppercase">General</div>
        <div className="h-[1px] bg-color-bg-hover flex-grow"></div>
      </div>

      <NavMenuLink text="🐥 Frontpage" href="/" />
      <NavMenuLink text="🙌 Remote jobs" href="/remote-jobs" />
      <NavMenuLink text="👷‍♀️ Hire remote workers" href="/workers" />
      <NavMenuLink text="🚨 Post a remote job" href="/hire-remotely" />
      <NavMenuLink text="📀 Compact mode" href="/" />

      <div className="mt-1 w-full px-4 flex items-center">
        <div className="text-[10px] font-extrabold uppercase">Top jobs</div>
        <div className="h-[1px] bg-color-bg-hover flex-grow"></div>
      </div>

      <NavMenuLink text="🤖 AI Jobs" href="/" />
      <NavMenuLink text="⏰ Async jobs" href="/" />
      <NavMenuLink text="🌎 Distributed team" href="/" />
      <NavMenuLink text="🤓 Engineer jobs" href="/" />

      <div className="mt-1 w-full px-4 flex items-center">
        <div className="text-[10px] font-extrabold uppercase">companies</div>
        <div className="h-[1px] bg-color-bg-hover flex-grow"></div>
      </div>

      <NavMenuLink text="🚨 Post a remote job" href="/hire-remotely" />
      <NavMenuLink text="📦 Buy a job bundle" href="/buy-bundle" />
    </div>
  );
};

export default NavMenuDropdown;
