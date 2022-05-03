import React from 'react';
import Image from 'next/image';
import { Text, Flex, Link, useTheme, View } from 'vcc-ui';
import { Car } from '../../types/types';

export const CarCard = ({ car }: { car: Car }): JSX.Element => {
  const theme = useTheme();
  const secondaryTxtStyle = { color: theme.color.foreground.secondary };

  return (
    <View padding={1.5}>
      <Flex extend={{ paddingBottom: '1rem' }}>
        <Text variant="bates" subStyle="emphasis" extend={secondaryTxtStyle}>
          {car.bodyType.toUpperCase()}
        </Text>
        <div className="card__info">
          <Text subStyle="emphasis" extend={{ marginRight: '0.5rem' }}>
            {car.modelName}
          </Text>
          <Text extend={secondaryTxtStyle}>{car.modelType}</Text>
        </div>
      </Flex>
      <div className="container">
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          layout="fill"
          className="img"
        />
      </div>
      <Flex
        extend={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        <Link href={`/learn/${car.id}`} arrow="right">
          Learn
        </Link>
        <Link href={`/shop/${car.id}`} arrow="right">
          SHOP
        </Link>
      </Flex>
    </View>
  );
};
