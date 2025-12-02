import React from "react";
import { useNavigate } from "react-router";

function CartWidget() {
  const navigate = useNavigate();

  return (
    <button className="cart-widget" onClick={() => navigate("/cart")}>
      🛒
      <span className="cart-count">3</span>
    </button>
  );
}
export default CartWidget;
