import { useCart } from "./useCart";

function CartContainer() {
  const { Cart } = useCart();

  return (
    <div>
      {Cart.map((prod) => (
        <p> {prod.title} </p>
      ))}
      ))
    </div>
  );
}

export default CartContainer;
