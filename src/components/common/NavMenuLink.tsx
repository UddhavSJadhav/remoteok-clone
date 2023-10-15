import Link from "next/link";
import React from "react";

interface NavMenuLinkProps {
  text: string;
  href: string;
}

const NavMenuLink = ({ text, href }: NavMenuLinkProps) => {
  return (
    <Link
      href={href}
      className="inline-block text-[15px] w-1/2 max-w-[50%] py-1 px-[14px] text-ellipsis overflow-hidden whitespace-nowrap rounded-xl hover:bg-red-500"
    >
      {text}
    </Link>
  );
};

export default NavMenuLink;
