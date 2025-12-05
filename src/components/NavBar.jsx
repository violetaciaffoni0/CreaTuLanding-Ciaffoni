import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <h1>Malvi-Accesorios</h1>
      </NavLink>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={getActiveClass}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/categoria/Fundas" className={getActiveClass}>
            Fundas
          </NavLink>
        </li>
        <li>
          <NavLink to="/categoria/Auriculares" className={getActiveClass}>
            Auriculares
          </NavLink>
        </li>
        <li>
          <NavLink to="/categoria/Cargadores" className={getActiveClass}>
            Cargadores
          </NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
