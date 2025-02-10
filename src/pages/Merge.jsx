import React from "react";
import UserHome from "./userHome";
import Products from "./Slider";
import Catalog from "./Catalog";
import Product from "./Product";
import Offers from "./Offers";
import Foot from "./Foot";

function Merge() {
  return (
    <div className="relative">
      {/* Fixed UserHome */}
      <div className="fixed top-0 left-0 w-full z-50">
        <UserHome />
      </div>

      {/* Scrollable content with padding to avoid overlap */}

      <Products className="pt-[100px]" />
      <Product className="pt-[100px]" />

      <Offers className="pt-[100px]" />
      <Catalog className="pt-[100px]" />

      <Foot className="pt-[100px]"/>
    </div>
  );
}

export default Merge;
