import React from "react";

const SalarySlider = () => {
  return (
    <div className="bg-color-bg rounded-xl p-2 shadow-[0_0_0_1px_#30363d]">
      <div className="float-left font-bold mb-2">Minimum</div>
      <div className="float-right mb-2">$0k/year</div>
      <input
        type="range"
        min={0}
        max={25}
        className="w-full outline-none cursor-cell m-[2px]"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default SalarySlider;
