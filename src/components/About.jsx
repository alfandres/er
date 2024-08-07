import React from "react";
import { assets } from "./assets";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around text-center md:text-left">
        <div className="max-w-xl pb-6 md:pb-0">
          <h2 className="text-4xl font-bold mb-4">¿Quiénes Somos?</h2>
          <p className="text-lg mb-4 px-6 md:px-0">
            Er es una destacada empresa dedicada a la confección de prendas de
            vestir, especializada en ofrecer una amplia gama de productos como
            camisetas básicas, camisetas oversize, buzos, joggers, conjuntos
            deportivos, mamelucos, polos y camisas de vestir. Nos comprometemos
            a entregar productos de la más alta calidad, garantizando la
            satisfacción de nuestros clientes a través de tallajes reales para
            niños y adultos, tanto para damas como para caballeros.
          </p>
          <h3 className="text-2xl font-bold mb-2">Valores de la Empresa</h3>
          <p className="text-lg font-bold mb-1">✅ Integridad</p>
          <p className="text-lg font-bold mb-1">✅ Compromiso</p>
          <p className="text-lg font-bold mb-1">✅ Responsabilidad</p>
        </div>
        <div className="mb-8 px-2 md:px-0 md:mb-0">
          <img
            src={assets.imgAbout}
            alt="img-photo"
            className="w-full md:w-80 h-auto mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
