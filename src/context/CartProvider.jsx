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

  const removeItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.count, 0);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.count * item.price, 0);
  };

  const value = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getCartQuantity,
    getTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
