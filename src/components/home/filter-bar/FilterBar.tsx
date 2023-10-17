import React, { useState, useRef } from "react";

import FilterInput from "./FilterInput";
import NavMenu from "../../nav/NavMenu";
import RecommendedJobCard from "../RecommendedJobCard";
import DropDownList from "./DropDownList";
import NavMenuDropdown from "../../nav/NavMenuDropdown";
import SalarySlider from "./SalarySlider";

const FilterBar = () => {
  const dropdownRef = useRef<HTMLInputElement | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState<object>({
    display: "none",
    top: "45px",
  });
  const [dropdownType, setDropdownType] = useState<string>("");

  const closeDropdown = () => {
    setTimeout(() => {
      if (dropdownRef.current?.contains(document.activeElement)) return;
      setDropdownStyle((prev) => ({ ...prev, display: "none" }));
    }, 0);
  };

  const onInputFieldClick = (e: any, type: string) => {
    setDropdownType(type);

    if (type !== "search" && type !== "location")
      setTimeout(() => {
        dropdownRef.current?.focus();
      }, 100);

    if (type === "order_by") {
      if (window.innerWidth < 1100) {
        return setDropdownStyle((prev) => ({
          ...prev,
          display: "block",
          right: "10px",
          left: "auto",
        }));
      } else {
        return setDropdownStyle((prev) => ({
          ...prev,
          display: "block",
          right: (window.innerWidth - 1100) / 2,
          left: "auto",
        }));
      }
    }

    const { left } = e.target.getBoundingClientRect();

    if (
      left + Math.min((window.innerWidth * 80) / 100, 400) >
      window.innerWidth
    ) {
      return setDropdownStyle((prev) => ({
        ...prev,
        display: "block",
        right: "10px",
        left: "auto",
      }));
    }

    setDropdownStyle((prev) => ({
      ...prev,
      display: "block",
      left: left,
      right: "auto",
    }));
  };

  return (
    <section className="relative">
      <div className="max-w-[1100px] mx-auto overflow-x-auto">
        <div className="flex items-start">
          <NavMenu onClick={onInputFieldClick} />
          <div>
            <FilterInput
              id="search"
              placeholder="🔍 Search"
              inputType="text"
              onInputFieldClick={onInputFieldClick}
              removeCoords={closeDropdown}
            />
          </div>
          <div>
            <FilterInput
              id="location"
              placeholder="🌏 Location"
              inputType="text"
              onInputFieldClick={onInputFieldClick}
              removeCoords={closeDropdown}
            />
          </div>
          <div>
            <FilterInput
              id="salary"
              placeholder="💵 Salary"
              onInputFieldClick={onInputFieldClick}
            />
          </div>
          <div>
            <FilterInput
              id="benefits"
              placeholder="🎪 Benefits"
              onInputFieldClick={onInputFieldClick}
            />
          </div>
          <div className="ms-auto">
            <FilterInput
              id="order_by"
              placeholder="🦴 Sort by"
              onInputFieldClick={onInputFieldClick}
            />
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
          <div className="whitespace-nowrap border border-red-500 text-red-500 rounded-[32px] m-2 p-2 pt-[10px] font-extrabold cursor-zoom-out">
            ❌ Clear 20+ results
          </div>
        </div>
      </div>
      {dropdownType === "nav" ? (
        <div
          className="absolute z-10 w-[min(80vw,500px)]"
          style={dropdownStyle}
          ref={dropdownRef}
          onBlur={closeDropdown}
          tabIndex={0}
        >
          <NavMenuDropdown />
        </div>
      ) : dropdownType === "salary" ? (
        <div
          className="absolute z-10 w-[min(80vw,250px)]"
          style={dropdownStyle}
          ref={dropdownRef}
          onBlur={closeDropdown}
          tabIndex={0}
        >
          <SalarySlider />
        </div>
      ) : dropdownType === "order_by" ? (
        <div
          className="absolute z-10 w-[min(80vw,150px)]"
          style={dropdownStyle}
          ref={dropdownRef}
          onBlur={closeDropdown}
          tabIndex={0}
        >
          <DropDownList />
        </div>
      ) : (
        <div
          className="absolute z-10 w-[min(80vw,400px)]"
          style={dropdownStyle}
          ref={dropdownRef}
          onBlur={closeDropdown}
          tabIndex={0}
        >
          <DropDownList />
        </div>
      )}
    </section>
  );
};

export default FilterBar;
