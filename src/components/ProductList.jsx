import React from "react";
import Product from "./Product";
import camisetaBasicaImg from "/src/assets/img/png/Piel-durazno-white-f.png";
import camisetaBasicaImgDama from "/src/assets/img/png/Piel-durazno-white-fw.png";
import camisetaOverSizeImg from "/src/assets/img/png/Oversize-white-f.png";
import camisetaDeportivaImg from "/src/assets/img/png/shirt-fullsublimacion-basic-f.png";
import poloImg from "/src/assets/img/png/polo-basic-f-0.png";
import conjuntoDeportivoMenImg from "/src/assets/img/png/men-sports-uniform-2.png";
import conjuntoDeportivoWomenImg from "/src/assets/img/png/women-sports-uniform-1.png";
import sweaterPromocion from "/src/assets/img/png/sweater-promocion-f.png";

const products = [
  {
    title: "Camiseta Básica",
    fabric: "Piel de Durazno",
    printing: "Sublimación, vinilo, DTF",
    images: [
      camisetaBasicaImg,
      "/src/assets/img/png/FRONT-Piel-durazno.png",
      "/src/assets/img/png/BACK-Piel-durazno.png",
    ],
  },
  {
    title: "Camiseta Básica (Dama)",
    fabric: "Piel de Durazno",
    printing: "Sublimación, vinilo, DTF",
    images: [
      camisetaBasicaImgDama,
      "/src/assets/img/png/Piel-durazno-white-fwM.png",
      "/src/assets/img/png/Piel-durazno-white-bwM.png",
    ],
  },
  {
    title: "Camiseta OverSize",
    fabric: "Burda",
    printing: "vinilo, DTF, Screen",
    images: [
      camisetaOverSizeImg,
      "/src/assets/img/png/Oversize-black-f.png",
      "/src/assets/img/png/Oversize-black-b.png",
    ],
  },
  {
    title: "Camiseta Deportiva",
    fabric: "Orion",
    printing: "Full Sublimación",
    images: [
      camisetaDeportivaImg,
      "/src/assets/img/png/shirt-fullsublimacion-f-1.png",
      "/src/assets/img/png/shirt-fullsublimacion-b-1.png",
    ],
  },
  {
    title: "Polo",
    fabric: "Picket",
    printing: "Sublimación, Bordado, Diseño confección",
    images: [
      poloImg,
      "/src/assets/img/png/polo-f-1.png",
      "/src/assets/img/png/polo-b-1.png",
    ],
  },
  {
    title: "Conjunto Deportivos (Men)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      conjuntoDeportivoMenImg,
      "/src/assets/img/png/men-sports-uniform-f1.png",
      "/src/assets/img/png/men-sports-uniform-b1.png",
    ],
  },
  {
    title: "Conjunto Deportivos (Women)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      conjuntoDeportivoWomenImg,
      "/src/assets/img/png/women-sports-uniform-f2.png",
      "/src/assets/img/png/women-sports-uniform-b2.png",
    ],
  },
  {
    title: "Sweater de Promoción",
    fabric: "Algodon Perchado, Burda",
    printing: "Vinilo, DTF, Bordado, Diseño de confección",
    images: [
      sweaterPromocion,
      "/src/assets/img/png/sweater-promocion-f.png",
      "/src/assets/img/png/sweater-promocion-b.png",
    ],
    
  },
];

const ProductList = () => {
  return (
    <section id="services" className="bg-gray-200 py-6 px-6 hidden md:block">
      <div className="text-center py-3">
        <h2 className="text-4xl font-bold py-8 mb-8">Algunos de Nuestros Productos</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
