// components/ItemListContainer.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// 🛍️ Lista simulada de productos
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
  const { categoryId } = useParams(); // 🔍 para leer la categoría de la URL

  useEffect(() => {
    // Simula una promesa con retardo
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
  }, [categoryId]); // ⚠️ dependencia importante para recargar al cambiar de categoría

  return (
    <Container>
      {mensaje && (
        <h2 style={{ textAlign: "center", margin: "20px" }}>{mensaje}</h2>
      )}

      <Row style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {items.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <p>
                  <strong>${item.precio}</strong>
                </p>

                {/* 🔗 Link al detalle del producto */}
                <Link to={`/item/${item.id}`}>
                  <Button variant="primary">Ver más</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
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
