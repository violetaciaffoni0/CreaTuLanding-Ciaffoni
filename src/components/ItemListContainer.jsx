import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import withLoading from "../hoc/withLoading.jsx";
import { getItems, getItemsByCategory } from "../firebase/db.js";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer({ mensaje }) {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchItems = categoriaId
      ? getItemsByCategory(categoriaId)
      : getItems();

    fetchItems
      .then((prods) => {
        console.log("Productos cargados:", prods); // depuración
        setItems(prods);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="container">
      {mensaje && <h2>{mensaje}</h2>}
      <ItemListWithLoading loading={loading} items={items} />
    </div>
  );
}

export default ItemListContainer;
