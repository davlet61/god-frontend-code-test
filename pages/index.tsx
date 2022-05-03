import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { IconButton, View, SelectInput, Flex } from 'vcc-ui';
import { BASE_URL } from '../config';
import { CarsSlider } from '../src/components/CarsSlider';
import { FilterInput } from '../src/components/FilterInput';
import { CarProps, Car, HandleFn, HandleChange } from '../types/types';

const HomePage: NextPage<CarProps> = ({ cars }) => {
  const [type, setType] = useState('');
  const [show, setShow] = useState(false);

  const handleShow: HandleFn = () => {
    setShow(prev => !prev);
  };

  const handleChangeInput: HandleChange = e => {
    setType(e.target.value);
  };

  const filteredCars =
    type.length === 0
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
        iconName={show ? 'navigation-close' : 'filter'}
        variant="filled"
        onClick={handleShow}
      />
      {show && (
        <FilterInput type={type} handleChange={handleChangeInput} cars={cars} />
      )}
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
