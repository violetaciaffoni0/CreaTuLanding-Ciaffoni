import { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount({ stock = 10, onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAdd = () => {
    onAdd(cantidad);
  };

  return (
    <div>
      <p>In stock: {stock}</p>
      <p>{cantidad}</p>

      <div style={{ display: "flex", gap: "20px" }}>
        <Button variant="danger" onClick={restar}>
          restar
        </Button>

        <Button variant="success" onClick={sumar}>
          sumar
        </Button>

        <Button variant="primary" onClick={handleAdd}>
          add to cart
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
