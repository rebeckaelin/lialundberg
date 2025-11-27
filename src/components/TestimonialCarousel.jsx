import { useEffect } from "react";
import Slider from "react-slick";

const TestimonialCarousel = ({ testimonials }) => {
  // Center slide scaling CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .slick-center .testimonial-card {
        transform: scale(1.05);
        opacity: 1;
        z-index: 10;
      }
      .slick-slide:not(.slick-center) .testimonial-card {
        opacity: 0.6;
        transform: scale(0.95);
      }
      .slick-track {
        display: flex;
        align-items: center;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
  };

  return (
    <div className="flex justify-center content-center mx-4 lg:m-12 pt-4 pb-8">
      <div className="w-full  shadow-lg max-w-4xl">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial-card w-full transition-transform  duration-700"
            >
              <div className=" flex flex-col justify-evenly bg-white m-10 px-10 text-center ">
                <p className="italic text-black font-second text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
                <p className="text-sm sm:text-base uppercase font-main font-semibold self-end mt-2">
                  – {item.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
