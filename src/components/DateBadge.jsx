import React from "react";

const DateBadge = ({ year, month, day }) => {
  return (
    <>
      {/* Date Badge */}

      <div className="font-semibold text-xs tracking-[0.8px] leading-none ">
        {month}
      </div>
      <div className="text-gray-800 font-bold text-2xl leading-tight mt-0.5">
        {day}
      </div>
      <div className="font-semibold text-xs tracking-[0.8px] leading-none ">
        {year}
      </div>
    </>
  );
};

export default DateBadge;
