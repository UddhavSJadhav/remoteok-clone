import Link from "next/link";
import React from "react";

const CloneDetails = () => {
  return (
    <div className="fixed z-[999] bottom-0 right-0 bg-white p-[7px] text-black text-xs font-bold rounded-tl-xl">
      <Link href="https://remoteok.com/">Original</Link>{" "}
      <span className="text-base leading-4">|</span>
      <Link href="/admin" className="mx-1">
        Admin
      </Link>
      <span className="text-base leading-4">|</span> Clone by{" "}
      <Link
        href="https://github.com/UddhavSJadhav"
        target="_blank"
        rel="noopener noreferrer"
      >
        @UddhavSJadhav
      </Link>
    </div>
  );
};

export default CloneDetails;
