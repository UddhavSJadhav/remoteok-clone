import React from "react";

interface ToolTipProps {
  text: string;
}

const ToolTip = ({ text }: ToolTipProps) => {
  return (
    <div className="text-xs font-normal">
      <span className="block"></span>
      <span className="block rounded-full p-1 bg-color-bg">{text}</span>
    </div>
  );
};

export default ToolTip;
