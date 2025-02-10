import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../Images/main-back.jpg";
import gemmImage from "../Images/gemm.png";
import Mail from "../Images/mail.png";

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

    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Validate passwords match
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

      // Navigate to AdminHome after successful registration
      navigate("/Merge");
    } catch (error) {
      console.error("Registration Failed:", error);
      setError(error.response?.data?.message || "Registration Failed. Try again.");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat fixed w-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <div className="flex justify-between p-5">
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
      <div className="flex flex-col justify-center text-center gap-5 items-center h-[70vh]">
        <div className="text-white text-5xl z-20">YasOrna</div>
        <div className="bg-[#FF6CA4] z-20 flex flex-col w-[400px] h-max rounded-lg shadow-lg p-5">
          <h1 className="font-bold text-3xl">User SignUp</h1>
          
          {/* Display Error Message */}
          {error && <p className="text-red-600 font-bold">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col text-left items-start gap-3.5">
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
                  className="bg-white rounded p-0.5 text-center outline-0"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="bg-white rounded p-0.5 text-center outline-0"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Min 6 characters"
                  className="bg-white rounded p-0.5 text-center outline-0"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Re-enter Password"
                  className="bg-white rounded p-0.5 text-center outline-0"
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
        className="absolute bottom-40 left-[50%] translate-x-[-50%] text-white text-2xl  px-5 rounded-lg hover:bg-yellow-600 hover:text-black transition"
        onClick={() => navigate("/UserLogin")}
      >
        Already Registered? Login here.
      </button>
    </div>
  );
}

export default UserRegister;
