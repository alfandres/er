import React from "react";
import { pngs } from "../assets/png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "Camiseta Básica",
    fabric: "Piel de Durazno",
    printing: "sublimación, vinilo, DTF",
    images: [
      pngs.PielDuraznoWhiteF,
      pngs.PielDuraznoWhiteB,
      pngs.FrontPielDurazno,
      pngs.BackPielDurazno,
    ],
  },
  {
    title: "Camiseta Básica (Dama)",
    fabric: "Piel de Durazno",
    printing: "sublimación, vinilo, DTF",
    images: [
      pngs.PielDuraznoWhiteFw,
      pngs.PielDuraznoWhiteBw,
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
      pngs.OversizeLightGreyiF,
      pngs.OversizeCreamF,
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
     pngs.MenSportsUniformf1,
     pngs.MenSportsUniformb1,
     pngs.MenSportsUniform2f,
     pngs.MenSportsUniform2b,

    ],
  },
  {
    title: "Conjunto Deportivos (Women)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      pngs.womenSportsUniform1f,
      pngs.womenSportsUniform1b,
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
      pngs.sweaterPromocionB,

    ],
    
  },
];

const ProductsPhoneView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <section
      id="services"
      className="flex items-center justify-center md:hidden"
    >
      {" "}
      {/* Solo visible en móviles */}
      <div className="container relative z-10 mx-auto text-center px-4">
        <h2 className="text-black text-3xl font-bold py-4">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <Slider {...settings}>
                {product.images.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image}
                      alt={`${product.title} ${idx + 1}`}
                      className="w-auto h-80 mx-auto"
                    />
                  </div>
                ))}
              </Slider>
              <div className="py-6">
                <p>
                  Tela: <span className="font-bold">{product.fabric}</span>
                </p>
                <p>
                  Estampado:{" "}
                  <span className="font-bold">{product.printing}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPhoneView;
