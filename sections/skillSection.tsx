"use client";

import SkillButton from "@/components/skillButton";
import { skillLinks } from "@/lib/data";
import Heading from "@/components/heading";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function SkillSection() {
  const { ref, setRefs } = useSectionInView("Skills");
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
      <section id="skills" className="scroll-mt-28">
        <Heading> My Skills </Heading>
        <div className="flex flex-wrap justify-center gap-2 space-x-1 px-2 sm:px-24 lg:px-56">
          {skillLinks.map((link, index) => {
            return (
              <div key={index} className="flex">
                <SkillButton>
                  <div>
                    <Image
                      src={link.imgLink}
                      alt={"logos"}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="px-2">{link.name}</div>
                </SkillButton>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}

export default SkillSection;
