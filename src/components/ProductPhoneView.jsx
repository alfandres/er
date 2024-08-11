import React from "react";
import products from "./Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductsPhoneView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <section
      id="productViewOnPhone"
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
                {product.Images.map((image, idx) => (
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
