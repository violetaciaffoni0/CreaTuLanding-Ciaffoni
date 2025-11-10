import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 as={Link} className="logo">
        Malvi-Accesorios
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/categoria/Fundas">Fundas</Link>
        </li>
        <li>
          <Link to="/categoria/Auriculares">Auriculares</Link>
        </li>
        <li>
          <Link to="/categoria/Cargadores">Cargadores</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
