import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Cantidad total del carrito
  const getCartQuantity = () =>
    cart.reduce((acc, current) => acc + current.count, 0);

  // Agregar al carrito (acumula cantidades si el producto ya existe)
  const addToCart = (product) => {
    const exists = cart.find((p) => p.id === product.id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, count: p.count + product.count } : p
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <CartContext.Provider value={{ getCartQuantity, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
