import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartContainer from "./components/CartContainer.jsx";
import Checkout from "./components/Checkout.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import NavBar from "./components/NavBar.jsx";

import { CartProvider } from "./context/CartContext.jsx";

import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer mensaje="Bienvenidos a Malvi Accesorios" />
            }
          />

          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
