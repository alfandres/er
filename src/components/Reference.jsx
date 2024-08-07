import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Referencias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg">
            <img
              className="w-32 h-32 rounded-full mb-4"
              src="./src/assets/img/img-referencia-1.jpg"
              alt="foto referencia"
            />
            <p className="text-base md:text-lg">
              Buenos días. Somos una Institución Pública de Cartagena llamada la
              Institución Educativa Liceo de Bolívar con estudiantes. Este año
              tuvimos la fortuna de encontrarnos con una entidad seria,
              responsable y con una excelente calidad en la tela de la
              fabricación de nuestra camiseta de la promoción RBD año 2024. Tuvo
              gran acogida. Esperamos seguir recibiendo los servicios de ER para
              próximas promociones. Gracias.
            </p>
            <h3 className="text-xl mt-4">
              <span className="font-bold">Docente:</span> María Nancy Portilla
              Villamizar
            </h3>
          </div>
          <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg">
          <img
              className="w-32 h-32 rounded-full mb-4"
              src="./src/assets/img/img-referencia-2.jpg"
              alt="foto referencia"
            />
            <p className="text-base md:text-lg">
              ¡Buen día! Queremos expresar nuestro agradecimiento por las
              camisetas que nos proporcionaron. Estamos muy satisfechos con la
              calidad y el diseño de las prendas, y la tela es realmente
              espectacular. Estamos encantados de haber trabajado con ustedes y
              esperamos seguir colaborando en futuros proyectos. <br></br>Muchas
              gracias nuevamente por su excelente servicio. <br></br>
              ¡Bendiciones!
            </p>
            <h3 className="text-xl mt-4">
              {" "}
              <span className="font-bold">Empresa:</span> Algo Asi creativo
            </h3>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Misión</h3>
          <p className="text-lg mb-4">
            Nuestra misión es diseñar y confeccionar prendas de vestir que
            satisfagan las necesidades y expectativas de nuestros clientes,
            ofreciendo productos de alta calidad con tallajes precisos para
            todas las edades y géneros. Nos esforzamos por innovar continuamente
            en nuestros procesos de producción para asegurar que cada pieza de
            ropa no solo cumpla con los estándares de calidad, sino que también
            refleje las últimas tendencias de la moda.
          </p>
          <h3 className="text-2xl font-bold mb-4">Visión</h3>
          <p className="text-lg">
            Nuestra visión es ser líderes en el sector de la confección de
            prendas de vestir, reconocidos por nuestra calidad, innovación y
            compromiso con la satisfacción del cliente. Aspiramos a expandir
            nuestra presencia en el mercado nacional e internacional,
            convirtiéndonos en una marca de referencia que inspira confianza y
            lealtad entre nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
