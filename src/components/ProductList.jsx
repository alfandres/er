import React from "react";
import Product from "./Product";
import { pngs } from "../assets/png";

const products = [
  {
    title: "Camiseta Básica",
    fabric: "Piel de Durazno",
    printing: "Sublimación, vinilo, DTF",
    images: [
      pngs.PielDuraznoWhiteF,
      pngs.BackPielDurazno,
      pngs.FrontPielDurazno,
    ],
  },
  {
    title: "Camiseta Básica (Dama)",
    fabric: "Piel de Durazno",
    printing: "Sublimación, vinilo, DTF",
    images: [
      pngs.PielDuraznoWhiteFw,
      pngs.PielDuraznoWhiteFwM,
      pngs.PielDuraznoWhiteBwM,
    ],
  },
  {
    title: "Camiseta OverSize",
    fabric: "Burda",
    printing: "vinilo, DTF, Screen",
    images: [
      pngs.OversizeWhiteF,
     pngs.OversizeBlackF,
     pngs.OversizeBlackB,

    ],
  },
  {
    title: "Camiseta Deportiva",
    fabric: "Orion",
    printing: "Full Sublimación",
    images: [
      pngs.shirtFullsublimacionBasicF,
      pngs.shirtFullsublimacionF1,
      pngs.shirtFullsublimacionB1,
    ],
  },
  {
    title: "Polo",
    fabric: "Picket",
    printing: "Sublimación, Bordado, Diseño confección",
    images: [
      pngs.poloBasicF0,
      pngs.poloF1,
      pngs.poloB1,

    ],
  },
  {
    title: "Conjunto Deportivos (Men)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      pngs.MenSportsUniform2,
      pngs.MenSportsUniformf1,
      pngs.MenSportsUniformb1,

    ],
  },
  {
    title: "Conjunto Deportivos (Women)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      pngs.womenSportsUniform1,
      pngs.womenSportsUniformF2,
      pngs.womenSportsUniformB2,

    ],
  },
  {
    title: "Sweater de Promoción",
    fabric: "Algodon Perchado, Burda",
    printing: "Vinilo, DTF, Bordado, Diseño de confección",
    images: [
      pngs.sweaterPromocionF,
      pngs.sweaterPromocionF,
      pngs.sweaterPromocionB,

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
