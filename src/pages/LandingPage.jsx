import NewsFeed from "../components/NewsFeed";
import Topical from "../components/Topical";
import { useState, useEffect } from "react";
import { client } from "../client";

import HeroCarousel from "../components/HeroCarousel";
import WelcomeSection from "../components/WelcomeSection";

const query = `*[_type == "heroCarousel"][0]{
  images[]{
    image,
    alt,
    headline,
    subheadline
  }
}`;

const LandingPage = () => {
  const [carousel, setCarousel] = useState(null);

  useEffect(() => {
    client.fetch(query).then((data) => setCarousel(data));
  }, []);

  if (!carousel) return <div>Loading…</div>;

  return (
    <>
      <Topical />
      <section className="font-second">
        <div className="relative overflow-hidden">
          {carousel && <HeroCarousel images={carousel.images} />}
        </div>
        <NewsFeed />
        <WelcomeSection />
      </section>
    </>
  );
};

export default LandingPage;
