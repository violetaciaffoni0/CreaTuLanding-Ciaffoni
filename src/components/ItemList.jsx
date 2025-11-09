import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

function ItemList({ items, mensaje }) {
  return (
    <Container>
      {mensaje && (
        <h2 style={{ textAlign: "center", margin: "20px" }}>{mensaje}</h2>
      )}

      <Row style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
