import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/useCart";

function ItemCount({ item }) {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => setCounter(counter + 1);
  const handleRes = () => counter > 1 && setCounter(counter - 1);

  const handleAddToCart = () => {
    addToCart({ ...item, count: counter });
    alert(`Agregaste ${counter} ${item.nombre} al carrito`);
  };

  return (
    <div style={{ marginTop: "15px", textAlign: "center" }}>
      <p style={{ fontSize: "18px" }}>{counter}</p>

      <Button onClick={handleRes} variant="danger" style={{ margin: "5px" }}>
        Restar
      </Button>

      <Button onClick={handleAdd} variant="success" style={{ margin: "5px" }}>
        Sumar
      </Button>

      <Button
        onClick={handleAddToCart}
        variant="primary"
        style={{ margin: "5px" }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
