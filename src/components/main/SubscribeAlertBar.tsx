"use client";

import React, { useState } from "react";

const SubscribeAlertBar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <form
      style={{ display: isVisible ? "block" : "none" }}
      className="fixed z-[1000] bottom-0 w-full bg-color-bg-hover border-t border-white border-solid border-opacity-10 text-center pt-3 px-2 pb-4"
    >
      <div className="me-3 text-slate-300 m-1 md:inline-block">
        Get new remote jobs sent to
      </div>
      <input
        type="email"
        placeholder="Type your email..."
        className="bg-color-bg outline-none p-2 font-extrabold rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.3)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)] me-3"
      />
      <button
        type="submit"
        className="px-2 py-1 font-extrabold rounded-xl hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 transition-all ease-linear"
      >
        Subscribe
      </button>
      <div
        className="relative float-right top-2 cursor-pointer text-xl leading-3 font-extrabold rounded-xl p-2 hover:bg-color-bg"
        onClick={() => setIsVisible(false)}
      >
        ×
      </div>
    </form>
  );
};

export default SubscribeAlertBar;
