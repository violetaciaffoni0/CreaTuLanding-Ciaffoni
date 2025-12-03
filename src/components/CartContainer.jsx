import { useCart } from "..context/useCart.jsx";

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
