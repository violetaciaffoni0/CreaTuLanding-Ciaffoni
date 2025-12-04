import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "./Item.jsx";

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
