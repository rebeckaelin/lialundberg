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
    address: "Residensgatan 1A",
  },
  {
    type: "physical",
    name: "ICA Mariehem",
    city: "Umeå",
    address: "Mariehemsvägen 8",
  },
  {
    type: "physical",
    name: "Gårdshem",
    city: "Umeå",
    address: "Kungsgatan 67 (Utopia)",
  },
];

const onlineStores = stores.filter((s) => s.type === "online");
const physicalStores = stores.filter((s) => s.type === "physical");

export default function StoresGrid() {
  return (
    <>
      <section className="flex justify-center py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          {/* ONLINE STORES CARD */}
          <Card
            image={onlineStoreImg}
            title="Onlinebutiker"
            minHeight="300px"
            extraContent={
              <ul className="text-black text-sm space-y-3 pt-4">
                {onlineStores.map((store, i) => (
                  <li key={i}>
                    <a
                      href={store.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline underline-offset-4 font-semibold hover:text-gray-700"
                    >
                      {store.name}
                    </a>
                  </li>
                ))}
              </ul>
            }
          />

          {/* PHYSICAL STORES CARD */}
          <Card
            image={physicalStoreImg}
            title="Fysiska butiker"
            minHeight="300px"
            extraContent={
              <ul className="text-black text-sm pt-4">
                {physicalStores.map((store, i) => (
                  <li key={i} className="mb-3">
                    <span className="font-semibold">{store.name}</span> <br />
                    {store.address && <span> {store.address}</span>}
                    {store.city && <span> {store.city}</span>}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </>
  );
}
