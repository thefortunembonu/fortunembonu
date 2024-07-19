import React from "react";
import { LuExternalLink } from "react-icons/lu";

function ProjectCard({ link, title, desc }: any) {
  return (
    <div>
      <div className="dark:bg-gray-800/60 bg-gray-100/20 shadow-md px-3 py-2 rounded-lg md:max-w-[350px]">
        <a href={link} target="_blank">
          <div className=" flex gap-2 items-center bg-gray-600/30 dark:bg-gray-800/70 px-3 py-2 rounded-lg ">
            <h1 className="font-bold dark:text-gray-50/80">{title}</h1>
            <span className="text-blue-500 ml-auto">
              <LuExternalLink />
            </span>
          </div>

          <p className="text-[0.7rem] pt-2 px-3 text-gray-700 dark:text-gray-300/90">
            {desc}
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
