import heroImage from "../assets/treatment_2.jpg";
import massage_one from "../assets/massage_one.png";
import massagehead from "../assets/massagehead.png";
import loveletter from "../assets/loveletter.png";
import distance_healing from "../assets/distance_healing.png";
import butterfly_hand from "../assets/butterfly_hand.png";
import { useState, useEffect } from "react";

import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Card from "../components/Card";
import BookingModal from "../components/BookingModal";

const TreatmentsPage = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [modalOpen]);

  const treatments = [
    {
      title: "Djupgående healing",
      description: "Helkroppsmassage med healing. ",
      image: massage_one,
      price: "799kr",
      time: "ca 90 min",
    },
    {
      title: "Mjuk förnyelse",
      description:
        "Halvkroppsmassage med healing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo voluptas tempore, nulla, ipsam molestias sit dolore et facilis blanditiis sunt molestiae vero consequatur quaerat quod nesciunt accusantium. Velit, impedit!",
      image: butterfly_hand,
      price: "649kr",
      time: "ca 60 min",
    },
    {
      title: "Distanshealing",
      description:
        "Den här behandlingen erbjuder... Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo voluptas tempore, nulla, ipsam molestias sit dolore et facilis blanditiis sunt molestiae vero consequatur quaerat quod nesciunt accusantium. Velit, impedit! ",
      image: distance_healing,
      price: "449kr (första gången 400kr)",
      time: "ca 45 min",
    },
    {
      title: "Djupdykning",
      description:
        "Djupdykning är en kombinationsbehandling mellan en fysisk behandling... Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo voluptas tempore, nulla, ipsam molestias sit dolore et facilis blanditiis sunt molestiae vero consequatur quaerat quod nesciunt. quaerat quod nesciunt accusantium. Velit, impeditquaerat quod nesciunt accusantium. Velit, impedit",
      image: massagehead,
      price: "980kr / 1130kr",
      time: "60min/90min",
    },
  ];

  const testimonials = [
    {
      text: "Jag kände hur det liksom drogs ut genom mina fötter. Hur jag trycktes ner i bänken. Alltså inte negativt. Känner ett sådant lugn nu och huvudvärken jag hade innan har släppt.",
      name: "Mi",
    },
    {
      text: "Helt fantastisk distanshealing! Kände hur det pirrade och liksom blåste genom kroppen.",
      name: "Eva",
    },
    {
      text: "Jag fick helkroppsmassage + healing. Som balsam för kropp, knopp och själ. Lia har en fantastisk förmåga att nå kroppen på flera nivåer.",
      name: "Elisabeth",
    },
    {
      text: "Känner sällan av sådana här behandlingar. Men jag kände som ett starkt tryck över bröstet och ett mörker, och sedan att det hela släppte – Jätteskönt!!",
      name: "Susan",
    },
    {
      text: "Att få distanshealing av dig är underbart! Man känner av dina lugna, helande energier och känner sig lugn och balanserad efter behandlingen. När du efter berättar om det du fått till dig så stämmer det alltid in.",
      name: "Angelica",
    },
    {
      text: "Jag kände mycket under healingen. Först var det som att det tog stopp vid höfterna och att hela benen var tunga. Och så kände jag hur det öppnades upp.",
      name: "Annika",
    },
    {
      text: "Jag hade kunnat betala betydligt mer för detta! såå bra!",
      name: "Emma",
    },
    {
      text: "Var som en vibration i hela kroppen av healingen.",
      name: "Christin",
    },
    {
      text: "Jag tycker det är så härligt och häftigt hur du alltid känner vad kroppen och själen behöver just då! Ingen behandling är lik den andra!",
      name: "Melissa",
    },
  ];

  return (
    <section className="">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 sm:mt-10 mb-10 py-20 px-6 bg-accent">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left">
            Välkommen på behandling
          </h2>

          <p className="font-second text-base leading-relaxed text-gray-800 space-y-4 text-center lg:text-left">
            Jag håller till centralt i Umeå, i vårt egna massagerum. Jag
            fokuserar främst på cirkulation och avslappning i massagen.
            <br />
            <br />
            Du får välja att kombinera en helkroppsmassage eller en
            halvkroppsmassage, med healing. Massagen får dig att landa i din
            kropp och släppa vardagens tempo & stress.
            <br />
            <br />
            Healingen hjälper mig att nå dina blockeringar som inte är i det
            fysiska, för att kunna gå djupare i behandlingen och balansera
            kroppens olika lager.
            <br />
            <br />
            Vi sitter sedan några minuter och pratar om hur det känts och vad
            din kropp berättat.
            <br />
            <br />
            <span className="font-semibold italic">
              Observera att jag valt att endast ta emot kvinnor på mina
              behandlingar.
            </span>
          </p>
        </div>
        <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="flex justify-center my-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-15 px-6">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              image={treatment.image}
              title={treatment.title}
              subtitle={treatment.time}
              description={
                expandedCards[index]
                  ? treatment.description
                  : treatment.description.slice(0, 120) + "..."
              }
              isExpanded={expandedCards[index]}
              onToggle={() => toggleExpand(index)}
              toggleVisible={treatment.description.length > 120}
              minHeight="400px"
              extraContent={
                <p className="text-md font-semibold text-black mt-8">
                  {treatment.price}
                </p>
              }
            />
          ))}
        </div>
      </section>

      {/* <div className="flex justify-center pb-8 font-semibold font-main text-2xl tracking-wider">
        <button className="border w-[200px] p-3 hover:cursor-pointer">
          BOKA
        </button>
      </div> */}

      <div className="flex justify-center pb-8 font-semibold font-main text-2xl tracking-wider">
        <button
          className="border w-[200px] p-3 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          BOKA
        </button>
      </div>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly py-20 mt-10 px-6 bg-accent">
        {/* Image */}
        <div className=" w-[180px] h-[180px]  border rounded-full p-6 flex items-center justify-center">
          <img src={loveletter} alt="" className="" />
        </div>
        {/* Text content */}
        <div className="w-3/4 lg:w-1/2">
          <h2 className="text-3xl sm:text-2xl pb-6 font-main font-semibold text-center lg:text-left">
            Vill du vara med på listan för utskick av tider?
          </h2>

          <p className="font-second text-base leading-relaxed text-gray-800 space-y-4 text-center lg:text-left">
            Max en gång per månad skickar jag ut lediga tider för behandling.
            Vill du vara med på denna lista så kontakta mig via{" "}
            <a
              href="mailto:lia_lundberg@outlook.com?subject=skriv upp mig!"
              className="underline underline-offset-2"
            >
              mejl
            </a>{" "}
            eller sociala medier så skickar jag ut tiderna till dig på kanalen
            du kontaktat mig via (om inget annat önskas).
            <br />
            <br />
            <span className="italic pb-6">
              Det går alltid att höra av sig utöver utskicken för att se när jag
              har en lucka nästa gång.
            </span>
          </p>
          <div className="flex gap-5 mt-6 justify-center lg:justify-start mb-6">
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
      {/* <section className="overflow- p-6"> */}
      <TestimonialCarousel testimonials={testimonials} />
      {/* </section> */}
    </section>
  );
};

export default TreatmentsPage;

/* 

     <section className="flex justify-center my-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-15 px-6">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-fourth font-second border shadow-2xl text-white w-auto min-w-[200px] max-w-[350px] min-h-[480px] grid grid-rows-[auto_auto_1fr_auto_auto] mt-20"
            >
              <div className="relative w-[150px] h-[150px] -mt-24 justify-self-center">
                <div className="w-full h-full rounded-full bg-white p-2 box-content">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-full object-contain rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center pt-8">
                <h3 className="relative text-black inline-block font-main uppercase text-2xl text-[#2e4c3a] custom-underline">
                  {treatment.title}
                </h3>
              </div>

              <div className="flex flex-col px-4 text-center pt-6">
                <p className="text-sm text-black">{treatment.time}</p>

                <p
                  className={`text-sm mt-2 text-black transition-all duration-300 ${
                    expandedCards[index] ? "" : "line-clamp-5"
                  }`}
                >
                  {treatment.description}
                </p>
               
                {treatment.description.length > 120 && (
                  <button
                    className="text-xs text-[#2e4c3a] underline underline-offset-4 mt-4 self-center"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedCards[index] ? "Visa mindre" : "Visa mer"}
                  </button>
                )}
              </div>

              <div></div>

              <div className="flex justify-center items-center pb-8">
                <p className="text-md font-semibold text-black">
                  {treatment.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

*/
