import React from "react";
import { svgs } from "../assets/svgs.js";

function Footer() {
  return (
    // <footer id="footer" className="bg-blue-600 text-white p-4 text-center">
    //   <div className="container mx-auto">
    //     <div className="mb-4">
    //       <a href="#hero" className="hover:underline">Inicio</a> |
    //       <a href="#services" className="hover:underline">Servicios</a> |
    //       <a href="#about" className="hover:underline">Nosotros</a> |
    //       <a href="#contact" className="hover:underline">Contacto</a>
    //     </div>
    //     <div className="mb-4">
    //       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">Facebook</a>
    //       <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">Twitter</a>
    //       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">Instagram</a>
    //     </div>
    //     <p>&copy; 2024 Er. Todos los derechos reservados.</p>
    //   </div>
    // </footer>

    <footer id="footer" className="bg-cian text-white p-4 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src={svgs.LogoErWhite} alt="Er" className="w-24" />
        </div>
        <div className="text-center md:text-left">
          <p>Dirección: Torcoroma 3 Mz C-5 Casa 8 Piso 2, Cúcuta, Colombia</p>
          <p>Teléfono: +57 310 571 17 88</p>
          <p>Correo Electrónico: ernesto72p@gmail.com</p>
        </div>
        <div className="flex space-x-4">
          <a
          
            href="https://www.facebook.com/Er.72p"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:underline"
          >
            <img
                  src={svgs.LogoFacebook}
                  alt="Icono de Facebook"
                  className="w-8 h-8"
                />
            Facebook
          </a>
         
          <a
            href="https://www.instagram.com/er_niceshirts?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:underline"
          >
            <img
                  src={svgs.logoInstagram}
                  alt="Icono de Instagram"
                  className="w-8 h-8"
                />
            Instagram
          </a>
        </div>
      </div>
      <p className="mt-4">&copy; 2024 Er. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
