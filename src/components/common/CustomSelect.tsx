import React from "react";

interface ListItem {
  label: string;
  value: string;
}

interface CustomSelectProps {
  id: string;
  label?: string | number;
  mandatory?: boolean;
  list: ListItem[];
}

const CustomSelect = ({
  id,
  label,
  mandatory = false,
  list,
}: CustomSelectProps) => {
  return (
    <>
      {label && (
        <label className="font-extrabold uppercase text-sm mb-2" htmlFor={id}>
          {label}
          {mandatory && "*"}
        </label>
      )}
      <select
        id={id}
        className="block w-full outline-none p-[6px] bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)] appearance-none border-none"
      >
        {list.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
