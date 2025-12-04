import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getCartQuantity = () => cart.reduce((acc, item) => acc + item.count, 0);

  const addToCart = (item) => {
    const exists = cart.find((p) => p.id === item.id);
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, count: p.count + item.count } : p
        )
      );
    } else {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
