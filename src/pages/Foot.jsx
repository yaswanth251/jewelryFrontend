import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Foot() {
  return (
    <div className="h-100 rounded-tl-[4px] rounded-tr-[4px] bg-[#1d1919] relative z-10 top-620">
      <h1 className="flex justify-center p-5 bg-[#1d1919] text-white text-3xl shadow-none drop-shadow-lg">
        Know More About YasOrna
      </h1>

      <div className="flex justify-around relative top-5">
        <div className="flex flex-col text-white">
          <h1 className="text-2xl">Quick links</h1>
          <span className="text-[#a69595]">Customer Reviews</span>
          <span className="text-[#a69595]">Our Blogs</span>
          <span className="text-[#a69595]">Store Locator</span>
          <span className="text-[#a69595]">About Us</span>
          <span className="text-[#a69595]">Join Us</span>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-2xl">Info</h1>
          <span className="text-[#a69595]">Shipping & Returns</span>
          <span className="text-[#a69595]">Privacy Policy</span>
          <span className="text-[#a69595]">International Shipping</span>
          <span className="text-[#a69595]">FAQs & Support</span>
          <span className="text-[#a69595]">Terms of Service</span>
          <span className="text-[#a69595]">Corporate Orders</span>
          <span className="text-[#a69595]">International Orders</span>
          <span className="text-[#a69595]">Wholesale Inquiries</span>
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-2xl">Other Resources</h1>
          <span className="text-[#a69595]">Promotions & Offers</span>
          <span className="text-[#a69595]">Frequently Asked Questions</span>
          <span className="text-[#a69595]">Jewelry Care & Repair</span>
          <span className="text-[#a69595]">Style Now, Pay Later</span>
          <span className="text-[#a69595]">Bolt</span>
          <span className="text-[#a69595]">Cash App</span>
          <span className="text-[#a69595]">Encyclopedia</span>
          <span className="text-[#a69595]">Shop More Jewelry</span>
          <span className="text-[#a69595]">Direct Retail</span>
        </div>
        <div className=" text-white py-6 px-4 text-center flex flex-col gap-6">
          {/* Connect With Us */}
          <h2 className="text-lg font-semibold mb-3">CONNECT WITH US</h2>

          {/* Email Input */}
          <div className="flex justify-center items-center bg-white rounded-lg p-3 w-[300px] mx-auto">
            <input
              type="email"
              placeholder="Enter Email ID"
              className="w-full bg-transparent text-black outline-none"
            />
            <IoIosArrowForward className="text-black text-xl" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4 text-xl">
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 mt-4">
            © Copyright 2023 YasOrna. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foot;
