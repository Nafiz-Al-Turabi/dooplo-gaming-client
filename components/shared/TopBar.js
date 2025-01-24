import React from "react";
import { FaUser } from "react-icons/fa";
import { IoCart, IoNotifications } from "react-icons/io5";
import { MdEmail, MdSupportAgent } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-zinc-50 dark:bg-transparent">
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
            <button>
              <IoCart className="text-2xl" />
            </button>
          </div>{" "}
          <span className="text-lg font-semibold">|</span>
          <div>
            <button>
              <IoNotifications className="text-2xl mt-1" />
            </button>
          </div>
          <span className="text-lg font-semibold">|</span>
          <div>
            <button className="flex items-center text-lg font-semibold gap-2">
              <FaUser className="text-xl" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
