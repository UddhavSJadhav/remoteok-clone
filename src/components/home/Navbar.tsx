import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-center px-1 py-4">
      <span className="hover:opacity-80">
        <Link href="/" className="ps-1 pe-2 font-pacifico text-4xl mt-2">
          <span> r</span>
          <span className="hidden sm:contents">emote</span>
        </Link>
        <Link
          href="/"
          className="px-1 text-2xl font-extrabold border-s-4 border-white leading-5"
        >
          <span>OK</span>
          <span className="text-xs ms-1">®</span>
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
