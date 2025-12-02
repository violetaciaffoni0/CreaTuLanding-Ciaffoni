import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getCartQuantity = () =>
    cart.reduce((acc, current) => acc + current.count, 0);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ getCartQuantity, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
