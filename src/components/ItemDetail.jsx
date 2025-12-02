import React from "react";
import ItemCount from "./itemCount";

function ItemDetail({ item }) {
  return (
    <div
      className="item-detail"
      style={{
        textAlign: "center",
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        width: "fit-content",
        marginInline: "auto",
      }}
    >
      <img
        src={item.imagen}
        alt={item.nombre}
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      />
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <h3>${item.precio}</h3>
      <ItemCount item={item} />
    </div>
  );
}

export default ItemDetail;
