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
    <div className="flex justify-center content-center m-4 lg:m-12 pb-4">
      <div className="w-full md:w-3/4 lg:w-2/3 shadow-lg max-w-4xl rounded-lg border border-accent">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="w-full px-4">
              <div className="relative flex flex-col justify-evenly bg-white px-5 py-8 text-center">
                {/* Opening quote — top left */}
                <span
                  className="
                    absolute
                    top-4 left-4
                    text-7xl sm:text-7xl
                    text-black/30
                    font-serif
                    select-none
                  "
                >
                  “
                </span>

                <p className="italic text-black font-second p-8 text-base leading-relaxed relative z-10">
                  {item.text}
                </p>

                {/* Closing quote — bottom right (opposite corner) */}
                <span
                  className="
                    absolute
                    bottom-4 right-4
                    text-7xl sm:text-7xl
                    text-black/30
                    font-serif
                    select-none
                  "
                >
                  ”
                </span>

                <p className="text-sm sm:text-base uppercase font-main font-semibold self-center mt-8 relative z-10">
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
