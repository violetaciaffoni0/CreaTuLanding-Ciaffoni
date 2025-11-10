import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Item({ item }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <p>
            <strong>${item.precio}</strong>
          </p>
          <Link to={`/item/${item.id}`}>
            <Button variant="primary">Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
