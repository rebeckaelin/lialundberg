import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { LiaBookSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import mandala_two from "../assets/mandala_2.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);
  const navigate = useNavigate();

  // const books = ["Lilla Lia", "Ebony", "Webbshop"];

  const books = [
    { title: "Lilla Lia", path: "/bocker/lillalia" },
    { title: "Ebony", path: "/bocker/ebony" },
    { title: "Webbshop", path: "/bocker/webbshop" }, // optional, if you add that page
  ];

  return (
    <>
      {/* Header with logo and mobile menu button */}
      <header className="relative px-4 py-2 sm:border-b flex items-center justify-between sm:justify-center">
        <img
          src={mandala_two}
          alt="mandala"
          className="
    absolute 
    -top-16 sm:-top-52 
    left-1/2 
    -translate-x-1/2 
    w-32 sm:w-72 
    opacity-20 
    pointer-events-none 
    select-none 
    z-0
  "
        />

        <div
          className="flex flex-col items-center font-main my-10 gap-3 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl">
            <span className="font-accent">L</span>ia{" "}
            <span className="font-accent">L</span>undberg
          </h1>
          <p className="font-second italic text-sm md:text-lg self-start sm:self-end">
            {/* - terapeut & författare */}- Författare & terapeut med ett
            konstnärligt hjärta
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
      <nav className="hidden sm:block mt-4 uppercase text-base">
        <ul className="flex justify-evenly font-second text-primary relative">
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
                to="/forfattare"
                className={`flex items-center hover:underline underline-offset-10 gap-1 ${
                  isActive("/forfattare") ? "underline " : ""
                }`}
              >
                Författare
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
                      <LiaBookSolid />
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
              to="/kontakt"
              className={`relative hover:underline underline-offset-10 ${
                isActive("/kontakt") ? "underline " : ""
              }`}
            >
              Kontakt
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
            <Link to="/forfattare" onClick={() => setMenuOpen(false)}>
              Författare
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
              {/* <li>
                <Link to="/forfattare/bok1" onClick={() => setMenuOpen(false)}>
                  – Bok 1
                </Link>
              </li>
              <li>
                <Link to="/forfattare/bok2" onClick={() => setMenuOpen(false)}>
                  – Bok 2
                </Link>
              </li>
              <li>
                <Link to="/forfattare/bok3" onClick={() => setMenuOpen(false)}>
                  – Bok 3
                </Link>
              </li> */}
            </ul>
          </li>
          <li>
            <Link to="/om-mig" onClick={() => setMenuOpen(false)}>
              Om mig
            </Link>
          </li>
          <li>
            <Link to="/kontakt" onClick={() => setMenuOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="relative">
        <img
          src={mandala_two}
          alt="mandala"
          className=" sm:block absolute -top-92 -left-23 w-140 opacity-20 -translate-x-1/3 -translate-y-1/3 pointer-events-none select-none z-0"
        />
      </div> */}

      {/* <div className="relative w-full h-64 sm:h-96 overflow-hidden">
        <img
          src={mandala_two}
          alt="mandala"
          className="
      absolute 
      top-0 
      left-0 
      w-48 sm:w-72 
      opacity-20 
      pointer-events-none 
      select-none
    "
        />
      </div> */}
    </>
  );
}
