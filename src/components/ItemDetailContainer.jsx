import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getItemById } from "../firebase/db.js";
import { useCart } from "../context/CartProvider.jsx";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    getItemById(id)
      .then((prod) => setItem(prod))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!item) return <p>Producto no encontrado</p>;

  const handleAddToCart = (quantity) => {
    addItem(item, quantity);
    alert(`Agregaste ${quantity} ${item.name}(s) al carrito`);
  };

  return <ItemDetail item={item} onAddToCart={handleAddToCart} />;
}

export default ItemDetailContainer;
