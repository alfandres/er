// src/components/Product.js
import React, { useState } from 'react';

const Product = ({ title, fabric, printing, images }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center mb-4">
        <div className="w-28 h-28 flex items-center justify-center bg-gray-200 rounded-full border-2 border-cian ">
                <img src={images[0]} alt={`${title} main`} className="w-20 h-auto" />
    
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600"><strong>Tela:</strong> {fabric}</p>
          <p className="text-gray-600"><strong>Estampado:</strong> {printing}</p>
        </div>
      </div>
      {hover && (
        <div className="absolute inset-0 flex justify-end items-center space-x-2 p-2 bg-gray-800 bg-opacity-50 rounded-lg">
          {images.slice(1).map((img, index) => (
            <img key={index} src={img} alt={`${title} ${index}`} className="w-1/4 h-auto transform transition-transform duration-500" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
