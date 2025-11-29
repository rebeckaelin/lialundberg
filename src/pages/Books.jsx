import StoresGrid from "../components/StoresGrid";
import ebony_2 from "../assets/ebony_2.jpg";
import lillalia_1 from "../assets/lilla-lia-och-regnbagen.jpeg";
import lillalia_2 from "../assets/lilla-lia-och-delfinerna.jpeg";
import lillalia_3 from "../assets/lillalia_och_den_stora_tåren.png";
import lillalia_4 from "../assets/lillalia_och_skogen.png";

const Books = () => {
  const images = [lillalia_1, lillalia_2, lillalia_3, lillalia_4];
  const imagesEbony = [ebony_2];
  return (
    <>
      <section>
        <section className="flex flex-col lg:flex-row items-center justify-evenly sm:mt-15 px-6 bg-accent ">
          <div className="flex flex-col justify-center lg:w-4/5 ">
            <div className="flex justify-evenly gap-10">
              <section className="p-6  w-1/2 h-[400px] flex flex-col items-center">
                <h3 className="text-3xl sm:text-4xl  font-main font-semibold text-center mb-4">
                  Romaner
                </h3>

                <p className="font-second mb-10">
                  Klicka{" "}
                  <a className="font-bold underline" href="/bocker/ebony">
                    här
                  </a>{" "}
                  för att läsa mer
                </p>
                <div className="grid grid-cols-2 gap-y-8 w-full">
                  {imagesEbony.map((src, i) => (
                    <div key={i} className="flex justify-center">
                      <div className="w-48 h-48 overflow-hidden rounded-lg shadow-sm">
                        <img
                          className="w-full h-full object-cover"
                          src={src}
                          alt={`Book ${i + 1}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="p-6 w-1/2 flex  flex-col items-center">
                <h3 className="text-3xl sm:text-4xl font-main font-semibold text-center mb-4">
                  Barnböcker
                </h3>
                <p className="font-second mb-10">
                  Klicka{" "}
                  <a className="font-bold underline" href="/bocker/lillalia">
                    här
                  </a>{" "}
                  för att läsa mer
                </p>
                <div className="grid grid-cols-2 gap-y-8 w-full">
                  {images.map((src, i) => (
                    <div key={i} className="flex justify-center">
                      <div className="w-48 h-48 overflow-hidden bg-white rounded-lg shadow-sm">
                        <img
                          className="w-full h-full object-contain"
                          src={src}
                          alt={`Book ${i + 1}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="pt-12 ">
          <h2 className="text-3xl sm:text-4xl  font-main font-semibold text-center">
            Återförsäljare
          </h2>
          <StoresGrid />
        </section>
      </section>
    </>
  );
};

export default Books;
