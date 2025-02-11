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

const images = [
  { url: banner1, alt: "Bridal Jewelry Collection" },
  { url: banner2, alt: "Exclusive Necklace Set" },
  { url: banner3, alt: "Elegant Wedding Jewellery" },
  { url: banner5, alt: "Elegant Wedding Jewellery" },
  { url: banner7, alt: "Elegant Wedding Jewellery" },
];

function UserRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/userregister", {
        name,
        email,
        password,
      });

      console.log("Registration Successful:", response.data);
      alert("Registration Successful!");
      navigate("/Merge");
    } catch (error) {
      console.error("Registration Failed:", error);
      setError(error.response?.data?.message || "Registration Failed. Try again.");
    }
  };

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

      {/* Dark Overlay for Visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <div className="relative flex justify-between p-5">
        <div className="flex items-center">
          <img src={gemmImage} className="z-20 w-[100px] h-[100px] relative left-27" alt="Gem" />
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
          <h1 className="font-bold text-3xl text-red-300">User SignUp</h1>
          
          {error && <p className="text-red-600 font-bold">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 relative top-3">
            <div className="flex gap-4">
              <div className="flex flex-col text-left font-bold text-white items-start gap-3.5">
                <label>Name</label>
                <label>E-mail</label>
                <label>Password</label>
                <label>Re-Enter Password</label>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Min 6 characters"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Re-enter Password"
                  className="bg-orange-300 rounded p-0.5 text-center outline-0"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white text-2xl border border-white px-5 py-2 rounded-lg hover:bg-orange-300 hover:text-black transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Already Registered Button */}
      <button
        className="absolute bottom-40 left-[50%] translate-x-[-50%] text-white text-2xl px-5 rounded-lg hover:bg-yellow-600 hover:text-black transition"
        onClick={() => navigate("/UserLogin")}
      >
        Already Registered? Login here.
      </button>
    </div>
  );
}

export default UserRegister;
