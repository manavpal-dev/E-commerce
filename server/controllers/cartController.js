// Controllers is used for writing the actual code.
// ### Frontend (React) → API Route (Express) → Controller (Logic) → Database (MongoDB) ##

import Cart from "../models/Cart.js";

//function
export const getCartItems = async (req,res) => {
  try {
    const userId = "demo_user"; // mock user for now

    const cartItems = await Cart.find({ userId });
    return res.json(cartItems);
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
};

export const addToCart = async (req, res) => {
  try {
    // console.log("what is inside req.body : ", req.body);

    const { productId, title, price, image } = req.body;

    //Mock user
    const userId = "demo_user";

    // check if the item already exists in the cart
    const existingItem = await Cart.findOne({ userId, productId });

    if (existingItem) {
      existingItem.qty += 1;
      await existingItem.save();
      return res.json({ message: "Quantity increased", item: existingItem });
    } else {
      const newItem = await Cart.create({
        userId,
        productId,
        title,
        price,
        image,
        qty: 1,
      });
      return res.json({ message: "Added to cart", item: newItem });
    }
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(500).json({ message: "Failed to add to cart" });
  }
};

// Delete the cart
export const removeCart = async (req,res)=>{
  try {
    const {id} = req.params;
    await Cart.findByIdAndDelete(id);

    return res.json({message:"Item removed from cart"});
  } catch (error) {
   return res.status(500).json({message: "Failed to remove item"});
  }
};

// increase and decrese quantity

export const increaseQty = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Cart.findById(id);

    if (!item) return res.status(404).json({ message: "Item not found" });

    item.qty += 1;
    await item.save();
    res.json(item);

  } catch (error) {
    res.status(500).json({ message: "Failed to increase quantity" });
  }
};

export const decreaseQty = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Cart.findById(id);

    if (!item) return res.status(404).json({ message: "Item not found" });

    if (item.qty > 1) {
      item.qty -= 1;
      await item.save();
      res.json(item);
    } else {
      await item.deleteOne(); // remove if qty becomes 0
      res.json({ message: "Item removed" });
    }

  } catch (error) {
    res.status(500).json({ message: "Failed to decrease quantity" });
  }
};
