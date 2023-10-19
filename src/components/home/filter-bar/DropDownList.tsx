import React from "react";

interface ListItem {
  label: string;
  value: string;
}

interface DropDownListProps {
  list: ListItem[];
}

const DropDownList = ({ list }: DropDownListProps) => {
  return (
    <div className="bg-color-bg rounded-xl overflow-y-auto p-1 max-h-96 shadow-[0_0_0_1px_#30363d]">
      {list.map(({ label, value }) => (
        <div
          key={value}
          className="p-[7px] text-base text-left font-extrabold cursor-cell rounded-xl text-ellipsis whitespace-nowrap hover:bg-color-bg-hover"
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default DropDownList;
