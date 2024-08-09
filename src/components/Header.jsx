import React from "react";

function Header() {
  return (
    <header className="bg-cian text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <ul>
            <li>
              <a href="#hero" className="hover:underline">
                Er
              </a>
            </li>
          </ul>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                Acerca de
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#product" className="hover:underline">
                Productos
              </a>
            </li>
            <li className="block md:hidden">
              <a href="#productViewOnPhone" className="hover:underline">
                Productos
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
