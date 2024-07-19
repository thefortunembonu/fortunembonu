"use client";
import ExpCard from "@/components/expCard";
import Heading from "@/components/heading";
import { Expdata } from "@/lib/expdata";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExpSection() {
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
      transition={{ delay: 0.45 }}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="px-12"
    >
      <section className="scroll-mt-28" id="experience">
        <Heading>My Experiences</Heading>
        <div className="flex justify-center pt-4 md:pt-6">
          <div className=" space-y-6">
            {Expdata.map((expdata, index) => {
              return (
                <ExpCard
                  key={index}
                  date={expdata.date}
                  job_title={expdata.job_title}
                  icon={expdata.icon}
                  info={expdata.info}
                  firm={expdata.firm}
                />
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
