import { useState } from "react";
import ItemCount from "./ItemCount.jsx";

function ItemDetail({ item, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (count) => {
    onAddToCart(count);
    setAdded(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img
        src={item.imagen}
        alt={item.nombre}
        style={{ width: "260px", borderRadius: "12px", marginBottom: "20px" }}
      />

      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <h3 style={{ marginBottom: "25px" }}>${item.precio}</h3>

      {!added ? (
        <ItemCount item={item} onAdd={handleAdd} />
      ) : (
        <h4 style={{ color: "green", fontWeight: "bold" }}>
          Producto agregado al carrito ✔
        </h4>
      )}
    </div>
  );
}

export default ItemDetail;
