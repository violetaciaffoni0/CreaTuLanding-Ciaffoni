import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Podés dejarlo si después lo vas a usar
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const products = [
  {
    id: 1,
    nombre: "Funda para iPhone 17 Pro Max",
    precio: 10000,
    imagen: "https://via.placeholder.com/150",
    descripcion: "Color: morado, azul",
  },
  {
    id: 2,
    nombre: "Funda para iPhone 13",
    precio: 9000,
    imagen: "https://via.placeholder.com/150",
    descripcion: "Varios colores",
  },
  {
    id: 3,
    nombre: "Funda para Samsung A10",
    precio: 8000,
    imagen: "https://via.placeholder.com/150",
    descripcion: "De varios colores",
  },
  {
    id: 4,
    nombre: "Funda para Samsung S55",
    precio: 8000,
    imagen: "https://via.placeholder.com/150",
    descripcion: "Transparente",
  },
];

function ItemListContainer() {
  const [Litems, setItems] = useState([]);

  const obtenerProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };

  useEffect(() => {
    obtenerProductos().then((data) => setItems(data));
  }, []);

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {Litems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Button variant="primary">Ver más</Button>
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
