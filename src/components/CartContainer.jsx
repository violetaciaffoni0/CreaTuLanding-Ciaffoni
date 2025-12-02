import { useCart } from "./useCart";

function CartContainer() {
  const { Cart } = useCart();

  return (
    <div>
      {Cart.map((prod) => (
        <p key={prod.id}>{prod.title}</p>
      ))}
    </div>
  );
}

export default CartContainer;
