// components/ItemDetail.jsx
import Button from "react-bootstrap/Button";

function ItemDetail({ item }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={item.imagen} alt={item.nombre} />
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <h3>${item.precio}</h3>
      <Button variant="success">Agregar al carrito</Button>
    </div>
  );
}

export default ItemDetail;
