"use client";
import React, { useState } from "react";
import Image from "next/image";

const FAQItem = ({ question, answer, defaultOpen = false }: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
      >
        <span className="font-medium text-base sm:text-lg">{question}</span>
        <span
          className={`text-2xl transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-700 text-sm sm:text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function ExcellenceJourney() {
  const parcour = [
    {
      question: "Nous analysons les Performances des étudiants élites",
      answer: "Nous examinons les facteurs de réussites d'un étudiant élite",
    },
    {
      question: "Nous sélectionnons les Outils",
      answer:
        "Nous identifions et rassemblons les ressources et supports essentiels utilisés par cet étudiant pour atteindre l'excellence",
    },
    {
      question: "Nous mettons à Disposition",
      answer:
        "Nous fournissons un guide étape par étape permettant à chaque étudiant de suivre ces méthodes éprouvées et ces outils afin de se hisser au niveau d'un étudiant élite.",
    },
    {
      question: "Nous facilitons la Modélisation du Succès",
      answer:
        "Nous organisons et rendons accessibles ces outils sous forme de cours , exercices et formation enregistrés en vidéo .",
    },
  ];

  return (
    <section className="py-10 mb-50 px-4 sm:px-6 lg:px-16 bg-light">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Graduation image */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-lg overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
            <Image
              src="/gradution.jpg"
              alt="Diplômés tenant leurs diplômes"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2">
          {/* Decorative element */}
          <div className="mb-6">
            <svg
              viewBox="0 0 100 40"
              width="80"
              height="40"
              className="text-cyan-400"
            >
              <path
                d="M10,30 Q30,5 50,30 T90,30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Atteindre l'excellence : Votre parcours commence ici
          </h2>

          {/* Accordion */}
          <div className="space-y-4 mb-6">
            {parcour.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-all w-full sm:w-auto text-sm sm:text-base">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
