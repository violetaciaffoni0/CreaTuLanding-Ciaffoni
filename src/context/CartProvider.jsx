import { CartContext } from "./CartContext";

function CartProvaider({ children }) {
  return <CartContext.Provider value={""}> {children}</CartContext.Provider>;
}
export default CartProvaider;
