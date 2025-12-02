import React from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const navigate = useNavigate();
  const { getCartQuantity } = useContext(CartContext);
  const Quantity = getCartQuantity();

  return (
    <button className="cart-widget" onClick={() => navigate("/cart")}>
      🛒
      <span className="cart-count">{Quantity}</span>
    </button>
  );
}
export default CartWidget;
