"use client";

import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/home/Navbar";
import FilterInput from "@/components/home/FilterInput";
import SearchInput from "@/components/home/SearchInput";
import JobList from "@/components/home/JobList";
import RecommendedJobCard from "@/components/home/RecommendedJobCard";

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

          <SearchInput />
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

      <section className="max-w-[1100px] overflow-x-auto mx-auto">
        <div className="flex items-start">
          <div className="my-2 ms-2 relative w-[75px] cursor-cell">
            <div className="bg-black w-10 py-2 px-[2px] aspect-square rounded-full hover:opacity-50">
              <span className="font-pacifico me-1">r</span>
              <span className="border-s border-white text-xs font-bold ps-1 leading-[10px]">
                OK
              </span>
            </div>
            <div className="absolute top-[6px] pointer-events-none right-2 p-2 rounded-full">
              <div className="w-[14px] aspect-square bg-[url('/assets/chevron-down.svg')] bg-cover bg-[0_0] bg-no-repeat invert"></div>
            </div>
          </div>
          <div>
            <FilterInput placeholder="🔍 Search" inputType="text" />
          </div>
          <div>
            <FilterInput placeholder="🌏 Location" inputType="text" />
          </div>
          <div>
            <FilterInput placeholder="💵 Salary" />
          </div>
          <div>
            <FilterInput placeholder="🎪 Benefits" />
          </div>
          <div className="ms-auto">
            <FilterInput placeholder="🦴 Sort by" />
          </div>
        </div>
        <div className="flex items-start">
          {[
            "☕ Java",
            "🧔 Assistant",
            "💻 Engineer",
            "🈸 Software",
            "👵 Senior",
          ].map((job, i) => (
            <RecommendedJobCard key={i} text={job} />
          ))}
          <div className="border border-red-500 text-red-500 rounded-[32px] m-2 p-2 pt-[10px] font-extrabold cursor-zoom-out">
            ❌ Clear 20+ results
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto">
        <Link
          href="https://safetywing.com/nomad-health?referenceID=24730000"
          target="_blank"
          className="bg-teal-300 h-[88px] mt-1 sm:mx-2 sm:rounded-xl flex items-center cursor-pointer hover:opacity-80 transition-all ease-linear"
        >
          <div className="p-4 md:pe-2">
            <Image
              src="/assets/safetywing.png"
              alt="safetyLogo"
              className="w-16 aspect-square object-cover bg-cyan-900 rounded-full"
              width={60}
              height={60}
            />
          </div>
          <div className="max-w-sm">
            <div className="text-[clamp(14px,6vw,17px)] font-extrabold">
              Nomad Health by SafetyWing
            </div>
            <div>Global health coverage for remote workers and nomads</div>
          </div>
          <div className="ms-auto p-4 hidden md:block">
            <button className="bg-white text-black rounded-xl py-3 px-7 font-extrabold">
              Sign up today
            </button>
          </div>
        </Link>
      </section>

      <section className="max-w-[1100px] mx-auto">
        <JobList />
      </section>
    </>
  );
}
