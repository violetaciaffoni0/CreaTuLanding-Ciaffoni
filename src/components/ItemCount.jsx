import { useState } from "react";
import Button from "react-bootstrap/Button";

function itemCount({ nombre }) {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => setCounter(counter + 1);
  const handleRes = () => counter > 0 && setCounter(counter - 1);
  const handleReset = () => {
    if (counter > 0) {
      alert(`Agregaste ${counter} ${nombre} al carrito`);
      setCounter(0);
    }
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
      <Button onClick={handleReset} variant="primary" style={{ margin: "5px" }}>
        Agregar al carrito
      </Button>
    </div>
  );
}

export default itemCount;
