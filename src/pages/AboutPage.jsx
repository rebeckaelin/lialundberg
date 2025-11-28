import profilePic from "../assets/profilbild_1.png";
import hand from "../assets/hand.png";
import treatment from "../assets/treatment_3.jpg";
import writer_three from "../assets/writer_3.JPG";
import book from "../assets/bw_logo.webp";

const AboutPage = () => {
  return (
    <>
      <section>
        <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 sm:mt-10 mb-10 py-20 px-6 bg-accent">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left">
              Hej,
            </h2>
            <p className="font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
              Vad fantastiskt roligt att du ville kika in på denna sida. <br />
              <br />
              Mitt namn är Lia och jag har äntligen fått börja leva i min dröm.
              Otroligt tacksam & fortfarande i behov att nypa mig i armen.{" "}
              <br />
              <br />
              Jag har så länge jag kan minnas skapat berättelser i mitt huvud,
              ritat serier och försvunnit så lätt in i fantasivärldar och
              kreativitet. Det har varit en fantastisk och trygg värld när den
              jordliga världen blivit för mycket. <br />
              <br />
              När jag skriver känns det som att jag lägger gasen i botten och
              sedan försvinner in i skapande. Jag känner mig allra mest som mig
              själv när jag får vara i min kreativa bubbla. Då kan jag stänga av
              alla tankar och krav och låta berättelsen skapas av sig själv. Jag
              blir fylld avtacksamhet, pirr och ett jordande lugn på samma gång.{" "}
              <br />
              <br />
              Jag är högkänslig och lärde mig det vid ca 23 års ålder. Den
              insikten var som en berg & dalbana av känslor. Helt plötsligt var
              jag inte trött, blyg och tråkig, vilket jag själv gick i tron om
              att jag var. Helt plötsligt var jag precis som jag skulle vara –
              analyserande, inkännande, kreativ och precis så där underbart
              känslig & skör. <br />
              <br />
              Jag vill göra min del för att sprida kärlek på denna jord! Genom
              mitt skrivande, kreativt skapande & genom min roll som terapeut
              vill jag sprida värme & vänlighet, uppmuntra till skapande & att
              följa sina största drömmar.
            </p>
          </div>
          <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
            <img
              src={profilePic}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-evenly px-6 pb-20">
          <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
            <img src={book} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left">
              Varför har jag valt att skriva om högkänslighet?
            </h2>
            <p className="font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
              Benämningen högkänslighet är fortfarande ett ganska tyst ämne.
              Tystare än vad jag tycker att det ska vara! 15- 20 % av
              befolkningen är högkänsliga men fortfarande många utan vetskap om
              detta. För mig har det hjälpt otroligt mycket att få denna kunskap
              om ämnet och jag vill att fler ska få lära sig om
              personlighetsbeskrivningen tidigare i sitt liv!
              <br />
              <br />
              Ju tidigare vi vet om den, ju tidigare kan vi hitta acceptans till
              vår känslighet och förstå våra känslor lättare.
              <br />
              <br />
              Därför har jag skrivit barnböcker om ämnet. Barnböcker där ämnet
              lyfts lite försiktigt för att vi lättare ska kunna prata om det.
              Så att vi lättare ska kunna nå ut med ämnet och för att barnen ska
              få igenkänning.
              <br />
              <br />
              Att vara högkänslig innebär även att man måste hitta sin egna väg
              och sitt levnadssätt i detta samhälle, då det inte är anpassat för
              en HSP. <br />
              <br />
              Högkänslighet är något otroligt vackert, bara vi låter våra HSP få
              leva i det, att de får vara precis som de är.
              <br />
              <br />
              Vi behövs alla på vår jord - hårdhudad som hudlös, känslomässig
              som lugn, praktisk som teoretiker. <br />
              <span className="font-semibold">
                Alla vi kompletterar varandra om vi får vara i vår energi.
              </span>
            </p>
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 py-20 px-6 bg-accent">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left">
              Varför valde jag att bli terapeut?
            </h2>
            <p className="font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
              Denna del är något som de omkring mig nog sett som en rätt ny del.
              Mitt intresse för hälsa. Men egentligen har det alltid funnits med
              mig. Jag har vuxit upp med föräldrar som båda är väldigt
              intresserade av alternativ hälsa, som hälsokoster, antroposofin,
              göra eget osv. <br />
              <br />
              Vid ca 23 års ålder började jag rikta in mig mer och mer på
              personlig utveckling, kurser inom hälsa, andlighet och vad det
              egentligen var som min kropp mådde bra av. <br />
              <br />
              År 2016 flyttade jag ca 80 mil hemifrån till Norrland. Där
              studerade jag till Hälsopedagog och mitt intresse för hälsa visade
              sig från sin sanna sida. Där var jag, den personen som jag
              någonstans fantiserat om att bli. <br />
              <br />
              Jag valde att stanna i Norrland och flyttade snart till Umeå med
              min kärlek. Maj 2017 började jag jobba på en hälsokost,
              Hälsokraft, vid sidan om uppbyggandet av mitt egna företag. <br />
              <br />
              Där jobbade jag i 6 år och det gav mig en värdefull erfarenhet
              både om mig själv, kommunikation, människor men också om hälsa i
              stort. <br />
              <br />
              <span className="font-bold">
                De ämnena jag kommer att fokusera på som terapeut är:
              </span>{" "}
              <br />
              – Behandlingar i form av massage och healing. (utb somatic healer
              mfl och friskvårdsmassör) <br />
              – Där även samtal & stöttning ingår. <br />
              – Högkänslighet i olika uttryck. (såsom skrivande, målning,
              illustrationer mm) <br />
              – Dikter om känslor och livet. <br />
              <br />
              Jag tar emot för behandlingar med Massage/healing i vårt
              massagerum i Umeå. Distanshealing går också att välja om du bor på
              annan ort. <br />
              <br />
              För bokning och mer info gå till{" "}
              <a href="/behandlingar" className="underline underline-offset-2">
                behandlingar
              </a>
              .
            </p>
          </div>
          <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
            <img
              src={treatment}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-evenly py-10 px-6 lg:my-10">
          <div className="w-[300px] lg:w-[400px] h-auto">
            <img src={hand} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center w-1/2 gap-6">
            <div className="w-full ">
              <h2 className="text-3xl sm:text-4xl py-6 font-main font-semibold text-center lg:text-left">
                Följ med mig i mitt skapande!
              </h2>
              <p className="font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
                Här delar jag med mig av min resa till min dröm och mitt
                skapande. Om författarliv, om mina behandlingar med massage &
                healing, som jag har i Umeå, samt tankar, intutiva målningar och
                fina händelser.
              </p>
            </div>
            <div className="font-semibold font-main text-lg tracking-wider self-center lg:self-start">
              <button className="border w-[200px] p-3 hover:cursor-pointer">
                <a href="https://www.instagram.com/lialundberg/">
                  {" "}
                  INSPIRERAS HÄR
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
