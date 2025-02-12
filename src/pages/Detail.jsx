import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import UserHome from "./UserHome"

// Import all image arrays (replace with your actual imports)
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
  Ring9,
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

const getRandomPrice = () =>
  Math.floor(Math.random() * (20000 - 1999 + 1)) + 1999;

const Detailed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialProduct = location.state?.product;
  const [mainProduct, setMainProduct] = useState(initialProduct);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (initialProduct) {
      // ... (useEffect logic remains the same)
      let relatedImages;
      let numRelatedProducts = 10;

      switch (initialProduct.title) {
        case "Rings":
          relatedImages = RingImages;
          break;
        case "Bangles":
          relatedImages = BangleImages;
          break;
        case "Necklaces":
          relatedImages = NecklaceImages;
          break;
        case "Earrings":
          relatedImages = EarringImages;
          break;
        default:
          relatedImages = [];
      }

      const getRandomRelatedImages = (images, num) => {
        const shuffled = [...images].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
      };

      const randomRelatedProducts = getRandomRelatedImages(
        relatedImages,
        numRelatedProducts
      );

      const filteredRelatedImages = randomRelatedProducts.filter(
        (img) => img !== initialProduct.src
      );
      setRelatedProducts(filteredRelatedImages);
    }
  }, [initialProduct]);

  if (!initialProduct) {
    return <div>Product details not found.</div>;
  }

  const getDeliveryDates = () => {
    const dates = [];
    for (let i = 7; i <= 7; i++) {
      dates.push(moment().add(i, "days").format("MMMM DD, YYYY")); // Corrected date format
    }
    return dates;
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", mainProduct);
    // Here you would typically add logic to update a cart state,
    // perhaps using context, Redux, or a similar state management solution.
  };

  const handleAddToWishlist = () => {
    console.log("Added to wishlist:", mainProduct);
    // Similar to handleAddToCart, you would update a wishlist state here.
  };

  const handleRelatedProductClick = (relatedProduct) => {
    setMainProduct({
      src: relatedProduct,
      title: initialProduct.title,
      price: getRandomPrice(),
    });
  };

  return (
    <div>
    <div className="fixed top-0 left-0 w-full z-50">
            <UserHome />
          </div>
    <div className="h-max relative top-34 bg-white p-6 flex ">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="cursor-pointer p-1 rounded-[50%] shadow shadow-amber-500 text-4xl h-10 w-10 flex justify-center hover:bg-amber-500 hover:transform-fill absolute top-5 right-10"
      >
        &times;
      </div>

      <div className="w-1/2 pr-6 flex flex-col items-center justify-center">
        {/* ... (Image and icon display remain the same) */}
        <img
          src={mainProduct.src}
          alt={mainProduct.title}
          className="h-130 rounded-2xl hover:shadow-amber-800 shadow-orange-300 shadow-2xl  mb-4"
        />
      </div>
      <div className="w-1/2 pl-6 flex flex-col justify-center">
        {/* ... (Product details display remain the same) */}
        <h2 className="text-2xl font-bold mb-2">{mainProduct.title}</h2>
        <p className="text-gray-700 mb-4">
          Sample image detailed description. You can add more details here.
        </p>
        <p className="text-lg mb-2">Price: ₹{mainProduct.price}/-</p>

        <div className="mb-4">
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Add to Cart
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 font-bold">Expected Delivery:</p>
          <ul>
            {getDeliveryDates().map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Related Products</h3>
          <div className="flex flex-wrap gap-2 ">
            {relatedProducts && relatedProducts.length > 0 ? (
              relatedProducts.map((relatedImage, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={relatedImage}
                    alt="Related Product"
                    className="w-35 h-35 rounded-lg cursor-pointer"
                    onClick={() => handleRelatedProductClick(relatedImage)}
                  />
                  <p className="text-lg mt-1">Price: ₹{getRandomPrice()}/-</p>
                </div>
              ))
            ) : (
              <p>No related products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Detailed;
