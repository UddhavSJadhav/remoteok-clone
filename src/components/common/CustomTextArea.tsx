import React from "react";

interface CustomTextAreaProps {
  id: string;
  placeholder?: string;
  label?: string | number;
  mandatory?: boolean;
}

const CustomTextArea = ({
  id,
  placeholder,
  label,
  mandatory = false,
}: CustomTextAreaProps) => {
  return (
    <>
      {label && (
        <label className="font-extrabold uppercase text-sm mb-2" htmlFor={id}>
          {label}
          {mandatory && "*"}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        className="block w-full min-h-[150px] outline-none p-[6px] bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
        autoComplete="off"
      ></textarea>
    </>
  );
};

export default CustomTextArea;
