import React from "react";
import CarCard from "./CarCard";
import { CarProps } from "../types";
import { Plus_Jakarta_Sans } from "next/font/google";
import Button from "./Button";
import Link from "next/link";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const PopularCar: React.FC<{ cars: CarProps[] }> = ({ cars }) => {
  return (
    <div className={` ${plus_Jakarta_Sans.className}`}>
    <div className="flex flex-col md:flex-row mr-12 items-center justify-between ">
    <h2 className="m-10 text-fill text-[16px] font-semibold">
        Popular Car
      </h2>
      <Link href='#' className="font-semibold text-blue-600">View All</Link>
    </div>
      <div className="flex flex-wrap gap-6 px-20 py-5 justify-center">
        {cars.slice(0, 3).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="m-10">
      </div>
    </div>
  );
};

export default PopularCar;
