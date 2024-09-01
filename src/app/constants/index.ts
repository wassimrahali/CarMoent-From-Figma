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
        class: "Sport",
        city_mpg: 15,
        highway_mpg: 22,
        drive: "AWD",
        transmission: "Manual",
        combination_mpg: 18,
        cylinders: 8,
        displacement: "5.0L",
        fuel_type: "Gasoline",
        seats: 2,
        price: '99',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 2,
        make: "Porsche",
        model: "911",
        year: 2021,
        class: "Luxury",
        city_mpg: 20,
        highway_mpg: 29,
        drive: "RWD",
        transmission: "Automatic",
        combination_mpg: 24,
        cylinders: 6,
        displacement: "3.0L",
        fuel_type: "Gasoline",
        seats: 4,
        price: '120',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 3,
        make: "Tesla",
        model: "Model S",
        year: 2022,
        class: "Electric",
        city_mpg: 120,
        highway_mpg: 112,
        drive: "AWD",
        transmission: "Automatic",
        combination_mpg: 116,
        cylinders: 0,
        displacement: "Electric",
        fuel_type: "Electric",
        seats: 5,
        price: '150',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 4,
        make: "Lamborghini",
        model: "Huracan",
        year: 2021,
        class: "Sport",
        city_mpg: 13,
        highway_mpg: 18,
        drive: "AWD",
        transmission: "Automatic",
        combination_mpg: 15,
        cylinders: 10,
        displacement: "5.2L",
        fuel_type: "Gasoline",
        seats: 2,
        price: '250',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 5,
        make: "Ferrari",
        model: "488",
        year: 2020,
        class: "Sport",
        city_mpg: 15,
        highway_mpg: 22,
        drive: "RWD",
        transmission: "Manual",
        combination_mpg: 18,
        cylinders: 8,
        displacement: "3.9L",
        fuel_type: "Gasoline",
        seats: 2,
        price: '220',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 6,
        make: "Audi",
        model: "R8",
        year: 2021,
        class: "Sport",
        city_mpg: 14,
        highway_mpg: 23,
        drive: "AWD",
        transmission: "Automatic",
        combination_mpg: 18,
        cylinders: 10,
        displacement: "5.2L",
        fuel_type: "Gasoline",
        seats: 2,
        price: '200',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 7,
        make: "BMW",
        model: "M4",
        year: 2021,
        class: "Luxury",
        city_mpg: 16,
        highway_mpg: 23,
        drive: "RWD",
        transmission: "Automatic",
        combination_mpg: 19,
        cylinders: 6,
        displacement: "3.0L",
        fuel_type: "Gasoline",
        seats: 4,
        price: '180',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 8,
        make: "Mercedes-Benz",
        model: "AMG GT",
        year: 2022,
        class: "Luxury",
        city_mpg: 18,
        highway_mpg: 24,
        drive: "RWD",
        transmission: "Automatic",
        combination_mpg: 20,
        cylinders: 8,
        displacement: "4.0L",
        fuel_type: "Gasoline",
        seats: 2,
        price: '210',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 9,
        make: "McLaren",
        model: "720S",
        year: 2021,
        class: "Sport",
        city_mpg: 15,
        highway_mpg: 22,
        drive: "RWD",
        transmission: "Automatic",
        combination_mpg: 18,
        cylinders: 8,
        displacement: "4.0L",
        fuel_type: "Gasoline",
        seats: 2,
        price: '270',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
    {
        id: 10,
        make: "Aston Martin",
        model: "Vantage",
        year: 2020,
        class: "Luxury",
        city_mpg: 18,
        highway_mpg: 24,
        drive: "RWD",
        transmission: "Manual",
        combination_mpg: 20,
        cylinders: 8,
        displacement: "4.0L",
        fuel_type: "Gasoline",
        seats: 2,
        price: '230',
        image: getRandomCarImage(),
        heart: getRandomHeartIcon()
    },
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