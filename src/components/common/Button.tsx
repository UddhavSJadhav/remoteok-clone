import React from "react";

interface ButtonProps {
  text: string;
  bg_color?: string;
  bg_color_hover?: string;
}

const Button = ({ text, bg_color, bg_color_hover }: ButtonProps) => {
  return (
    <button
      className={`px-5 py-4 text-xs ${bg_color || "bg-color-primary"} hover:${
        bg_color_hover || "bg-color-primary-hover"
      } rounded`}
    >
      {text}
    </button>
  );
};

export default Button;
