export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface CarProps {
  cars: Car[];
}

export type HandleFn = () => void;
export type HandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => void;
