import React from "react";

interface Props {
  children: React.ReactNode;
}

function SkillButton({ children }: Props) {
  return (
    <div
      className=" flex items-center justify-center px-4 py-2 rounded-full border
         border-gray-400/10 shadow-md text-xs hover:scale-105
          transition hover:bg-zinc-200 dark:bg-gray-800"
    >
      {children}
    </div>
  );
}

export default SkillButton;
