import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCart } from "../context/CartProvider.jsx";
import { createOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Checkout() {
  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;

    const order = {
      buyer: { email, name, phone },
      items: cart,
      total: getTotal(),
      date: serverTimestamp(),
    };

    const orderId = await createOrder(order);

    if (orderId) {
      toast.success(`¡El ID de tu compra es: ${orderId}`);
      clearCart();
      navigate("/");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Form className="mt-5 border p-3 rounded w-25" onSubmit={handleSubmit}>
        <p className="fw-bold">Para finalizar tu compra necesitamos</p>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ingrese email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="pepito perez" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Número de celular</Form.Label>
          <Form.Control type="text" placeholder="11443434565" required />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Finalizar Compra
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;
