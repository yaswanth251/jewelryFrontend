// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import UserRegister from "./components/UserRegister";
import AdminRegister from "./components/AdminRegister";
import AdminLogin from "./components/AdminLogin"
import UserLogin from "./components/UserLogin"
import AdminHome from "./components/AdminHome";
import UserHome from "./pages/UserHome";
import Merge from "./pages/Merge";
import Detailed from "./pages/Detail"
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/AdminRegister" element={<AdminRegister />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/Merge" element={<Merge />} />
        <Route path="/Detailed" element={<Detailed />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Home" element={<Home />} />




      </Routes>
    </Router>
  );
}

export default App;
