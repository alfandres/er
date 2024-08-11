import React from "react";
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
    fabric: "Orion, Plutón, Sudáfrica, spray",
    printing: "Full Sublimación",
    images: [
      assets.shirtFullsublimacionBasicF,
      assets.shirtFullsublimacionF1,
      assets.shirtFullsublimacionB1,
    ],
  },
  {
    title: "Polo",
    fabric: "1) Picket poliéster. 2) Picket algodón ",
    printing: "1) Fullsublimación. 2) Diseño confección, Bordados ",
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
      assets.MenSportsUniformF1,
      assets.MenSportsUniformB1,

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
    title: "Sweater para Promociones de Grado",
    fabric: "Algodon Perchado, Burda",
    printing: "Vinilo, DTF, Bordado, Diseño de confección",
    images: [
      assets.sweaterPromocionF,
      assets.sweaterPromocionF,
      assets.sweaterPromocionB,

    ],
    
  },
  {
    title: "Buzo con Capucha (Hoodie)",
    fabric: "Algodon Perchado, Burda",
    printing: "Vinilo, DTF, Bordado, Diseño de confección",
    images: [
      assets.buszoBasicWhiteF,
      assets.buszoFrontM,
      assets.buszoBackM,

    ],
    
  },
  {
    title: "Camiseta Manga Larga (Buzo)",
     fabric: "1) Piel de Durazno. 2) PoliAlgodon 3) Orion",
    printing: "1) Sublimación. 2) Vinilo, DTF, Screen. 3) Fullsublimación.",
    images: [
      assets.mangaLargaBasicF,
      assets.mangaLargaFm2,
      assets.mangaLargaBm2,

    ],
    
  },
];



export default products;
