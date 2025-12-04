import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getItemById } from "../firebase/db.js";
import { useCart } from "../context/CartProvider.jsx";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    getItemById(id)
      .then(setItem)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = (count) => {
    if (item) {
      addToCart({ ...item, count });
      alert(`${item.nombre} agregado al carrito`);
    }
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!item) return <p>Producto no encontrado</p>;

  return <ItemDetail item={item} onAddToCart={handleAddToCart} />;
}

export default ItemDetailContainer;
