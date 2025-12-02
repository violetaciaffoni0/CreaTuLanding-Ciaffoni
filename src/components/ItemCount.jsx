import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";

function itemCount({ item }) {
  const [counter, setCounter] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => setCounter(counter + 1);
  const handleRes = () => counter > 0 && setCounter(counter - 1);
  const handleReset = () => {
    if (counter > 0) {
      alert(`Agregaste ${counter} ${nombre} al carrito`);
      setCounter(0);
    }
  };
  const handleAddToCart = () => addToCart(item);

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

export default itemCount;
