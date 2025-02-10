import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Images/main-back.jpg";
import gemmImage from "../Images/gemm.png";
import Mail from "../Images/mail.png";

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat fixed w-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <div className="flex justify-between p-5">
        <div className="flex items-center">
          <img
            src={gemmImage}
            className="z-20 w-[100px] h-[100px] left-10 top-7"
            alt="Gem Image"
          />
          <div className="relative z-20 text-3xl text-white p-1 ml-3 right-28">
            YasOrna
          </div>
        </div>
        <div className="z-20 text-2xl text-white flex items-center gap-3">
          <form
            action="mailto:support@gmail.com"
            method="post"
          >
            <button className="hover:text-amber-400 transition">
              Contact Us
            </button>
          </form>
          <img src={Mail} className="w-10 h-10" alt="Mail Icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center text-center gap-5 items-center h-[70vh]">
        <div className="text-white text-5xl z-20">YasOrna</div>
        <div className="bg-[#FF6CA4] z-20 flex flex-col w-[400px] h-[300px] rounded-lg shadow-lg p-5">
          <div className="text-5xl">Register</div>
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
