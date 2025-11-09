// components/ItemListContainer.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemList from "./ItemList";

const products = [
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
];

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

    obtenerProductos.then((data) => setItems(data));
  }, [categoryId]);

  return <ItemList items={items} />;
}

export default ItemListContainer;

/*function ItemListContainer({ mensaje }) {
  return (
    <div className="Item-List-Container">
      <h2> {mensaje}</h2>
      <p>Descubri nuestras Fundas, Celulares y Accesorios </p>
    </div>
  );
  }*/
