'use client'
// components/Feedbacks.jsx
import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    id: 1,
    message: 'les vidéos enregistrés yesser behin ana sna yesser 3awnouni fi 3am loul Prépa ❤️ ❤️',
    author: 'Rawed ataallah',
    avatar: '/avatars/rawed.png'
  },
  {
    id: 2,
    message: 'M3akom m l ère w sné t5arajeet b mention y all be saving my life yaatikom e sahaa ❤️',
    author: 'Maram Dridi',
    avatar: '/avatars/maram.png'
  },
  {
    id: 3,
    message: 'L youm tai3et l resultat w nja7t wntouma berasmi 3awentouni bil behy bil videos w lives te3kom 1000 merci w nchallah bch nkml m3akom fil 2eme ❤️ ❤️',
    author: 'Elaa',
    avatar: '/avatars/elaa.png'
  },
  // Vous pouvez ajouter d'autres témoignages ici
];

export default function Feedback() {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

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
    <div className="bg-light mb-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
       
        {/* En-tête */}
        <div className="text-center mb-8">
          <p className="text-cyan-500 font-medium mb-2">FeedBacks</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ce qu'ils disent de nous</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nous nous engageons à offrir une expérience éducative exceptionnelle, et les retours de nos étudiants
            témoignent de notre dévouement. Voici ce qu'ils disent de nous.
          </p>
        </div>

        {/* Icône décorative */}
        <div className="relative">
          <div className="absolute right-0 -top-24">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 15C9.2 16.2 11.8 16.2 14 15" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#0EA5E9" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        {/* Cartes de témoignages */}
        <div className="">
        <div className="slider-container">
          <Slider {...settings}>
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="min-h-36">
                <p className="text-gray-700">{testimonial.message}</p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="#9CA3AF"/>
                    <path d="M4 20C4 17.6324 4.7375 15.3523 6.10571 13.5524C7.47393 11.7525 9.37368 10.5 12 10.5C14.6263 10.5 16.5261 11.7525 17.8943 13.5524C19.2625 15.3523 20 17.6324 20 20" fill="#9CA3AF"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-800">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
         
        </div>
       
       
        </div>
      </div>

  );
}