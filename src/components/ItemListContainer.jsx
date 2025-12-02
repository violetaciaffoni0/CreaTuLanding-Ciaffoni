import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";
import { getProducts } from "../data/products";
import { CartContext } from "../context/CartContext";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer({ mensaje }) {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  const context = useContext(CartContext);
  console.log(context);

  useEffect(() => {
    getProducts(categoriaId).then((res) => setItems(res));
  }, [categoriaId]);

  return (
    <div className="container">
      {mensaje && <h2 className="titulo">{mensaje}</h2>}
      <ItemListWithLoading items={items} />
    </div>
  );
}

export default ItemListContainer;
