import React from "react";
import Button from "react-bootstrap/Button";

function ItemDetail({ item }) {
  return (
    <div className="item-detail">
      <img src={item.imagen} alt={item.nombre} />
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <h3>${item.precio}</h3>
    </div>
  );
}

export default ItemDetail;
