"use client"
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoCart, IoNotifications } from "react-icons/io5";
import { MdEmail, MdSupportAgent } from "react-icons/md";
import Authentication from "../Authentication/Authentication";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="bg-zinc-100 dark:bg-transparent">
      <div className="max-w-[1250px] mx-auto space-y-4 lg:flex  justify-between items-center py-3 ">
        <div className="flex justify-center lg:justify-normal gap-2 dark:text-[#a1aed4]">
          <p className="flex items-center gap-1 text-lg font-semibold">
            <MdSupportAgent className="text-2xl" /> Support{" "}
          </p>
          <span className="text-lg font-semibold">|</span>
          <p className="flex items-center gap-1 text-lg font-semibold">
            <MdEmail className="text-2xl" /> info@vgaming.com
          </p>
        </div>
        <div className="flex justify-center lg:justify-normal items-center gap-2 dark:text-[#a1aed4]">
          <div>
            <button className="relative">
              <IoCart className="text-2xl" />
              <span className="flex justify-center items-center absolute -top-1 -right-1.5 w-4 h-4 text-xs text-white bg-red-500 rounded-full p-0.5">2 </span>
            </button>
          </div>{" "}
          <span className="text-lg font-semibold">|</span>
          <div>
            <button className="relative">
              <IoNotifications className="text-2xl mt-1" />
              <span className="flex justify-center items-center absolute -top-1 -right-1.5 w-4 h-4 text-xs text-white bg-red-500 rounded-full p-0.5">20</span>
            </button>
          </div>
          <span className="text-lg font-semibold">|</span>
          <div>
            <button onClick={handleOpen} className="flex items-center text-lg font-semibold gap-2">
              <FaUser className="text-xl" />
              Login
            </button>
          </div>
        </div>
      </div>
      
      {
        isOpen && <Authentication isOpen={isOpen} onClose={() => setIsOpen(false)} />
      }
    </div>
  );
};

export default TopBar;
