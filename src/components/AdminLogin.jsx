import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../Images/main-back.jpg";
import gemmImage from "../Images/gemm.png";
import Mail from "../Images/mail.png";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const response = await axios.post("http://localhost:3001/adminlogin", {
        email,
        password,
      });

      console.log("Login successful:", response.data);
      alert("Login successful!");

      // ✅ Navigate to AdminHome on successful login
      navigate("/AdminHome");
    } catch (err) {
      console.error("Login failed:", err.response?.data?.error || err.message);
      alert(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

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

        {/* Contact Us */}
        <div className="z-20 text-2xl text-white flex items-center gap-3">
          <button className="hover:text-amber-400 transition">
            Contact Us
          </button>
          <img src={Mail} className="w-10 h-10" alt="Mail Icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center text-center gap-5 items-center h-[70vh]">
        <div className="text-white text-5xl z-20">YasOrna</div>
        <div className="bg-[#FF6CA4] z-20 flex flex-col w-[400px] h-max rounded-lg shadow-lg p-5">
          <h1 className="font-bold text-3xl">Admin Login</h1>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5 items-center">
            <div className="flex gap-4">
              <div className="flex flex-col text-center items-start gap-3.5">
                <span>E-mail</span>
                <span>Password</span>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="yas@gmail.com"
                  className="bg-white rounded p-0.5 text-center outline-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="A-Za-z0-9"
                  className="bg-white rounded p-0.5 text-center outline-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white text-2xl border border-white px-5 py-2 rounded-lg hover:bg-orange-300 hover:text-black transition w-max"
            >
              SignIn
            </button>
          </form>
        </div>
      </div>

      {/* Register Button */}
      <button
        className="absolute bottom-45 left-[50%] translate-x-[-50%] text-white text-2xl   px-5 rounded-lg hover:bg-yellow-600 hover:text-black transition"
        onClick={() => navigate("/AdminRegister")}
      >
        Don't have an account? Register Here
      </button>
    </div>
  );
}

export default AdminLogin;
