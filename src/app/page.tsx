'use client '
import React from "react";
import Image from "next/image";
import { CardHeroSection } from "./components";

import CarList from "./components/CarList";
import {cars} from './constants/index'


const Home = () => {


  return (
    <main>
      <CardHeroSection />
      <CarList cars={cars} />
    </main>
  );
};

export default Home;
