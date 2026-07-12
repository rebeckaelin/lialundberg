import { useEffect, useState } from "react";
import { client } from "../client";
import DividerLine from "../components/DividerLine";
import WhereToBuy from "../components/WhereToBuy";
import { ChevronRight } from "lucide-react";

// Book images will come from Sanity
// We'll maintain a consistent size: width 360px (desktop), scale down on mobile

const LillaLia = () => {
  const [pageData, setPageData] = useState(null);

  const links = [
    {
      label: "Adlibris",
      href: "https://www.adlibris.com/se/sok?filter=author%3ALia+Lundberg",
    },
    {
      label: "Bokus",
      href: "https://www.bokus.com/cgi-bin/product_search.cgi?authors=Lia%20Lundberg",
    },
    {
      label: "Akademibokhandeln",
      href: "https://www.akademibokhandeln.se/forfattare/lia-lundberg",
    },
  ];

  const webbshop = { label: "Köp i min egen webbshop", href: "/webbshop" };

  const query = `*[_type == "lillaLiaPage"][0]{
    hero { badge, title, subtitle, description },
    books[]{ 
      title, 
      image {
        asset-> {
          url
        }
      }, 
      description, 
      themes 
    },
    sensitivityCards[]{ title, description }
  }`;

  useEffect(() => {
    client.fetch(query).then(setPageData);
  }, [query]);

  if (!pageData) return <div>Loading…</div>;

  const { hero, books, sensitivityCards } = pageData;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7d9d8c]/20 via-purple-50 to-blue-50 py-16 px-6">
        {" "}
        {/* Playful background elements */}{" "}
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl"></div>{" "}
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl"></div>{" "}
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          {hero.badge && (
            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <span className="text-sm font-second text-[#7d9d8c] font-semibold uppercase tracking-wide">
                {hero.badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-main font-bold text-[#2c3e50] mb-6">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-second text-gray-700 mb-8 italic">
            {hero.subtitle}
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="font-second text-lg leading-relaxed text-gray-800">
              {hero.description}
            </p>
          </div>
        </div>
      </section>
      {/* Books Section */}
      <section className="pt-16 px-6">
        <div className="max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div key={index}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center mb-16`}
              >
                {/* Book Image */}
                <div className="lg:w-2/5">
                  <div className="relative group">
                    {/* Colorful glow effect */}
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0 ? "bg-blue-300/30" : "bg-purple-300/30"
                      } rounded-3xl blur-2xl group-hover:blur-2xl transition-all duration-500`}
                    ></div>

                    {/* Book image */}
                    <div className="relative bg-white rounded-3xl p-4 shadow-xl">
                      <img
                        src={book.image.asset.url}
                        alt={book.title}
                        className="w-[280px] sm:w-[320px] lg:w-[360px] h-auto rounded-2xl mx-auto"
                      />
                    </div>
                  </div>
                </div>
                {/* Book Content */}
                <div className="lg:w-3/5">
                  {/* Book number badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7d9d8c]/10 rounded-full mb-4">
                    <span className="text-sm font-second text-[#7d9d8c] font-semibold">
                      Bok {index + 1}
                    </span>
                  </div>
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-main font-bold text-[#2c3e50] mb-6">
                    {book.title}
                  </h2>
                  {/* Description */}
                  <div className="space-y-4">
                    <p className="font-second text-lg leading-relaxed text-gray-700">
                      {book.description}
                    </p>
                    {/* Themes callout */}
                    <div className="bg-primary/10 border-l-4 border-[#7d9d8c] p-4 rounded-r-lg">
                      <p className="font-second text-base leading-relaxed text-gray-800 italic">
                        <span className="font-semibold not-italic text-[#2c3e50]">
                          Tema:{" "}
                        </span>
                        {book.themes}
                      </p>
                    </div>
                  </div>
                  {/* Buy button */}
                  <div className="mt-6">
                    <a
                      href="#buy"
                      className="w-[250px] flex items-center justify-center gap-2 p-4 bg-primary font-second text-white shadow-lg tracking-wider rounded-lg cursor-pointer hover:font-semibold text-lg"
                    >
                      Köp boken <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider between books (except last one) */}
              {index < books.length - 1 && (
                <div className="relative my-16">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#7d9d8c]"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg
                        className="w-7 h-7 text-[#7d9d8c]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Sensitivity Cards Section */}
      {sensitivityCards.length > 0 && (
        <section className="pb-16 px-6 mt-30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-second font-semibold text-[#2c3e50] mb-4">
                Varför högkänslighet?
              </h2>
              <DividerLine />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sensitivityCards.map((card, index) => {
                // Define icon and color based on index
                const isFirstCard = index === 0;
                const iconBgColor = isFirstCard
                  ? "bg-blue-100"
                  : "bg-purple-100";
                const iconColor = isFirstCard
                  ? "text-blue-500"
                  : "text-purple-500";

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div
                      className={`w-14 h-14 ${iconBgColor} rounded-full flex items-center justify-center mb-6`}
                    >
                      {isFirstCard ? (
                        <svg
                          className={`w-7 h-7 ${iconColor}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      ) : (
                        <svg
                          className={`w-7 h-7 ${iconColor}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-second font-bold text-black mb-3">
                      {card.title}
                    </h3>
                    <p className="font-second text-black/80 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7d9d8c]/20 via-purple-50 to-blue-50 py-16 px-6">
        {" "}
        {/* Playful background elements */}{" "}
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl"></div>{" "}
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl"></div>{" "}
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Where to Buy Section */}{" "}
          <WhereToBuy
            title="Köp Lilla Lia-böckerna"
            links={links}
            webbshop={webbshop}
          />
        </div>
      </section>
    </>
  );
};

export default LillaLia;
