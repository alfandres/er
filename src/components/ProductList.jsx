import React from "react";
import Product from "./Product";
import { assets } from "../assets.js";

const products = [
  {
    title: "Camiseta Básica",
    fabric: "Piel de Durazno",
    printing: "Sublimación, vinilo, DTF",
    images: [
      assets.PielDuraznoWhiteF,
      assets.BackPielDurazno,
      assets.FrontPielDurazno,
    ],
  },
  {
    title: "Camiseta Básica (Dama)",
    fabric: "Piel de Durazno",
    printing: "Sublimación, vinilo, DTF",
    images: [
      assets.PielDuraznoWhiteFw,
      assets.PielDuraznoWhiteFwM,
      assets.PielDuraznoWhiteBwM,
    ],
  },
  {
    title: "Camiseta OverSize",
    fabric: "Burda",
    printing: "vinilo, DTF, Screen",
    images: [
      assets.OversizeWhiteF,
     assets.OversizeBlackF,
     assets.OversizeBlackB,

    ],
  },
  {
    title: "Camiseta Deportiva",
    fabric: "Orion",
    printing: "Full Sublimación",
    images: [
      assets.shirtFullsublimacionBasicF,
      assets.shirtFullsublimacionF1,
      assets.shirtFullsublimacionB1,
    ],
  },
  {
    title: "Polo",
    fabric: "Picket",
    printing: "Sublimación, Bordado, Diseño confección",
    images: [
      assets.poloBasicF0,
      assets.poloF1,
      assets.poloB1,

    ],
  },
  {
    title: "Conjunto Deportivos (Men)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      assets.MenSportsUniform2,
      assets.MenSportsUniformf1,
      assets.MenSportsUniformb1,

    ],
  },
  {
    title: "Conjunto Deportivos (Women)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      assets.womenSportsUniform1,
      assets.womenSportsUniformF2,
      assets.womenSportsUniformB2,

    ],
  },
  {
    title: "Sweater de Promoción",
    fabric: "Algodon Perchado, Burda",
    printing: "Vinilo, DTF, Bordado, Diseño de confección",
    images: [
      assets.sweaterPromocionF,
      assets.sweaterPromocionF,
      assets.sweaterPromocionB,

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
