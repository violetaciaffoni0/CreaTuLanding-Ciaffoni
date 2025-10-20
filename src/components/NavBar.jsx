import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="NavBar">
      <h1 className="Logo"> Malvi-Accesorios</h1>
      <ul className="nav-links">
        <li>
          <a href="#">Fundas</a>
        </li>
        <li>
          <a href="#">Celulares</a>
        </li>
        <li>
          <a href="#">Cargadores</a>
        </li>
        <li>
          <a href="#">Auriculares</a>
        </li>
        <li>
          <a href="#">Parlantes</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}
export default NavBar;
