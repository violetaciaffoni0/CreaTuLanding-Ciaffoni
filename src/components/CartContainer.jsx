import { useCart } from "../context/CartProvider.jsx";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import EmptyCart from "./EmptyCart.jsx";

function CartContainer() {
  const { cart, clearCart, removeItem } = useCart();

  if (cart.length < 1) return <EmptyCart />;

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.precio * item.count,
    0
  );

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

            <Button
              variant="danger"
              size="sm"
              onClick={() => removeItem(prod.id)}
            >
              Eliminar
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h4 className="mt-3">Total: ${totalPrice}</h4>

      <Button className="mt-3 w-75" variant="success">
        Finalizar compra
      </Button>

      <Button className="mt-3 w-75" variant="secondary" onClick={clearCart}>
        Vaciar Carrito
      </Button>
    </div>
  );
}

export default CartContainer;
