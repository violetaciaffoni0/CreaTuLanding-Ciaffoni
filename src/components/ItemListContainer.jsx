import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import funda1 from "../assets/funda1.jpg";
import funda2 from "../assets/funda2.jpg";
import funda3 from "../assets/funda3.jpeg";
import funda4 from "../assets/funda4.jpeg";

const products = [
  {
    id: 1,
    nombre: "Funda iPhone 16 Pro Max",
    precio: 10000,
    categoria: "fundas",
    imagen: funda1,
    descripcion: "Color morado con brillo",
  },
  {
    id: 2,
    nombre: "Funda iPhone 13",
    precio: 9000,
    categoria: "fundas",
    imagen: funda2,
    descripcion: "Color azul cielo",
  },
  {
    id: 3,
    nombre: "bateria portatil",
    precio: 33000,
    categoria: "cargadores",
    imagen: funda3,
    descripcion: "Carga super rápida",
  },
  {
    id: 4,
    nombre: "Auriculares",
    precio: 40000,
    categoria: "auriculares",
    imagen: funda4,
    descripcion: "Con cancelación de ruido",
  },
];

function ItemListContainer({ mensaje }) {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoriaId) {
          resolve(products.filter((prod) => prod.categoria === categoriaId));
        } else {
          resolve(products);
        }
      }, 1000);
    });

    getProducts.then((res) => setItems(res));
  }, [categoriaId]);

  return (
    <div className="container">
      {mensaje && <h2 className="titulo">{mensaje}</h2>}
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
