import React from "react";
import axios from "axios";

const ProductCard = ({product}) => {

  const {id, name, price, image} = product

  //function for handlingCart
  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:3000/api/cart", {
        productId:id,
        title:name,
        price,
        image,
      });
      alert("✅ Added to cart");
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };

  return (
    <div className="border p-4 rounded shadow-sm text-center">
      <img src={image} alt={name} className="w-46 h-44 mx-auto object-cover" />

      <h3 className="font-medium mt-2">{name}</h3>
      <p className="text-gray-600">₹{price}</p>

      <button onClick={handleAddToCart}
      className="mt-3 bg-blue-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
