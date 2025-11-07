import React from "react";
import cartIcon from '../assets/cart.png'
import { useNavigate } from "react-router-dom";

const Header = ({cartCount}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mx-8 my-4">
      {/* Left side for logo */}
      <div>
        <h1 onClick={()=>navigate("/")}
         className="font-semibold text-4xl cursor-pointer text-gray-600">Mock E-Com</h1>
      </div>
    {/* Right side for the Cart icon  */}
      <div>
        <p className="ml-4">{cartCount}</p>
        <img onClick={()=>navigate("/cart")}
         className="w-8 h-8 cursor-pointer mb-4"
        src={cartIcon} alt="cartIcon" />
      </div>
    </div>
  );
};

export default Header;
