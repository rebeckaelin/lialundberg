import { useEffect, useState } from "react";
import { client } from "../client";
import { PortableText } from "@portabletext/react";

const query = `*[_type == "aboutPage"][0]{
  section1Heading,
  section1Body,
  "section1ImageUrl": section1Image.asset->url,

  section2Heading,
  section2Body,
  "section2ImageUrl": section2Image.asset->url,

  section3Heading,
  section3Body,
  "section3ImageUrl": section3Image.asset->url,

  section4Heading,
  section4Body,
  "section4ImageUrl": section4Image.asset->url
}`;

const AboutPage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    client.fetch(query).then(setContent);
  }, []);

  if (!content) return <div>Loading…</div>;

  return (
    <>
      <section className="text-black/80">
        {/* Section 1 */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 py-10 px-6 bg-primary/50">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl text-black pb-6 font-second font-semibold text-center lg:text-left">
              {content.section1Heading}
            </h2>
            <div className="font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
              <PortableText value={content.section1Body} />
            </div>
          </div>
          <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
            <img
              src={content.section1ImageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col lg:flex-row items-center justify-evenly py-10 gap-10 px-6 pb-10 lg:pt-10">
          <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
            <img
              src={content.section2ImageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl text-black pb-6 font-second font-semibold text-center lg:text-left">
              {content.section2Heading}
            </h2>
            <div className="font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
              <PortableText value={content.section2Body} />
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 py-10 px-6 bg-primary/50">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl text-black pb-6 font-second font-semibold text-center lg:text-left">
              {content.section3Heading}
            </h2>
            <div className="font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
              <PortableText value={content.section3Body} />
            </div>
          </div>
          <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
            <img
              src={content.section3ImageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col lg:flex-row items-center justify-evenly py-5 px-6 lg:my-10">
          <div className="w-[300px] lg:w-[400px] h-auto">
            <img
              src={content.section4ImageUrl}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col sm:justify-start lg:w-1/2 items-center lg:items-start gap-6 pt-4">
            {/* <div className=""> */}
            <h2 className="text-3xl sm:text-4xl text-black font-second font-semibold text-center lg:text-left lg:text-left">
              {content.section4Heading}
            </h2>
            <div className="font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
              <PortableText value={content.section4Body} />
            </div>
            {/* </div> */}
            <div className="">
              <button className="w-[250px] font-second flex items-center justify-center gap-2 p-4 bg-[#2c3e50] text-white shadow-lg tracking-wider rounded-lg cursor-pointer hover:font-semibold text-lg">
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/lialundberg/"
                >
                  {" "}
                  Inspireras här
                </a>
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutPage;
