"use client";
import React, { useRef } from "react";
import Heading from "@/components/heading";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function AboutSection() {
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
      <section
        id="about"
        className="scroll-mt-28 px-12 lg:px-32 sm:px-24 sm:py-6 lg:py-24"
      >
        <Heading> About Me </Heading>
        <div className="block sm:flex pt-4 md:pt-10">
          <Image
            src={"/images/Profile.jpg"}
            width={300}
            height={200}
            alt="hero Image"
            className="rounded-3xl object-cover border border-zinc-100 dark:border-4 dark:border-gray-900/40 shadow-lg mb-8 hover:scale-110 transition"
          />
          <p className=" !text-[0.7rem] text-justify body-text sm:px-4 lg:px-24 xl:pr-48 ">
            I read Computer Science in the university and it has helped me alot
            theoretically and practically in software development.
            <br />
            <br />
            I also took some classes in graphics design and I believe it is
            important when it comes to effective frontend engineering.
            <br />
            <br />
            I am passionate about learning new things and I am an impact-driven
            individual. I am also a great team-player and immensely enjoy
            working in/with teams. <br />
            <br /> I love cybersecurity and work towards being a professional
            that will ensure the digital safety of software and internet users.{" "}
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutSection;
