import React from "react";

function ExpCard({ date, firm, job_title, info, icon }: any) {
  return (
    <div className="group ">
      <div className="flex items-center gap-6 group-even max-w-[500px] min-w-[320px]">
        <div className="group-even:order-2">
          <div className="shadow-md rounded-lg px-4 py-4 dark:bg-gray-800 ">
            <span className=" font-poppins text-[0.7rem] text-gray-500 dark:text-gray-300">
              {date}
            </span>
            <h2 className="font-bold text-sm dark:text-gray-50/80 ">{firm}</h2>
            <h2 className="text-[0.7rem] font-medium pt-2 ">{job_title}</h2>
            <p className="text-[0.7rem] pt-2 text-gray-700/70 dark:text-gray-300/90">
              {info}
            </p>
          </div>
        </div>
        <div className="group-even:order-1 group-even:ml-auto rounded-full dark:bg-gray-700 py-3 px-3 shadow-md ">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default ExpCard;
