# E-commerce React App - Documentación Completa

## 1. Descripción

Este proyecto es un **e-commerce** desarrollado con **React**, que permite:

- Mostrar productos.
- Filtrar por categoría.
- Ver detalles de cada producto.
- Agregar productos al carrito.
- Finalizar compra mediante un **checkout** que guarda la orden en Firebase Firestore.

Está pensado como **SPA (Single Page Application)** utilizando **React Router DOM** y **contexto** para manejar el carrito.

---

## 2. Tecnologías

- **React 18+**
- **React Router DOM**
- **Firebase Firestore**
- **Bootstrap 5 / React-Bootstrap**
- **React Toastify**
- **Vite**

---

## 3. Estructura del Proyecto

```
src/
 ├── assets/
 ├── components/
 │    ├── CartContainer.jsx
 │    ├── CartWidget.jsx
 │    ├── Checkout.jsx
 │    ├── EmptyCart.jsx
 │    ├── Item.jsx
 │    ├── ItemCount.jsx
 │    ├── ItemDetail.jsx
 │    ├── ItemDetailContainer.jsx
 │    ├── ItemList.jsx
 │    ├── ItemListContainer.jsx
 │    └── NavBar.jsx
 ├── context/
 │    ├── CartContext.jsx
 │    └── CartProvider.jsx
 ├── data/
 │    └── products.js
 ├── firebase/
 │    ├── config.js
 │    └── db.js
 ├── hoc/
 │    └── withLoading.jsx
 ├── App.jsx
 ├── main.jsx
 └── App.css
```

---

## 4. Instalación y ejecución

1. Clonar repositorio

```
git clone <url-del-repo>
```

2. Instalar dependencias

```
npm install
```

3. Configurar Firebase en `src/firebase/config.js`
4. Levantar la app en modo desarrollo

````
npm run dev

## 5. Firebase
**config.js:**
```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
````

**db.js (guardar orden):**

```js
import { db } from "./config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function createOrder(buyer, items, total) {
  const ordersRef = collection(db, "orders");
  const order = {
    buyer,
    items,
    total,
    date: Timestamp.fromDate(new Date()),
  };
  const docRef = await addDoc(ordersRef, order);
  return docRef.id;
}
```

---

## 6. Contexto de Carrito

**CartContext.jsx:**

```js
import { createContext } from "react";
export const CartContext = createContext();
```

**CartProvider.jsx:**

```js
import React, { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (product, qty) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));
  const clear = () => setCart([]);
  const totalItems = cart.reduce((acc, p) => acc + p.qty, 0);
  const totalPrice = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
```

---

## 7. Componentes Principales

### NavBar.jsx

- Links a categorías y carrito con cantidad total.

### ItemListContainer.jsx

- Obtiene todos los productos o por categoría.
- Usa `ItemList` para renderizar.

### ItemDetailContainer.jsx

- Obtiene producto por id y muestra `ItemDetail`.

### ItemDetail.jsx

- Muestra información y botón de `ItemCount` para agregar al carrito.

### ItemCount.jsx

- Controla cantidad a agregar al carrito.
- Botón +, - y agregar.

### CartContainer.jsx

- Lista productos en carrito.
- Permite eliminar, vaciar carrito y checkout.

### Checkout.jsx

- Formulario con nombre, email, teléfono.
- Guarda la orden en Firebase.
  export default products;

```

---

## 9. Uso básico
1. Seleccionar categoría.
2. Agregar productos al carrito.
3. Finalizar compra desde `CartContainer`.
4. Completar checkout

```
