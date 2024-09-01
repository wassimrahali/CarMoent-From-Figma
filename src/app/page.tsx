import React from "react";
import Image from "next/image";
import { CardHeroSection } from "./components";

import CarList from "./components/CarList";
import {cars} from './constants/index'
import PopularCar from "./components/PopularCar";


const Home = () => {


  return (
    <main>
      <CardHeroSection />
      <PopularCar cars={cars} />
      <CarList cars={cars} />
    </main>
  );
};

export default Home;
