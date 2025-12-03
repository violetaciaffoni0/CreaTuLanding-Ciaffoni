import { useNavigate } from "react-router";
import { useCart } from "../context/useCart";

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
