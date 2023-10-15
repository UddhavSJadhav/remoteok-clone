import React from "react";

const DropDownList = () => {
  return (
    <div className="bg-color-bg rounded-xl overflow-y-auto p-2 h-96 shadow-[0_0_0_1px_#30363d]">
      {new Array(40).fill("This is a test job.").map((text, i) => (
        <div
          key={i}
          className="p-2 text-base text-left font-extrabold cursor-cell rounded-xl text-ellipsis whitespace-nowrap hover:bg-color-bg-hover"
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default DropDownList;
