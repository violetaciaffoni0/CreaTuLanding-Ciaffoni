import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
import { getProductById } from "../data/products";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setItem(res));
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
}

export default ItemDetailContainer;
