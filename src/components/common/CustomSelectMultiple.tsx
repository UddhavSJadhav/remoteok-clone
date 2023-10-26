import Image from "next/image";
import React from "react";

interface ListItem {
  label: string;
  value: string;
}

interface CustomSelectMultipleProps {
  id: string;
  label?: string | number;
  placeholder?: string;
  mandatory?: boolean;
  list: ListItem[];
}

const CustomSelectMultiple = ({
  id,
  label,
  mandatory = false,
  list,
  placeholder = "",
}: CustomSelectMultipleProps) => {
  return (
    <>
      {label && (
        <label className="font-extrabold uppercase text-sm mb-2" htmlFor={id}>
          {label}
          {mandatory && "*"}
        </label>
      )}
      <div className="flex flex-wrap w-full outline-none p-1 bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]">
        {[1].map((e) => (
          <div
            key={e}
            className="relative bg-color-bg user-select-none whitespace-nowrap m-2 rounded-full font-extrabold border-2 border-solid border-[#30363d] py-1 px-2 cursor-zoom-out"
          >
            🤓 Test
            <Image
              src="/assets/times-circle.svg"
              alt="times-circle"
              width={100}
              height={100}
              className="inline-block w-6 aspect-square invert opacity-20 mx-1 ps-1 pe-[2x] py-[1px]"
            />
          </div>
        ))}
        <input
          id={id}
          placeholder={placeholder}
          className="bg-transparent outline-none flex-grow min-w-[200px]"
          autoComplete="off"
        />
        <select id={id} className="hidden">
          {list.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CustomSelectMultiple;
