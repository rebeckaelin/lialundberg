import loveletter from "../assets/loveletter.png";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import { client } from "../client";
import { PortableText } from "@portabletext/react";

const query = `*[_type == "signupInfo"][0]{
  Heading,
  Body,
  "Image": Image.asset->url,
  }`;

const Signup = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    client.fetch(query).then(setContent);
  }, []);

  if (!content) return <div>Loading…</div>;
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly py-10 px-6 bg-treatment">
        {/* Image */}
        <div className=" w-[200px] h-[200px] my-4 flex items-center justify-center">
          <img src={content.Image} alt="" className="scale-200" />
        </div>
        {/* Text content */}
        <div className="w-full lg:w-1/2">
          {/* Subtil linje eller ornament som övergång */}
          <h2 className="text-3xl sm:text-2xl pb-6 font-second font-semibold text-center lg:text-left">
            {content.Heading}
          </h2>

          <div className="font-second text-base leading-relaxed text-black/80 space-y-4 text-center lg:text-left">
            <PortableText value={content.Body} />
          </div>
          <div className="flex gap-5 mt-6 mb-8 justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/forfattarinnaLialundberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.instagram.com/lialundberg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="mailto:lia_lundberg@outlook.com"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="E-post"
            >
              <FaEnvelope size={32} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
