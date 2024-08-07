import React from "react";
import { assets } from "../assets.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "Camiseta Básica",
    fabric: "Piel de Durazno",
    printing: "sublimación, vinilo, DTF",
    images: [
      assets.PielDuraznoWhiteF,
      assets.PielDuraznoWhiteB,
      assets.FrontPielDurazno,
      assets.BackPielDurazno,
    ],
  },
  {
    title: "Camiseta Básica (Dama)",
    fabric: "Piel de Durazno",
    printing: "sublimación, vinilo, DTF",
    images: [
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
    images: [
      assets.OversizeWhiteF,
      assets.OversizeLightGreyiF,
      assets.OversizeCreamF,
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
     assets.MenSportsUniformf1,
     assets.MenSportsUniformb1,
     assets.MenSportsUniform2f,
     assets.MenSportsUniform2b,

    ],
  },
  {
    title: "Conjunto Deportivos (Women)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      assets.womenSportsUniform1f,
      assets.womenSportsUniform1b,
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
      assets.sweaterPromocionB,

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
