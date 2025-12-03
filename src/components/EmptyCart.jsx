import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="text-center mt-5">
      <h2>No tienes productos en el carrito</h2>
      <Button as={Link} to="/" variant="danger" className="mt-3">
        Ir a ver productos
      </Button>
    </div>
  );
}

export default EmptyCart;
