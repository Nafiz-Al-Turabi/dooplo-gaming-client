"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/play", label: "Play" },
    { href: "/tournaments", label: "Tournaments" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-zinc shadow dark:shadow-none dark:bg-[#252f5a] ">
      <div className="max-w-[1250px] mx-auto flex justify-between items-center py-4">
        <Link href="/" className="ml-2">
          {/* <img src="/images/logo.png" alt="logo" className="h-8" /> */}
          <h1 className="text-2xl font-bold text-red-600"> <span className="text-3xl font-extrabold">V</span><span className="dark:text-[#a1aed4]">Gamin</span>g</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={
                (pathname === item.href
                  ? "text-red-600 border-y-2 border-opacity-100 py-3 "
                  : "") +
                " dark:text-[[#a1aed4] px-2 font-bold uppercase border-red-600 hover:py-3 hover:text-red-600 hover:border-y-2 border-opacity-0 hover:border-opacity-100 duration-300"
              }
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-gradient-to-l to-red-600 text-white from-red-500 py-3 px-8 rounded-full text-base font-semibold uppercase hover:bg-gradient-to-l hover:to-red-500 hover:from-red-600 duration-300 hover:-translate-y-0.5">
            Join us
          </button>
          
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-md"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenuOutline className="text-2xl " />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`block lg:hidden fixed top-40 right-0 h-full bg-white dark:bg-[#252f5a] shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 w-3/4 max-w-sm`}
      >
        <div className="flex flex-col items-center space-y-6 p-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={
                (pathname === item.href
                  ? "text-red-600 border-y-2 border-opacity-100 py-3 "
                  : "") +
                "text-lg font-bold uppercase border-red-600 hover:py-3 hover:text-red-600 hover:border-y-2 border-opacity-0 hover:border-opacity-100 duration-300"
              }
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="bg-gradient-to-l to-red-600 text-white from-red-500 py-3 px-8 rounded-full text-base font-semibold uppercase hover:bg-gradient-to-l hover:to-red-500 hover:from-red-600 duration-300 hover:-translate-y-0.5"
            onClick={toggleMenu}
          >
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
