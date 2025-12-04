import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Item({ item }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>{item.descripcion}</Card.Text>
          <p>
            <strong>${item.precio}</strong>
          </p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">
            Ver más
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
