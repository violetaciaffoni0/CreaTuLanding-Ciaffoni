// src/firebase/db.js
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { app } from "./config.js"; // ajusta la ruta si tu config.js está en otro lugar

const db = getFirestore(app);

// Traer todos los items
export const getItems = async () => {
  const itemsCol = collection(db, "items");
  const itemsSnapshot = await getDocs(itemsCol);
  return itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Traer item por id
export const getItemById = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No se encontró el item con id: " + id);
  }
};

// Traer items por categoría
export const getItemsByCategory = async (categoryId) => {
  const items = await getItems();
  return items.filter((item) => item.category === categoryId); // el campo es 'category' como en Firebase
};
