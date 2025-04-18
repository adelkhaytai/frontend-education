'use client';
import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = ['All', 'Préparatoire', 'Economie et gestion', 'Droit'];

const packs = [
  {
    name: "Peta Pack",
    year: "PETA 2ème année PC",
    price: 139,
    features: [
      { name: "Toutes les matières", available: true },
      { name: "TD + Exersises", available: true },
      { name: "Live recordings", available: true },
      { name: "Examen", available: true },
      { name: "Concours", available: true },
      { name: "Live assistances", available: false },
    ],
  },
  {
    name: "Tera : Formation en python 2ème année PT",
    price: 49,
    teacher: "Rahma Zouari",
    subject: "Informatique",
    features: [
      { name: "Live Assistance", available: true },
    ],
    description:
      "Ce pack contient tout ce dont vous avez besoin, des vidéos comprenant des cours complets, des séries d'exercices, des problèmes, des devoirs surveillé...",
  }
  ,
  {
    name: "Zetta Pack",
    year: "ZETTA 2ème année PT",
    price: 149,
    features: [
      { name: "Toutes les matières", available: true },
      { name: "TD + Exersises", available: true },
      { name: "Live recordings", available: true },
      { name: "Examen", available: true },
      { name: "Concours", available: true },
      { name: "Live assistances", available: true },
    ],
  },
   {
    name: "Zetta Pack",
    year: "ZETTA 2ème année PT",
    price: 149,
    features: [
      { name: "Toutes les matières", available: true },
      { name: "TD + Exersises", available: true },
      { name: "Live recordings", available: true },
      { name: "Examen", available: true },
      { name: "Concours", available: true },
      { name: "Live assistances", available: true },
    ],
  },
  
];

export default function Courses() {
  
  const settings:any = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section className="py-10 mt-50 mb-60 px-4 bg-light">
    <div className="max-w-7xl mx-auto ">
      <Slider {...settings} >
      {packs.map((pack, index) => (
        <div key={index} className="bg-ligtht rounded-2xl shadow-md overflow-hidden flex flex-col justify-between">
          {index === 1 ? (
            <div className="relative">
              <Image
                src="/teatcher.png" // replace with actual image
                alt="Teacher"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 left-2 bg-cyan-600 text-white px-2 py-1 rounded-lg text-sm">
                {pack.subject}
              </div>
              <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
                {pack.teacher}
              </div>
            </div>
          ) : (
            <div className="bg-blue-900 text-white text-center py-20 text-3xl font-bold">
              {pack.name}
            </div>
          )}

          <div className="p-4">
            <p className="text-sm text-gray-500 mb-1">Préparatoire</p>
            <h3 className="text-lg font-semibold mb-2">
              {pack.year || pack.name}
            </h3>

            {pack.description && (
              <p className="text-sm text-gray-700 mb-4">{pack.description}</p>
            )}

            <div className="space-y-1 text-sm mb-4">
              {pack.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  {feature.available ? (
                    <CheckCircle className="text-cyan-600 w-4 h-4" />
                  ) : (
                    <XCircle className="text-red-400 w-4 h-4" />
                  )}
                  <span className={feature.available ? "text-gray-800" : "text-gray-500 line-through"}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">{pack.price} DT</span>
              <button className="text-sm" >
                En savoir plus →
              </button>
            </div>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  </section>
  );
}
