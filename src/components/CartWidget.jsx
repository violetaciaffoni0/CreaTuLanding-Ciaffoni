import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartProvider.jsx";

function CartWidget() {
  const navigate = useNavigate();
  const { getCartQuantity } = useCart();

  return (
    <button className="cart-widget" onClick={() => navigate("/cart")}>
      🛒
      <span className="cart-count">{getCartQuantity()}</span>
    </button>
  );
}

export default CartWidget;
