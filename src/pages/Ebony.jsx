import ebony_image from "../assets/ebony.jpeg";
import StoresGrid from "../components/StoresGrid";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Ebony = () => {
  const bookTestimonials = [
    {
      text: `Jag har säkert läst boken nu 3-5ggr minst, varenda gång jag öppnat boken på nytt har jag fått ett ännu större perspektiv. Boken är både nervkittlande men samtidigt så utmanar Lia med sitt skrivande sökandet efter sin väg i livet och alla dess olika känslor som vi är så djupt formade utav (ex. barndom, umgänge, samhället etc.) och vad de känslorna försöker säga oss och hur vi kan lära oss genom känslor. Med det sagt vill jag trycka på att om du inte läst boken, gör det!`,
      name: "Robyn",
    },
    {
      text: `En medryckande och spännande historia med sagodeckare-tema. Huvudkaraktären Ebony är intressant, i ena stunden vill jag bara hålla om henne hårt och vagga henne. I nästa vill jag ruska om henne för att hon är så avig och omedgörlig x) men samtidigt så är det ju det som gör Ebony just Ebony.`,
      name: "Bokdaling",
    },
    {
      text: `En fängslande och annorlunda deckare som blandar medialt med kriminologi, älskade även den personliga kontakt som skapades mellan Ebony och polisen. Det fick mig att sträckläsa boken och att ivrigt längta till en uppföljare.`,
      name: "Johanna",
    },
    {
      text: `Jag fastnade direkt i storyn vilket inte är självklart.. jag är lite kräsen så om jag inte fastnar ganska direkt så blir boken liggande. Nu fastnade jag på en gång och det bästa med hela storyn var att jag inte visste vart det skulle ta vägen. Ingenting påminde direkt om någonting jag läst förut vilket är underbart. Blandningen av spänning och djup gillar jag och att det fanns så mkt under ytan hela tiden som man anade och ville åt och som skapade intresse och nyfikenhet att läsa vidare. Skulle gärna läsa en uppföljare om det kom en sådan!`,
      name: "Kerstin",
    },
    {
      text: `Jag läste ut boken idag, superspännande! Och är nu nyfiken på vad som händer med Ebony efter denna bok. Och Mr Hart såklart! Så ser fram emot nästa!`,
      name: "Lisa",
    },
    {
      text: `Efter att ha skrivit böcker för barn, där känslighet är ett märkbart tema, så är övergången till en psykologisk thriller ett stort steg. Men det har du klarat väldigt bra. Man känner att du trivs i den miljö du låter bokens huvudperson agera i. Känslan blir en ”sagovärld i nutid”. Det psykologiska tar över vad som kunnat bli en bloddrypande deckare, blir istället en annorlunda ”true crime”. Slutet, kanske något obestämt och lite frågande - men en helt klart tänk- och läsvärd debutroman!!`,
      name: "Majken",
    },
  ];

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
        <TestimonialCarousel testimonials={bookTestimonials} />
        <section className="pt-12 border-t-1">
          <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center">
            Återförsäljare
          </h2>
          <StoresGrid />
        </section>
      </section>
    </>
  );
};

export default Ebony;
