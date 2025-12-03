import { useCart } from "./useCart";

function CartContainer() {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((prod) => (
        <p key={prod.id}>{prod.title}</p>
      ))}
    </div>
  );
}

export default CartContainer;
