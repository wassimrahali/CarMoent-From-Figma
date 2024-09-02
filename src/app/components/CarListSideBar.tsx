"use client";
import React, { useState } from "react";
import { CarProps } from "../types";
import SideBar from "./SideBar";
import CarCard from "./CarCard";
import { Plus_Jakarta_Sans } from "next/font/google";
import FormFilter from "./FormFilter";
import Button from "./Button";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const CarListSideBar: React.FC<{ cars: CarProps[] }> = ({ cars }) => {
  const [filteredCars, setFilteredCars] = useState(cars);

  return (
    <div
      className={` ${plus_Jakarta_Sans.className} flex flex-col md:flex-row h-full`}
    >
      <SideBar cars={cars} onFilterChange={setFilteredCars} />
      <div className="flex flex-wrap gap-6 px-20 py-5 justify-center items-start">
        <div className="p-1 h-48">
          <FormFilter />
        </div>

        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
    
      </div>
    </div>
  );
};

export default CarListSideBar;
