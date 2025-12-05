import { PortableText } from "@portabletext/react";
import { useState, useEffect } from "react";
import { client } from "../client";
import DividerLine from "./DividerLine";

const welcomeQuery = `*[_type == "welcomeSection"][0]{
  title,
  body,
  signature
}`;

const WelcomeSection = () => {
  const [welcomeData, setWelcomeData] = useState(null);

  useEffect(() => {
    client.fetch(welcomeQuery).then((data) => {
      setWelcomeData(data);
    });
  }, []);

  if (!welcomeData) return <div>Loading…</div>;
  return (
    <>
      <section className="bg-white py-0 px-6 my-10 ">
        <div className="max-w-3xl mx-auto">
          <DividerLine />
          <h2 className="text-3xl sm:text-4xl py-4  font-semibold text-center">
            {welcomeData.title}
          </h2>
          <div className="space-y-6 text-lg text-black/80 leading-relaxed text-center">
            <PortableText value={welcomeData.body} />
            <p className=" pt-2">{welcomeData.signature}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
