import React, { useState } from "react";
import { CarProps } from "../types";

interface SideBarProps {
  cars: CarProps[];
  onFilterChange: (filteredCars: CarProps[]) => void;
}

const SideBar: React.FC<SideBarProps> = ({ cars, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedCapacities, setSelectedCapacities] = useState<Set<string>>(new Set());

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceRange = [0, Number(event.target.value)];
    setPriceRange(newPriceRange);
    filterCars(newPriceRange, selectedTypes, selectedCapacities);
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => {
      const updated = new Set(prev);
      if (updated.has(type)) {
        updated.delete(type);
      } else {
        updated.add(type);
      }
      filterCars(priceRange, updated, selectedCapacities);
      return updated;
    });
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacities(prev => {
      const updated = new Set(prev);
      if (updated.has(capacity)) {
        updated.delete(capacity);
      } else {
        updated.add(capacity);
      }
      filterCars(priceRange, selectedTypes, updated);
      return updated;
    });
  };

  const filterCars = (priceRange: number[], types: Set<string>, capacities: Set<string>) => {
    let filteredCars = cars;

    if (types.size > 0) {
      filteredCars = filteredCars.filter(car => types.has(car.type));
    }

    if (capacities.size > 0) {
      filteredCars = filteredCars.filter(car => capacities.has(car.capacity));
    }

    filteredCars = filteredCars.filter(car => {
      const price = Number(car.price); 
      return price >= priceRange[0] && price <= priceRange[1];
    });

    onFilterChange(filteredCars);
  };

  return (
<div className="bg-white min-w-64 h-screen p-6 rounded-md sticky top-0">
  <div className="mb-4 m-2">
    <h3 className="text-[12px] uppercase text-gray-500 font-semibold">Type</h3>
    <div className="flex flex-col space-y-3 m-3">
      {Array.from(new Set(cars.map(car => car.type))).map(type => (
        <label key={type} className="flex items-center font-semibold text-[16px] text-gray-600 space-x-2">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedTypes.has(type)}
            onChange={() => handleTypeChange(type)}
          />
          {type}
        </label>
      ))}
    </div>
  </div>

  <div className="mb-4 mt-14">
    <h3 className="text-[12px] uppercase text-gray-500 font-semibold">Capacity</h3>
    <div className="flex flex-col space-y-3 m-3">
      {Array.from(new Set(cars.map(car => car.capacity))).map(capacity => (
        <label key={capacity} className="flex items-center font-semibold text-[16px] text-gray-600 space-x-2">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedCapacities.has(capacity)}
            onChange={() => handleCapacityChange(capacity)}
          />
          {capacity}
        </label>
      ))}
    </div>
  </div>

  <div className="mb-4 m-2">
    <h3 className="text-[12px] uppercase text-gray-500 font-semibold">Price</h3>
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700">Price</label>
      <input
        type="range"
        min="0"
        max="400"
        step="50"
        value={priceRange[1]}
        onChange={(e) => handlePriceChange(e)}
        className="w-full mt-2"
      />
      <div className="flex justify-between text-xs text-gray-700 mt-2">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  </div>
</div>

  );
};

export default SideBar;
