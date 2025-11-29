import { useState, useEffect } from "react";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Card from "../components/Card";
import BookingModal from "../components/BookingModal";
import Signup from "../components/Signup";

const query = `*[_type == "TreatmentInfoSection"][0]{
  section1Heading,
  section1Body,
  "section1ImageUrl": section1Image.asset->url,
  }`;

const treatmentsQuery = `*[_type == "treatment"] | order(title asc){
    title,
    description,
    "imageUrl": image.asset->url,
    price,
    time
    }`;

const treatmentTestimonialsQuery = `*[_type == "testimonial" && category == "treatment"]{
  text,
  name
}`;

const TreatmentsPage = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [treatments, setTreatments] = useState([]);
  const [content, setContent] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  // Control page scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [modalOpen]);

  // Fetch testimonials
  useEffect(() => {
    client.fetch(treatmentTestimonialsQuery).then(setTestimonials);
  }, []);

  // Fetch About page content
  useEffect(() => {
    client.fetch(query).then(setContent);
  }, []);

  // Fetch treatments
  useEffect(() => {
    client.fetch(treatmentsQuery).then((data) => {
      setTreatments(data);
      setExpandedCards(new Array(data.length).fill(false)); // array matches treatment length
    });
  }, []);

  const toggleExpand = (index) => {
    setExpandedCards((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  if (!content || !treatments.length) return <div>Loading…</div>;

  return (
    <section className="">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 sm:mt-10 mb-10 py-20 px-6 bg-accent">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl pb-6 font-main font-semibold text-center lg:text-left">
            {content.section1Heading}
          </h2>

          <div className="font-second text-base leading-relaxed text-gray-800 space-y-4 text-center lg:text-left">
            <PortableText value={content.section1Body} />
          </div>
        </div>
        <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
          <img
            src={content.section1ImageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="flex justify-center my-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-15 px-6">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              image={treatment.imageUrl}
              title={treatment.title}
              time={treatment.time}
              description={
                expandedCards[index]
                  ? treatment.description
                  : treatment.description.slice(0, 120) + "..."
              }
              isExpanded={expandedCards[index]}
              onToggle={() => toggleExpand(index)}
              toggleVisible={treatment.description.length > 120}
              minHeight="400px"
              extraContent={
                <p className="text-md font-semibold text-black mt-8">
                  {treatment.price}
                </p>
              }
            />
          ))}
        </div>
      </section>

      <div className="flex justify-center pb-8 font-semibold font-main text-2xl tracking-wider">
        <button
          className="border w-[200px] p-3 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          BOKA
        </button>
      </div>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <Signup />
      {/* <section className="overflow- p-6"> */}
      <TestimonialCarousel testimonials={testimonials} />
      {/* </section> */}
    </section>
  );
};

export default TreatmentsPage;

/* 

     <section className="flex justify-center my-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-15 px-6">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-fourth font-second border shadow-2xl text-white w-auto min-w-[200px] max-w-[350px] min-h-[480px] grid grid-rows-[auto_auto_1fr_auto_auto] mt-20"
            >
              <div className="relative w-[150px] h-[150px] -mt-24 justify-self-center">
                <div className="w-full h-full rounded-full bg-white p-2 box-content">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-full object-contain rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center pt-8">
                <h3 className="relative text-black inline-block font-main uppercase text-2xl text-[#2e4c3a] custom-underline">
                  {treatment.title}
                </h3>
              </div>

              <div className="flex flex-col px-4 text-center pt-6">
                <p className="text-sm text-black">{treatment.time}</p>

                <p
                  className={`text-sm mt-2 text-black transition-all duration-300 ${
                    expandedCards[index] ? "" : "line-clamp-5"
                  }`}
                >
                  {treatment.description}
                </p>
               
                {treatment.description.length > 120 && (
                  <button
                    className="text-xs text-[#2e4c3a] underline underline-offset-4 mt-4 self-center"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedCards[index] ? "Visa mindre" : "Visa mer"}
                  </button>
                )}
              </div>

              <div></div>

              <div className="flex justify-center items-center pb-8">
                <p className="text-md font-semibold text-black">
                  {treatment.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

*/
