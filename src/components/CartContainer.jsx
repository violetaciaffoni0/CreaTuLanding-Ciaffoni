import { useCart } from "../context/useCart";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import EmptyCart from "./EmptyCart";

function CartContainer() {
  const { cart, clearCart } = useCart(); // corregido cleartCart -> clearCart

  if (cart.length < 1) {
    return <EmptyCart />;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <ListGroup className="w-75" style={{ maxWidth: "350px" }}>
        {cart.map((prod) => (
          <ListGroup.Item
            key={prod.id}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              <Image
                src={prod.imagen}
                width={50}
                height={50}
                rounded
                style={{ objectFit: "cover" }}
              />
              <span>
                {prod.nombre} x {prod.count}
              </span>
            </div>

            <Button variant="danger" size="sm">
              Eliminar
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Botón finalizar compra */}
      <Button className="mt-5 w-75" variant="light">
        Finalizar compra
      </Button>

      {/* Botón vaciar carrito */}
      <Button
        className="mt-3 w-75"
        variant="light"
        onClick={() => clearCart()} // CORRECTO: onClick como prop
      >
        Vaciar Carrito
      </Button>
    </div>
  );
}

export default CartContainer;
