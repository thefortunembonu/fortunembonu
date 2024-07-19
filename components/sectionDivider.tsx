"use client";
import React from "react";
import { motion } from "framer-motion";

function sectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-gray-300 mx-auto my-8 w-1 h-10 rounded-full  flex items-center dark:bg-gray-700 "
    ></motion.div>
  );
}

export default sectionDivider;
