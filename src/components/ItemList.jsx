import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItemList({ items, mensaje }) {
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

export default ItemList;
