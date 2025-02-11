import { useRef, useState } from "react";
import { FaSearch, FaRegUser, FaHeart, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { BiCamera } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  // Sample user data (Replace with actual authentication logic)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "https://via.placeholder.com/50", // Sample profile picture
  });

  const handleLogout = () => {
    setUser(null); // Clear user state
    navigate("/user-login"); // Navigate to login page
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file);
    }
  };

  return (
    <>
      <div className="bg-black text-white h-10 flex justify-center items-center">
        SPARKLE & SAVE: 50% OFF on Stunning Jewelry! ✨💎
      </div>
      <nav className="flex items-center justify-between px-6 py-3 bg-gray-200">
        {/* Logo */}
        <div className="text-3xl font-bold text-orange-950 flex items-center">
          <span className="text-4xl">Y</span>asOrna
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
            className="w-180 px-4 py-2 pl-10 pr-20 rounded bg-gray-50 focus:outline-none"
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="imageInput"
            onChange={handleImageUpload}
          />
          <label htmlFor="imageInput" className="absolute left-3 top-2.5 text-gray-500 cursor-pointer">
            <BiCamera size={20} />
          </label>
          <div
            className="absolute right-115 top-2.5 text-gray-500 cursor-pointer"
            onClick={() => inputRef.current?.focus()}
          >
            <FaSearch size={20} />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-6 text-[#642828]">
          {/* Account Icon */}
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setShowAccount(!showAccount)}>
            <FaRegUser size={24} />
            <span className="text-xs">ACCOUNT</span>
          </div>

          {/* Wishlist Icon */}
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setShowWishlist(!showWishlist)}>
            <FaHeart size={24} />
            <span className="text-xs">WISHLIST</span>
          </div>

          {/* Cart Icon */}
          <div className="flex flex-col items-center relative cursor-pointer" onClick={() => setShowCart(!showCart)}>
            <FaShoppingCart size={24} />
            <span className="text-xs">CART</span>
            <span className="absolute -top-1 -right-2 bg-[#642828] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>

        {/* Popups */}
        {showCart && <div className="absolute top-26 right-6 bg-white p-4 shadow-lg rounded-lg">Cart Items...</div>}
        {showWishlist && <div className="absolute top-26 right-6 bg-white p-4 shadow-lg rounded-lg">Wishlist Items...</div>}
        
        {showAccount && (
          <div className="absolute top-27 right-2 bg-white p-4 shadow-lg shadow-black rounded-lg w-64">
            {user ? (
              <div className="relative p-4 ">
                {/* Logout Button (Top Right) */}
                <button onClick={handleLogout} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                  <FaSignOutAlt size={18} />
                </button>

                {/* Profile Picture */}
                <div className="flex flex-col items-center">
                  <img src={user.profilePic} alt="User" className="w-14 h-14 rounded-full border" />
                  <p className="mt-2 font-bold">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-600">Please log in.</p>
            )}
          </div>
        )}
      </nav>

      {/* Categories Navigation */}
      <div className="h-10 flex justify-center gap-10 items-center text-[20px] bg-gray-100">
        <span><a href="#">Gold</a></span>
        <span><a href="#">Silver</a></span>
        <span><a href="#">Earrings</a></span>
        <span><a href="#">Necklace</a></span>
        <span><a href="#">Rings</a></span>
        <span><a href="#">Bangles</a></span>
      </div>
    </>
  );
}
