import { useState, useEffect } from "react";
import { client } from "../client";

const Reseller = ({ book }) => {
  // book prop e.g. "LillaLia" or "Ebony"
  const [resellers, setResellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "reseller" && $book in books]{
      _id,
      store,
      address,
      books
    }`;

    client
      .fetch(query, { book })
      .then((data) => {
        setResellers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch resellers:", err);
        setLoading(false);
      });
  }, [book]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
      {resellers.map((r) => (
        <div
          key={r._id}
          className="bg-white rounded-xl p-8 shadow-lg w-[250px]"
        >
          <div className="w-14 h-14 bg-[#7d9d8c]/10 mx-auto rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-6 h-6 text-[#7d9d8c]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-second font-semibold text-black mb-3">
            {r.store}
          </h3>
          <p className="font-second text-black/80 leading-relaxed">
            {r.address}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reseller;
