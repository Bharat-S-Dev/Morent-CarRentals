import car11 from "../assets/background/car11.png";
import car12 from "../assets/background/car12.png";
import car1 from "../assets/cars/Car (1).png";
import car2 from "../assets/cars/Car (2).png";
import car3 from "../assets/cars/Car (3).png";
import car4 from "../assets/cars/Car (4).png";
import car5 from "../assets/cars/Car (5).png";
import car6 from "../assets/cars/Car (6).png";
import car7 from "../assets/cars/Car (7).png";
import car8 from "../assets/cars/Car (8).png";
import car9 from "../assets/cars/Car (9).png";

import View1 from "../assets/carview/carview1.png";
import View2 from "../assets/carview/carview2.png";
import View3 from "../assets/carview/carview3.png";

export const carsData = [
  {
    id: "koenigsegg-sport",
    name: "Koenigsegg",
    type: "Sport",
    image: car11,
    images: [View1, View2, View3],
    fuel: "90L",
    transmission: "Manual",
    capacity: 2,
    price: 99.0,
    originalPrice: null,
    rating: 5.0,
    reviewsCount: 128,
    isPopular: true,
    description: "Experience unparalleled speed, high-end aerodynamics, and hypercar dynamic handling with the ultimate performance track beast, Koenigsegg.",
    reviews: [
      {
        id: "rev-1",
        userName: "Alex Stanton",
        userTitle: "CEO at Bukalapak",
        userAvatar: "https://i.pravatar.cc/150?img=33",
        date: "21 July 2022",
        rating: 5,
        content: "We are very happy with the service from the MORENT app. Morent has a low price and also a large variety of cars with good conditions. Very recommended!"
      },
      {
        id: "rev-2",
        userName: "Skylar Dias",
        userTitle: "HR at Tokopedia",
        userAvatar: "https://i.pravatar.cc/150?img=47",
        date: "20 July 2022",
        rating: 4,
        content: "Many premium cars are available. The manual transmission Koenigsegg was in pristine condition. Easy pickup and drops. Fully recommended!"
      }
    ]
  },
  {
    id: "nissan-gtr-sport",
    name: "Nissan GT-R",
    type: "Sport",
    image: car12,
    images: [View1, View2, View3],
    fuel: "80L",
    transmission: "Manual",
    capacity: 2,
    price: 80.0,
    originalPrice: 100.0,
    rating: 4.8,
    reviewsCount: 245,
    isPopular: true,
    description: "The Nissan GT-R features a twin-turbocharged V6 engine, advanced all-wheel-drive system, and aggressive styling that turns heads everywhere.",
    reviews: [
      {
        id: "rev-3",
        userName: "Michael Jordan",
        userTitle: "Software Developer",
        userAvatar: "https://i.pravatar.cc/150?img=12",
        date: "15 August 2022",
        rating: 5,
        content: "Absolute beast of a car. Picked it up clean, full tank of fuel. The rental process was completely seamless and fast. Will rent again!"
      }
    ]
  },
  {
    id: "rolls-royce-sedan",
    name: "Rolls - Royce",
    type: "Sedan",
    image: car1,
    images: [car3, car5, car6],
    fuel: "70L",
    transmission: "Automatic",
    capacity: 4,
    price: 96.0,
    originalPrice: null,
    rating: 5.0,
    reviewsCount: 92,
    isPopular: true,
    description: "Rolls-Royce stands for ultimate luxury, quiet comfort, and prestigious presence. Perfect for corporate travel or making a grand statement.",
    reviews: [
      {
        id: "rev-4",
        userName: "Victoria Adams",
        userTitle: "Fashion Designer",
        userAvatar: "https://i.pravatar.cc/150?img=49",
        date: "12 May 2022",
        rating: 5,
        content: "Luxury at its absolute finest. Riding in this Rolls-Royce was an unforgettable experience. Superb service from Morent."
      }
    ]
  },
  {
    id: "nissan-gtr-sport-2",
    name: "Nissan GT-R",
    type: "Sport",
    image: car2,
    images: [car4, car2, car1],
    fuel: "80L",
    transmission: "Manual",
    capacity: 2,
    price: 80.0,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 154,
    isPopular: true,
    description: "Another legendary GT-R sports model in active service. Built for high performance on highways, offering precise response and racing heritage.",
    reviews: []
  },
  {
    id: "all-new-rush-suv",
    name: "All New Rush",
    type: "SUV",
    image: car3,
    images: [View1, View2, View3],
    fuel: "70L",
    transmission: "Manual",
    capacity: 6,
    price: 72.0,
    originalPrice: 80.0,
    rating: 4.4,
    reviewsCount: 88,
    isPopular: false,
    description: "The Toyota Rush is a compact SUV designed to accommodate family trips, group travel, and rugged routes. Very spacious 6-seater interior.",
    reviews: [
      {
        id: "rev-5",
        userName: "Donald Trump",
        userTitle: "Business Advisor",
        userAvatar: "https://i.pravatar.cc/150?img=60",
        date: "10 June 2022",
        rating: 4,
        content: "Great spacious car for a family road trip. The manual gearbox was easy to handle, and gas mileage was surprisingly good for a 6-seater SUV."
      }
    ]
  },
  {
    id: "cr-v-suv-1",
    name: "CR - V",
    type: "SUV",
    image: car4,
    images: [car4, car8, car5],
    fuel: "80L",
    transmission: "Automatic",
    capacity: 6,
    price: 80.0,
    originalPrice: null,
    rating: 4.6,
    reviewsCount: 112,
    isPopular: false,
    description: "A comfortable, premium crossover SUV offering advanced safety features, smooth automatic ride, and plenty of space for passengers and luggage.",
    reviews: []
  },
  {
    id: "all-new-terios-suv",
    name: "All New Terios",
    type: "SUV",
    image: car5,
    images: [car5, car7, car6],
    fuel: "90L",
    transmission: "Manual",
    capacity: 6,
    price: 74.0,
    originalPrice: null,
    rating: 4.5,
    reviewsCount: 76,
    isPopular: false,
    description: "Ready for any adventure, the All New Terios provides excellent ground clearance, a durable manual transmission, and high capacity fuel tank.",
    reviews: []
  },
  {
    id: "cr-v-suv-2",
    name: "CR - V",
    type: "SUV",
    image: car6,
    images: [car6, car8, car5],
    fuel: "80L",
    transmission: "Manual",
    capacity: 6,
    price: 80.0,
    originalPrice: null,
    rating: 4.5,
    reviewsCount: 64,
    isPopular: false,
    description: "Manual configuration of the popular CR-V model. Delivers direct engine control, reliable handling, and comfortable seating across three rows.",
    reviews: []
  },
  {
    id: "mg-zx-exclusive-hatchback",
    name: "MG ZX Exclusive",
    type: "Hatchback",
    image: car7,
    images: [car7, car9, car5],
    fuel: "70L",
    transmission: "Manual",
    capacity: 4,
    price: 76.0,
    originalPrice: 80.0,
    rating: 4.7,
    reviewsCount: 104,
    isPopular: false,
    description: "The MG ZX Exclusive is a sporty, compact hatchback that is easy to park and navigate through tight city streets. Equipped with modern infotainment.",
    reviews: [
      {
        id: "rev-6",
        userName: "Sophia Loren",
        userTitle: "Travel Vlogger",
        userAvatar: "https://i.pravatar.cc/150?img=43",
        date: "05 April 2022",
        rating: 5,
        content: "Super cute hatchback. Very easy to drive around the city, clean and premium feel inside. Perfect choice for my weekend trip!"
      }
    ]
  },
  {
    id: "mg-zs-suv",
    name: "NewMG ZS",
    type: "SUV",
    image: car8,
    images: [car8, car4, car5],
    fuel: "80L",
    transmission: "Manual",
    capacity: 6,
    price: 80.0,
    rating: 4.5,
    reviewsCount: 104,
    isPopular: false,
    description: "The New MG ZS is a sporty, family crossover SUV that provides incredible road presence, spacious seating, and smart driving tech.",
    reviews: [
      {
        id: "rev-7", // Fixed dynamic unique key ID
        userName: "Sophie Rana",
        userTitle: "Travel Vlogger",
        userAvatar: "https://i.pravatar.cc/150?img=43",
        date: "05 April 2022",
        rating: 5,
        content: "Super cute SUV. Very easy to drive around the city, clean and premium feel inside. Perfect choice for my weekend trip!"
      }
    ]
  },
  {
    id: "mg-neon-exclusive-hatchback",
    name: "MG Neon Exclusive",
    type: "Hatchback",
    image: car9,
    images: [car9, car2, car5],
    fuel: "70L",
    transmission: "Manual",
    capacity: 4,
    price: 76.0,
    originalPrice: 80.0,
    rating: 4.7,
    reviewsCount: 104,
    isPopular: false,
    description: "A bright, electric-vibe neon edition hatchback built for urban agility, packed with modern tech features and reliable highway stability.",
    reviews: [
      {
        id: "rev-8", // Fixed dynamic unique key ID
        userName: "Sophia Loren",
        userTitle: "Travel Vlogger",
        userAvatar: "https://i.pravatar.cc/150?img=43",
        date: "05 April 2022",
        rating: 5,
        content: "Super cute hatchback. Very easy to drive around the city, clean and premium feel inside. Perfect choice for my weekend trip!"
      }
    ]
  },
  {
    id: "mg-xp-suv",
    name: "NewMG XP",
    type: "SUV",
    image: car5,
    images: [car5, car3, car6],
    fuel: "80L",
    transmission: "Manual",
    capacity: 6,
    price: 80.0,
    rating: 4.5,
    reviewsCount: 104,
    isPopular: false,
    description: "The New MG XP Edition is a muscular, high-capacity SUV engineered for rugged terrains, extra cabin space, and robust engine performance.",
    reviews: [
      {
        id: "rev-9", // Fixed dynamic unique key ID
        userName: "Sophie Rana",
        userTitle: "Travel Vlogger",
        userAvatar: "https://i.pravatar.cc/150?img=43",
        date: "05 April 2022",
        rating: 5,
        content: "Super cute SUV. Very easy to drive around the city, clean and premium feel inside. Perfect choice for my weekend trip!"
      }
    ]
  },
  {
    id: "bmw-zs-sport",
    name: "BMW ZS",
    type: "Sport", // Fixed case-sensitivity bug: "sport" changed to "Sport"
    image: car6,
    images: [car6, car2, car8],
    fuel: "80L",
    transmission: "Manual",
    capacity: 6,
    price: 80.0,
    rating: 4.5,
    reviewsCount: 104,
    isPopular: false,
    description: "The premium BMW ZS combines sports aerodynamics with iconic luxury. Features high-responsiveness electronic gear setups and pristine leather interior.",
    reviews: [
      {
        id: "rev-10", // Fixed dynamic unique key ID
        userName: "Sophie Rana",
        userTitle: "Travel Vlogger",
        userAvatar: "https://i.pravatar.cc/150?img=43",
        date: "05 April 2022",
        rating: 5,
        content: "Super cute SUV. Very easy to drive around the city, clean and premium feel inside. Perfect choice for my weekend trip!"
      }
    ]
  },
  {
    id: "maruti-brezza-sport",
    name: "Brezza lx",
    type: "Sport",
    image: car9,
    images: [car9, car3, car5],
    fuel: "80L",
    transmission: "Manual",
    capacity: 4,
    price: 80.0,
    rating: 4.5,
    reviewsCount: 104,
    isPopular: false,
    description: "The new Brezza lx Sport Edition offers robust city drivability, high fuel efficiency, and a reliable engine setup tailored for versatile Indian roads.",
    reviews: [
      {
        id: "rev-11", // Fixed dynamic unique key ID
        userName: "Sonia Rana",
        userTitle: "Travel Vlogger",
        userAvatar: "https://i.pravatar.cc/150?img=43",
        date: "05 April 2022",
        rating: 5,
        content: "Super cute Sport car. Very easy to drive around the city, clean and premium feel inside. Perfect choice for my weekend trip!"
      }
    ]
  }
];
