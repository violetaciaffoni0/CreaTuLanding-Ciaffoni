import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
