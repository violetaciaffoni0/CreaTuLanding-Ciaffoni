import { useCart } from "../context/useCart";
import ListGroup from "react-bootstrap/ListGroup";

function CartContainer() {
  const { cart } = useCart();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <ListGroup>
        {cart.map((prod) => (
          <ListGroup.Item key={prod.id}>
            {prod.nombre} x {prod.count}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CartContainer;
