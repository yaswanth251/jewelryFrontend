import React, { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";

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
      dates.push(moment().add(i, "days").format("MMMM DD, YYYY"));
    }
    return dates;
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", mainProduct);
  };

  const handleAddToWishlist = () => {
    console.log("Added to wishlist:", mainProduct);
  };

  const handleRelatedProductClick = (relatedProduct) => {
    setMainProduct({
      src: relatedProduct,
      title: initialProduct.title,
      price: getRandomPrice(),
    });
  };

  return (
    <div className="h-screen relative top-5 bg-white p-6 flex">
      <div
      onClick={() => {
        navigate("./Merge"); // Ensure the correct route path
      }}
      className="cursor-pointer text-2xl"
    >
      &times;
    </div>

      <div className="w-1/2 pr-6 flex flex-col items-center justify-center">
        <img
          src={mainProduct.src}
          alt={mainProduct.title}
          className="max-w-full max-h-96 rounded-lg mb-4"
        />
        <div className="flex">
          <FaHeart
            onClick={handleAddToWishlist}
            className="text-red-500 cursor-pointer text-2xl mr-4"
          />
          <FaShoppingCart
            onClick={handleAddToCart}
            className="text-green-500 cursor-pointer text-2xl"
          />
        </div>
      </div>
      <div className="w-1/2 pl-6 flex flex-col">
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
          <div className="flex flex-wrap gap-2">
            {relatedProducts && relatedProducts.length > 0 ? (
              relatedProducts.map((relatedImage, index) => (
                <img
                  key={index}
                  src={relatedImage}
                  alt="Related Product"
                  className="w-24 h-24 rounded-lg cursor-pointer"
                  onClick={() => handleRelatedProductClick(relatedImage)}
                />
              ))
            ) : (
              <p>No related products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
