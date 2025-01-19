"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div className=" bg-[#b8b8b8] dark:bg-[#252f5a] ">
      <div className="max-w-[1250px] mx-auto  items-center">
        <div className="flex justify-between">
          <div className="ml-10">
            <a href="#" className="p-2">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="flex space-x-10 items-center">
            {navItems.map((item,index) => (
              <Link
              key={index}
                href={item.href}
                className={(pathname === item.href ? "text-red-600 border-y-2 border-opacity-100 py-3 " : "") + "px-2 font-bold uppercase border-red-600 hover:py-3 hover:text-red-600 hover:border-y-2 border-opacity-0 hover:border-opacity-100 duration-300"}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-gradient-to-l to-red-600 text-white from-red-500 py-3 px-8 rounded-full text-base font-semibold uppercase hover:bg-gradient-to-l hover:to-red-500 hover:from-red-600 duration-300 hover:-translate-y-0.5">
              Join us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
