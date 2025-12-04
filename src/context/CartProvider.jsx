import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const existe = cart.find((p) => p.id === item.id);

    if (existe) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, count: p.count + cantidad } : p
        )
      );
    } else {
      setCart([...cart, { ...item, count: cantidad }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));

  const clearCart = () => setCart([]);

  const getCartQuantity = () => cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
