import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4--0EbXW99q4jv2vVuFXajWMlFcx3C1w",
  authDomain: "malvi-accesorios-db.firebaseapp.com",
  projectId: "malvi-accesorios-db",
  storageBucket: "malvi-accesorios-db.firebasestorage.app",
  messagingSenderId: "599767216914",
  appId: "1:599767216914:web:4b23ede2264379874b39cb",
};

export const app = initializeApp(firebaseConfig);
