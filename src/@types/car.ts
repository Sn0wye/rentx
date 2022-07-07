export interface Car {
  id: number;
  brand: string;
  model: string;
  price: string;
  maxSpeed: number;
  zeroToHundred: number;
  type: string;
  transmission: string;
  maxPeople: number;
  horsePower: number;
}

export interface CarsAPIResponse {
  data: Car[] | Car;
}
