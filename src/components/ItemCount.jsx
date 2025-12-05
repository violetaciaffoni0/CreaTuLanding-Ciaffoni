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
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <p>In stock: {stock}</p>
      <p style={{ fontWeight: "bold" }}>{cantidad}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <Button variant="danger" onClick={restar}>
          -
        </Button>

        <Button variant="success" onClick={sumar}>
          +
        </Button>

        <Button variant="primary" onClick={handleAdd}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
