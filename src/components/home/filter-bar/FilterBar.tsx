import React, { useState, useRef, useEffect } from "react";

import FilterInput from "./FilterInput";
import NavMenu from "../../nav/NavMenu";
import RecommendedJobCard from "./RecommendedJobCard";
import DropDownList from "./DropDownList";
import NavMenuDropdown from "../../nav/NavMenuDropdown";
import SalarySlider from "./SalarySlider";

import { orderByList } from "@/data";

interface DropDownStyle {
  top: string;
  left: string;
  right: string;
  width?: string;
}

const FilterBar = () => {
  const dropdownRef = useRef<HTMLInputElement | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState<DropDownStyle>({
    top: "50px",
    left: "auto",
    right: "auto",
  });
  const [dropdownType, setDropdownType] = useState<string>("");
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const closeDropdown = (e: any) => {
    if (
      e &&
      e?.relatedTarget &&
      e?.relatedTarget?.id &&
      (e?.relatedTarget?.id === "filter-input-" + dropdownType ||
        e?.relatedTarget?.id === "nav-logo")
    )
      return;
    if (e && e?.relatedTarget && e?.currentTarget?.contains(e.relatedTarget))
      return;
    setDropdownType("");
  };

  const onInputFieldClick = (e: any, type: string) => {
    if (
      type === dropdownType &&
      dropdownType !== "search" &&
      dropdownType !== "location"
    )
      return setDropdownType("");
    setDropdownType(type);

    if (type !== "search" && type !== "location") dropdownRef.current?.focus();

    const width =
      type === "nav"
        ? "min(80vw,500px)"
        : type === "salary"
        ? "min(80vw,250px)"
        : type === "order_by"
        ? "min(80vw,150px)"
        : "min(80vw,400px)";

    if (type === "order_by") {
      if (window.innerWidth < 1100) {
        return setDropdownStyle((prev) => ({
          ...prev,
          right: "10px",
          left: "auto",
          width,
        }));
      } else {
        return setDropdownStyle((prev) => ({
          ...prev,
          right: `${(window.innerWidth - 1100) / 2}px`,
          left: "auto",
          width,
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
        right: "10px",
        left: "auto",
        width,
      }));
    }

    setDropdownStyle((prev) => ({
      ...prev,
      left: left,
      right: "auto",
      width,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and set the sticky state
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${
        isSticky ? "sticky" : "relative"
      } bg-color-bg bg-opacity-[0.98] top-0 pt-1`}
    >
      <div className="relative max-w-[1100px] mx-auto overflow-x-auto">
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
          <div className="user-select-none whitespace-nowrap border border-red-500 text-red-500 rounded-[32px] m-2 p-2 pt-[10px] font-extrabold cursor-zoom-out">
            ❌ Clear 20+ results
          </div>
        </div>
      </div>
      <div
        className="absolute z-10"
        style={dropdownStyle}
        ref={dropdownRef}
        onBlur={closeDropdown}
        tabIndex={0}
      >
        {dropdownType === "nav" ? (
          <NavMenuDropdown />
        ) : dropdownType === "salary" ? (
          <SalarySlider />
        ) : dropdownType === "order_by" ? (
          <DropDownList list={orderByList} />
        ) : dropdownType !== "" ? (
          <DropDownList list={[]} />
        ) : null}
      </div>
    </section>
  );
};

export default FilterBar;
