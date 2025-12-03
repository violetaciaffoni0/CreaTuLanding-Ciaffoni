import { useCart } from "../context/useCart";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap/Button";

function CartContainer() {
  const { cart } = useCart();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <ListGroup>
        {cart.map((prod) => (
          <ListGroup.Item key={prod.id}>
            {prod.nombre} x {prod.count}
            <Button variant="danger">Eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CartContainer;
