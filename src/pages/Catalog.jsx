import React from "react";
import moment from "moment"
import { FaHeart,FaShoppingCart } from "react-icons/fa";

import { useNavigate   } from "react-router-dom";

import Bangle17 from "../Images/products/Bangles/image317.png";
import Bangle18 from "../Images/products/Bangles/image318.png";
import Bangle19 from "../Images/products/Bangles/image319.png";
import Bangle20 from "../Images/products/Bangles/image320.png";
import Bangle21 from "../Images/products/Bangles/image321.png";
import Bangle22 from "../Images/products/Bangles/image322.png";
import Bangle23 from "../Images/products/Bangles/image323.png";
import Bangle24 from "../Images/products/Bangles/image324.png";

import Necklace1 from "../Images/products/Necklace/image1.png";
import Necklace2 from "../Images/products/Necklace/image2.png";
import Necklace3 from "../Images/products/Necklace/image3.png";
import Necklace4 from "../Images/products/Necklace/image4.png";
import Necklace5 from "../Images/products/Necklace/image5.png";
import Necklace6 from "../Images/products/Necklace/image6.png";
import Necklace7 from "../Images/products/Necklace/image7.png";
import Necklace8 from "../Images/products/Necklace/image8.png";

import Ring1 from "../Images/products/Ring/image1.jpg";
import Ring2 from "../Images/products/Ring/image2.jpg";
import Ring3 from "../Images/products/Ring/image3.jpg";
import Ring4 from "../Images/products/Ring/image4.jpg";
import Ring5 from "../Images/products/Ring/image5.jpg";
import Ring6 from "../Images/products/Ring/image6.jpg";
import Ring7 from "../Images/products/Ring/image7.jpg";
import Ring8 from "../Images/products/Ring/image8.jpg";
import Ring9 from "../Images/products/Ring/image9.jpg";

import Earring1 from "../Images/products/Earrings/image1.png";
import Earring2 from "../Images/products/Earrings/image2.png";
import Earring3 from "../Images/products/Earrings/image3.png";
import Earring4 from "../Images/products/Earrings/image4.png";
import Earring5 from "../Images/products/Earrings/image5.png";
import Earring6 from "../Images/products/Earrings/image6.png";
import Earring7 from "../Images/products/Earrings/image7.png";
import Earring8 from "../Images/products/Earrings/image8.png";
import { useState } from "react";
const BangleImages = [
  Bangle17,
  Bangle18,
  Bangle19,
  Bangle20,
  Bangle21,
  Bangle22,
  Bangle23,
  Bangle24,
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
];


const deliveryDate = moment().add(7, 'days').format('MMMM DD, YYYY'); // Calculate delivery date

const getRandomPrice = () => Math.floor(Math.random() * (20000 - 1999 + 1)) + 1999;

function Catalog() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
      { title: "Rings", images: RingImages },
      { title: "Bangles", images: BangleImages },
      { title: "Necklaces", images: NecklaceImages },
      { title: "Earrings", images: EarringImages },
  ]);

  const handleImageClick = (image, categoryTitle, price) => {
      navigate('/detailed', { state: { product: { src: image, title: categoryTitle, price } } });
  };

  return (
      <div className="h-screen relative top-5">
          {/* ... (Your heading and HR) */}

          {products.map((category, index) => ( // Correctly map over products
              <div key={index}>
                  <h2 className="text-3xl p-5 w-[80%] relative left-[10%] top-1 text-black flex justify-start">
                      {category.title}
                  </h2>
                  <div className="flex relative justify-around p-1 gap-2 flex-wrap w-[80%] left-[10%]">
                      {category.images.map((image, idx) => { // Correctly map over images
                          const price = getRandomPrice();
                          return (
                              <span
                                  key={idx}
                                  className="bg-white shadow-2xl p-5 flex flex-col rounded-[5px] justify-center items-center gap-2 relative cursor-pointer"
                                  onClick={() => handleImageClick(image, category.title, price)}
                              >
                                  <img
                                      src={image}
                                      alt={category.title}
                                      className="w-[250px] h-[250px] rounded-[5px] shadow-2xl shadow-orange-300"
                                  />
                                  <h1>{category.title}</h1>
                                  <h1>₹{price}/-</h1>
                                  <div className="flex justify-between w-full absolute bottom-2 px-4">
                                      <FaHeart className="text-red-500 cursor-pointer text-lg" />
                                      <FaShoppingCart className="text-green-500 cursor-pointer text-lg" />
                                  </div>
                              </span>
                          );
                      })}
                  </div>
              </div>
          ))}
      </div>
  );
}

export default Catalog;