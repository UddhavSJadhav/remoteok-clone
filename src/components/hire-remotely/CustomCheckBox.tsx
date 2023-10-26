import React from "react";

interface CustomCheckBoxProps {
  id: string;
  label: string;
  xMoreViews?: number;
}

const CustomCheckBox = ({ id, label, xMoreViews }: CustomCheckBoxProps) => {
  return (
    <div className="user-select-none cursor-pointer mb-2">
      <input
        id={id}
        type="checkbox"
        className="relative w-6 h-6 bg-color-bg appearance-none checked:outline-none checked:border-transparent border border-solid border-stone-600 rounded-md after:text-2xl checked:after:content-['✅'] after:absolute after:-left-1 after:-top-1 after:outline-none me-2 -mb-1"
      />
      <label htmlFor={id}>
        {label}{" "}
        {xMoreViews && (
          <span className="inline-block ms-2 border border-solid border-red-500 uppercase text-red-500 text-xs font-bold rounded-md p-1">
            {xMoreViews}x more views
          </span>
        )}
      </label>
    </div>
  );
};

export default CustomCheckBox;
