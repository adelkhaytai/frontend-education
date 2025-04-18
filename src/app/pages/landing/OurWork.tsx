import React from 'react'
import Head from 'next/head';
import { ArrowRight, Video, FileText, BookOpen, LightbulbIcon, CheckSquare } from 'lucide-react';
export default function OurWork() {
    const features = [
        {
          icon: <Video className="w-6 h-6 text-white" />,
          title: "Séances Live Exclusives",
          description: "Participez à des séances live interactives animées par les étudiants ayant atteint l'excellence à l'échelle nationale.",
          bgColor: "bg-cyan-500"
        },
        {
          icon: <Video className="w-6 h-6 text-white" />,
          title: "Cours Enregistrés sous forme des vidéos",
          description: "Accédez à une sélection rigoureuse de cours enregistrés, préparés par les meilleurs.",
          bgColor: "bg-cyan-500"
        },
        {
          icon: <CheckSquare className="w-6 h-6 text-white" />,
          title: "Séries d'exercices/ problème / concours sous forme des vidéos",
          description: "fasarli vous offre les matériaux qui ont façonné nos enseignants en véritables élites.",
          bgColor: "bg-cyan-500"
        },
        {
          icon: <BookOpen className="w-6 h-6 text-white" />,
          title: "Bibliothèque des Séries en pdf",
          description: "Notre bibliothèque contient toutes les ressources pdf des premières à l'échelle nationale.",
          bgColor: "bg-cyan-500"
        },
        {
          icon: <LightbulbIcon className="w-6 h-6 text-white" />,
          title: "Formation en Méthodes de Révision",
          description: "Bénéficiez d'une formation et d'un accompagnement pour perfectionner vos méthodes de révision.",
          bgColor: "bg-cyan-500"
        },
        {
          icon: <FileText className="w-6 h-6 text-white" />,
          title: "Quiz/Test",
          description: "Testez et évaluez vos connaissances grâce à nos quiz et tests conçus par des experts. Un excellent moyen de mesurer vos progrès.",
          bgColor: "bg-cyan-500"
        }
      ];
    

  return (
    <div>
        <div className="min-h-screen mb-40 bg-light">
     

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Avec notre <span className="text-cyan-400 relative px-1">
              Plateforme
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-cyan-400"></span>
            </span>
          </h1>
          <p className="text-gray-600 md:text-lg">
            Démarquez-vous avec Rivezli : Votre Portail vers l'Excellence Académique
          </p>
          <div className="absolute right-10 top-20 hidden lg:block">
            <svg className="w-32 h-32 text-cyan-100" viewBox="0 0 100 100">
              <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="90" cy="50" r="3" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-light rounded-lg shadow-md p-6 border border-gray-100 relative overflow-hidden flex flex-col"
            >
              <div className={`${feature.bgColor} w-10 h-10 rounded-full flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
              <div className="text-cyan-500 flex items-center font-medium">
                <ArrowRight className="w-5 h-5" />
              </div>
              {index < features.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <svg width="24" height="48" viewBox="0 0 24 48">
                    <path d="M0,24 L12,12 L0,0" fill="none" stroke="#38B2AC" strokeWidth="2" />
                    <path d="M0,48 L12,36 L0,24" fill="none" stroke="#38B2AC" strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  )
}
