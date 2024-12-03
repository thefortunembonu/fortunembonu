"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

export default function HeaderSection() {
  const { ref, setRefs } = useSectionInView("Home");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      ref={setRefs}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      id="hero"
      className="flex justify-center pt-10 sm:pt-10"
    >
      <div className="md:grid md:grid-cols-2 flex flex-col px-10 md:pt-24 sm:pb-6 lg:pb-6 sm:px-24 lg:px-48  text-center items-center">
        <span className=" text-left order-2 md:order-none">
          <h1 className=" text-3xl sm:text-4xl lg:text-6xl font-bold ">
            Hello, I am Fortune Mbonu
          </h1>
          <br />
          <span className="body-text">
            I am passionate about designing and building software products. I am
            well-versed in the
            <span className=" font-bold px-1">Django and NextJS</span>
            frameworks.
          </span>
          <div className="flex py-4 gap-2">
            <Link href={"#contact"}>
              <button className="btn-primary">
                Contact Me
                <IoCall />
              </button>
            </Link>

            <a
              href={"/CV.jpg"}
              download={true}
              className="btn-primary animate-pulse cursor-pointer"
            >
              <h2 className="">Download CV</h2>
              <span>
                <BsDownload />
              </span>
            </a>
          </div>
        </span>

        <div className=" flex ml-auto order-1 md:order-none">
          <Image
            src={"/images/myImage.jpg"}
            width={300}
            height={200}
            priority={true}
            alt="hero Image"
            className=" relative rounded-3xl object-cover w-full border border-zinc-100 dark:border-4 dark:border-gray-900/40 shadow-lg mb-8 p-1 hover:scale-105 transition"
          />

          <div className=" absolute sm:hidden top-[10px] md:top-[20px] w-24 h-24 md:w-40 md:h-40 dark:bg-purple-800/20 bg-purple-800/10 rounded-full transition"></div>
          <div className=" absolute sm:hidden bottom-[360px] md:bottom-[100px] md:right-[100px] right-[10px] w-36 h-36 dark:bg-pink-800/20 bg-pink-800/20 rounded-full transition"></div>
          <div className=" absolute bottom-[380px] md:bottom-[100px]  w-20 h-20 dark:bg-green-800/10 sm:hidden bg-green-800/20 rounded-full transition"></div>
        </div>
      </div>
    </motion.section>
  );
}
