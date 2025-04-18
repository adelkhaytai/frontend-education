'use client'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data:any[] = [
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
  
  
  const settings:any = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed : 500,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear"
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

export default function Test() {
  return (
    <div className='w-3/4 m-auto'>
        <div className='mt-20 '>
            <Slider {...settings}>
            {data.map((d)=>(
                <div className='bg-light h-[450px] rounded-xl'>
                    <div className='h-56 rounded-t-xl bg-amber-900 flex justify-center items-center'>
                        <img src={d.image} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                        <p className='text-xl font-semibold'>{d.name}</p>
                        <p className=''>{d.description} </p>
                        <button className='bg-indigo-500 text-white text-lg py-1 rounded-xl'>add</button>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    </div>
  )
}
