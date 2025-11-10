import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Item({ item }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className="mb-3 shadow-sm">
        <Card.Img
          variant="top"
          src={item.thumbnail}
          alt={item.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <p>
            <strong>${item.price}</strong>
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
