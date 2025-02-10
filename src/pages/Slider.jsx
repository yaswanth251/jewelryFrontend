import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images dynamically
import banner1 from "../Images/main-back.jpg";
import banner2 from "../Images/products/Banners/banner6.jpg";
import banner3 from "../Images/products/Banners/banner3.png";
// import banner4 from "../Images/products/Banners/banner4.jpg";
import banner5 from "../Images/products/Banners/banner11.jpg";
// import banner6 from "../Images/products/Banners/banner12.jpg";
import banner7 from "../Images/products/Banners/banner7.jpg";

const images = [
  { url: banner1, alt: "Bridal Jewelry Collection" },
  { url: banner2, alt: "Exclusive Necklace Set" },
  { url: banner3, alt: "Elegant Wedding Jewellery" },
  // { url: banner4, alt: "Elegant Wedding Jewellery" },
  { url: banner5, alt: "Elegant Wedding Jewellery" },
  // { url: banner6, alt: "Elegant Wedding Jewellery" },
  { url: banner7, alt: "Elegant Wedding Jewellery" },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[500px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
