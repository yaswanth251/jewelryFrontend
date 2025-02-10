import React from "react";

import { FaHeart, FaShoppingCart } from "react-icons/fa"; // Import icons

import Bangle17 from "../Images/products/Bangles/image317.png";
import Bangle18 from "../Images/products/Bangles/image318.png";
import Bangle19 from "../Images/products/Bangles/image319.png";
import Bangle20 from "../Images/products/Bangles/image320.png";
import Bangle21 from "../Images/products/Bangles/image321.png";
import Bangle22 from "../Images/products/Bangles/image322.png";
import Bangle23 from "../Images/products/Bangles/image323.png";
import Bangle24 from "../Images/products/Bangles/image324.png";
// import Bangle25 from "../Images/products/Bangles/image325.png";
// import Bangle26 from "../Images/products/Bangles/image326.png";
// import Bangle27 from "../Images/products/Bangles/image327.png";
// import Bangle28 from "../Images/products/Bangles/image328.png";
// import Bangle29 from "../Images/products/Bangles/image329.png";
// import Bangle30 from "../Images/products/Bangles/image330.png";
// import Bangle31 from "../Images/products/Bangles/image331.png";

import Necklace1 from "../Images/products/Necklace/image1.png";
import Necklace2 from "../Images/products/Necklace/image2.png";
import Necklace3 from "../Images/products/Necklace/image3.png";
import Necklace4 from "../Images/products/Necklace/image4.png";
import Necklace5 from "../Images/products/Necklace/image5.png";
import Necklace6 from "../Images/products/Necklace/image6.png";
import Necklace7 from "../Images/products/Necklace/image7.png";
import Necklace8 from "../Images/products/Necklace/image8.png";
// import Necklace9 from "../Images/products/Necklace/image9.png";
// import Necklace10 from "../Images/products/Necklace/image10.png";
// import Necklace11 from "../Images/products/Necklace/image11.png";
// import Necklace12 from "../Images/products/Necklace/image12.png";
// import Necklace13 from "../Images/products/Necklace/image13.png";
// import Necklace14 from "../Images/products/Necklace/image14.png";
// import Necklace15 from "../Images/products/Necklace/image15.png";

import Ring1 from "../Images/products/Ring/image1.jpg";
import Ring2 from "../Images/products/Ring/image2.jpg";
import Ring3 from "../Images/products/Ring/image3.jpg";
import Ring4 from "../Images/products/Ring/image4.jpg";
import Ring5 from "../Images/products/Ring/image5.jpg";
import Ring6 from "../Images/products/Ring/image6.jpg";
import Ring7 from "../Images/products/Ring/image7.jpg";
import Ring8 from "../Images/products/Ring/image8.jpg";
import Ring9 from "../Images/products/Ring/image9.jpg";
// import Ring10 from "../Images/products/Ring/image10.jpg";
// import Ring11 from "../Images/products/Ring/image11.jpg";
// import Ring12 from "../Images/products/Ring/image12.jpg";
// import Ring13 from "../Images/products/Ring/image13.jpg";
// import Ring14 from "../Images/products/Ring/image14.jpg";
// import Ring15 from "../Images/products/Ring/image15.jpg";

import Earring1 from "../Images/products/Earrings/image1.png";
import Earring2 from "../Images/products/Earrings/image2.png";
import Earring3 from "../Images/products/Earrings/image3.png";
import Earring4 from "../Images/products/Earrings/image4.png";
import Earring5 from "../Images/products/Earrings/image5.png";
import Earring6 from "../Images/products/Earrings/image6.png";
import Earring7 from "../Images/products/Earrings/image7.png";
import Earring8 from "../Images/products/Earrings/image8.png";
// import Earring9 from "../Images/products/Earrings/image9.png";
// import Earring10 from "../Images/products/Earrings/image10.png";
// import Earring11 from "../Images/products/Earrings/image11.png";
// import Earring12 from "../Images/products/Earrings/image12.png";
// import Earring13 from "../Images/products/Earrings/image13.png";
// import Earring14 from "../Images/products/Earrings/image14.png";
// import Earring15 from "../Images/products/Earrings/image15.png";

// Generate image paths dynamically
const BangleImages = [
  Bangle17,
  Bangle18,
  Bangle19,
  Bangle20,
  Bangle21,
  Bangle22,
  Bangle23,
  Bangle24,
  // Bangle25,
  // Bangle26,
  // Bangle27,
  // Bangle28,
  // Bangle29,
  // Bangle30,
  // Bangle31,
];

const NecklaceImages = [
  Necklace1,
  Necklace2,
  Necklace3,
  Necklace4,
  Necklace5,
  Necklace6,
  Necklace7,
  Necklace8,
  // Necklace9,
  // Necklace10,
  // Necklace11,
  // Necklace12,
  // Necklace13,
  // Necklace14,
  // Necklace15,
];

const RingImages = [
  Ring1,
  Ring2,
  Ring3,
  Ring4,
  Ring5,
  Ring6,
  Ring7,
  Ring8,
  // Ring9,
  // Ring10,
  // Ring11,
  // Ring12,
  // Ring13,
  // Ring14,
  // Ring15,
];

const EarringImages = [
  Earring1,
  Earring2,
  Earring3,
  Earring4,
  Earring5,
  Earring6,
  Earring7,
  Earring8,
  // Earring9,
  // Earring10,
  // Earring11,
  // Earring12,
  // Earring13,
  // Earring14,
  // Earring15,
];

const getRandomPrice = () =>
  Math.floor(Math.random() * (20000 - 1999 + 1)) + 1999;
function Catalog() {
  return (
    <div className="h-screen relative top-5">
      <h1 className="text-3xl p-2 text-orange-800 flex justify-center ">
      Exclusive Picks Just for You
      </h1>
      <hr className="opacity-10"/>

      {/* Render Categories */}
      {[
        { title: "Rings", images: RingImages },
        { title: "Bangles", images: BangleImages },
        { title: "Necklaces", images: NecklaceImages },
        { title: "Earrings", images: EarringImages },
      ].map((category, index) => (
        <div key={index}>
          <h2 className="text-3xl p-5 w-[80%] relative left-[10%]  top-1 text-black flex justify-start">
            {category.title}
          </h2>
          <div className="flex relative justify-around p-1 gap-2 flex-wrap w-[80%] left-[10%]">
            {category.images.map((image, idx) => (
              <span
                key={idx}
                className="bg-white shadow-2xl p-5 flex flex-col rounded-[5px] justify-center items-center gap-2 relative"
              >
                <img
                  src={image}
                  alt={category.title}
                  className="w-[250px] h-[250px] rounded-[5px] shadow-2xl shadow-orange-300"
                />
                <h1>{category.title}</h1>
                <h1>₹{getRandomPrice()}/-</h1>

                {/* Like and Cart Icons */}
                <div className="flex justify-between w-full absolute bottom-2 px-4">
                  <FaHeart className="text-red-500 cursor-pointer text-lg" />
                  <FaShoppingCart className="text-green-500 cursor-pointer text-lg" />
                </div>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
