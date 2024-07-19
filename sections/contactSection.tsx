"use client";

import Heading from "@/components/heading";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { BsFacebook, BsGithub, BsSend } from "react-icons/bs";
import { IoCall, IoMail } from "react-icons/io5";

function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65 }}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section id="contact" className="scroll-mt-32 pb-20">
        <Heading>Contact Me</Heading>

        <div className="body-text flex items-center flex-col">
          <p
            className="flex  items-center  gap-2  body-text text-center  my-3
          "
          >
            <IoCall /> + 234 (0) 706 691 2078
          </p>

          <span
            className="flex  items-center  gap-2 body-text text-center  my-3
         "
          >
            <IoMail /> <h5>fortunembonu99@gmail.com</h5>
          </span>

          <p
            className="text-gray-600 text-center text-3xl my-3
           dark:text-gray-400 flex gap-4 justify-center"
          >
            <a
              className="hover:scale-105 shadow-md rounded-full"
              href={"https://web.facebook.com/thefortunembonu/"}
              target="_blank"
            >
              <BsFacebook />
            </a>
            <a
              className="hover:scale-105 rounded-full shadow-md"
              href={"https://github.com/thefortunembonu/"}
              target="_blank"
            >
              <BsGithub />
            </a>
          </p>

          <div className="pt-4">
            <p className="text-xs text-gray-500">
              &copy; 2024. The Fortune Mbonu
            </p>
            <p className="text-xs text-gray-500 text-center">
              All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactSection;
