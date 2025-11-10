// components/ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import funda1 from "../assets/funda1.jpg";
import funda2 from "../assets/funda2.jpg";
import funda3 from "../assets/funda3.jpeg";
import funda4 from "../assets/funda4.jpeg";

const products = [
  {
    id: 1,
    nombre: "Funda iPhone 16 Pro Max",
    precio: 10000,
    imagen: funda1,
    descripcion: "Color morado con brillo",
  },
  {
    id: 2,
    nombre: "Funda iPhone 13",
    precio: 9000,
    imagen: funda2,
    descripcion: "Color azul cielo",
  },
  {
    id: 3,
    nombre: "Bateria portatil",
    precio: 33000,
    imagen: funda3,
    descripcion: "Carga super rápida",
  },
  {
    id: 4,
    nombre: "Auriculares",
    precio: 40000,
    imagen: funda4,
    descripcion: "Con cancelación de ruido",
  },
];

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === parseInt(id)));
      }, 1000);
    });

    getItem.then((res) => setItem(res));
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
}

export default ItemDetailContainer;
