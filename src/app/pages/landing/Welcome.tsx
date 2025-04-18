import React from "react";

export default function Welcome() {
  return (
    <div className="bg-light items-stretch mt-40 mb-50  px-6 md:px-30 ">
    {/* Content + Image section */}
    <div className="flex flex-col-reverse md:flex-row gap-6 items-center">
      {/* Text section */}
      <div className="w-full md:w-3/5">
        <h1 className="text-3xl md:text-5xl text-pretty mb-4">
          Là où l'excellence se multiplie de l'étudiant à l’étudiant. <br />
          S’organiser, Apprendre et Réussir avec nous.
        </h1>
        <h3 className="text-pretty text-base md:text-lg">
          Rivezli redéfinit l'apprentissage en offrant une plateforme où les
          savoirs se transmettent de l'étudiant élite à l'étudiant visant
          l'excellence. Chaque cours est une passerelle vers le sommet, guidé par
          ceux qui ont déjà gravi les échelons de la réussite.
        </h3>
      </div>
  
      {/* Image section */}
      <div className="w-full md:w-2/5">
        {/* Remplace "Image here" par une vraie image */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          Image here
        </div>
      </div>
    </div>
  
    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-10 mt-6">
      <button className="px-4 p-2 bg-blue-500 text-white rounded-3xl">Nos Cours</button>
      <button className="px-4 p-2 bg-blue-500 text-white rounded-3xl">S'inscrire</button>
    </div>
  </div>
  
  );
}
