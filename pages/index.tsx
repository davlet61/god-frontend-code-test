import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { IconButton, View } from 'vcc-ui';
import { BASE_URL } from '../config';
import { CarsSlider } from '../src/components/CarsSlider';
import { CarProps, Car } from '../types/types';

const HomePage: NextPage<CarProps> = ({ cars }) => {
  const [type, setType] = useState('suv');

  const filteredCars =
    type === null
      ? cars
      : cars.filter(car => car.bodyType === type.toLowerCase());

  return (
    <View
      extend={({ theme }) => ({
        color: theme.color.foreground.alert,
        margin: '2rem 1.5rem 0rem',
      })}
    >
      <IconButton
        className="filter-icon"
        aria-label="Filter"
        iconName="filter"
        variant="filled"
        onClick={() => {}}
      />
      <CarsSlider cars={filteredCars} />{' '}
    </View>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/api/cars`);
  const cars: Car[] = await res.json();

  return {
    props: {
      cars,
    },
  };
};
