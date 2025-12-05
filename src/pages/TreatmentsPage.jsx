import { useState, useEffect } from "react";
import { client } from "../client";
import { PortableText } from "@portabletext/react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Card from "../components/Card";
import BookingModal from "../components/BookingModal";
import Signup from "../components/Signup";
import DividerLine from "../components/DividerLine";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [treatments, setTreatments] = useState([]);
  const [content, setContent] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

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
  // Fetch treatments
  useEffect(() => {
    client.fetch(treatmentsQuery).then((data) => {
      setTreatments(data);
    });
  }, []);

  if (!content || !treatments.length) return <div>Loading…</div>;

  return (
    <section className="">
      <section className="relative flex flex-col-reverse lg:flex-row items-center justify-center p-6 lg:py-20 gap-10 bg-primary/25 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 -top-[300px] -right-[200px]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/30 -bottom-[200px] -left-[100px]"></div>
        <div className="w-full lg:w-1/2 relative">
          {/* Subtil linje eller ornament som övergång */}
          <div className="lg:hidden w-26 h-0.5 bg-primary mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl pb-6 font-second font-semibold text-center lg:text-left">
            {content.section1Heading}
          </h2>

          <div className="font-second text-base leading-relaxed text-black/80 space-y-4 text-center lg:text-left">
            <PortableText value={content.section1Body} />
          </div>
        </div>
        <div className="z-10 w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] rounded-full overflow-hidden">
          <img
            src={content.section1ImageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="flex justify-center my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-6 items-start">
          {treatments.map((t, i) => (
            <Card
              key={i}
              image={t.imageUrl}
              title={t.title}
              time={t.time}
              description={t.description}
              isExpanded={expandedIndex === i}
              onToggle={() => toggleExpand(i)}
              toggleVisible={t.description.length > 120}
              extraContent={
                <p className="text-md font-semibold text-black/80 mt-4">
                  {t.price}
                </p>
              }
            />
          ))}
        </div>
      </section>

      <div className="flex justify-center pb-8 font-second ">
        <button
          className="w-[250px] flex items-center justify-center gap-2 p-4 bg-[#2c3e50] text-white shadow-lg tracking-wider rounded-lg cursor-pointer hover:font-semibold text-lg"
          onClick={() => setModalOpen(true)}
        >
          {" "}
          Boka
        </button>
      </div>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <DividerLine />
      {/* <section className="overflow- p-6"> */}
      <TestimonialCarousel testimonials={testimonials} />
      {/* </section> */}
      <Signup />
    </section>
  );
};

export default TreatmentsPage;
