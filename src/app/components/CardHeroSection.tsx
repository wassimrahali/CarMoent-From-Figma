import React from "react";
import Image from "next/image";
import BG from "../../../public/assets/BG.png";
import BGL from "../../../public/assets/BGL.png";
import WhiteCar from "../../../public/assets/whiteCarHero.png";
import GrayCar from "../../../public/assets/grayCarHero.png";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const CardHeroSection = () => {
  return (
    <div className={`${plus_Jakarta_Sans.className} mx-auto p-4 sm:p-8`}>
      <div className="grid gap-5 md:gap-8 md:grid-cols-2">
        <div className="relative bg-blue-400 rounded-md h-64 sm:h-80 lg:h-[350px]">
          <Image
            src={BG}
            alt="BG Hero"
            className="object-cover w-full h-full rounded-md"
            layout="fill"
            priority
          />
          <div className="absolute inset-0 mb-6 flex flex-col justify-between p-4 sm:p-6 lg:p-10">
            <div className="space-y-7 sm:space-y-8">
              <h4 className="text-white font-semibold text-[30px] sm:text-[24px] lg:text-[32px] max-w-xs">
                The Best Platform for Car Rental
              </h4>
              <p className="text-white text-[14px] sm:text-[16px] font-medium max-w-xs">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
            </div>
            <div className="flex items-center justify-between mt-5 sm:mt-10">
              <button className="bg-blue-700 text-white p-2 sm:p-3 text-[14px] sm:text-[16px] font-semibold rounded-md">
                Rental Car
              </button>
              <Image
                src={WhiteCar}
                alt="White Car"
                className="w-44 sm:w-64 md:w-44 lg:w-72"
              />
            </div>
          </div>
        </div>

        <div className="relative bg-blue-700 rounded-md h-64 sm:h-80 lg:h-[350px]">
          <Image
            src={BGL}
            alt="BG Hero"
            className="object-cover w-full h-full rounded-md"
            layout="fill"
            priority
          />
          <div className="absolute inset-0 mb-6 flex flex-col justify-between p-4 sm:p-6 lg:p-10">
            <div className="space-y-7 sm:space-y-8">
              <h4 className="text-white font-semibold text-[30px] sm:text-[24px] lg:text-[32px] max-w-xs">
                Easy way to rent a car at a low price
              </h4>
              <p className="text-white text-[14px] sm:text-[16px] font-medium max-w-xs">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
            </div>
            <div className="flex items-center justify-between mt-5 sm:mt-10">
              <button className="bg-blue-400 text-white p-2 sm:p-3 text-[14px] sm:text-[16px] font-semibold rounded-md">
                Rental Car
              </button>
              <Image
                src={GrayCar}
                alt="Gray Car"
                className="w-44 sm:w-56 md:w-44 lg:w-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeroSection;
