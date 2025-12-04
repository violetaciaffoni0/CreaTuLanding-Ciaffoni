import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getItemById } from "../firebase/db.js";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getItemById(id)
      .then((prod) => setItem(prod))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!item) return <p>Producto no encontrado</p>;

  const handleAddToCart = (count) => {
    console.log("Agregado al carrito:", item, "Cantidad:", count);
  };

  return <ItemDetail item={item} onAddToCart={handleAddToCart} />;
}

export default ItemDetailContainer;
