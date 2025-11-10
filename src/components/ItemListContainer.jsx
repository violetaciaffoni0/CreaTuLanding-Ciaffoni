import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

/*const products = [
  {
    id: 1,
    nombre: "Funda iPhone 17 Pro Max",
    precio: 10000,
    categoria: "fundas",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Color: morado, azul",
  },
  {
    id: 2,
    nombre: "Funda iPhone 13",
    precio: 9000,
    categoria: "fundas",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Varios colores",
  },
  {
    id: 3,
    nombre: "Celular Samsung A10",
    precio: 80000,
    categoria: "celulares",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Pantalla 6.2 pulgadas",
  },
  {
    id: 4,
    nombre: "Auriculares Bluetooth",
    precio: 12000,
    categoria: "auriculares",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Sonido HD",
  },
  {
    id: 5,
    nombre: "Parlante JBL",
    precio: 15000,
    categoria: "parlantes",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Batería 10 horas",
  },
];*/

function ItemListContainer({ mensaje }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter((prod) => prod.categoria === categoryId));
        } else {
          resolve(products);
        }
      }, 1000);
    });
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, [categoryId]);

  return <ItemList items={items} mensaje={mensaje} />;
}

export default ItemListContainer;
