import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [receiptData, setReceiptData] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleCheckout = () => {
    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }

    const receipt = {
      name,
      email,
      total,
      date: new Date().toLocaleString(),
    };

    setReceiptData(receipt);
    setShowReceipt(true);
    setShowCheckout(false);
  };

  //function for fetching cart
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/cart");
      setCartItems(res.data);
    } catch (error) {
      console.log("Error fetching cart: ", error);
    }
  };

  // function fro delete cart
  const deleteCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/cart/${id}`);
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== id));
    } catch (error) {
      console.log("Error deleting cart: ", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <Header cartCount={cartItems.length} />

      <h2 className="text-2xl font-semibold p-4">Your Cart</h2>

      {cartItems.length > 0 && (
        <div className="grid grid-cols-4 font-semibold border-b pb-4 px-6">
          <p>Product</p>
          <p className="text-center">Qty</p>

          <p className="text-center">Price</p>
          <p className="text-right">Action</p>
        </div>
      )}

      {cartItems.length === 0 ? (
        <p className="p-4">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-4 items-center border p-4 rounded"
          >
            <p>{item.title}</p>

            <div className="flex items-center justify-center gap-2">
              <button
                onClick={async () => {
                  await axios.patch(
                    `http://localhost:3000/api/cart/decrease/${item._id}`
                  );
                  fetchCart();
                }}
                className="bg-gray-300 px-2 rounded"
              >
                −
              </button>

              <span>{item.qty}</span>

              <button
                onClick={async () => {
                  await axios.patch(
                    `http://localhost:3000/api/cart/increase/${item._id}`
                  );
                  fetchCart();
                }}
                className="bg-gray-300 px-2 rounded"
              >
                +
              </button>
            </div>

            <p className="text-center">₹{item.price}</p>

            <button
              onClick={() => deleteCart(item._id)}
              className="justify-self-end bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Total: ₹{total.toFixed(2)}</h3>

      <button
        onClick={() => setShowCheckout(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-3"
      >
        Proceed to Checkout
      </button>

      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-80">
            <h3 className="text-xl font-semibold mb-4">Checkout</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="border w-full p-2 mb-3 rounded"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border w-full p-2 mb-3 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}

      {showReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-80 text-center">
            <h3 className="text-xl font-semibold mb-2">✅ Order Successful</h3>

            <p>Thank you, {receiptData.name}</p>
            <p>Total Paid: ₹{receiptData.total}</p>
            <p className="text-sm text-gray-600 mt-2">{receiptData.date}</p>

            <button
              onClick={() => setShowReceipt(false)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
