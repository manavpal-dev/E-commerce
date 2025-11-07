import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js";

const app = express();

//Connected MongoDB Database
await connectDB();

//Middlewares
app.use(cors()); // this middleware helps to establish connection in between frontend and backend that are coming from different port
app.use(express.json());

//Routes
app.get("/", (req, res) => res.send("api is working"));
app.use('/api/products',productRouter);
app.use('/api/cart',cartRouter);

const PORT = 3000;

app.listen(PORT, () => console.log("server is running on 3000"));

export default app;
