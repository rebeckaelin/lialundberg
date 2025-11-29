import React from "react";
import DateBadge from "./DateBadge";

const EventCard = ({
  eventDate,
  title,
  location,
  //   primaryColor = "#eee6da",
}) => {
  const date = new Date(eventDate);
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
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="w-[350px] h-[240px] pr-[15px] pb-[15px] box-border flex gap-15  ">
      <div className="flex flex-col h-full w-full">
        <div className="h-[50px] w-full rounded"></div>

        <div
          className="relative flex-1 h-[100px] w-full p-8 shadow-lg border-4 border-primary rounded-lg"
          //   style={{ backgroundColor: primaryColor }}
        >
          {/* Date Badge */}
          <div className="font-second absolute -top-7 right-[25px] bg-white p-2 rounded border-1 border-black text-center min-w-[45px] shadow-[rgba(0,0,0,0.35)_0px_5px_15px_0px]">
            <DateBadge year={year} month={month} day={day} />
            {/* <div className="font-semibold text-xs tracking-[0.8px] leading-none ">
              {month}
            </div>
            <div className="text-gray-800 font-bold text-2xl leading-tight mt-0.5">
              {day}
            </div>
            <div className="font-semibold text-xs tracking-[0.8px] leading-none ">
              {year}
            </div> */}
          </div>

          {/* Content Area */}
          <div className="text-black font-second">
            {/* Title and location */}
            <div className=" flex-1 max-h-[90px] mt-0">
              <div
                className="text-black font-semibold text-xl mb-6 leading-tight text-ellipsis line-clamp-1"
                title={title}
              >
                {title}
              </div>
              <div
                className="w-full text-black text-sm leading-relaxed text-ellipsis line-clamp-3 opacity-95"
                title={location}
              >
                {location}
              </div>
            </div>

            {/* Link Button */}
            {/* {linkUrl && (
              <div className="mt-auto mt-3 text-black">
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black  py-2 px-5 rounded-full no-underline text-[11px] uppercase tracking-[0.6px] font-semibold hover:bg-gray-100 transition-colors"
                  style={{ color: primaryColor }}
                >
                  {linkText} →
                </a>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
