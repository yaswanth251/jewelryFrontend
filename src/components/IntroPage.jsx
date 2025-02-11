import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Images/main-back.jpg";
import gemmImage from "../Images/gemm.png";
import Mail from "../Images/mail.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";
import "swiper/css";

// Import images dynamically
import banner1 from "../Images/main-back.jpg";
import banner2 from "../Images/products/Banners/banner6.jpg";
import banner3 from "../Images/products/Banners/banner3.png";
import banner5 from "../Images/products/Banners/banner11.jpg";
import banner7 from "../Images/products/Banners/banner7.jpg";

const images = [
  { url: banner1, alt: "Bridal Jewelry Collection" },
  { url: banner2, alt: "Exclusive Necklace Set" },
  { url: banner3, alt: "Elegant Wedding Jewellery" },
  { url: banner5, alt: "Elegant Wedding Jewellery" },
  { url: banner7, alt: "Elegant Wedding Jewellery" },
];

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen">
      {/* Background Swiper */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[ Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-full"
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
      </div>

      {/* Dark Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <div className="relative flex justify-between p-5">
        <div className="flex items-center">
          <img
            src={gemmImage}
            className="z-20 w-[100px] h-[100px] relative left-27"
            alt="Gem Image"
          />
          <div className="relative z-20 text-3xl text-white p-1 ml-3">
            YasOrna
          </div>
        </div>
        <div className="z-20 text-2xl text-white flex items-center gap-3">
          <form action="mailto:support@gmail.com" method="post">
            <button className="hover:text-amber-400 transition">Contact Us</button>
          </form>
          <img src={Mail} className="w-10 h-10" alt="Mail Icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center text-center gap-5 items-center h-[70vh]">
        {/* <div className="text-white text-5xl z-20">YasOrna</div> */}
        <div className="bg-[#FF6CA4] z-20 flex flex-col w-[400px] h-[300px] rounded-lg shadow-lg p-5 opacity-100 "
        style={{ backgroundImage: `url(${banner7})` }}>
          <div className="text-5xl text-[#908787] z-100 opacity-100">Register</div>
          <div className="text-3xl mt-4">Select</div>
          <div className="mt-8 flex gap-10 justify-center text-2xl">
            {/* Admin Button */}
            <button
              className="bg-amber-800 px-6 py-2 rounded-lg text-white hover:bg-amber-700 transition"
              onClick={() => navigate("/AdminRegister")}
            >
              Admin
            </button>

            {/* User Button */}
            <button
              className="bg-amber-800 px-6 py-2 rounded-lg text-white hover:bg-amber-700 transition"
              onClick={() => navigate("./UserRegister")}
            >
              User
            </button>
          </div>
        </div>
      </div>

      {/* Already Registered Button */}
      <button
        className="absolute bottom-40 left-[50%] translate-x-[-50%] text-white text-2xl px-5 rounded-lg hover:bg-orange-300 hover:text-black transition"
        onClick={() => navigate("/LoginIntro")}
      >
        Already Registered ..? Login here..
      </button>
    </div>
  );
}

export default IntroPage;
