import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(src/assets/img/background-contact.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10 mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-10 text-white">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="mb-4 font-bold">
            Gracias por visitar nuestra página. En Er, estamos comprometidos a
            ofrecerte prendas de vestir de alta calidad que se adapten a tus
            necesidades y estilo. No dudes en contactarnos si tienes preguntas
            sobre nuestros productos o si necesitas una prenda específica.
            Estamos aquí para ayudarte y asegurarnos de que encuentres
            exactamente lo que buscas. ¡Esperamos tener noticias tuyas pronto!
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://api.whatsapp.com/message/TLLM6BPBDHISE1?autoload=1&app_absent=0"
              target="_blank"
              className="mr-4"
            >
              <img
                src="src/assets/svg/logoWhatsapp.svg"
                alt="WhatsApp"
                className="w-20 h-20 md:w-10 md:h-10 hover:scale-110 focus:scale-110 transition-transform duration-200 ease-in-out"
              />
            </a>
            <a
              href="https://www.instagram.com/er_niceshirts?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              className="mr-4"
            >
              <img
                src="src/assets/svg/logoInstagram.svg"
                alt="Instagram"
                className="w-20 h-20 md:w-10 md:h-10 hover:scale-110 focus:scale-110 transition-transform duration-200 ease-in-out"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63232.06637714239!2d-72.52117054523562!3d7.894633484049219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66456a48d94929%3A0xdd7713dacfd36711!2sEr!5e0!3m2!1ses-419!2sco!4v1723029199207!5m2!1ses-419!2sco"
            className="w-full h-64 md:h-96" // Responsive height
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
