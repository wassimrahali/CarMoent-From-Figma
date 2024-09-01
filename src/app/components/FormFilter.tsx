import Switch from "../../../public/assets/Switch.svg";
import React from "react";
import Image from "next/image";
const FormFilter = () => {
  return (
    <div className="flex  justify-center items-center max-h-screen space-x-10">
      <div className="bg-white flex-col md:flex-row space-x-4 items-center rounded-md">
        <div className="ml-10 mt-5">
          <label className="font-semibold text-[20px] flex items-center space-x-2">
            <input type="radio" name="pickup" value="pickup" checked />
            <span>Pick-Up</span>
          </label>
        </div>

        <div className="max-w-full flex flex-col md:flex-row items-center justify-between p-5 ">
          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-semibold text-[20px]">Locations</h2>
            <form>
              <label
                className="text-[12px] text-gray-600 font-medium"
                htmlFor="location"
              >
                Select your city
              </label>
              <select id="location" name="location" />
            </form>
          </div>

          <div className="hidden md:block border-l-2 border-gray-300 h-24 mx-4"></div>

          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-semibold text-[20px]">Date</h2>
            <form>
              <label
                className="text-[12px] text-gray-600 font-medium"
                htmlFor="date"
              >
                Select your date
              </label>
              <select id="date" name="date" />
            </form>
          </div>

          <div className="hidden md:block border-l-2 border-gray-300 h-24 mx-4"></div>

          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-semibold text-[20px]">Time</h2>
            <form>
              <label
                className="text-[12px] text-gray-600 font-medium"
                htmlFor="time"
              >
                Select your time
              </label>
              <select id="time" name="time" />
            </form>
          </div>
        </div>

        {/* Optionally add more sections here if needed */}
      </div>
      <Image className="cursor-pointer" src={Switch} alt="switch" />
      <div className="bg-white flex-col md:flex-row space-x-4 items-center rounded-md">
        <div className="ml-10 mt-5">
          <label className="font-semibold text-[20px] flex items-center space-x-2">
            <input type="radio" name="dropup" value="dropup" checked />
            <span>Drop-Off</span>
          </label>
        </div>

        <div className="max-w-full flex flex-col md:flex-row items-center justify-between p-5 ">
          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-semibold text-[20px]">Locations</h2>
            <form>
              <label
                className="text-[12px] text-gray-600 font-medium"
                htmlFor="location"
              >
                Select your city
              </label>
              <select id="location" name="location" />
            </form>
          </div>

          <div className="hidden md:block border-l-2 border-gray-300 h-24 mx-4"></div>

          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-semibold text-[20px]">Date</h2>
            <form>
              <label
                className="text-[12px] text-gray-600 font-medium"
                htmlFor="date"
              >
                Select your date
              </label>
              <select id="date" name="date" />
            </form>
          </div>

          <div className="hidden md:block border-l-2 border-gray-300 h-24 mx-4"></div>

          <div className="flex flex-col items-center space-y-3">
            <h2 className="font-semibold text-[20px]">Time</h2>
            <form>
              <label
                className="text-[12px] text-gray-600 font-medium"
                htmlFor="time"
              >
                Select your time
              </label>
              <select id="time" name="time" />
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FormFilter;
