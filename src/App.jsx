import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenidos a Malvi-Accesorios!" />
    </div>
  );
}

export default App;
