import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenidos a Malvi-Accesorios!" />
    </BrowserRouter>
  );
}

export default App;
