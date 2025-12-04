import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import withLoading from "../hoc/withLoading.jsx";
import { getItems } from "../firebase/db.js";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems()
      .then((prods) => {
        // si quisieras filtrar por categoría lo podés hacer acá
        setItems(prods);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container">
      <h2 className="titulo">{mensaje}</h2>

      <ItemListWithLoading loading={loading} items={items} />
    </div>
  );
}

export default ItemListContainer;
