import { useState } from "react";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartProvider.jsx";

function ItemDetail({ item }) {
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  const handleAdd = (cantidad) => {
    addItem(item, cantidad);
    setAdded(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "260px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <h3 style={{ marginBottom: "25px" }}>${item.price}</h3>
      {!added ? (
        <ItemCount stock={10} onAdd={handleAdd} />
      ) : (
        <h4 style={{ color: "green", fontWeight: "bold" }}>
          Producto agregado al carrito ✔
        </h4>
      )}
    </div>
  );
}

export default ItemDetail;
