import React from 'react'
import { Send, Rocket, Headphones, Guitar } from 'lucide-react';
export default function ExcellenceValuesSection() {
    const values = [
        {
          icon: <Send className="w-8 h-8 text-white" />,
          title: "Excellence",
          bgColor: "bg-cyan-500"
        },
        {
          icon: <Rocket className="w-8 h-8 text-white" />,
          title: "Productivité",
          bgColor: "bg-cyan-500"
        },
        {
          icon: <Headphones className="w-8 h-8 text-white" />,
          title: "Satisfaction",
          bgColor: "bg-cyan-500"
        },
        {
          icon: <Guitar className="w-8 h-8 text-white" />,
          title: "Succès",
          bgColor: "bg-cyan-500"
        }
      ];
  return (
    <section className="bg-light mb-50 py-16 px-4 md:px-8 rounded-3xl">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left side - Text content */}
        <div className="w-full lg:w-5/12">
          {/* Paper plane icon with dotted path */}
          <div className="mb-6 relative">
            <div className="text-cyan-400">
              <svg width="80" height="80" viewBox="0 0 80 80" className="relative">
                <path 
                  d="M10,40 Q20,20 30,40 Q40,60 50,40 Q60,20 70,40" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  className="opacity-50"
                />
                <path 
                  d="M5,40 L20,35 L12,42 Z" 
                  fill="currentColor" 
                  transform="rotate(-30, 14, 42)"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Libérer l'excellence : votre voyage commence ici
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8">
            On vous fournit tout ce dont vous avez besoin pour atteindre vos objectifs. 
            Nous vous accompagnons main dans la main pour transformer vos rêves en réalité.
          </p>

          {/* Button */}
          <button className="border border-gray-800 text-gray-800 hover:bg-gray-100 font-medium py-2 px-6 rounded-full transition-all">
            À propos
          </button>
        </div>

        {/* Right side - Cards grid */}
        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-cyan-500 text-white p-8 rounded-3xl flex flex-col items-start justify-between h-64"
            >
              <div className="bg-cyan-400/30 p-4 rounded-full">
                {value.icon}
              </div>
              <h3 className="text-3xl font-bold mt-auto">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}
