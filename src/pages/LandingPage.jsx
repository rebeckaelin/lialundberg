import writer from "../assets/writer_3.JPG";
import EventCard from "../components/EventCard";
import UpdatePosts from "../components/UpdatePosts";

const LandingPage = () => {
  const events = [
    {
      eventDate: "2025-12-06",
      title: "Pilgatans Julmarknad",
      location: "Kreativ Kollektiv,  Pilgatan 13, Umeå",
    },
    {
      eventDate: "2025-11-30",
      title: "Product Launch Event",
      location: "Be the first to see.",
    },
    {
      eventDate: "2026-01-10",
      title: "Training Workshop",
      location: "Interactive workshop.",
    },
  ];

  const posts = [
    {
      postDate: "2025-11-16",
      title: "Annual Company Meeting",
      description:
        "Join us for our annual company-wide meeting to discuss achievements, goals, and upcoming initiatives for the next year.",
    },
    {
      postDate: "2025-10-30",
      title: "Product Launch Event",
      description:
        "Be the first to see our newest product innovations and hear from our leadership team about the future of our platform.",
    },
    {
      postDate: "2024-01-10",
      title: "Training Workshop",
      description:
        "Interactive workshop covering best practices and new features. Perfect for both beginners and advanced users.",
    },
  ];
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly  sm:mt-10 py-20 px-6  bg-accent">
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left mt-10">
            Lia är en högkänslig person som känner sig mest som sig själv när
            hon får vara i det kreativa och skapa.
          </h2>
          <p className="w-full font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
            Hon har läst hälsopedagog i Norrland och skapandet av berättelser
            har funnits där sålänge hon kan minnas. Skrivande, healing,
            illustrationer, målningar, massage och här för att påminna oss om
            att lyfta högkänslighet.
          </p>
        </div>
        <div className="w-[380px] sm:w-[450px] lg:w-[620px] h-[380px] sm:h-[450px] lg:h-[620px] rounded-full overflow-hidden">
          <img src={writer} alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row my-10">
        <section className="flex flex-col px-6 lg:w-2/3">
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-3xl sm:text-4xl pb-12 font-main font-semibold text-center ">
                Nyheter
              </h2>

              {posts.map((posts, index) => (
                <UpdatePosts
                  key={index}
                  postDate={posts.postDate}
                  title={posts.title}
                  description={posts.description}
                />
              ))}
              {/* <p className="w-full font-second text-base leading-relaxed text-gray-800 text-center lg:text-left space-y-4">
              Lilla Lia böckerna är en serie där de två första böckerna släpptes
              den 12 oktober 2017. Böckerna handlar om ett högkänsligt barn vid
              namn Lilla Lia och hennes fantasivän Hubertus. Detta är enkla
              kärleksfulla berättelser där vi får se världen ur ett högkänsligt
              barns perspektiv. Mitt mål med dessa är att lyfta ämnet
              högkänslighet så att barnen ska få igenkänning och vuxna ska
              uppmärksamma denna personlighetsbeskrivning.
              </p> */}
            </div>
          </div>
          <p className="text-center font-second font-bold uppercase">
            visa fler nyheter
          </p>
        </section>
        <div className="bg-accent w-[12px]"></div>
        <aside className="lg:w-1/3 px-5 flex flex-col justify-center items-center text-black">
          <h2 className="text-3xl pb-6 sm:text-4xl font-main font-semibold ">
            På gång
          </h2>
          {events.map((event, index) => (
            <EventCard
              key={index}
              eventDate={event.eventDate}
              title={event.title}
              location={event.location}
            />
          ))}
        </aside>
      </section>
    </>
  );
};

export default LandingPage;
