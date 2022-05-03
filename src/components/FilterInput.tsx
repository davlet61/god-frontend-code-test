import { SelectInput } from 'vcc-ui';
import { Car, HandleChange } from '../../types/types';

export const FilterInput = ({
  cars,
  type,
  handleChange,
}: {
  cars: Car[];
  type: string;
  handleChange: HandleChange;
}) => {
  const bodyTypes = cars.map(car => car.bodyType);
  const uniqueBodyTypes = bodyTypes.filter((e, i, a) => a.indexOf(e) === i);

  return (
    <SelectInput
      label={'Select type'}
      description={'Filter cars by body type'}
      value={type}
      onChange={handleChange}
      isValid={false}
    >
      {uniqueBodyTypes.map((element, i) => (
        <option key={i} value={element}>
          {element.toUpperCase()}
        </option>
      ))}
    </SelectInput>
  );
};
