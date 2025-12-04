import { Row } from "react-bootstrap";
import Item from "./Item.jsx";

function ItemList({ items }) {
  return (
    <Row>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Row>
  );
}

export default ItemList;
