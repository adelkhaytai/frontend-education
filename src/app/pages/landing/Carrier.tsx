import Image from 'next/image'
import React from 'react'

export default  function 
Carrier() {
  return (
    <div className=''>
        <div className="text-center mt-50 mb-65 my-12 px-4 md:px-10">
  <h2 className="text-2xl md:text-4xl font-light italic text-gray-700">
    Découvrir <span className="font-bold text-blue-500 ">Votre</span> 
    <span className="font-bold text-cyan-500"> Chemin </span>
    <span className="font-bold text-gray-800">Créatif</span>
  </h2>
  <p className="mt-4 text-gray-500 text-base md:text-lg">
    Explorez les différentes sections sur Rivezli pour une expérience unique. 
    Votre prochaine découverte est à un clic.
  </p>

  {/* Cards Section */}
  <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
    
    {/* Card 1 */}
    <div className="rounded-xl overflow-hidden border border-blue-500 shadow-sm hover:shadow-lg transition">
      <Image
         src="/math.jpg"
         alt="Préparatoire"
        //  fill
         className="w-full h-48 object-cover"
         width={200}
         height={200}
      />
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blue-900">Préparatoire</h3>
        <span className="text-blue-600 text-xl">→</span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="rounded-xl overflow-hidden border border-blue-500 shadow-sm hover:shadow-lg transition">
      <Image
        src="/economie.avif" 
        alt="Economie et gestion"
        className="w-full h-48 object-cover"
        width={200}
        height={200}
        // fill
      />
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blue-900">Economie et gestion</h3>
        <span className="text-blue-600 text-xl">→</span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="rounded-xl overflow-hidden border border-blue-500 shadow-sm hover:shadow-lg transition">
      <Image
        src="/droit.jpg" 
        alt="Droit"
        className="w-full h-48 object-cover"
        // fill
        width={200}
        height={200}
      />
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blue-900">Droit</h3>
        <span className="text-blue-600 text-xl">→</span>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}
