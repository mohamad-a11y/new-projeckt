import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="logo">Erster Projeckt</a>
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`link ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/produkte"><a>Produkte</a></Link>
          <Link to="/preise">Preise</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
        <div className="account">
          <a href="#" >login
          </a>
          <a href="#" className="btn-join">Sei dabei <FaArrowRight /></a>
        </div>

      </nav>


    </header>

  );
}

export default Header;
