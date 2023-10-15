import Image from "next/image";
import React, { useState } from "react";

const RecommendedJobCard = ({ text }: { text: string }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={`m-2 rounded-full font-extrabold border-2 border-dashed border-[#30363d] p-2 opacity-50 [&.active]:opacity-100 hover:opacity-100 saturate-0 [&.active]:filter-none ${
        isActive ? " active cursor-zoom-out" : " cursor-cell"
      }`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      {text}
      {isActive && (
        <Image
          src="/assets/times-circle.svg"
          alt="times-circle"
          width={100}
          height={100}
          className="inline-block w-5 aspect-square invert opacity-50 mx-1 px-[3px] py-[2px]"
        />
      )}
    </div>
  );
};

export default RecommendedJobCard;
