import { useState } from "react";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartProvider.jsx";

function ItemDetail({ item }) {
  const { addItem } = useCart();

  const handleAdd = (cantidad) => {
    addItem(item, cantidad);
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

      <ItemCount stock={10} onAdd={handleAdd} />
    </div>
  );
}

export default ItemDetail;
