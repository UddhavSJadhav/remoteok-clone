import React from "react";
import Link from "next/link";

import CommonNavbar from "@/components/common/CommonNavbar";

const Signup = () => {
  return (
    <div className="min-h-screen bg-hero-pattern bg-[51%_38%] relative">
      <div className="absolute w-full">
        <CommonNavbar />
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-color-bg p-7 m-1 rounded-xl border border-stone-700 border-solid w-[min(450px,100%)] text-center">
          <div className="font-extrabold text-2xl text-stone-300">
            Start your remote career on the{" "}
            <Link
              href="https://twitter.com/levelsio/status/1606328087569801223?s=20&t=6snxVEs79ITic1-LwC-pSg"
              target="_blank"
              className="underline"
            >
              #1 remote work platform
            </Link>
          </div>

          <form className="mt-6">
            <input
              type="email"
              placeholder="Choose a username"
              className="block w-full mb-2 outline-none p-2 bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="block w-full mb-2 outline-none p-2 bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
            />

            <button
              type="submit"
              className="w-full mt-6 px-2 py-2 font-extrabold rounded-xl hover:text-red-500 bg-red-500 hover:bg-transparent border-2 border-solid border-red-500 transition-all ease-linear"
            >
              Continue
            </button>
          </form>

          <div className="text-stone-300 mt-6">
            Already a member?
            <Link href="/login" className="underline font-extrabold ms-2">
              Log in
            </Link>
          </div>

          <div className="text-[11px] text-stone-300 mt-4">
            By creating an account you agree to our{" "}
            <Link href="/legal" className="underline">
              terms of service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
