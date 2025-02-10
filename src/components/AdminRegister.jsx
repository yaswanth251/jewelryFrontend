import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../Images/main-back.jpg";
import gemmImage from "../Images/gemm.png";
import Mail from "../Images/mail.png";

function AdminRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/adminregister", {
        name,
        mobile,
        email,
        password,
      });

      console.log("Registration successful:", response.data);
      alert("Registration successful!");

      navigate("/AdminHome");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat fixed w-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <div className="flex justify-between p-5 relative z-20">
        <div className="flex items-center">
          <img src={gemmImage} className="w-[100px] h-[100px]" alt="Gem Logo" />
          <div className="text-3xl text-white p-1 ml-3">YasOrna</div>
        </div>

        {/* Contact Us */}
        <div className="text-2xl text-white flex items-center gap-3">
          <button className="hover:text-amber-400 transition">Contact Us</button>
          <img src={Mail} className="w-10 h-10" alt="Mail Icon" />
        </div>
      </div>

      {/* Registration Form */}
      <div className="flex flex-col justify-center items-center h-[70vh] text-center gap-5">
        <div className="text-white text-5xl">YasOrna</div>
        <div className="bg-[#FF6CA4] flex flex-col w-[400px] rounded-lg shadow-lg p-5 z-20">
          <h1 className="font-bold text-3xl">Admin Sign Up</h1>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col text-left gap-3">
              <label>Name</label>
              <input 
                type="text" 
                required 
                placeholder="Yaswanth_" 
                className="bg-white rounded p-2 outline-none" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />

              <label>Mobile</label>
              <input 
                type="tel" 
                required 
                placeholder="+91##########" 
                className="bg-white rounded p-2 outline-none" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
              />

              <label>Email</label>
              <input 
                type="email" 
                required 
                placeholder="yas@gmail.com" 
                className="bg-white rounded p-2 outline-none" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />

              <label>Password</label>
              <input 
                type="password" 
                required 
                placeholder="A-Za-z0-9" 
                className="bg-white rounded p-2 outline-none" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />

              <label>Re-Enter Password</label>
              <input 
                type="password" 
                required 
                placeholder="Re-enter Password" 
                className="bg-white rounded p-2 outline-none" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>

            <button 
              type="submit" 
              className="text-white text-2xl border border-white px-5 py-2 rounded-lg hover:bg-orange-300 hover:text-black transition">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Login Navigation */}
      <button
        className="absolute bottom-1 left-[50%] translate-x-[-50%] text-white text-2xl px-5  rounded-lg hover:bg-yellow-600  hover:text-black transition"
        onClick={() => navigate("/AdminLogin")}
      >
        Already Registered? Login here.
      </button>
    </div>
  );
}

export default AdminRegister;
