import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required:true
    },
    userId: {
      type: String,
      required:true,
      default:"demo_user",
    },
    title: {
      type: String,
      required:true
    },
    price: {
      type: Number,
      required:true,
    },
    image: {
      type: String,
      required:true,
    },
    qty:{
        type:Number,
        required:true,
        default:1,
    }
  },
  { timestamps: true }
);

const Cart = mongoose.model('cart', cartSchema);

export default Cart