import ebony_image from "../assets/ebony.jpeg";
import { useEffect, useState } from "react";
import { client } from "../client";
import TestimonialCarousel from "../components/TestimonialCarousel";
import DividerLine from "../components/DividerLine";

const bookTestimonialsQuery = `*[_type == "testimonial" && category == "book"]{
  text,
  name
}`;

const Ebony = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    client.fetch(bookTestimonialsQuery).then(setTestimonials);
  }, []);

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
                    src={ebony_image}
                    alt="Ebony book cover"
                    className="w-[280px] sm:w-[320px] lg:w-[360px] h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Content - Right side on desktop */}
            <div className="lg:w-3/5 text-white">
              {/* Genre badge */}
              <div className="inline-block px-4 py-2 bg-primary border border-[#7d9d8c]/40 rounded-full mb-6">
                <span className="text-sm font-second text-white font-semibold uppercase tracking-wide">
                  Psykologisk Thriller
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-main font-bold mb-4">
                Ebony
              </h1>

              {/* Tagline */}
              <p className="text-xl sm:text-2xl font-second text-white mb-8 italic">
                En resa mellan det onda och det goda
              </p>

              {/* Short hook */}
              <p className="text-lg font-second leading-relaxed mb-8 text-gray-200">
                När Ebony Silver kommer till London för en nystart, tror hon att
                hennes mediala förmågor äntligen kan bli en gåva istället för en
                förbannelse. Men när en våldsman börjar återskapa gamla sagor på
                det mest grymma vis, blir hon indragen i en brottsutredning där
                hennes talanger blir nyckeln till att stoppa mördaren.
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
            <p className="font-second text-lg leading-relaxed text-black/80 mb-6">
              Ebony Silver kommer till London för en nystart. Hon har blivit
              missförstådd, jagad och hatad för sina mediala förmågor som inte
              har ansetts som annat än en förbannelse. Hennes envishet och
              övertygelse lyckas ge henne en chans till vad som verkar vara
              hennes drömjobb på en tidningsredaktion, men hon måste börja på
              botten.
            </p>

            <p className="font-second text-lg leading-relaxed text-black/80 mb-6">
              Trevande mellan andras skitgöra börjar hon upptäcka underliga
              händelser som sker runtom henne. En våldsman har börjat återskapa
              gamla sagor på det mest grymma vis denne kan tänka sig.
            </p>

            <p className="font-second text-lg leading-relaxed text-black/80 mb-6">
              Christopher Hart, en polis som får ansvaret för fallet, börjar se
              Ebonys oväntade talanger, och ett motvilligt samarbete spirar. Hur
              många offer finns det? Kommer denna nya relation avslöja hennes
              identitet? Vad ska Ebony ta sig till, när det enda som verkar leda
              dem rätt är hennes starka mediala förmåga?
            </p>

            <div className="bg-[#7d9d8c]/10 border-l-4 border-[#7d9d8c] p-6 rounded-r-lg mt-8">
              <p className="font-second text-lg leading-relaxed text-[#2c3e50] font-semibold italic">
                Ebony kretsar kring en spännande brottsutredning, om valet
                mellan det onda och det goda, och förmågan att välja sin egen
                väg i livet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes Section */}
      <section className=" px-6 bg-gradient-to-b from-white to-[#2c3e50]/10 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-second font-semibold text-black text-center">
            Teman i Boken
          </h2>
          <DividerLine />
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-[#7d9d8c]/10 rounded-full flex items-center justify-center mb-6">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-main font-bold text-black mb-3">
                Mediala Förmågor
              </h3>
              <p className="font-second text-black/80 leading-relaxed">
                Utforska gränsen mellan gåva och förbannelse genom Ebonys
                extraordinära talanger
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-[#7d9d8c]/10 rounded-full flex items-center justify-center mb-6">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-main font-bold text-black mb-3">
                Mörka Sagor
              </h3>
              <p className="font-second text-black/80 leading-relaxed">
                En mördare som återberättar klassiska sagor på det mest makabra
                sätt
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-[#7d9d8c]/10 rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-main font-bold text-black mb-3">
                Oväntad Kärlek
              </h3>
              <p className="font-second text-black/80 leading-relaxed">
                När två motsatser tvingas samarbeta uppstår en koppling ingen av
                dem förväntat sig
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-white">
          <div className="max-w-6xl mx-auto pt-12 px-6">
            <h2 className="text-3xl sm:text-4xl font-second font-semibold text-black text-center mb-4">
              Vad Läsarna Säger
            </h2>
            <DividerLine />
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </section>
      )}

      {/* Where to Buy Section */}
      <section id="buy" className="py-20 px-6 bg-[#2c3e50]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-second font-semibold text-white mb-6">
            Köp Ebony
          </h2>
          <p className="text-lg font-second text-white mb-12">
            Finns tillgänglig både online och i fysiska butiker
          </p>

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
