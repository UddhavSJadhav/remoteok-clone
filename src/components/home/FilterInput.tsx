import React, { useState } from "react";
import DropDownList from "./DropDownList";

interface FilterInputProps {
  inputType?: "none" | "text";
  placeholder?: string;
}

const FilterInput = ({
  inputType = "none",
  placeholder = "Type...",
}: FilterInputProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="relative w-36 m-2 ms-0 rounded-full text-base font-extrabold cursor-cell">
      {inputType === "text" ? (
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.3)] p-2 ps-4 w-full bg-color-bg hover:bg-color-bg-hover cursor-cell focus:cursor-auto focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
          onFocus={(e) => {
            e.target.placeholder = "Type...";
            setIsVisible(true);
          }}
          onBlur={(e) => {
            e.target.placeholder = placeholder;
            setIsVisible(false);
          }}
        />
      ) : (
        <div className="outline-none rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.3)] p-2 ps-4 w-full bg-color-bg hover:bg-color-bg-hover cursor-cell focus:cursor-auto focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]">
          {placeholder}
        </div>
      )}
      <div className="absolute top-[6px] pointer-events-none right-2 p-2 rounded-full">
        <div className="w-[14px] aspect-square bg-[url('/assets/chevron-down.svg')] bg-cover bg-[0_0] bg-no-repeat invert"></div>
      </div>
      {isVisible && (
        <div className="absolute z-10">
          <DropDownList />
        </div>
      )}
    </div>
  );
};

export default FilterInput;
