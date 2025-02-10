
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// Import images dynamically
import banner1 from "../Images/products/Offers/ban6.webp";
// import banner3 from "../Images/products/Offers/ban3.jpg";
import banner4 from "../Images/products/Offers/ban4.webp";
import banner5 from "../Images/products/Offers/ban5.png";
// import banner5 from "../Images/products/Banners/banner5.jpg";
// import banner6 from "../Images/products/Banners/banner6.jpg";
// import banner7 from "../Images/products/Banners/banner7.jpg";

const images = [
    { url: banner4, alt: "Elegant Wedding Jewellery" },
    { url: banner5, alt: "Elegant Wedding Jewellery" },
  { url: banner1, alt: "Bridal Jewelry Collection" },
//   { url: banner2, alt: "Exclusive Necklace Set" },
//   { url: banner3, alt: "Elegant Wedding Jewellery" },
//   { url: banner6, alt: "Elegant Wedding Jewellery" },
//   { url: banner7, alt: "Elegant Wedding Jewellery" },
];


function Offers() {
  return (
    <div>
      <div className="text-center bg-white py-8">
        <h2 className="text-4xl font-extrabold text-black">
          50% <span className="text-red-600">OFF On Making Charges</span>
        </h2>
        <div className="w-16 h-1 bg-gold mx-auto my-2"></div>
        <p className="text-lg text-gray-700 font-semibold">
          Flat 5% OFF on orders above ₹11999
        </p>
        <div className="mt-4 inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
          <span className="text-sm">Code</span>
          <span className="bg-white text-red-600 px-3 py-1 ml-2 rounded-full">
            YasOrna10
          </span>
        </div>
      </div>
      <Swiper
      modules={[ Autoplay]}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[500px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="h-full">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default Offers;
