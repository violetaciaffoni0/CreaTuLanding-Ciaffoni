// components/ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

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

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();
  useEffect(() => {
    const obtenerProducto = new Promise((resolve) => {
      setTimeout(() => {
        const encontrado = products.find((p) => p.id === parseInt(itemId));
        resolve(encontrado);
      }, 1000);
    });

    obtenerProducto.then((data) => setProducto(data));
  }, [itemId]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {producto ? <ItemDetail item={producto} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
