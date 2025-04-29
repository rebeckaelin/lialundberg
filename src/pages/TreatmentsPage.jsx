import React from "react";
import heroImage from "../assets/treatment_1.jpg";
import icon from "../assets/mandala_icon.png";

const TreatmentsPage = () => {
  const treatments = [
    {
      title: "Helkroppsmassage med healing",
      description:
        "Beskrivning av behandling 1. Den här behandlingen fokuserar på...",
      icon: icon,
      price: "799kr",
      time: "ca 90 min",
    },
    {
      title: "Halvkroppsmassage med healing",
      description:
        "Beskrivning av behandling 2. Den här behandlingen är för...",
      icon: icon,
      price: "649kr",
      time: "ca 60 min",
    },
    {
      title: "Distanshealing",
      description:
        "Beskrivning av behandling 3. Den här behandlingen erbjuder...",
      icon: icon,
      price: "449kr (första gången 400kr)",
      time: "ca 45 min",
    },
    {
      title: "Djupdykning",
      description:
        "Djupdykning är en kombinationsbehandling mellan en fysisk behandling....",
      icon: icon,
      price: "980kr / 1130kr",
      time: "-",
    },
  ];

  const testimonials = [
    {
      text: "Jag kände hur det lixom drogs ut genom mina fötter. Hur jag trycktes ner i bänken. Alltså inte negativt. Känner ett sådant lugn nu och huvudvärken jag hade innan har släppt.",
      name: "Mi",
    },
    {
      text: "Helt fantastisk distanshealing! Kände hur det pirrade och lixom blåste genom kroppen.",
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
      text: "Att få distanshealing av dig är underbart! Man känner av dina lugna, helande energier och känner sig lugn och balanserad efter behandlingen. När du efter berättar om det du fått till dig så stämmer det alltid in och du ger så fina, konkreta tips och råd till hur man ska gå vidare i sitt egna helande. Kan egentligen skriva hur mycket positivt som helst men detta var några rader ❤️",
      name: "Angelica",
    },
    {
      text: "Jag kände mycket under healingen. Först var det som att det tog stopp vid höfterna och att hela benen var tunga. Och så kände jag hur det öppnades upp. Sen att kroppen sögs ner i bänken och sen att den blev jättelätt, som att den svävade. Svårt att beskriva men jättehäftigt! Trodde jag behövde hård massage men detta var precis vad jag behövde.",
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
      text: "Jag tycker det är så härligt och häftigt hur du alltid känner vad kroppen och själen behöver just då! Ingen behandling är lik den andra och det är alltid lika spännande att få höra vad kroppen har att säga! ❤",
      name: "Melissa",
    },
  ];

  return (
    <section className="">
      <div
        className="relative h-[500px] bg-cover bg-bottom flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Vit overlay med 50% opacity */}
        <div className="absolute inset-0 bg-white opacity-42"></div>

        {/* Texten */}
        <h1 className="relative text-7xl text-primary">
          Välkommen på behandling
        </h1>
      </div>
      <article className="w-full p-8 mx-auto">
        {/* <h2>titel</h2> */}
        <p>
          Välkommen på behandling hos mig! Jag håller till centralt i Umeå, i
          vårat egna massagerum. Jag fokuserar främst på cirkulation och
          avslappning i massagen. Du får välja att kombinera en helkroppsmassage
          eller en halkroppsmassage, med healing. Massagen får dig att landa i
          din kropp och släppa vardagens tempo & stress. Healingen hjälper mig
          att nå dina blockeringar som inte är i det fysiska, för att kunna gå
          djupare i behandlingen och balansera kroppens olika lager. Vi sitter
          sedan några minuter och pratar om hur det känts och vad din kropp
          berättat. Observera att jag valt att endast ta emot kvinnor på mina
          behandlingar. Bokar gör du lättast via länkarna nedan.
        </p>
      </article>

      <article className="mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold">Mina behandlingar</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={treatment.icon}
                  alt={treatment.title}
                  className="h-12 w-12 object-contain"
                />
                <h4 className="text-xl font-semibold uppercase">
                  {treatment.title}
                </h4>
              </div>
              <div className="pl-16">
                <h5>{treatment.time}</h5>
                <p>{treatment.description}</p>
                <p className="font-bold">{treatment.price}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
      <div className="flex gap-6 w-full justify-center py-8">
        <button className="border w-[200px] rounded-xl p-4">Facebook pm</button>
        <button className="border w-[200px] rounded-xl p-4">
          Instagram pm
        </button>
      </div>
      <div className="overflow-hidden bg-secondary py-6">
        <div className="flex animate-marquee gap-8 w-max">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl px-6 py-4 w-[350px] min-h-[150px] flex flex-col justify-between text-gray-800"
            >
              <p className="italic">"{item.text}"</p>
              <p className="text-right font-semibold mt-2">– {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsPage;
