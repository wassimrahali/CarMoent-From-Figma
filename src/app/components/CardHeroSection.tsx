import React from "react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
import Image from "next/image";
import BG from "../../../public/assets/BG.png";
import BGL from "../../../public/assets/BGL.png";
import WhiteCar from "../../../public/assets/whiteCarHero.png";
import GrayCar from "../../../public/assets/grayCarHero.png";


const CardHeroSection = () => {
  return (
    <div className={plus_Jakarta_Sans.className}>
      <div className="mx-auto text-left">
        <div className="flex flex-col m-5 space-y-5 md:space-y-0 md:space-x-5 md:flex-row md:m-20 ">
          <div className="md:w-1/2 bg-blue-400 rounded-md">
            <div className="relative">
              <Image src={BG} alt="BG Hero" className="object-cover" />
              <div className="absolute inset-0 ">
                <div className="">
                  <div className="w-72 m-10  text-white font-semibold text-[32px]">
                    <h4>The Best Platform for Car Rental</h4>
                  </div>
                  <div className="m-10 space-y-6">
                    <p className="w-72 text-white text-[16px] font-medium">
                      Ease of doing a car rental safely and reliably. Of course
                      at a low price.
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="bg-blue-700 text-white p-3 text-[16px] font-semibold rounded-sm">
                        Rental Car
                      </button>
                      <Image
                        src={WhiteCar}
                        alt="BG Hero"
                        width={350}
                        className="ml-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-blue-700 rounded-md">
            <div className="relative">
              <Image
                src={BGL}
                alt="BG Hero"
                className="h-auto w-full object-cover "
              />
              <div className="absolute inset-0">
                <div className="w-72 m-10  text-white font-semibold text-[32px]">
                  <h4>Easy way to rent a car at a low price</h4>
                </div>
                <div className="m-10 space-y-6">
                  <p className="w-72 text-white text-[16px] font-medium">
                    Providing cheap car rental services and safe and comfortable
                    facilities.
                  </p>
                  <div className="flex items-center justify-between">
                      <button className="bg-blue-400 text-white p-3 text-[16px] font-semibold rounded-sm">
                        Rental Car
                      </button>
                      <Image
                        src={GrayCar}
                        alt="BG Hero"
                        width={300}
                        className="ml-6"
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeroSection;
