import React from 'react'
import Image from 'next/image';
export default function OurService() {
  return (
    <section className="relative mb-40 overflow-hidden">
      <div className="flex flex-col  lg:flex-row min-h-screen">
        {/* Left section with text content */}
        <div className="lg:w-1/2 bg-gray-900 text-white p-8 lg:p-16 flex flex-col justify-center rounded-r-3xl lg:rounded-r-none lg:rounded-l-3xl relative">
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto">
            {/* Logo */}
            <div className="mb-6">
              <span className="text-cyan-400 text-2xl font-light">Fasarli.tn</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Votre plateforme d'apprentissage révolutionnaire
            </h1>
            
            {/* Description paragraph */}
            <p className="text-lg mb-8 text-gray-100 leading-relaxed">
              Notre philosophie repose sur la conviction profonde que pour atteindre l'excellence, 
              nos étudiants doivent non seulement acquérir des connaissances, mais aussi s'inspirer 
              des parcours exceptionnels qui ont marqué l'histoire. L'approche de Rivezli est conçue 
              pour dépasser les frontières traditionnelles de l'enseignement, en mettant l'accent sur 
              l'élévation et l'inspiration des esprits à travers l'exemple. Laissez Rivezli vous 
              accompagner dans la réalisation de vos ambitions les plus élevées.
            </p>
            
            {/* CTA Button */}
            <div>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-full transition-all">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
        
        {/* Right section with laptop image */}
        <div className="lg:w-1/2 bg-stone-300 relative">
          {/* Wave design element */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="bg-stone-200 h-96 w-12 rounded-full"></div>
          </div>
          
          {/* Image container */}
          <div className="h-full w-full flex items-center justify-center p-8 lg:p-12">
          <Image 
                    src="/workk.avif" 
                    alt="Plateforme Rivezli sur un ordinateur portable" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-md"
                  />
      
          </div>
        </div>
      </div>
    </section>
  )
}
