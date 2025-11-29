import ebony_image from "../assets/ebony.jpeg";
import { useEffect, useState } from "react";
import { client } from "../client";
import TestimonialCarousel from "../components/TestimonialCarousel";

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
      <section>
        <section className=" relative overflow-hidden flex flex-col items-center justify-evenly gap-10 sm:mt-10 py-20 px-6 bg-accent ">
          <div className="flex flex-col md:flex-row gap-6 justify-evenly items-center z-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl mb-4 font-main font-semibold text-center lg:text-left">
                Ebony{" "}
                <span className="italic font-normal font-second text-sm tracking-wide">
                  -en psykologisk thriller
                </span>
              </h2>

              <p className="font-second text-base leading-relaxed text-gray-800 space-y-4 text-center lg:text-left">
                Ebony Silver kommer till London för en nystart. Hon har blivit
                missförstådd, jagad och hatad för sina mediala förmågor som inte
                har ansetts som annat än en förbannelse. Hennes envishet och
                övertygelse lyckas ge henne en chans till vad som verkar vara
                hennes drömjobb på en tidningsredaktion, men hon måste börja på
                botten. Trevande mellan andras skitgöra börjar hon upptäcka
                underliga händelser som sker runtom henne. En våldsman har
                börjat återskapa gamla sagor på det mest grymma vis denne kan
                tänka sig.
                <br />
                <br />
                Christopher Hart, en polis som får ansvaret för fallet, börjar
                se Ebonys oväntade talanger, och ett motvilligt samarbete
                spirar. Hur många offer finns det? Kommer denna nya relation
                avslöja hennes identitet? Vad ska Ebony ta sig till, när det
                enda som verkar leda dem rätt är hennes starka mediala förmåga?
                <br />
                <br />
                <span className="font-semibold">
                  Ebony kretsar kring en spännande brottsutredning, om valet
                  mellan det onda och det goda, och förmågan att välja sin egen
                  väg i livet.
                </span>
              </p>
            </div>

            <img
              src={ebony_image}
              alt=""
              className="w-[240px] sm:w-[270px] lg:w-[300px] h-[auto] "
            />
          </div>
        </section>
        <TestimonialCarousel testimonials={testimonials} />
      </section>
    </>
  );
};

export default Ebony;
