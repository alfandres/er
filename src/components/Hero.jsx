import React from "react";
import { assets } from "../assets.js";
function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.backgroundHeroEr})` }} 
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white ">
        <div className="flex flex-col items-center md:items-center">
          <img
            src={assets.LogoEr}
            alt="Company Logo"
            className="w-40 md:w-70 h-auto mb-6"
          />
          <h1 className="text-5xl font-bold mb-4">Empresa Er</h1>
          <p className="text-2xl mb-8">calidad es nuestra confección</p>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full px-4 py-2">
              {/* <!-- Call Box --> */}
              <a
                href="tel:+573105711788"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-cian text-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
              >
                <img
                  src={assets.LogoCall}
                  alt="Icono de llamada"
                  className="w-12 h-12"
                />
                <h2 className="mt-4 text-lg font-bold">Llamar</h2>
              </a>
              {/* <!-- WhatsApp Box --> */}
              <a
                href="https://api.whatsapp.com/message/TLLM6BPBDHISE1?autoload=1&app_absent=0"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-cian text-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
                target="_blank"
              >
                <img
                  src={assets.logoWhatsapp}
                  alt="Icono de WhatsApp"
                  className="w-12 h-12"
                />
                <h2 className="mt-4 text-lg font-bold">WhatsApp</h2>
              </a>
              {/* <!-- Instagram Box --> */}
              <a
                href="https://www.instagram.com/er_niceshirts?igsh=YzljYTk1ODg3Zg=="
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-cian text-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
                target="_blank"
              >
                <img
                  src={assets.logoInstagram}
                  alt="Icono de Instagram"
                  className="w-12 h-12"
                />
                <h2 className="mt-4 text-lg font-bold">Instagram</h2>
              </a>
              {/* <!-- Facebook Box --> */}
              <a
                href="https://www.facebook.com/Er.72p"
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-cian text-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
                target="_blank"
              >
                <img
                  src={assets.LogoFacebook}
                  alt="Icono de Facebook"
                  className="w-12 h-12"
                />
                <h2 className="mt-4 text-lg font-bold">Facebook</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
