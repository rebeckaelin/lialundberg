import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { LiaBookSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import symbol_transparent from "../assets/symbol_lia_transparent.png";
import BookIcon from "./BookIcon";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);
  const navigate = useNavigate();

  const books = [
    { title: "Ebony", path: "/bocker/ebony" },
    { title: "Lilla Lia", path: "/bocker/lillalia" },
  ];

  return (
    <>
      {/* Header with logo and mobile menu button */}
      <header className="px-4 mt-10 pb-10 sm:border-b flex items-center justify-around sm:justify-center">
        <div
          className="w-4/5 sm:w-auto flex flex-col  hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-main">
            <span className="font-accent">L</span>ia{" "}
            <span className="font-accent">L</span>undberg
          </h1>
          <p className="font-second italic text-sm md:text-base md:text-lg self-start sm:self-end pt-2 tracking-wide">
            {/* - terapeut & författare */} terapeut • författare • illustratör
          </p>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="sm:hidden text-black"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </header>

      {/* Desktop Navigation */}
      <nav className="hidden sm:block my-4 text-black/80 uppercase text-base">
        <ul className="flex justify-evenly font-second ">
          <li>
            <Link
              to="/behandlingar"
              className={`relative hover:underline underline-offset-10 ${
                isActive("/behandlingar") ? "underline" : ""
              }`}
            >
              Behandlingar
            </Link>
          </li>

          <li className="relative">
            <div
              className="group inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link
                to="/bocker"
                className={
                  "flex items-center hover:underline underline-offset-10 gap-1"
                }
              >
                Böcker
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300  ${
                    isHovered ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Dropdown menu */}
              <div
                className={`absolute top-full left-0 bg-white text-black shadow-md  p-2 text-base rounded-md transition-all duration-300 origin-top-left z-50 min-w-[250px] ${
                  isHovered
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {/* Triangle */}

                <ul className="flex flex-col gap-4 mt-4">
                  {books.map(({ title, path }, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <BookIcon className="w-5 h-5" />
                      <Link to={path}>
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          <li>
            <Link
              to="/om-mig"
              className={`relative hover:underline underline-offset-10 ${
                isActive("/om-mig") ? "underline " : ""
              }`}
            >
              Om mig
            </Link>
          </li>
          <li>
            <Link
              to="/Webbshop"
              className={`relative hover:underline underline-offset-10 ${
                isActive("/webbshop") ? "underline " : ""
              }`}
            >
              Webbshop
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Slide-in Navigation */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 px-6 pt-4 text-lg font-second">
          <li>
            <Link to="/behandlingar" onClick={() => setMenuOpen(false)}>
              Behandlingar
            </Link>
          </li>
          <li>
            <Link to="/bocker" onClick={() => setMenuOpen(false)}>
              Böcker
            </Link>
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              {books.map(({ title, path }, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <LiaBookSolid />
                  <Link to={path}>
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/om-mig" onClick={() => setMenuOpen(false)}>
              Om mig
            </Link>
          </li>
          <li>
            <Link to="/webbshop" onClick={() => setMenuOpen(false)}>
              Webbshop
            </Link>
          </li>
        </ul>
        <img src={symbol_transparent} alt="" />
      </div>
    </>
  );
}
