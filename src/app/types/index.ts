import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CarProps {
  id: number;
  make: string;
  model: string;
  year: number;
  class: string;
  city_mpg: number;
  highway_mpg: number;
  drive: string;
  transmission: string;
  combination_mpg: number;
  cylinders: number;
  displacement: string;
  fuel_type: string;
  seats: number;
  price: number | string ,
  image: string;
  heart: string;
  type: string;      
  capacity: string;  
}
