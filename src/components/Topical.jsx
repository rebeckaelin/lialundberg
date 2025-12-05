import React, { useEffect, useState } from "react";
import DateBadge from "./DateBadge";
import { client } from "../client";

// ---- Month names ----
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

const Topical = () => {
  const [data, setData] = useState(null);

  // ---- Fetch event from Sanity ----
  useEffect(() => {
    async function fetchTopical() {
      const result = await client.fetch(`
        *[_type == "topical" && date > now()][0]
      `);

      setData(result);
    }

    fetchTopical();
  }, []);

  // If nothing returned OR event expired
  if (!data) return null;

  // Format date
  const eventDate = new Date(data.date);
  const today = new Date();
  if (eventDate < today) return null;

  const month = monthNames[eventDate.getMonth()];
  const year = eventDate.getFullYear();
  const day = eventDate.getDate();

  return (
    <section className="text-center bg-primary px-2 py-5 font-second text-white font-semibold leading-relaxed">
      <p>{data.title}</p>
    </section>
  );
};

export default Topical;

// <section className="flex items-center justify-center gap-10 py-4 my-4 shadow-md rounded-lg  mx-auto w-1/3 bg-[#f5f2ed] border-1 border-[#d4e2db] ">
//   <div className="font-second leading-relaxed">
//     <p className="uppercase text-lg ">på gång:</p>
//     <p className="font-semibold mt-2">{data.title}</p>
//     <p>{data.location}</p>
//   </div>
//   <div className="font-second w-[45px] min-h-[70px] bg-white p-2 rounded border-1 border-black text-center shadow-[rgba(0,0,0,0.35)_0px_5px_15px_0px]">
//     <DateBadge year={year} month={month} day={day} />
//   </div>
// </section>
