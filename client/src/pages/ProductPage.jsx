import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

   const fetchCartCount = async () => {
    const res = await axios.get("http://localhost:3000/api/cart");
    setCartCount(res.data.length);
  };

  useEffect(() => {
    fetchProducts();
    fetchCartCount();
  }, [products]);

  return (
    <div className="mb-4">
      <Header cartCount={cartCount}/>

      <h2 className="text-2xl font-semibold p-4">Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
