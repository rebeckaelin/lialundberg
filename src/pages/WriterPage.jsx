import React from "react";
import book from "../assets/bw_logo.webp";
import heart from "../assets/heart_outline.png";
import writer_one from "../assets/writer_1.JPG";
import writer_two from "../assets/writer_2.JPG";
import writer_three from "../assets/writer_3.JPG";

const WriterPage = () => {
  return (
    <>
      <section>
        <section className="flex flex-col items-center justify-center sm:mt-10 pb-10  bg-accent">
          <img
            src={book}
            alt=""
            className="w-[180px] h-[180px] object-cover self-center"
          />

          <h2 className="text-2xl sm:text-4xl font-main font-semibold text-center">
            Varför har jag valt att skriva om högkänslighet?
          </h2>

          <p className="font-second text-base leading-relaxed text-gray-800 text-center lg:w-3/4 max-w-[1200px] pt-6 px-6">
            Benämningen högkänslighet är fortfarande ett ganska tyst ämne.
            Tystare än vad jag tycker att det ska vara! 15- 20 % av befolkningen
            är högkänsliga men fortfarande många utan vetskap om detta. För mig
            har det hjälpt otroligt mycket att få denna kunskap om ämnet och jag
            vill att fler ska få lära sig om personlighetsbeskrivningen tidigare
            i sitt liv!
            <br />
            <br />
            Ju tidigare vi vet om den, ju tidigare kan vi hitta acceptans till
            vår känslighet och förstå våra känslor lättare.
            <br />
            <br />
            Därför har jag skrivit barnböcker om ämnet. Barnböcker där ämnet
            lyfts lite försiktigt för att vi lättare ska kunna prata om det. Så
            att vi lättare ska kunna nå ut med ämnet och för att barnen ska få
            igenkänning.
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
            Vi behövs alla på vår jord - hårdhudad som hudlös, känslomässig som
            lugn, praktisk som teoretiker. <br />
            <span className="font-semibold">
              Alla vi kompletterar varandra om vi får vara i vår energi.
            </span>
          </p>
          {/* <img
            src={heart}
            alt=""
            className="w-[400px] h-[100px] my-6 object-cover self-center"
          /> */}
          <div className="pt-6 flex flex-col sm:flex-row w-full justify-evenly items-center">
            {/* <img className="w-auto h-[450px]" src={writer_one} alt="" /> */}
            <img className="w-auto h-[450px]" src={writer_three} alt="" />
            {/* <img className="w-auto h-[450px]" src={writer_two} alt="" /> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default WriterPage;
