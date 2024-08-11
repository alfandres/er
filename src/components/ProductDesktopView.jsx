import React, { useState } from 'react';
import products from './Products';


const Product = ({ title, fabric, printing, profileImg, images }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center mb-4">
        <div className="w-28 h-28 flex items-center justify-center bg-gray-200 rounded-full border-2 border-cian ">
                <img src={profileImg} alt={`${title} main`} className="w-auto h-20" />
    
        </div>
        <div className="ml-4 py-1">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600"><strong>Tela:</strong> {fabric}</p>
          <p className="text-gray-600"><strong>Estampado:</strong> {printing}</p>
        </div>
      </div>
      {hover && (
        <div className="absolute inset-0 flex justify-end items-center space-x-2 p-2 bg-gray-800 bg-opacity-50 rounded-lg">
          {images.slice(0).map((img, index) => (
            <img key={index} src={img} alt={`${title} ${index}`} className="w-1/4 h-auto transform transition-transform duration-500" />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductList = () => {
  return (
    <section id="product" className="bg-gray-200 py-6 px-6 hidden md:block">
      <div className="text-center py-3">
        <h2 className="text-4xl font-bold py-8 mb-8">Algunos de Nuestros Productos</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
