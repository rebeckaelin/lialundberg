import lilla_lia_regnbagen from "../assets/lilla-lia-och-regnbagen.jpeg";
import lilla_lia_delfinerna from "../assets/lilla-lia-och-delfinerna.jpeg";
import lillalia_taren from "../assets/lillalia_och_den_stora_tåren.png";
import lillalia_skogen from "../assets/lillalia_och_skogen.png";
import { ChevronRight } from "lucide-react";
import DividerLine from "../components/DividerLine";

const LillaLia = () => {
  const books = [
    {
      title: "Lilla Lia & Regnbågen",
      image: lilla_lia_regnbagen,
      description:
        "I denna boken ska Lilla Lia, Mamma & Lilla Lias storebror åka till mormor som fyller år. Hubertus berättar för Lilla Lia om Fru Regnbåge och de smiter iväg till regnbågslandet.",
      themes:
        "Denna bok lyfter ämnet - vad är egentligen viktigast för oss? Vad är vår skatt vi bär i hjärtat? Även om sociala sammanhang och intensiva personer runt om oss.",
    },
    {
      title: "Lilla Lia & Delfinerna",
      image: lilla_lia_delfinerna,
      description:
        "I denna boken besöker Lilla Lia djurparken och lär sig mer om delfinerna. Lilla Lias vän Lena har kalas där. Hubertus är såklart med henne när de smiter iväg på egna äventyr.",
      themes:
        "Boken lyfter den högkänsligas hörsel, överstimulans samt en högkänsligs välmående av djur.",
    },
    {
      title: "Lilla Lia & Skogen",
      image: lillalia_skogen,
      description:
        "Lilla Lia utforskar skogens hemligheter och upptäcker naturens lugnande kraft.",
      themes: "Om högkänslighet i naturen och hur omgivningen påverkar oss.",
    },
    {
      title: "Lilla Lia & Den Stora Tåren",
      image: lillalia_taren,
      description:
        "Följ med Lilla Lia på ett känslosamt äventyr där hon upptäcker styrkan i att känna djupt.",
      themes:
        "En berättelse om att omfamna sina känslor och förstå att det är okej att vara känslig.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7d9d8c]/20 via-purple-50 to-blue-50 py-16 px-6">
        {/* Playful background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <span className="text-sm font-second text-[#7d9d8c] font-semibold uppercase tracking-wide">
              Barnboksserie
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-main font-bold text-[#2c3e50] mb-6">
            Lilla Lia-serien
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-second text-gray-700 mb-8 italic">
            Att förstå högkänslighet genom magiska äventyr
          </p>

          {/* Main description */}
          <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="font-second text-lg leading-relaxed text-gray-800">
              Barnboksserien handlar om ett högkänsligt barn vid namn Lilla Lia
              och hennes fantasivän Hubertus. Detta är enkla kärleksfulla
              berättelser där vi får se världen ur ett högkänsligt barns
              perspektiv. Mitt mål med dessa är att lyfta ämnet högkänslighet så
              att barnen ska få igenkänning och vuxna ska uppmärksamma denna
              personlighetsbeskrivning.
            </p>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="pt-16 px-6">
        <div className="max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div key={index}>
              {/* Book Card */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center mb-16`}
              >
                {/* Book Cover */}
                <div className="lg:w-2/5">
                  <div className="relative group">
                    {/* Colorful glow effect */}
                    <div
                      className={`absolute inset-0 ${
                        index % 2 === 0 ? "bg-blue-300/30" : "bg-purple-300/30"
                      } rounded-3xl blur-2xl group-hover:blur-2xl transition-all duration-500`}
                    ></div>

                    {/* Book image */}
                    <div className="relative bg-white rounded-3xl p-4 shadow-xl ">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-auto rounded-2xl"
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
                    <div className="bg-gradient-to-r from-[#7d9d8c]/10 to-transparent border-l-4 border-[#7d9d8c] p-4 rounded-r-lg">
                      <p className="font-second text-base leading-relaxed text-gray-800 italic">
                        <span className="font-semibold not-italic text-[#2c3e50]">
                          Tema:
                        </span>{" "}
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
                      Köp boken
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider between books (except last one) */}
              {index < books.length - 1 && (
                <div className="relative my-16">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-primary"></div>
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

      {/* About Sensitivity Section */}
      <section className="pb-16 px-6 bg-gradient-to-b from-white to-[#7d9d8c]/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-second font-semibold text-[#2c3e50] mb-4">
              Varför högkänslighet?
            </h2>
            <DividerLine />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-blue-500"
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
              </div>
              <h3 className="text-xl font-main font-bold text-[#2c3e50] mb-3">
                För barnen
              </h3>
              <p className="font-second text-gray-700 leading-relaxed">
                Igenkänning och förståelse för sina egna känslor och reaktioner
                i en värld som ibland kan kännas överväldigande.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-purple-500"
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
              </div>
              <h3 className="text-xl font-main font-bold text-[#2c3e50] mb-3">
                För vuxna
              </h3>
              <p className="font-second text-gray-700 leading-relaxed">
                Insikt och verktyg för att bättre förstå och stödja högkänsliga
                barn i deras unika upplevelse av världen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Buy Section */}
      <section
        id="buy"
        className="py-20 px-6 bg-gradient-to-br from-[#7d9d8c] to-[#6a8576]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-main font-bold text-white mb-6">
            Köp Lilla Lia-böckerna
          </h2>
          <p className="text-lg font-second text-white/90 mb-12">
            Tillgänglig hos följande återförsäljare
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-white text-[#2c3e50] font-main font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Adlibris
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white text-[#2c3e50] font-main font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Bokus
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white text-[#2c3e50] font-main font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Amazon
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LillaLia;
