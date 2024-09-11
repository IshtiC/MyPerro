'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { redirect } from 'next/navigation'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cardData = [
  { title: "How to make the Paw-fect Meal For Your Dog", description: '', link:'/blog/dog-diet', image:"/blog-card-1.png" },
  { title: 'Tips for preventing accidents and injuries', description: '', link:'/blog/dog-safety', image:"/blog-card-3.jpg" },
  { title: 'Unlocking the Benefits of Dog Daycare', description: '', link:'/blog/dog-daycare', image:"/blog-card-4.jpg" },
  { title: 'Role of Regular Veterinary Check-Ups', description: '', link:'/blog/dog-vet', image:"/blog-card-2.jpg" },
  // { title: 'Card 5', description: 'Description of Card 2', link:'/blog/dog-diet' },
  // { title: 'Card 6', description: 'Description of Card 3', link:'/blog/dog-diet' },
];

const CardCarousel = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3, // Default to showing 3 slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
  centerMode: true,
  beforeChange: (current: number, next: number) => setActiveSlide(next),
  responsive: [
    {
      breakpoint: 768, // Width less than 768px
      settings: {
        slidesToShow: 1, // Show only 1 slide
      },
    },
    {
      breakpoint: 1024, // Width less than 768px
      settings: {
        slidesToShow: 2, // Show only 1 slide
      },
    },
    // You can add more breakpoints here if needed
  ],
};

  return (
<>
<h1 className='font-nohemi text-6xl mt-12 ml-10' id='blog-card'>Blogs </h1>
<Slider className="p-[3rem] mb-10" {...settings}>
  {cardData.map((card, index) => (
  <div key={index} className={`shadow-md rounded-lg overflow-hidden bg-[#FEEAD8] blog-card ${index === activeSlide ? 'card-focused' : 'card-blurred'}`}>
    <div style={{ display: 'flex', width: '100%' }}>
      <Image src={card.image} width={175} height={100} alt={card.title} className="w-1/2 blog-slider-main" />
      <div className="p-2 md:p-5 text-center flex flex-col justify-start space-y-6 md:space-y-0 md:justify-between w-1/2">
        <h2 className="text-xs xl:text-lg font-bold text-gray-800 pt-2 blog-desc-main">{card.title}</h2>
        <a href={card.link} target='_blank'><button className="bg-orange-500 text-white font-bold md:mb-5 md:py-1 md:px-4 py-1 px-2 mt-1 md:mt-6 rounded hover:bg-orange-600 transition duration-300 ease-in-out text-xs xl:text-lg" >Read More</button></a>
      </div>
    </div>
  </div>
))}
</Slider>
</>
  );
};

export default CardCarousel;
