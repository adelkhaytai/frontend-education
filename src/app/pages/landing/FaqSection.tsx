'use client'
// components/FAQSection.jsx
import { useState } from 'react';

const faqs = [
  {
    question: "Qu'est ce que la plateforme Rivezli ?" ,
    answer:
      "Rivezli est une plateforme éducative tunisienne qui propose des cours créés par de véritables experts, alignée avec le programme universitaire et supervisée par des inspecteurs de l'enseignement supérieur. Un partage de savoir de qualité entre étudiants.",
  },
  {
    question: "Quels sont les offres disponibles sur Rivezli ?",
    answer:
      "Nous proposons une variété de cours et d'offres adaptés aux besoins des étudiants, allant des formations techniques aux cours de développement personnel. (Détaillez selon vos propres offres.)",
  },
  {
    question: "Comment puis-je m'inscrire ?",
    answer:
      "L'inscription est simple : il vous suffit de remplir le formulaire sur notre site, de vérifier votre email et de choisir le cours qui vous convient le mieux.",
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer:
      "Nous acceptons divers modes de paiement, incluant les cartes de crédit, les virements bancaires et d'autres options en fonction de votre localisation.",
  },
];

const FAQItem = ({ question , answer, defaultOpen = false }:any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
      >
        <span className="font-medium text-lg">{question}</span>
        <span
          className={`text-2xl transition-transform duration-200 ${
            isOpen ? "transform rotate-45" : ""
          }`}
        >
          
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Questions fréquemment posées
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={index === 0} // La première FAQ est déployée par défaut.
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
