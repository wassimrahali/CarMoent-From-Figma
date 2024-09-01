import React from "react";
import Image from "next/image";
import { CarProps } from "../types";
import huile from "../../../public/assets/huile.svg";
import vitesse from "../../../public/assets/vitesse.svg";
import people from "../../../public/assets/people.svg";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface CarCardProps {
  car: CarProps;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="w-full min-h-[320px] md:w-1/4 bg-white rounded-md flex flex-col p-4">
      <div className="flex flex-col h-full justify-between">
        <div className="text-left space-y-4 mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold">{car.make}</h2>
            {/* <Image src={heart} alt="heart icon" width={24} height={24} /> */}
            <Image src={car.heart} alt="heart icon" width={24} height={24} />
          </div>
          <p className="text-gray-500 text-[14px] font-medium">
            {car.class}
          </p>
          <Image
            src={car.image}
            alt="car"
            width={300}
            height={200}
            className="mb-4 object-cover"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div className="flex items-center text-gray-500 justify-between text-[12px] mb-4">
            <div className="flex items-center space-x-1">
              <Image src={huile} alt="fuel icon" width={16} height={16} />
              <p>{car.fuel_type}</p>
            </div>
            <div className="flex items-center space-x-1">
              <Image
                src={vitesse}
                alt="transmission icon"
                width={16}
                height={16}
              />
              <p>{car.transmission}</p>
            </div>
            <div className="flex items-center space-x-1">
              <Image src={people} alt="seats icon" width={16} height={16} />
              <p>{car.seats} People</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[20px] font-bold">
              ${car.price}
              <span className="text-gray-600 text-[13px]">/day</span>
            </p>
            <button className="bg-blue-700 text-white p-2 sm:p-3 text-[12px] font-semibold rounded-md">
              Rent Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
