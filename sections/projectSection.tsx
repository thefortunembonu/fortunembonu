"use client";

import Heading from "@/components/heading";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/components/projectCard";
import { ProjectData } from "@/lib/projectdata";

import { useSectionInView } from "@/lib/hooks";

function ProjectSection() {
  const { ref, setRefs } = useSectionInView("Projects");
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
      ref={setRefs}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section id="projects" className="scroll-mt-28 px-6 sm:px-24 lg:px-48">
        <div>
          <Heading>My Projects</Heading>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {ProjectData && ProjectData.length > 0 ? (
              ProjectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title.slice(0, 25) + "..."}
                  desc={project.desc.slice(0, 100) + "..."}
                  link={project.link}
                />
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ProjectSection;
