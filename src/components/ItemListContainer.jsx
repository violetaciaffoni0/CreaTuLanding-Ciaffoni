import React from "react";
function ItemListContainer({ mensaje }) {
  return (
    <div className="Item-List-Container">
      <h2> {mensaje}</h2>
      <p>Descubri nuestras Fundas, Celulares y Accesorios </p>
    </div>
  );
}

export default ItemListContainer;
