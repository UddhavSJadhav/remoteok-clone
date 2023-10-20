import React from "react";

interface CustomInputProps {
  id: string;
  type?: string;
  placeholder?: string;
  label?: string | number;
  mandatory?: boolean;
}

const CustomInput = ({
  id,
  placeholder,
  type = "text",
  label,
  mandatory = false,
}: CustomInputProps) => {
  return (
    <>
      {label && (
        <label className="font-extrabold uppercase text-sm mb-2" htmlFor={id}>
          {label}
          {mandatory && "*"}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="block w-full outline-none p-[6px] bg-[#181818] rounded-md shadow-[0_0_0_1px_rgba(255,255,255,0.1)] focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
        autoComplete="off"
      />
    </>
  );
};

export default CustomInput;
