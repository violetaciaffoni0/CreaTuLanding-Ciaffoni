import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer({ mensaje }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Construimos la URL según si hay categoryId o no
    const url = categoryId
      ? `https://dummyjson.com/products/category/${categoryId}`
      : "https://dummyjson.com/products";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // Algunos endpoints devuelven "products" y otros devuelven directamente el array
        setItems(data.products || data);
      })
      .catch((error) => console.error("Error al traer los productos:", error));
  }, [categoryId]);

  return <ItemList items={items} mensaje={mensaje} />;
}

export default ItemListContainer;
