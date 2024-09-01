import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CarProps {
  id:number,
  seats:number;
  price: string;
  image: string | StaticImport;
  city_mpg: number,
  year:number,
  model: string,
  highway_mpg: number;
  drive: string;
  transmission: string;
  make: string;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: string;
  fuel_type: string;
  heart:string
}
