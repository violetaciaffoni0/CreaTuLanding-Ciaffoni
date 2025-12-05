# Mi E-commerce en React con Firebase

Este proyecto es un **e-commerce** desarrollado con **React**, que permite a los usuarios:

- Ver todos los productos disponibles.
- Filtrar productos por categoría.
- Ver el detalle de cada producto.
- Agregar productos al carrito de compras.
- Finalizar la compra registrando la orden en **Firebase**.

## Tecnologías y dependencias

| Dependencia      | Versión  | Documentación oficial                                                              |
| ---------------- | -------- | ---------------------------------------------------------------------------------- |
| React            | ^19.1.1  | [React](https://reactjs.org/docs/getting-started.html)                             |
| React DOM        | ^19.1.1  | [React DOM](https://reactjs.org/docs/react-dom.html)                               |
| React Router DOM | ^7.9.5   | [React Router DOM](https://reactrouter.com/en/main/start/overview)                 |
| Bootstrap        | ^5.3.8   | [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)       |
| React-Bootstrap  | ^2.10.10 | [React-Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/) |
| Firebase         | ^12.6.0  | [Firebase](https://firebase.google.com/docs/web/setup)                             |
| React Spinners   | ^0.17.0  | [React Spinners](https://www.davidhu.io/react-spinners/)                           |

## Instalación

1. Clonar el repositorio:

```bash
git clone <tu-repo-url>
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar la app en modo desarrollo:

```bash
npm start
```

La app correrá en [http://localhost:3000](http://localhost:3000).

## Configuración de Firebase

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Habilitar Firestore Database.
3. Crear un archivo `src/firebase/db.js`:

```javascript
// db.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "<TU_API_KEY>",
  authDomain: "<TU_AUTH_DOMAIN>",
  projectId: "<TU_PROJECT_ID>",
  storageBucket: "<TU_STORAGE_BUCKET>",
  messagingSenderId: "<TU_MESSAGING_SENDER_ID>",
  appId: "<TU_APP_ID>",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener productos
export const getProducts = async () => {
  const productsCol = collection(db, "productos");
  const productsSnapshot = await getDocs(productsCol);
  return productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Crear una orden
export const createOrder = async (order) => {
  const ordersCol = collection(db, "ordenes");
  const docRef = await addDoc(ordersCol, { ...order, date: serverTimestamp() });
  return docRef.id;
};

export default db;
```

## Estructura del proyecto

src/
│
├─ components/ # Componentes reutilizables
│ ├─ CartContainer.jsx
│ ├─ CartWidget.jsx
│ ├─ Checkout.jsx
│ ├─ EmptyCart.jsx
│ ├─ Item.jsx
│ ├─ ItemCount.jsx
│ ├─ ItemDetailContainer.jsx
│ ├─ ItemDetail.jsx
│ ├─ ItemListContainer.jsx
│ └─ NavBar.jsx
│
├─ context/ # Context API para el carrito
│ ├─ CartProvider.jsx
│ ├─ CartContext.jsx
│ └─ useCart.js
│
├─ firebase/ # Configuración y funciones de Firebase
│ ├─ db.js
│ └─ config.js
│
├─ data/ # Datos de prueba
│ └─ products.js
│
├─ hoc/ # Higher Order Components
│ └─ withLoading.jsx
│
└─ App.jsx

## Funcionalidades

### Mostrar productos

- Se muestran todos los productos de la colección `productos` en Firestore.
- Se pueden filtrar por categoría.

### Detalle del producto

- Al hacer click en un producto, se abre una página con información detallada.

### Carrito de compras

- Los usuarios pueden agregar productos al carrito.
- Se puede ver el resumen del carrito y eliminar productos.
- Al finalizar la compra, se crea una orden en Firestore usando `createOrder`.

### Loader / Spinners

- Mientras se cargan productos o datos desde Firebase, se muestra un spinner con **React Spinners**.

## Uso

1. Navegar por los productos.
2. Filtrar por categoría si se desea.
3. Hacer click en un producto para ver su detalle.
4. Agregar productos al carrito.
5. Ir al carrito y finalizar la compra.

---

Con esta configuración, tu e-commerce está listo para interactuar con **Firebase** y registrar productos y órdenes de forma segura.
