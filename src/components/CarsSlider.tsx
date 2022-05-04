import React from 'react';
import Slider from 'react-slick';
import { CarProps } from '../../types/types';
import { CarCard } from './CarCard';
import { NextArrow } from './CustomNextArrow';
import { PrevArrow } from './CustomPrevArrow';

export const CarsSlider: React.FC<CarProps> = ({ cars }) => {
  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </Slider>
  );
};
