import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "Camiseta Básica",
    fabric: "Piel de Durazno",
    printing: "sublimación, vinilo, DTF",
    images: [
      "src/assets/img/png/Piel-durazno-white-f.png",
      "src/assets/img/png/Piel-durazno-white-b.png",
      "src/assets/img/png/FRONT-Piel-durazno.png",
      "src/assets/img/png/BACK-Piel-durazno.png",
    ],
  },
  {
    title: "Camiseta Básica (Dama)",
    fabric: "Piel de Durazno",
    printing: "sublimación, vinilo, DTF",
    images: [
      "src/assets/img/png/Piel-durazno-white-fw.png",
      "src/assets/img/png/Piel-durazno-white-bw.png",
      "src/assets/img/png/Piel-durazno-white-fwM.png",
      "src/assets/img/png/Piel-durazno-white-bwM.png",
    ],
  },
  {
    title: "Camiseta OverSize",
    fabric: "Burda",
    printing: "vinilo, DTF, Screen",
    images: [
      "src/assets/img/png/Oversize-white-f.png",
      "src/assets/img/png/Oversize-cream-f.png",
      "src/assets/img/png/Oversize-lightGreyi-f.png",
      "src/assets/img/png/Oversize-black-f.png",
      "src/assets/img/png/Oversize-black-b.png",
    ],
  },
  {
    title: "Camiseta Deportiva",
    fabric: "Orion",
    printing: "Full Sublimación",
    images: [
      "src/assets/img/png/shirt-fullsublimacion-basic-f.png",
      "src/assets/img/png/shirt-fullsublimacion-f-1.png",
      "src/assets/img/png/shirt-fullsublimacion-b-1.png",
    ],
  },
  {
    title: "Polo",
    fabric: "Picket",
    printing: "Sublimación, Bordado, Diseño confección",
    images: [
      "src/assets/img/png/polo-basic-f-0.png",
      "src/assets/img/png/polo-f-1.png",
      "src/assets/img/png/polo-b-1.png",
    ],
  },
  {
    title: "Conjunto Deportivos (Men)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      "/src/assets/img/png/men-sports-uniform-2f.png",
      "/src/assets/img/png/men-sports-uniform-2b.png",
      "src/assets/img/png/men-sports-uniform-f1.png",
      "src/assets/img/png/men-sports-uniform-b1.png",
    ],
  },
  {
    title: "Conjunto Deportivos (Women)",
    fabric: "Orion, Pluton, T10, SudaFrica, Spray",
    printing: "FullSublimación",
    images: [
      "/src/assets/img/png/women-sports-uniform-1f.png",
      "/src/assets/img/png/women-sports-uniform-1b.png",
      "src/assets/img/png/women-sports-uniform-f2.png",
      "src/assets/img/png/women-sports-uniform-b2.png",
    ],
  },
  {
    title: "Sweater de Promoción",
    fabric: "Algodon Perchado, Burda",
    printing: "Vinilo, DTF, Bordado, Diseño de confección",
    images: [
      "/src/assets/img/png/sweater-promocion-f.png",
      "/src/assets/img/png/sweater-promocion-b.png",
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
