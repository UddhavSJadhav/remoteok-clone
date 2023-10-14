import Link from "next/link";

const CommonNavbar = () => {
  return (
    <nav className="relative bg-transparent text-center px-1 py-3 flex items-center">
      <div className="ms-2 relative w-[75px] cursor-cell">
        <div className="bg-black w-10 pt-[0.3rem] px-[2px] pb-2 aspect-square rounded-full hover:opacity-50 border border-white border-solid">
          <span className="font-pacifico me-1">r</span>
          <span className="border-s border-white text-xs font-bold ps-1 leading-[10px]">
            OK
          </span>
        </div>
        <div className="absolute top-[6px] pointer-events-none right-2 p-2 rounded-full">
          <div className="w-[14px] aspect-square bg-[url('/assets/chevron-down.svg')] bg-cover bg-[0_0] bg-no-repeat invert"></div>
        </div>
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
