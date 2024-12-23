"use client";
import React, { useContext, useState } from "react";
import { navlinks } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/activeSectioncontext";

function Navbar() {
  const { activeSection, setActiveSection, setLastTimeClicked } =
    useActiveSectionContext();
  return (
    <motion.div
      className="py-6 md:py-5 px-4"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="fixed rounded-full z-10 bg-zinc-100/70 dark:bg-gray-950/50 max-w-[320px] sm:min-w-[500px] left-8 lg:min-w-[500px] backdrop-blur-[0.45rem] shadow-md cursor-pointer sm:right-[50%]  sm:left-[20%] lg:right-[70%] lg:left-[30%]  ">
        <div className="flex justify-center text-[0.55rem] md:text-[0.7rem] py-2 px-1">
          {navlinks.map((link, index) => {
            return (
              <>
                <Link
                  href={link.hash}
                  onClick={() => {
                    setLastTimeClicked(Date.now());

                    setActiveSection(link.name);
                  }}
                >
                  <div
                    key={index}
                    className={`dark:hover:bg-white/10 hover:bg-gray-200 transition py-2 px-2 sm:px-3 rounded-full ${
                      activeSection === link.name
                        ? "bg-gray-200 dark:bg-white/20"
                        : ""
                    } `}
                  >
                    {link.name}
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
