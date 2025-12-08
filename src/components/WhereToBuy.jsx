// BuySection.jsx
import React from "react";
import { Link } from "react-router-dom";

const WhereToBuy = ({ title, links, webbshop }) => {
  return (
    <section id="buy" className="py-20 px-6 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-second font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg font-second text-white/90 mb-12">
          Tillgänglig hos följande återförsäljare
        </p>

        {/* Webshop button in its own div */}
        {webbshop && (
          <div className="flex justify-center mb-8">
            <Link
              to={webbshop.href}
              className="px-8 py-4 bg-[#2c3e50] text-white font-second w-[260px] hover:font-semibold rounded-lg hover:font-semiboldshadow-lg"
            >
              {webbshop.label}
            </Link>
          </div>
        )}

        {/* Other links */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black/80 font-second w-[250px] hover:font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
