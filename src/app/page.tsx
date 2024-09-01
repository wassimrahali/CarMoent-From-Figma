import React from "react";
import { CardHeroSection } from "./components";

import CarList from "./components/CarList";
import {cars} from './constants/index'
import PopularCar from "./components/PopularCar";
import FormFilter from "./components/FormFilter";


const Home = () => {


  return (
    <main>
      <CardHeroSection />
      <FormFilter />
      <PopularCar cars={cars} />
      <CarList cars={cars} />
    </main>
  );
};

export default Home;
