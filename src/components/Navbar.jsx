import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Modalidades", href: "#modalidades" },
    { label: "Planos",      href: "#planos" },
    { label: "Instrutores", href: "#instrutores" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato",     href: "#contato" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          FIT<span>ZONE</span>
        </a>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contato" className="btn btn-primary navbar__cta">
          Começar agora
        </a>

        <button className="navbar__hamburger" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}