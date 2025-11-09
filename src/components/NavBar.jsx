import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Malvi-Accesorios</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/fundas">Fundas</Link>
        </li>
        <li>
          <Link to="/category/celulares">Celulares</Link>
        </li>
        <li>
          <Link to="/category/auriculares">Auriculares</Link>
        </li>
        <li>
          <Link to="/category/parlantes">Parlantes</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}
export default NavBar;
