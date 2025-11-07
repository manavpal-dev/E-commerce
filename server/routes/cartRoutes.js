import express from "express";
import { 
  addToCart, 
  getCartItems, 
  removeCart, 
  increaseQty, 
  decreaseQty 
} from "../controllers/cartController.js";

const cartRouter = express.Router();

// Add item to cart
cartRouter.post("/", addToCart);

// Get all cart items
cartRouter.get("/", getCartItems);

// Delete item from cart
cartRouter.delete("/:id", removeCart);

// Increase quantity
cartRouter.patch("/increase/:id", increaseQty);

// Decrease quantity
cartRouter.patch("/decrease/:id", decreaseQty);

export default cartRouter;
