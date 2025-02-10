import React from "react";
import Necklace from "../Images/products/Necklace/image117.png";
import Necklacelong from "../Images/products/Necklace/image4783.png";
import Bangle from "../Images/products/Bangles/image3899.png";
import RingDiamong from "../Images/products/Ring/image13.jpg";
import Earring from "../Images/products/Earrings/image183.png";

import Necklace1 from "../Images/products/Necklace/image217.png";
import Necklacelong1 from "../Images/products/Necklace/image223.png";
import Bangle1 from "../Images/products/Bangles/image399.png";
import RingDiamong1 from "../Images/products/Ring/image133.jpg";
import Earring1 from "../Images/products/Earrings/image730.png";


const categories = [
  {
    name: "Necklace Set",
    image: Necklace,
  },

  {
    name: "Diamond Jewellery",
    image: RingDiamong,
  },
  {
    name: "Bangles",
    image: Bangle,
  },
  {
    name: "Earrings",
    image: Earring,
  },
  {
    name: "Long Necklace",
    image: Necklacelong,
  },
];

const CategoryCard = ({ name, image }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg overflow-hidden w-[200px]">
        <img src={image} alt={name} className="w-full h-[180px] object-cover shadow shadow-orange-300 shadow-2xl p-1" />
        <div className="w-full bg-gradient-to-b from-transparent to-pink-100 p-3 text-center">
          <p className="text-lg font-semibold text-gray-700">{name}</p>
        </div>
      </div>
    </div>
  );
};

const categorie = [
  {
    name: "Fashion Necklace",
    image: Necklace1,
  },

  {
    name: "Cuff Bangles",
    image: Bangle1,
  },
  {
    name: "Gold Ring",
    image: RingDiamong1,
  },
  {
    name: "Rope Necklace",
    image: Necklacelong1,
  },
  {
    name: "Jhumkas",
    image: Earring1,
  },
];

const CategoryCar = ({ name, image }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg overflow-hidden w-[200px]">
        <img src={image} alt={name} className="w-full h-[180px] object-cover" />
        <div className="w-full bg-gradient-to-b from-transparent to-pink-100 p-3 text-center">
          <p className="text-lg font-semibold text-gray-700">{name}</p>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <>
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-[#76212A] mb-6">
          Handpicked for the Bride
        </h2>
        <div className="text-center py-10">
          <div className="flex justify-center gap-6">
            {categorie.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
