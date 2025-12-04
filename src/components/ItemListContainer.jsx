import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";
import { getItems } from "../firebase/db";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer({ mensaje }) {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItems(categoriaId)
      .then((res) => setItems(res))
      .catch((err) => console.error(err))
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
