import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
import { getProductById } from "../data/products";
import { useCart } from "../context/useCart";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useCart(); // OBTENER FUNCION PARA AGREGAR AL CARRITO

  useEffect(() => {
    getProductById(id).then((res) => setItem(res));
  }, [id]);

  const handleAddToCart = () => {
    if (item) {
      addToCart({ ...item, count: 1 }); // AGREGAMOS count = 1 POR DEFAULT
      alert(`${item.title} agregado al carrito`); // OPCIONAL: feedback visual
    }
  };

  return (
    <div>
      {item && (
        <>
          <ItemDetail item={item} />
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer;
