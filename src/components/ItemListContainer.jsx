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
    nombre: "AirPods4",
    precio: 40000,
    categoria: "Auriculares",
    imagen: funda1,
    descripcion: "Con cancelación de ruido",
  },
  {
    id: 2,
    nombre: "Bateria Portatil",
    precio: 33000,
    categoria: "Cargadores",
    imagen: funda2,
    descripcion: "Carga Rapida",
  },
  {
    id: 3,
    nombre: "Fundas 13 pro",
    precio: 10000,
    categoria: "Fundas",
    imagen: funda3,
    descripcion: "colores: Lisa, Azul, Gris",
  },
  {
    id: 4,
    nombre: "Fundas 16 pro max",
    precio: 10000,
    categoria: "Fundas",
    imagen: funda4,
    descripcion: "colores: celeste, negro, verde, rosa",
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
