import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import gemmImage from "../Images/gemm.png";
import Mail from "../Images/mail.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images dynamically
import banner1 from "../Images/main-back.jpg";
import banner2 from "../Images/products/Banners/banner6.jpg";
import banner3 from "../Images/products/Banners/banner3.png";
import banner5 from "../Images/products/Banners/banner11.jpg";
import banner7 from "../Images/products/Banners/banner7.jpg";

const images = [banner1, banner2, banner3, banner5, banner7];

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3001/userlogin", {
        email,
        password,
      });
      console.log("Login Successful:", response.data);
      alert("Login Successful!");
      navigate("/Merge");
    } catch (error) {
      console.error("Login Failed:", error);
      setError(error.response?.data?.message || "Invalid Credentials. Try Again.");
    }
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Background Swiper */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dark Overlay for Visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <div className="relative flex justify-between p-5">
        <div className="flex items-center">
          <img src={gemmImage} className="z-20 w-[100px] h-[100px]" alt="Gem" />
          <div className="relative z-20 text-3xl text-white p-1 ml-3">YasOrna</div>
        </div>
        <div className="z-20 text-2xl text-white flex items-center gap-3">
          <button className="hover:text-amber-400 transition">Contact Us</button>
          <img src={Mail} className="w-10 h-10" alt="Mail Icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center text-center gap-5 items-center h-[70vh]">
        {/* <div className="text-white text-5xl z-20">YasOrna</div> */}
        <div className=" z-20 flex flex-col w-[400px] h-max rounded-lg shadow-lg p-5"
        style={{ backgroundImage: `url(${banner7})` }}>
          <h1 className="font-bold text-3xl text-white">User Login</h1>
          {error && <p className="text-red-600 font-bold">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center relative top-4">
            <div className="flex gap-4">
              <div className="flex flex-col text-left items-start gap-3.5 text-[#a48b8b]">
                <label>E-mail</label>
                <label>Password</label>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="bg-orange-300 rounded p-1 text-center outline-0"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter Password"
                  className="bg-orange-300 rounded p-1 text-center outline-0"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white text-2xl border border-white px-5 py-1 rounded-lg hover:bg-orange-300 hover:text-black transition w-max"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Register Button */}
      <button
        className="absolute bottom-40 left-[50%] translate-x-[-50%] text-white text-2xl px-5 rounded-lg hover:bg-yellow-600 hover:text-black transition"
        onClick={() => navigate("/UserRegister")}
      >
        Don't have an account? Register Here.
      </button>
    </div>
  );
}

export default UserLogin;
