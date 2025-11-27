import Card from "./Card";
import onlineStoreImg from "../assets/computer_outline.png";
import physicalStoreImg from "../assets/shop_outline.png";

const stores = [
  {
    type: "online",
    name: "Bokus",
    link: "https://www.bokus.com/bok/9789152798300/ebony/",
  },
  {
    type: "online",
    name: "Akademibokhandeln",
    link: "https://www.akademibokhandeln.se/bok/ebony/9789152798300",
  },
  {
    type: "online",
    name: "Adlibris",
    link: "https://www.adlibris.com/sv/bok/ebony-9789152798300",
  },
  {
    type: "physical",
    name: "Riddarborgens hälsocenter",
    city: "Umeå",
    link: "https://riddarborgen.nu/",
  },
  {
    type: "physical",
    name: "ICA Mariehem",
    city: "Umeå",
    link: "https://www.ica.se/butiker/kvantum/umea/ica-kvantum-mariehem-1003786/",
  },
  {
    type: "physical",
    name: "Gårdshem",
    city: "Umeå",
    link: "https://www.gardshem.se/",
  },
];

export default function StoresGrid() {
  return (
    <>
      <section className=" px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-main font-semibold text-center">
          Våra återförsäljare
        </h2>
      </section>

      <section className="flex justify-center py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {stores.map((store, index) => (
            <Card
              key={index}
              image={
                store.type === "online" ? onlineStoreImg : physicalStoreImg
              }
              title={store.name}
              description={store.city} // optional for online stores
              extraContent={
                <a
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold mt-2"
                >
                  {store.type === "online" ? "Köp här" : "Besök sida"}
                </a>
              }
              minHeight="200px"
            />
          ))}
        </div>
      </section>
    </>
  );
}
