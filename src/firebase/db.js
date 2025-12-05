import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { app } from "./config.js";

const db = getFirestore(app);

export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getItemById = async (id) => {
  const docSnap = await getDoc(doc(db, "items", id));
  if (!docSnap.exists())
    throw new Error("No se encontró el item con id: " + id);
  return { id: docSnap.id, ...docSnap.data() };
};

export const getItemsByCategory = async (category) => {
  const q = query(collection(db, "items"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  return querySnapshot.docs.map((doc) => doc.data().name);
};

export const getItem = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
};

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "order"), order);

    console.log("Document written with ID:", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document:", e);
  }
};
