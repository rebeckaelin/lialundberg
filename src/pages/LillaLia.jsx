import lilla_lia_regnbagen from "../assets/lilla-lia-och-regnbagen.jpeg";
import lilla_lia_delfinerna from "../assets/lilla-lia-och-delfinerna.jpeg";

const LillaLia = () => {
  return (
    <>
      <section>
        <section className="flex flex-col lg:flex-row items-center justify-evenly py-10 lg:py-20 sm:mt-10 px-6 bg-accent ">
          <div className="flex flex-col justify-center lg:w-4/5 ">
            <div>
              <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left">
                Att förstå högkänslighet – med Lilla Lia
              </h2>
              <p className="w-full font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
                Lilla Lia böckerna är en serie där de två första böckerna
                släpptes den 12 oktober 2017. Böckerna handlar om ett
                högkänsligt barn vid namn Lilla Lia och hennes fantasivän
                Hubertus. Detta är enkla kärleksfulla berättelser där vi får se
                världen ur ett högkänsligt barns perspektiv. Mitt mål med dessa
                är att lyfta ämnet högkänslighet så att barnen ska få
                igenkänning och vuxna ska uppmärksamma denna
                personlighetsbeskrivning.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-evenly gap-10  mb-10 pt-10 px-6">
          <div className="flex flex-col md:flex-row gap-6 justify-evenly items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left">
                Lilla Lia & Regnbågen
              </h2>

              <p className="font-second text-base leading-relaxed text-gray-800 space-y-4 text-center lg:text-left">
                I denna boken ska Lilla Lia, Mamma & Lilla Lias storebror åka
                till mormor som fyller år. Hubertus berättar för Lilla Lia om
                Fru Regnbåge och de smiter iväg till regnbågslandet.
                <br />
                <br />
                Denna bok lyfter ämnet - vad är egentligen viktigast för oss?
                Vad är vår skatt vi bär i hjärtat? Även om sociala sammanhang
                och intensiva personer runt om oss.
              </p>
            </div>
            {/* <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden"> */}
            <img
              src={lilla_lia_regnbagen}
              alt=""
              className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px]"
            />
          </div>
          <div className="w-full h-[10px] bg-grey border-b"></div>
          <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-evenly">
            <img
              src={lilla_lia_delfinerna}
              alt=""
              className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px]"
            />
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left">
                Lilla Lia & delfinerna
              </h2>

              <p className="font-second text-base leading-relaxed text-gray-800 space-y-4 text-center lg:text-left">
                I denna boken besöker Lilla Lia djurparken och lär sig mer om
                delfinerna. Lilla Lias vän Lena har kalas där. Hubertus är
                såklart med henne när de smiter iväg på egna äventyr.
                <br />
                <br />
                Boken lyfter den högkänsligas hörsel, överstimulans samt en
                högkänsligs välmående av djur.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default LillaLia;
