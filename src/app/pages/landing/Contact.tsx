import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white p-6  md:mt-40 md:p-10 rounded-lg transition-all duration-300">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">VOUS NE SAVEZ PAS TROP PAR OÙ COMMENCER ?</h2>
      <p className="text-lg">Nous sommes là pour vous aider. N'hésitez pas à nous contacter</p>
    </div>

    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span>+216 26 978 355</span>
      </div>

      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <span>rivezli.info@gmail.com</span>
      </div>

      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span>Rivezli ,Bloc C - 2ème Etage, Rivezli.tn, Carthage Palace, C21 1082</span>
      </div>
    </div>

    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Nom & Prénom</label>
          <input
            type="text"
            id="name"
            placeholder="Nom & Prénom"
            className="w-full p-3 rounded text-gray-800 bg-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">Téléphone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Téléphone"
            className="w-full p-3 rounded text-gray-800 bg-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            className="w-full p-3 rounded text-gray-800 bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea
          id="message"
          placeholder="Votre message"
          rows={6}
          className="w-full max-w-full p-3 rounded text-gray-800 bg-white"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-4 rounded transition-colors"
      >
        Envoyer
      </button>
    </form>
  </div>
  );
}
