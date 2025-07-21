import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", path: "#home" },
    { name: "Nuestros servicios", path: "#services" },
    { name: "PQRS", path: "/PQRS", target: "_blank" },
    { name: "Nuestros Aliados", path: "#aliados" },
    { name: "Nuestro equipo", path: "#equiped" },
    { name: "Testimonios", path: "#testimonials" },
  ];

  const handleScroll = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  const renderLink = ({ name, path, target }, index, isMobile = false) => {
    const classes = isMobile
      ? "block py-2 text-base hover:text-primary"
      : "hover:text-primary transition font-medium";

    if (target === "_blank") {
      return (
        <a
          key={index}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {name} ↗
        </a>
      );
    }

    if (path.startsWith("#")) {
      return (
        <a
          key={index}
          href={path}
          onClick={(e) => handleScroll(e, path)}
          className={classes}
        >
          {name}
        </a>
      );
    }

    return (
      <Link
        key={index}
        to={path}
        onClick={() => setMenuOpen(false)}
        className={classes}
      >
        {name}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-gray-700 text-sm">
          {menuItems.map((item, i) => renderLink(item, i))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
            <a
              href={"https://ipsterapiasintegralesdomiciliarias.pandape.computrabajo.com/?PageNumber=1&PageSize=20&Salary=null&SalaryUpper=true&Deficiency=0"}
              target={"_blank"}
              className="py-2 px-3 text-white  bg-blue-600 rounded-lg font-semibold shadow-lg transition text-center"
              >
            Buscas empleo
            </a>
          
          <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md text-sm font-semibold transition">
            Ingresa a Tid Medical
          </button>
          <img
            src={search}
            alt="Buscar"
            className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
          />
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 border-t">
          <nav className="flex flex-col gap-4 pt-2">
            {menuItems.map((item, i) => renderLink(item, i, true))}
            <div className="pt-4 flex flex-col gap-2">
               <a
                  href={"https://ipsterapiasintegralesdomiciliarias.pandape.computrabajo.com/?PageNumber=1&PageSize=20&Salary=null&SalaryUpper=true&Deficiency=0"}
                  target={"_blank"}
                  className="py-2 px-3 text-white  bg-blue-600 rounded-lg font-semibold shadow-lg transition text-center"
                  >
                  Buscas empleo
              </a>
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-sm font-semibold">
                Ingresa a Tid Medical
              </button>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">Buscar</span>
                <img src={search} alt="search" className="w-5 h-5" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
