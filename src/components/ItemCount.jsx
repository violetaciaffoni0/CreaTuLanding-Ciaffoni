import { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount({ item, onAdd }) {
  const [count, setCount] = useState(1);

  return (
    <div className="item-count">
      <Button onClick={() => count > 1 && setCount(count - 1)}>-</Button>
      <span>{count}</span>
      <Button onClick={() => count < item.stock && setCount(count + 1)}>
        +
      </Button>
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
  );
}

export default ItemCount;
