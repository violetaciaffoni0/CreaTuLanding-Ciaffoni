import React, { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ item, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (count) => {
    onAddToCart(count);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={item.imagen} alt={item.nombre} />
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <h3>${item.precio}</h3>
      {!added && <ItemCount item={item} onAdd={handleAdd} />}
      {added && <p>Producto agregado al carrito</p>}
    </div>
  );
}

export default ItemDetail;
