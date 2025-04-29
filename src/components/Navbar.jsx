import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // npm install lucide-react (för ikoner)
import logo from "../assets/lia_logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="w-auto h-[250px] self-start" />
        </div>
        <div className="">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <li>
              <Link to="/behandlingar" className="hover:underline">
                Behandlingar
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/forfattare"
                className="hover:underline text-white px-2 py-1 inline-block"
              >
                Författare
              </Link>

              <div className="absolute left-0 z-50">
                {dropdownOpen && (
                  <ul className="bg-white border rounded-md shadow-lg py-2 w-40">
                    <li>
                      <Link
                        to="/forfattare/bok1"
                        className="block px-4 py-2 hover:bg-gray-100 text-black"
                      >
                        Bok 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/forfattare/bok2"
                        className="block text-black px-4 py-2 hover:bg-gray-100"
                      >
                        Bok 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/forfattare/bok3"
                        className="block text-black px-4 py-2 hover:bg-gray-100"
                      >
                        Bok 3
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/om-mig" className="hover:hover:underline">
                Om mig
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2">
          <li>
            <Link to="/behandlingar" onClick={() => setMenuOpen(false)}>
              Behandlingar
            </Link>
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
          <li>
            <Link to="/forfattare" onClick={() => setMenuOpen(false)}>
              Författare
            </Link>
            <ul className="ml-4 mt-1 space-y-1">
              <li>
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
              </li>
            </ul>
          </li>
        </ul>
      )}
    </nav>
  );
}
