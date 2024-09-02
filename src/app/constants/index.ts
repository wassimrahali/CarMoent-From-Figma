import { CarProps } from "../types";

const heartIcons = ["/assets/Heart.svg", "/assets/UnLikedHeart.svg"];
const carImage = [
    "/assets/car3.png",
    "/assets/car5.png",
    "/assets/car6.png",
    "/assets/car7.png",
    "/assets/car8.png",
    "/assets/car9.png"
  ];
  
function getRandomHeartIcon() {
  return heartIcons[Math.floor(Math.random() * heartIcons.length)];
}

function getRandomCarImage() {
    return carImage[Math.floor(Math.random() * carImage.length)];
  }
  
  export const cars: CarProps[] = [
    {
      id: 1,
      make: "Koenigsegg",
      model: "Agera",
      year: 2020,
      city_mpg: 15,
      highway_mpg: 22,
      drive: "AWD",
      transmission: "Manual",
      combination_mpg: 18,
      cylinders: 8,
      displacement: "5.0L",
      fuel_type: "Gasoline",
      price: '99',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      class: "Sport",
      type: "Sport",
      seats: 2,
      capacity: "2 Person"
    },
    {
      id: 6,
      make: "Audi",
      model: "R8",
      year: 2021,
      city_mpg: 14,
      highway_mpg: 23,
      drive: "AWD",
      transmission: "Automatic",
      combination_mpg: 18,
      cylinders: 10,
      displacement: "5.2L",
      fuel_type: "Gasoline",
      price: '200',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      class: "SUV",
      type: "SUV",
      seats: 4,
      capacity: "4 Person"
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model S",
      year: 2022,
      city_mpg: 120,
      highway_mpg: 112,
      drive: "AWD",
      transmission: "Automatic",
      combination_mpg: 116,
      cylinders: 0,
      displacement: "Electric",
      fuel_type: "Electric",
      price: '150',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      class: "Electric",
      type: "Electric",
      seats: 5,
      capacity: "5 Person"
    },
    {
      id: 4,
      make: "Lamborghini",
      model: "Huracan",
      year: 2021,
      city_mpg: 13,
      highway_mpg: 18,
      drive: "AWD",
      transmission: "Automatic",
      combination_mpg: 15,
      cylinders: 10,
      displacement: "5.2L",
      fuel_type: "Gasoline",
      price: '250',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      class: "MPV",
      type: "MPV",
      seats: 2,
      capacity: "2 Person"
    },
    {
      id: 5,
      make: "Ferrari",
      model: "488",
      year: 2020,
      city_mpg: 15,
      highway_mpg: 22,
      drive: "RWD",
      transmission: "Manual",
      combination_mpg: 18,
      cylinders: 8,
      displacement: "3.9L",
      fuel_type: "Gasoline",
      price: '220',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      type: "Hatchback",
      class: "Hatchback",
      seats: 4,
      capacity: "4 Person"
    },
    {
      id: 7,
      make: "BMW",
      model: "M4",
      year: 2021,
      city_mpg: 16,
      highway_mpg: 23,
      drive: "RWD",
      transmission: "Automatic",
      combination_mpg: 19,
      cylinders: 6,
      displacement: "3.0L",
      fuel_type: "Gasoline",
      price: '180',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      type: "Coupe",
      class: "Luxury",
      seats: 4,
      capacity: "4 Person"
    },
    {
      id: 9,
      make: "McLaren",
      model: "720S",
      year: 2021,
      city_mpg: 15,
      highway_mpg: 22,
      drive: "RWD",
      transmission: "Automatic",
      combination_mpg: 18,
      cylinders: 8,
      displacement: "4.0L",
      fuel_type: "Gasoline",
      price: '270',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      type: "Hatchback",
      class: "Hatchback",
      seats: 5,
      capacity: "5 Person"
    },
    {
      id: 8,
      make: "Mercedes-Benz",
      model: "AMG GT",
      year: 2022,
      city_mpg: 18,
      highway_mpg: 24,
      drive: "RWD",
      transmission: "Automatic",
      combination_mpg: 20,
      cylinders: 8,
      displacement: "4.0L",
      fuel_type: "Gasoline",
      price: '210',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      type: "Coupe",
      class: "Luxury",
      seats: 8,
      capacity: "8 or More"
    },
    {
      id: 10,
      make: "Porsche",
      model: "911",
      year: 2023,
      city_mpg: 16,
      highway_mpg: 25,
      drive: "AWD",
      transmission: "Automatic",
      combination_mpg: 20,
      cylinders: 6,
      displacement: "3.8L",
      fuel_type: "Gasoline",
      price: '230',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      type: "Convertible",
      class: "Convertible",
      seats: 4,
      capacity: "4 Person"
    },
    {
      id: 11,
      make: "Aston Martin",
      model: "DB11",
      year: 2022,
      city_mpg: 14,
      highway_mpg: 21,
      drive: "RWD",
      transmission: "Automatic",
      combination_mpg: 17,
      cylinders: 8,
      displacement: "4.0L",
      fuel_type: "Gasoline",
      price: '270',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      type: "Coupe",
      class: "Luxury",
      seats: 4,
      capacity: "4 Person"
    },
    {
      id: 12,
      make: "Jaguar",
      model: "F-Type",
      year: 2021,
      city_mpg: 16,
      highway_mpg: 24,
      drive: "AWD",
      transmission: "Automatic",
      combination_mpg: 20,
      cylinders: 6,
      displacement: "3.0L",
      fuel_type: "Gasoline",
      price: '250',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      type: "Coupe",
      class: "Luxury",
      seats: 2,
      capacity: "2 Person"
    },
    {
      id: 13,
      make: "Porsche",
      model: "Cayenne",
      year: 2023,
      city_mpg: 17,
      highway_mpg: 23,
      drive: "AWD",
      transmission: "Automatic",
      combination_mpg: 20,
      cylinders: 8,
      displacement: "4.8L",
      fuel_type: "Gasoline",
      price: '300',
      image: getRandomCarImage(),
      heart: getRandomHeartIcon(),
      type: "SUV",
      class: "Luxury",
      seats: 5,
      capacity: "5 Person"
    },
   
  
  ];
  

export const navigation = [
    { title: "Customers", path: "/cars" },
    { title: "Careers", path: "/cars" },
    { title: "Guides", path: "/cars" },
    { title: "Partners", path: "/cars" },
  ];

export const footerNavs = [
    {
        label: "Company",
        items: [
            {
                href: '#',
                name: 'Partners'
            },
            {
                href: '#',
                name: 'Blog'
            },
            {
                href: '#',
                name: 'Team'
            },
            {
                href: '#',
                name: 'Careers'
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                href: '#',
                name: 'contact'
            },
            {
                href: '#',
                name: 'Support'
            },
            {
                href: '#',
                name: 'Docs'
            },
            {
                href: '#',
                name: 'Pricing'
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                href: '#',
                name: 'Terms'
            },
            {
                href: '#',
                name: 'License'
            },
            {
                href: '#',
                name: 'Privacy'
            },
            {
                href: '#',
                name: 'About US'
            },
        ]
    }
]