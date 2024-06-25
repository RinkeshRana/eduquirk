import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BsSun
          className="text-2xl cursor-pointer z-20"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoon
          className="text-2xl cursor-pointer z-20"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="backdrop-blur-sm shadow-sm dark:shadow-none bg-white/30 dark:bg-transparent flex justify-between items-center py-6 px-6 md:px-9 font-semibold dark:text-white tracking-[4px] text-sm">
      <div className="relative flex items-center contrast-200">
        <h1 className="mt-2 tracking-widest font-pompador text-xl md:text-2xl lg:text-4xl duration-500 dark:hover:text-white dark:hover:bg-gray-500/20 px-2 rounded-full cursor-pointer">
          Stalwart<span className="text-red-500 ">.</span>
        </h1>
      </div>
      <div className="flex space-x-2 items-center">
        {renderThemeChanger()}
        <a
          href="#contact"
          className="text-xs tracking-wider dark:text-[#BAC1D4] dark:bg-[#1C1D1D] px-2 py-1 md:px-4 md:py-2 rounded-full border-2 border-[#2E2E2E]/30 duration-700 hover:bg-yellow-500 hover:text-black dark:hover:bg-yellow-500 dark:hover:text-black"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
}

export default Navbar;
