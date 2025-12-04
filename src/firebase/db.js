import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async (categoriaId = null) => {
  try {
    const itemsRef = collection(db, "items");
    const q = categoriaId
      ? query(itemsRef, where("categoria", "==", categoriaId))
      : itemsRef;
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error cargando productos de Firebase:", error);
    return [];
  }
};

export const getItemById = async (id) => {
  try {
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, where("__name__", "==", id));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
    }

    return null;
  } catch (error) {
    console.error("Error obteniendo producto por ID:", error);
    return null;
  }
};
