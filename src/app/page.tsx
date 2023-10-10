"use client";

import Link from "next/link";

import Navbar from "@/components/home/Navbar";
import FilterInput from "@/components/home/FilterInput";

export default function Home() {
  return (
    <>
      <div className="h-[400px] bg-hero-pattern bg-[51%_38%]">
        <Navbar />

        <div className="text-center text-5xl mt-8">
          <Link href="/" className="cursor-pointer hover:opacity-80">
            <div className="drop-shadow-2xl">
              find a{" "}
              <span className="font-bold">
                <span className="hidden sm:contents">remote</span> job
              </span>
            </div>
            <div className="hidden sm:contents drop-shadow-2xl">
              work from <span className="font-bold">anywhere</span>
            </div>
          </Link>

          <div className="mt-7">
            <input
              className="w-[min(400px,80vw)] bg-color-bg bg-[url('/assets/search-white.png')] bg-no-repeat bg-[0.75em_center] bg-[length:1em] ps-14 py-3 pe-2 text-2xl font-bold text-white outline-none border-b border-solid border-white rounded-full focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
              placeholder="your next job?"
            />
          </div>
        </div>
      </div>

      <div className="relative bg-black">
        <div className="custom-shape-divider-bottom-1696946936">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <section className="max-w-[1100px] mx-auto">
        <div className="flex">
          <FilterInput placeholder="🔍 Search" inputType="text" />
          <FilterInput placeholder="🌏 Location" inputType="text" />
          <FilterInput placeholder="💵 Salary" />
          <FilterInput placeholder="🎪 Benefits" />
        </div>
      </section>
    </>
  );
}
