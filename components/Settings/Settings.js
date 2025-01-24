"use client";

import { useState } from "react";
import { IoIosSunny, IoMdSettings } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useTheme } from "../Theme/ThemeProvider";
import { FaCloudMoon } from "react-icons/fa";

const Settings = () => {
  const [isOpen, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleSettings = () => {
    setOpen(!isOpen);
  };
  return (
    <div
      className={`fixed top-48 lg:top-56 z-40 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } right-0`}
    >
      <div className="bg-zinc-100 dark:bg-[#252f5a] p-4  w-40">
        <h1 className="text-xl font-bold border-b pb-2">Settings</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-10 items-center">
            <p>Theme:</p>
            <button
              onClick={toggleTheme}
              className="relative p-1 rounded-lg bg-background hover:bg-gray-100 dark:hover:bg-gray-800
                transition-colors duration-300 ease-in-out"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5 overflow-hidden">
                {/* Sun Icon */}
                <div
                  className={`absolute transform transition-all duration-500 ease-in-out 
          ${
            theme === "dark"
              ? "rotate-[-120deg] translate-y-8 opacity-0"
              : "rotate-0 translate-y-0 opacity-100"
          }`}
                >
                  <IoIosSunny
                    className="w-5 h-5 text-yellow-500"
                    strokeWidth={2}
                  />
                </div>

                {/* Moon Icon */}
                <div
                  className={`absolute transform transition-all duration-500 ease-in-out
          ${
            theme === "dark"
              ? "rotate-0 translate-y-0 opacity-100"
              : "rotate-[120deg] -translate-y-8 opacity-0"
          }`}
                >
                  <FaCloudMoon
                    className="w-5 h-5 text-gray-300"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <button
        className="w-8 h-8 text-white bg-zinc-400 dark:bg-[#121b42] flex justify-center items-center absolute top-0 -left-8 rounded-l-md"
        onClick={toggleSettings}
      >
        {isOpen ? (
          <IoCloseOutline className="text-xl" />
        ) : (
          <IoMdSettings className="text-xl animate-spin" />
        )}
      </button>
    </div>
  );
};

export default Settings;
