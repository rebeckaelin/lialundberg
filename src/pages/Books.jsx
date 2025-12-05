import StoresGrid from "../components/StoresGrid";
import ebony_2 from "../assets/ebony_2.jpg";
import lillalia_1 from "../assets/lilla-lia-och-regnbagen.jpeg";
import lillalia_2 from "../assets/lilla-lia-och-delfinerna.jpeg";
import lillalia_3 from "../assets/lillalia_och_den_stora_tåren.png";
import lillalia_4 from "../assets/lillalia_och_skogen.png";
import { ChevronRight } from "lucide-react";
import DividerLine from "../components/DividerLine";

const Books = () => {
  const childrenBooks = [
    { src: lillalia_1, title: "Lilla Lia och Regnbågen" },
    { src: lillalia_2, title: "Lilla Lia och Delfinerna" },
    { src: lillalia_3, title: "Lillalia och den Stora Tåren" },
    { src: lillalia_4, title: "Lillalia och Skogen" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col-reverse lg:flex-row items-center justify-center mt-10 p-6 lg:py-20 gap-10 bg-primary/25 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/10 -top-[200px] -right-[100px]"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/30 -bottom-[180px] -left-[120px]"></div>
        <div className="w-full lg:w-1/2 relative">
          {/* Subtil linje eller ornament som övergång */}

          <div className="max-w-6xl mx-auto text-center">
            {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-second font-bold text-[#2c3e50] mb-4">
            Mina Böcker
          </h1> */}
            <p className="text-lg sm:text-xl font-second text-black tracking-wide font-semibold max-w-3xl mx-auto">
              Upptäck historier som berör, inspirerar och underhåller läsare i
              alla åldrar.
            </p>
          </div>
        </div>
      </section>

      {/* Novels Section */}
      <section className="py-10 px-6 bg-white font-second">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="bg-primary/20 rounded-2xl"></div>
                <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    src={ebony_2}
                    alt="Ebony"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-second text-primary font-semibold uppercase tracking-wide">
                  Romaner
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-main font-bold text-black">
                Ebony
              </h2>

              <p className="text-lg font-second text-gray-700 leading-relaxed">
                En fartfylld berättelse där en ung kvinna ställs för valet att
                välja mellan en nyfunnen godhet eller pulshöjande ondska.
              </p>

              <button className="w-[250px] flex items-center justify-center gap-2 p-4 bg-[#2c3e50] text-white shadow-lg tracking-wider rounded-lg cursor-pointer hover:font-semibold text-lg">
                <a href="bocker/ebony"> Läs mer här</a>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <DividerLine />
      {/* Children's Books Section */}
      <section className="py-10 px-6 font-second">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 flex flex-col md:items-center space-y-6">
            <div className="w-[130px] px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-second text-primary font-semibold uppercase tracking-wide">
                Barnböcker
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-main font-bold  mb-4">
              Lilla Lia-serien
            </h2>
            <p className="text-lg font-second md:text-center text-black/80 max-w-2xl mb-6">
              Kärleksfulla berättelser om hur en högkänslig flicka upplever
              olika möten och känslor.
            </p>
            <button className="w-[250px] flex items-center justify-center gap-2 p-4 bg-[#2c3e50] text-white shadow-lg tracking-wider rounded-lg cursor-pointer hover:font-semibold text-lg">
              <a href="/bocker/lillalia">Läs mer här</a>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {childrenBooks.map((book, i) => (
              <div key={i} className="">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg -2xl ">
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      className="w-full h-full object-contain p-4 "
                      src={book.src}
                      alt={book.title}
                    />
                  </div>
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2c3e50]/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-second font-semibold text-center">
                      {book.title}
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers Section */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-main font-bold text-[#2c3e50] mb-4">
              Återförsäljare
            </h2>
            <p className="text-lg font-second text-gray-700 max-w-2xl mx-auto">
              Köp mina böcker hos dessa utvalda återförsäljare
            </p>
          </div>
          <StoresGrid />
        </div>
      </section> */}
    </>
  );
};

export default Books;
