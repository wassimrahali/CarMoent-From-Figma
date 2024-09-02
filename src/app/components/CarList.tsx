import React from "react";
import CarCard from "./CarCard";
import { CarProps } from "../types";
import Button from "./Button";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const CarList: React.FC<{ cars: CarProps[] }> = ({ cars }) => {
  return (
    <div className={` ${plus_Jakarta_Sans.className}`}>
      <h2 className="m-10 text-fill text-[16px] font-semibold">
        Recommended Car
      </h2>
      <div className="flex flex-wrap gap-6 px-20 py-5 justify-center">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        
      </div>
      <div className="m-10">
      <Button />

      </div>
    </div>
  );
};

export default CarList;
