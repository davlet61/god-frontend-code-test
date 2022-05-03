import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Flex, View, Text, Link, Button } from 'vcc-ui';
import { BASE_URL } from '../../../config';
import NoSSR from '../../../src/components/NoSSR';
import { Car } from '../../../types/types';

const shop = ({ car }: { car: Car[] }) => {
  return (
    <NoSSR>
      <View padding={2}>
        <Flex extend={{ padding: '1rem' }}>
          <Text variant="bates" subStyle="emphasis" extend={{ color: 'gray' }}>
            {car[0].bodyType.toUpperCase()}
          </Text>
          <Text subStyle="emphasis" extend={{ marginRight: '0.5rem' }}>
            {car[0].modelName}
          </Text>
          <Text extend={{ color: 'gray' }}>{car[0].modelType}</Text>
        </Flex>
        <div className="container">
          <Image
            src={car[0].imageUrl}
            alt={car[0].modelName}
            layout="fill"
            className="img"
          />
        </div>
      </View>
      <View spacing={2} extend={{ padding: '0 20rem 10rem' }}>
        <Button intent="secondary" variant="default">
          Buy
        </Button>
        <Link href="/">
          <Button variant="outline">Go Back</Button>
        </Link>
      </View>
    </NoSSR>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const res = await fetch(`${BASE_URL}/api/cars/${context.params?.id}`);

  const car = await res.json();

  return {
    props: {
      car,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/api/cars`);

  const cars: Car[] = await res.json();

  const ids = cars.map(car => car.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default shop;
