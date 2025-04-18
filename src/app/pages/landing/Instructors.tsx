'use client'
// pages/instructors.js
import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const instructors = [
  {
    id: 1,
    name: 'Lina Khraissi',
    description: 'Possède une licence en gestion de l\'IHEC, complétée par un master...',
    image: '/instructors/lina.jpg',
    rank: null
  },
  {
    id: 2,
    name: 'Amine Lahdhiri',
    description: 'Rang 1 MP 2020, il a effectué son cycle préparatoire à l\'IPEIT ...',
    image: '/instructors/amine.jpg',
    rank: 1
  },
  {
    id: 3,
    name: 'Aziz Jouini',
    description: 'Est distingué par l\'obtention de la meilleure note en algèbre à...',
    image: '/instructors/aziz.jpg', 
    rank: null
  },
  {
    id: 4,
    name: 'Iheb Kacem',
    description: 'Rang 9 MP 2022 il a effectué son cycle préparatoire à l\'IPEIS...',
    image: '/instructors/iheb.jpg',
    rank: 9
  },
  // Vous pouvez ajouter d'autres instructeurs ici
];

export default function Instructors() {
  const [currentPage, setCurrentPage] = useState(1);
  const instructorsPerPage = 4;
  const totalPages = Math.ceil(instructors.length / instructorsPerPage);
  
  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
  const currentInstructors = instructors.slice(indexOfFirstInstructor, indexOfLastInstructor);

  const handlePageChange = (pageNumber:any) => {
    setCurrentPage(pageNumber);
  };

  const settings:any = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
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
    <div className="container mb-40 mx-auto px-4 py-12">
      {/* En-tête */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">Nos</h2>
          <div className="relative mx-2">
            <span className="text-cyan-400 text-2xl md:text-3xl font-bold">Brillants</span>
            <div className="absolute -inset-1 border-2 border-cyan-400"></div>
          </div>
          <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">instructeurs</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Une équipe éducative, mêlant savoir et pratique, pour un enseignement d'excellence.
        </p>
      </div>

      {/* Grille d'instructeurs */}
      <div className="">
        <div className='slider-container'>
          <Slider {...settings}>
          {currentInstructors.map((instructor) => (
          <div key={instructor.id} className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-100 w-full">
              {/* Remplacez par votre composant Image ou img approprié */}
              <div className="h-full w-full bg-gray-200 relative">
                {/* Ici, vous utiliseriez normalement une image réelle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder pour l'image */}
                  <span className="text-gray-400">Image de {instructor.name}</span>
                </div>
              </div>
              
              {/* Badge de rang */}
              {instructor.rank && (
                <div className="absolute top-4 right-4 bg-white rounded-md shadow-md p-2">
                  <div className="text-xs text-gray-500">Rang</div>
                  <div className="text-xl font-bold text-center">{instructor.rank}</div>
                </div>
              )}
            </div>

            {/* Information sur l'instructeur */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="font-bold text-lg mb-1">{instructor.name}</h3>
              <p className="text-sm text-gray-200">{instructor.description}</p>
            </div>
          </div>
        ))}
          </Slider>
        </div>
      
      </div>

     
      </div>

  );
}