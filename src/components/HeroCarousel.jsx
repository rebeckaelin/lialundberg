import Slider from "react-slick";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../client";

// Build Sanity images
const builder = imageUrlBuilder(client);
const urlFor = (src) => builder.image(src).url();

const HeroCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    swipeToSlide: true,
    fade: false,
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Buttons container: fixed on top of slider */}
      <div className="absolute inset-0 flex flex-col lg:flex-row justify-center items-center font-second gap-6 z-20 pointer-events-auto">
        <a
          href="/behandlingar"
          className="w-[250px] text-center py-4 bg-white/90 text-black/80 tracking-wider rounded-lg transition-all duration-300 hover:bg-[#2c3e50] hover:text-white text-lg "
        >
          Boka behandling
        </a>
        <a
          href="/bocker"
          className="w-[250px] text-center py-4 bg-white/90 shadow-lg text-black/80  tracking-wider rounded-lg transition-all duration-300 hover:bg-[#2c3e50] hover:text-white text-lg "
        >
          Läs om mina böcker
        </a>

        <a
          href="/webbshop"
          className="w-[250px] text-center py-4 bg-white/90 text-black/80 shadow-lg tracking-wider rounded-lg transition-all duration-300 hover:bg-[#2c3e50] hover:text-white text-lg "
        >
          Webbshop
        </a>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <div
              className="w-full h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${urlFor(item.image)})`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
