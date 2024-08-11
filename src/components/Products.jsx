import React from "react";
import { assets } from "../assets.js";

const products = [
  {
    title: "Camiseta Básica",
    fabric: "Piel de Durazno",
    printing: "Sublimación, vinilo, DTF",
    //ProductDesktopView
    profileImg: assets.PielDuraznoWhiteF,
    images: [assets.FrontPielDurazno, assets.BackPielDurazno],
    //ProductPhoneView
    Images: [
      assets.PielDuraznoWhiteF,
      assets.PielDuraznoWhiteB,
      assets.FrontPielDurazno,
      assets.BackPielDurazno,
    ],
  },
  {
    title: "Camiseta Básica (Dama)",
    fabric: "Piel de Durazno",
    printing: "Sublimación, vinilo, DTF",
    profileImg: assets.PielDuraznoWhiteFw,
    images: [assets.PielDuraznoWhiteFwM, assets.PielDuraznoWhiteBwM],

    Images: [
      assets.PielDuraznoWhiteFw,
      assets.PielDuraznoWhiteBw,
      assets.PielDuraznoWhiteFwM,
      assets.PielDuraznoWhiteBwM,
    ],
  },
  {
    title: "Camiseta OverSize",
    fabric: "Burda",
    printing: "vinilo, DTF, Screen",
    profileImg: assets.OversizeWhiteF,
    images: [assets.OversizeBlackF, assets.OversizeBlackB],

    Images: [
      assets.OversizeWhiteF,
      assets.OversizeCreamF,
      assets.OversizeLightGreyiF,
      assets.OversizeBlackF,
      assets.OversizeBlackB,
    ],
  },
  {
    title: "Camiseta Deportiva",
    fabric: "Orion, Plutón, Sudáfrica, spray",
    printing: "Full Sublimación",
    profileImg: assets.shirtFullsublimacionBasicF,

    images: [assets.shirtFullsublimacionF1, assets.shirtFullsublimacionB1],

    Images: [
      assets.shirtFullsublimacionBasicF,
      assets.shirtFullsublimacionF1,
      assets.shirtFullsublimacionB1,
    ],
  },
  {
    title: "Polo",
    fabric: "1) Picket poliéster. 2) Picket algodón ",
    printing: "1) Fullsublimación. 2) Diseño confección, Bordados ",
    profileImg: assets.poloBasicF0,

    images: [assets.poloF1, assets.poloB1],

    Images: [assets.poloBasicF0, assets.poloF1, assets.poloB1],
  },
  {
    title: "Conjunto Deportivos (Men)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    profileImg: assets.MenSportsUniform2,
    images: [assets.MenSportsUniformF1, assets.MenSportsUniformB1],
    Images: [
      assets.MenSportsUniformF2,
      assets.MenSportsUniformB2,
      assets.MenSportsUniformF1,
      assets.MenSportsUniformB1,
    ],
  },
  {
    title: "Conjunto Deportivos (Women)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    profileImg: assets.womenSportsUniform1,
    images: [assets.womenSportsUniformF2, assets.womenSportsUniformB2],
    Images: [
      assets.womenSportsUniform1f,
      assets.womenSportsUniform1b,
      assets.womenSportsUniformF2,
      assets.womenSportsUniformB2,
    ],
  },
  {
    title: "Sweater para Promociones de Grado",
    fabric: "Algodon Perchado, Burda",
    printing: "Vinilo, DTF, Bordado, Diseño de confección",
    profileImg: assets.sweaterPromocionF,
    images: [assets.sweaterPromocionF, assets.sweaterPromocionB],
    Images: [assets.sweaterPromocionF, assets.sweaterPromocionB],
  },
  {
    title: "Buzo con Capucha (Hoodie)",
    fabric: "Algodon Perchado, Burda",
    printing: "Vinilo, DTF, Bordado, Diseño de confección",
    profileImg: assets.buszoBasicWhiteF,
    images: [assets.buszoFrontM, assets.buszoBackM],
    Images: [
      assets.buszoBasicWhiteF,
      assets.buszoBasicWhiteB,
      assets.buszoFrontM,
      assets.buszoBackM,
    ],
  },
  {
    title: "Camiseta Manga Larga (Buzo)",
    fabric: "1) Piel de Durazno. 2) PoliAlgodon 3) Orion",
    printing: "1) Sublimación. 2) Vinilo, DTF, Screen. 3) Fullsublimación.",
    profileImg: assets.mangaLargaBasicF,
    images: [assets.mangaLargaFm2, assets.mangaLargaBm2],
    Images: [
      assets.mangaLargaBasicF,
      assets.mangaLargaFm,
      assets.mangaLargaBm,
      assets.mangaLargaFm2,
      assets.mangaLargaBm2,
    ],
  },
];

export default products;
