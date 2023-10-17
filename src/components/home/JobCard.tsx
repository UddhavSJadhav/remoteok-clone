import React from "react";
import Link from "next/link";
import Image from "next/image";

interface JobData {
  title: string;
  companyName: string;
  companyIcon: string;
  location: {
    short: string;
    name: string;
  };
  filters: object;
  package: {
    from: number;
    to: number;
  };
  verified?: boolean;
  hot?: boolean;
  new?: boolean;
  createdAt: Date;
  backgroundColor?: string;
  textColor?: string;
}

const JobCard = ({ details }: { details?: JobData }) => {
  return (
    <Link
      href=""
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: details?.backgroundColor || "#2c2c2c",
        color: details?.textColor || "white",
      }}
      className="h-[88px] mt-2 sm:mx-2 sm:rounded-xl flex items-center cursor-pointer hover:opacity-80 transition-all ease-linear"
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
      <div className="w-[min(70%,448px)]">
        <div className="text-[clamp(14px,6vw,17px)] font-extrabold">
          {details?.title || "This is job title"}
        </div>
        <div>{details?.companyName || "RemoteOk"}</div>
        <div className="my-1">
          <span className="bg-[#424242] rounded-full text-xs px-2 py-1 me-2">
            Worldwide
          </span>
          <span className="bg-[#424242] rounded-full text-xs px-2 py-1">
            Worldwide
          </span>
        </div>
      </div>
      <div
        className="w-[20%] hidden lg:flex items-center font-bold"
        onClick={(e) => e.preventDefault()}
      >
        <span className="bg-white hover:bg-transparent text-black hover:text-white border-2 border-white border-solid rounded-xl text-xs px-2 py-1 cursor-cell transition-all ease-linear">
          Worldwide
        </span>
      </div>
      <div className="ms-auto w-10 flex items-center p-2 me-3 md:me-0">
        <Image
          src="/assets/paper-clip.svg"
          alt="paper-clip"
          width={100}
          height={100}
          className="w-3 aspect-square invert me-1"
        />
        <div className="text-sm">7d</div>
      </div>
      <div className="p-4 hidden md:block w-48">
        <button className="w-40 bg-white text-black rounded-xl py-3 px-7 font-extrabold">
          Apply now
        </button>
      </div>
    </Link>
  );
};

export default JobCard;
