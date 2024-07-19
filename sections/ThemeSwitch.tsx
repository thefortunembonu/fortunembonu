"use client";

import React, { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { WiMoonWaningCrescent3 } from "react-icons/wi";

type Theme = "light" | "dark";

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme("dark");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="z-10 fixed bottom-[50px] right-[40px] px-2 py-2 mx-5 sm:ml-96 bg-zinc-100 rounded-lg shadow-lg cursor-pointer hover:scale-110  dark:bg-gray-700"
      >
        {theme === "light" ? (
          <div className="">
            <WiMoonWaningCrescent3 />
          </div>
        ) : (
          <div className="-rotate-12">
            <IoSunny />
          </div>
        )}
      </button>
    </div>
  );
}

export default ThemeSwitch;
