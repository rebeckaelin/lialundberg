import React from "react";
import DateBadge from "./DateBadge";

const UpdatePosts = ({ postDate, title, description }) => {
  const date = new Date(postDate);
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAJ",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OKT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  return (
    <>
      <div className="flex flex-row gap-7 pl-6 w-full pb-10 justify-between text-black font-second border-b mb-10">
        <div className="font-second min-w-[45px] min-h-[70px] bg-white p-2 rounded border-1 border-black text-center  shadow-[rgba(0,0,0,0.35)_0px_5px_15px_0px]">
          <DateBadge year={year} month={month} day={day} />
        </div>
        {/* Title and Description */}
        <div className=" flex-1 max-h-[90px] mt-0">
          <div
            className="text-black font-semibold text-xl mb-2 leading-tight text-ellipsis line-clamp-1"
            title={title}
          >
            {title}
          </div>
          <div
            className="w-full text-black text-[13px] leading-relaxed text-ellipsis line-clamp-3 opacity-95"
            title={description}
          >
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePosts;
