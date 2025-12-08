import { useEffect, useState } from "react";
import { client } from "../client";
import TestimonialCarousel from "../components/TestimonialCarousel";
import DividerLine from "../components/DividerLine";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";

const bookTestimonialsQuery = `*[_type == "testimonial" && category == "book"]{
  text,
  name
}`;

const ebonyQuery = `*[_type == "ebonyPage"][0]{
  hero { title, subtitle, shortDescription, image {
        asset-> {
          url
        }
      },  },
  synopsis { body, highlight },
  badges
}`;

const Ebony = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [ebonyPage, setEbonyPage] = useState(null);

  useEffect(() => {
    client.fetch(bookTestimonialsQuery).then(setTestimonials);
  }, []);

  useEffect(() => {
    client.fetch(ebonyQuery).then(setEbonyPage);
  }, []);

  if (!ebonyPage) return <div>Loading…</div>;

  const { hero, synopsis } = ebonyPage;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2c3e50] py-20 px-6">
        {/* Decorative background elements */}
        {/* <div className="absolute top-0 right-0 w-96 h-96 bg-[#7d9d8c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl"></div> */}

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Book Cover - Left side on desktop */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative group">
                {/* Glow effect behind book */}
                <div className="absolute inset-0 bg-[#7d9d8c]/30 rounded-2xl blur-2xl"></div>

                {/* Book cover */}
                <div className="relative">
                  <img
                    src={hero.image.asset.url}
                    alt={hero.title + " book cover"}
                    className="w-[280px] sm:w-[320px] lg:w-[360px] h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Content - Right side on desktop */}
            <div className="lg:w-3/5 text-white">
              {/* Genre badge */}
              <Badge text="Psykologisk thriller" />
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-main font-bold my-6">
                {hero.title}
              </h1>
              {/* Tagline */}
              <p className="text-xl sm:text-2xl font-second text-white mb-8 italic">
                {hero.subtitle}
              </p>
              {/* Short hook */}
              <p className="text-lg font-second leading-relaxed mb-8 text-gray-200">
                {hero.shortDescription}
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col items-center sm:flex-row md:items-start gap-4">
                <a
                  href="#buy"
                  className="px-8 py-4 w-[250px] text-center bg-[#7d9d8c] text-white font-second text-lg font-semibold rounded-lg hover:bg-[#6a8576] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Köp boken
                </a>
                <a
                  href="#synopsis"
                  className="px-8 py-4 w-[250px] text-center bg-white text-black backdrop-blur-sm font-second text-lg  rounded-lg hover:font-semibold hover:bg-gray-100"
                >
                  Läs mer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis Section */}
      <section id="synopsis" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-second font-semibold text-black mb-4">
              Om Boken
            </h2>
            <DividerLine />
          </div>

          <div className="prose prose-lg max-w-none mt-10">
            <div className="prose prose-lg max-w-none mt-10">
              {synopsis.body.map((block, index) => (
                <p
                  key={index}
                  className="font-second text-lg leading-relaxed text-black/80 mb-6"
                >
                  {block.children?.map((child) => child.text).join("")}
                </p>
              ))}

              {synopsis.highlight && (
                <div className="bg-[#7d9d8c]/10 border-l-4 border-[#7d9d8c] p-6 rounded-r-lg mt-8">
                  <p className="font-second text-lg leading-relaxed text-[#2c3e50] font-semibold italic">
                    {synopsis.highlight}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className=" px-6  flex flex-col items-center ">
        {/* <div className="max-w-6xl"> */}
        {/* <h2 className="text-3xl sm:text-4xl font-second font-semibold text-black">
          Teman i Boken
        </h2> */}
        {/* <DividerLine /> */}
        <div className="flex gap-5 pt-6 max-w-4xl justify-center flex-wrap">
          {ebonyPage.badges?.map((badgeText, index) => (
            <Badge key={index} text={badgeText} />
          ))}
        </div>

        {/* </div> */}
      </section>
      {/* <div className="w-full h-[10px] bg-[#2c3e50] mb-6 "></div> */}
      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-second font-semibold text-black text-center mb-4 mt-15">
              Vad Läsarna Säger
            </h2>
            <DividerLine />
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </section>
      )}

      {/* Where to Buy Section */}
      <section id="buy" className="py-20 px-6 bg-[#2c3e50] ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-second font-semibold text-white mb-6">
            Köp Ebony
          </h2>
          <p className="text-lg font-second text-white mb-12">
            Finns tillgänglig både online och i fysiska butiker
          </p>

          <div className="flex justify-center mb-8">
            <Link
              to="/webbshop"
              className="px-8 py-4 bg-primary text-white font-second w-[260px] hover:font-semibold rounded-lg hover:font-semiboldshadow-lg"
            >
              Köp i min egen webbshop
            </Link>
          </div>
          {/* Add your store buttons/links here */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.adlibris.com/sv/bok/ebony-9789152798300"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black/80 font-second w-[250px] hover:font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Adlibris
            </a>
            <a
              href="https://www.bokus.com/bok/9789152798300/ebony/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black/80 font-second w-[250px] hover:font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Bokus
            </a>
            <a
              href="https://www.akademibokhandeln.se/bok/ebony/9789152798300"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black/80 font-second w-[250px] hover:font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Akdemibokhandeln
            </a>
          </div>

          <div className="">
            <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
              <div className="bg-white rounded-xl p-8 shadow-lg w-[250px]">
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
                  Riddarborgen Hälsocenter
                </h3>
                <p className="font-second text-black/80 leading-relaxed">
                  Residensgatan 1A Umeå
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg w-[250px]">
                <div className="w-14 h-14 bg-[#7d9d8c]/10 mx-auto  rounded-full flex items-center justify-center mb-6">
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
                  Ica Mariehem
                </h3>
                <p className="font-second text-black/80 leading-relaxed">
                  Mariehemsvägen 8 Umeå
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg w-[250px]">
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
                  Gårdshem
                </h3>
                <p className="font-second text-black/80 leading-relaxed">
                  Kungsgatan 67 (Utopia) Umeå
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ebony;
