import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { withLoading } from "../hoc/withLoading.jsx";
import { getItems } from "../firebase/db.js";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer({ mensaje }) {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItems(categoriaId)
      .then(setItems)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="container">
      {mensaje && <h2 className="titulo">{mensaje}</h2>}
      <ItemListWithLoading loading={loading} items={items} />
    </div>
  );
}

export default ItemListContainer;
