import funda1 from "../assets/funda1.jpg";
import funda2 from "../assets/funda2.jpg";
import funda3 from "../assets/funda3.jpeg";
import funda4 from "../assets/funda4.jpeg";

const products = [
  {
    id: 1,
    nombre: "AirPods4",
    precio: 40000,
    categoria: "Auriculares",
    imagen: funda1,
    descripcion: "Con cancelación de ruido",
  },
  {
    id: 2,
    nombre: "Batería Portátil",
    precio: 33000,
    categoria: "Cargadores",
    imagen: funda2,
    descripcion: "Carga rápida",
  },
  {
    id: 3,
    nombre: "Fundas 13 Pro",
    precio: 10000,
    categoria: "Fundas",
    imagen: funda3,
    descripcion: "Colores: lila, azul, gris",
  },
  {
    id: 4,
    nombre: "Fundas 16 Pro Max",
    precio: 10000,
    categoria: "Fundas",
    imagen: funda4,
    descripcion: "Colores: celeste, negro, verde, rosa",
  },
];

export const getProducts = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoriaId) {
        resolve(products.filter((p) => p.categoria === categoriaId));
      } else {
        resolve(products);
      }
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === parseInt(id)));
    }, 1000);
  });
};
