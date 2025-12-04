import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const exists = cart.find((prod) => prod.id === item.id);

    if (exists) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }

    console.log("CARRITO ACTUAL:", cart);
  };

  const cartQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
