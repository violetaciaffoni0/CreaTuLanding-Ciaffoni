import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvaider({ children }) {
  const [cart, setCart] = useState([]);
  const getCartQuantity = () => {
    cart.length;

    const addToCart = (product) => setCart([...cart, product]);
  };
  return (
    <CartContext.Provider value={{ getCartQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvaider;
