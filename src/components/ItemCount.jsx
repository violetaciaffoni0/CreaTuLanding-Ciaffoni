import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount({ stock = 5, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Button
          variant="secondary"
          onClick={restar}
          style={{ marginRight: "10px" }}
        >
          -
        </Button>

        <span style={{ fontSize: "20px", fontWeight: "bold" }}>{count}</span>

        <Button
          variant="secondary"
          onClick={sumar}
          style={{ marginLeft: "10px" }}
        >
          +
        </Button>
      </div>

      <Button variant="primary" onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
